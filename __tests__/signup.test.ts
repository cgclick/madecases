import { describe, it, expect, vi, beforeEach } from 'vitest'

vi.mock('@/lib/supabase', () => ({
  createServerClient: vi.fn(() => ({
    from: vi.fn((table: string) => {
      if (table === 'leads') {
        return {
          insert: vi.fn(() => ({
            select: vi.fn(() => ({
              single: vi.fn(() => ({
                data: {
                  id: 'uuid-123',
                  name: 'Jordan',
                  email: 'jordan@test.com',
                  referral_code: 'MC215-AB12',
                },
                error: null,
              })),
            })),
          })),
          select: vi.fn(() => ({
            eq: vi.fn(() => ({
              single: vi.fn(() => ({ data: null, error: null })),
            })),
          })),
        }
      }
      if (table === 'referrals') {
        return { insert: vi.fn(() => ({ error: null })) }
      }
      return {}
    }),
  })),
}))

vi.mock('@/lib/resend', () => ({
  sendWelcomeEmail: vi.fn(() => Promise.resolve()),
}))

vi.mock('@/lib/referral', () => ({
  generateReferralCode: vi.fn(() => 'MC215-AB12'),
  buildReferralUrl: vi.fn(() => 'https://madecases.com/ref/MC215-AB12'),
  REFERRAL_COOKIE: 'mc215_ref',
}))

async function postSignup(body: Record<string, unknown>, cookies = '') {
  const { POST } = await import('@/app/api/signup/route')
  const request = new Request('http://localhost/api/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(cookies ? { cookie: cookies } : {}),
    },
    body: JSON.stringify(body),
  })
  return POST(request as any)
}

const validBody = {
  name: 'Jordan',
  email: 'jordan@test.com',
  phone: '2155551234',
  quantity_interest: 2,
  style_interest: 'standard',
  city: 'Philadelphia',
  zip: '19103',
}

describe('POST /api/signup', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.resetModules()
  })

  it('returns 200 with referral code on valid submission', async () => {
    const res = await postSignup(validBody)
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.referralCode).toBe('MC215-AB12')
    expect(json.referralUrl).toBe('https://madecases.com/ref/MC215-AB12')
  })

  it('returns 400 when required fields are missing', async () => {
    const res = await postSignup({ name: 'Jordan' })
    expect(res.status).toBe(400)
    const json = await res.json()
    expect(json.error).toBeDefined()
  })

  it('returns 400 for invalid email format', async () => {
    const res = await postSignup({ ...validBody, email: 'not-an-email' })
    expect(res.status).toBe(400)
  })
})
