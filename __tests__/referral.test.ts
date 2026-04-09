import { describe, it, expect } from 'vitest'
import { generateReferralCode, buildReferralUrl } from '@/lib/referral'

describe('generateReferralCode', () => {
  it('returns a string starting with MC215-', () => {
    const code = generateReferralCode()
    expect(code).toMatch(/^MC215-[A-Z0-9]{4}$/)
  })

  it('generates unique codes on repeated calls', () => {
    const codes = new Set(Array.from({ length: 100 }, generateReferralCode))
    expect(codes.size).toBeGreaterThan(90)
  })
})

describe('buildReferralUrl', () => {
  it('builds a full referral URL from a code', () => {
    process.env.NEXT_PUBLIC_APP_URL = 'https://madecases.com'
    const url = buildReferralUrl('MC215-AB12')
    expect(url).toBe('https://madecases.com/ref/MC215-AB12')
  })
})
