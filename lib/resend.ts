import { Resend } from 'resend'

/** Lazily initialised so tests that don't call sendWelcomeEmail don't need RESEND_API_KEY. */
let _resendClient: Resend | undefined
export function getResendClient(): Resend {
  if (!_resendClient) {
    _resendClient = new Resend(process.env.RESEND_API_KEY)
  }
  return _resendClient
}
/** @deprecated Use getResendClient() instead */
export const resendClient = { get emails() { return getResendClient().emails } }

interface WelcomeEmailParams {
  name: string
  referralUrl: string
  referralCode: string
}

/** Returns the HTML body for the welcome email. Pure function — easy to test. */
export function buildWelcomeEmailHtml({ name, referralUrl, referralCode }: WelcomeEmailParams): string {
  return `
<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111;">
  <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 8px;">You're on the list, ${name}.</h1>
  <p style="font-size: 16px; color: #444; margin-bottom: 24px;">
    MadeCases is bringing premium acrylic display cases to the Pokemon TCG community.
    You'll get <strong>48-hour early access</strong> to Founding Member pricing before anyone else.
  </p>

  <div style="background: #f5f5f5; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
    <p style="margin: 0 0 8px; font-weight: 600;">Your referral code: <span style="color: #2563eb;">${referralCode}</span></p>
    <p style="margin: 0 0 16px; font-size: 14px; color: #555;">
      Share your link and earn rewards when friends sign up:
    </p>
    <a href="${referralUrl}"
       style="display: inline-block; background: #111; color: #fff; padding: 12px 24px;
              border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 15px;">
      Share my link →
    </a>
    <p style="margin: 12px 0 0; font-size: 13px; color: #888;">${referralUrl}</p>
  </div>

  <div style="font-size: 13px; color: #888; border-top: 1px solid #eee; padding-top: 16px;">
    <strong>Referral rewards:</strong><br/>
    1 friend signs up → $5 store credit<br/>
    3 friends sign up → free branded sleeves<br/>
    5+ friends sign up → free case or exclusive colorway
  </div>

  <p style="font-size: 12px; color: #aaa; margin-top: 24px;">
    MadeCases · You're receiving this because you joined our waitlist.
  </p>
</body>
</html>
  `.trim()
}

/** Sends the welcome email to a new lead. */
export async function sendWelcomeEmail({
  to,
  name,
  referralUrl,
  referralCode,
}: WelcomeEmailParams & { to: string }): Promise<void> {
  const from = process.env.RESEND_FROM_EMAIL ?? 'hello@madecases.com'
  await getResendClient().emails.send({
    from,
    to,
    subject: `You're on the MadeCases waitlist, ${name} 🃏`,
    html: buildWelcomeEmailHtml({ name, referralUrl, referralCode }),
  })
}
