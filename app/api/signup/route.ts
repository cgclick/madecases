import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'
import { sendWelcomeEmail } from '@/lib/resend'
import { generateReferralCode, buildReferralUrl, REFERRAL_COOKIE } from '@/lib/referral'

interface SignupBody {
  name: string
  email: string
  phone?: string
  quantity_interest: number
  style_interest?: string
  city: string
  zip: string
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validateBody(body: unknown): { data: SignupBody } | { error: string } {
  if (!body || typeof body !== 'object') return { error: 'Invalid request body' }
  const b = body as Record<string, unknown>
  if (!b.name || typeof b.name !== 'string') return { error: 'Name is required' }
  if (!b.email || typeof b.email !== 'string') return { error: 'Email is required' }
  if (!isValidEmail(b.email)) return { error: 'Invalid email address' }
  if (!b.city || typeof b.city !== 'string') return { error: 'City is required' }
  if (!b.zip || typeof b.zip !== 'string') return { error: 'ZIP code is required' }
  return {
    data: {
      name: (b.name as string).trim(),
      email: (b.email as string).trim().toLowerCase(),
      phone: typeof b.phone === 'string' ? b.phone.trim() : undefined,
      quantity_interest: typeof b.quantity_interest === 'number' ? b.quantity_interest : 1,
      style_interest: typeof b.style_interest === 'string' ? b.style_interest : undefined,
      city: (b.city as string).trim(),
      zip: (b.zip as string).trim(),
    },
  }
}

export async function POST(request: NextRequest) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  const validated = validateBody(body)
  if ('error' in validated) {
    return NextResponse.json({ error: validated.error }, { status: 400 })
  }

  const { data: lead } = validated
  // request.cookies is a NextRequest-specific API; fall back to parsing the
  // raw Cookie header so the route also works with a plain Request in tests.
  const cookieHeader = request.headers.get('cookie') ?? ''
  const referredBy =
    request.cookies?.get?.(REFERRAL_COOKIE)?.value ??
    cookieHeader
      .split(';')
      .map((c) => c.trim().split('='))
      .find(([k]) => k === REFERRAL_COOKIE)?.[1] ??
    null
  const referralCode = generateReferralCode()

  const supabase = createServerClient()

  const { data: savedLead, error: insertError } = await supabase
    .from('leads')
    .insert({
      ...lead,
      referral_code: referralCode,
      referred_by: referredBy,
    })
    .select()
    .single()

  if (insertError) {
    if ((insertError as any).code === '23505') {
      return NextResponse.json({ error: 'This email is already on the waitlist.' }, { status: 409 })
    }
    console.error('Supabase insert error:', insertError)
    return NextResponse.json({ error: 'Failed to save signup' }, { status: 500 })
  }

  if (referredBy) {
    const { data: referrer } = await supabase
      .from('leads')
      .select('id')
      .eq('referral_code', referredBy)
      .single()

    if (referrer) {
      await supabase.from('referrals').insert({
        referrer_id: referrer.id,
        referred_id: savedLead.id,
      })
    }
  }

  const referralUrl = buildReferralUrl(referralCode)

  sendWelcomeEmail({
    to: lead.email,
    name: lead.name,
    referralUrl,
    referralCode,
  }).catch((err) => console.error('Welcome email failed:', err))

  return NextResponse.json({ referralCode, referralUrl })
}
