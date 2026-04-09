/** Generates a unique referral code in format MC215-XXXX */
export function generateReferralCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  const suffix = Array.from({ length: 4 }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join('')
  return `MC215-${suffix}`
}

/** Builds the full shareable referral URL for a given code */
export function buildReferralUrl(code: string): string {
  const base = process.env.NEXT_PUBLIC_APP_URL ?? 'https://madecases.com'
  return `${base}/ref/${code}`
}

/** Cookie name used to persist referral attribution */
export const REFERRAL_COOKIE = 'mc215_ref'
