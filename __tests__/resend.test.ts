import { describe, it, expect } from 'vitest'
import { buildWelcomeEmailHtml } from '@/lib/resend'

describe('buildWelcomeEmailHtml', () => {
  it('includes the lead name', () => {
    const html = buildWelcomeEmailHtml({
      name: 'Jordan',
      referralUrl: 'https://madecases.com/ref/MC215-AB12',
      referralCode: 'MC215-AB12',
    })
    expect(html).toContain('Jordan')
  })

  it('includes the referral URL', () => {
    const html = buildWelcomeEmailHtml({
      name: 'Jordan',
      referralUrl: 'https://madecases.com/ref/MC215-AB12',
      referralCode: 'MC215-AB12',
    })
    expect(html).toContain('https://madecases.com/ref/MC215-AB12')
  })

  it('includes the referral code', () => {
    const html = buildWelcomeEmailHtml({
      name: 'Jordan',
      referralUrl: 'https://madecases.com/ref/MC215-AB12',
      referralCode: 'MC215-AB12',
    })
    expect(html).toContain('MC215-AB12')
  })

  it('mentions early access', () => {
    const html = buildWelcomeEmailHtml({
      name: 'Jordan',
      referralUrl: 'https://madecases.com/ref/MC215-AB12',
      referralCode: 'MC215-AB12',
    })
    expect(html.toLowerCase()).toContain('early access')
  })
})
