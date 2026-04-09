'use client'

import { useState } from 'react'

interface ReferralShareProps {
  referralCode: string
  referralUrl: string
  name: string
}

export default function ReferralShare({ referralCode, referralUrl }: ReferralShareProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(referralUrl)
    } catch {
      const el = document.createElement('textarea')
      el.value = referralUrl
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const shareText = `Just secured my spot on the MadeCases founding waitlist — premium acrylic display cases for Pokemon collectors. Use my link for early access: ${referralUrl}`

  return (
    <div style={{ width: '100%', maxWidth: '520px' }}>

      {/* Referral code display */}
      <div style={{
        background: 'rgba(201,168,76,0.06)',
        border: '1px solid rgba(201,168,76,0.25)',
        borderRadius: '12px',
        padding: '28px 24px',
        textAlign: 'center',
        marginBottom: '16px',
      }}>
        <p className="eyebrow" style={{ marginBottom: '12px' }}>Your Referral Code</p>
        <p className="font-display holo-text" style={{
          fontSize: '42px', fontWeight: 600,
          letterSpacing: '0.15em',
          lineHeight: 1,
          marginBottom: '8px',
        }}>
          {referralCode}
        </p>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          color: 'rgba(240,232,213,0.3)',
          letterSpacing: '0.08em',
        }}>
          Share your link · earn rewards
        </p>
      </div>

      {/* Copy link row */}
      <button
        onClick={handleCopy}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(201,168,76,0.15)',
          borderRadius: '8px',
          padding: '14px 18px',
          cursor: 'pointer',
          marginBottom: '12px',
          transition: 'border-color 0.2s, background 0.2s',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(201,168,76,0.4)'
          ;(e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,168,76,0.04)'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(201,168,76,0.15)'
          ;(e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.03)'
        }}
      >
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '13px',
          color: 'rgba(240,232,213,0.45)',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          flex: 1,
          textAlign: 'left',
        }}>
          {referralUrl}
        </span>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: copied ? '#6ee7a8' : '#c9a84c',
          flexShrink: 0,
          transition: 'color 0.2s',
        }}>
          {copied ? '✓ Copied' : 'Copy'}
        </span>
      </button>

      {/* Share buttons */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '28px' }}>
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
          style={{ justifyContent: 'center', padding: '13px 16px' }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          Share on X
        </a>
        <a
          href={`https://www.instagram.com/`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
          style={{ justifyContent: 'center', padding: '13px 16px' }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
          </svg>
          Instagram
        </a>
      </div>

      {/* Reward tiers */}
      <div style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(201,168,76,0.1)',
        borderRadius: '12px',
        padding: '24px',
      }}>
        <p className="eyebrow" style={{ marginBottom: '16px' }}>Referral Rewards</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { count: '1 referral', reward: '$5 store credit' },
            { count: '3 referrals', reward: 'Free branded sleeves' },
            { count: '5+ referrals', reward: 'Free case or exclusive colorway' },
          ].map(({ count, reward }) => (
            <div key={count} style={{
              display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', gap: '16px',
            }}>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: 'rgba(240,232,213,0.45)',
              }}>{count}</span>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: 500,
                color: '#c9a84c',
              }}>{reward}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
