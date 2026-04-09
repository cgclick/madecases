import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { REFERRAL_COOKIE } from '@/lib/referral'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params

  if (code) {
    const cookieStore = await cookies()
    cookieStore.set(REFERRAL_COOKIE, code, {
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
      httpOnly: true,
      sameSite: 'lax',
    })
  }

  redirect('/')
}
