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

  const shareText = `Just secured my spot on the Made Cases founding waitlist — premium acrylic display cases for Pokemon collectors. Use my link for early access: ${referralUrl}`

  return (
    <div style={{ width: '100%', maxWidth: '520px' }}>

      {/* Referral code display */}
      <div style={{
        background: '#EEF3FF',
        border: '1px solid #DDEAFF',
        borderRadius: '16px',
        padding: '28px 24px',
        textAlign: 'center',
        marginBottom: '12px',
      }}>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '11px', fontWeight: 600,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: '#8096B4', marginBottom: '12px',
        }}>Your Referral Code</p>
        <p className="font-display" style={{
          fontSize: '42px', fontWeight: 800,
          letterSpacing: '0.15em',
          lineHeight: 1,
          marginBottom: '8px',
          color: '#1B5CE6',
        }}>
          {referralCode}
        </p>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          color: '#8096B4',
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
          background: '#fff',
          border: '1px solid #D5E3FF',
          borderRadius: '10px',
          padding: '14px 18px',
          cursor: 'pointer',
          marginBottom: '10px',
          transition: 'border-color 0.2s, background 0.2s',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = '#1B5CE6'
          ;(e.currentTarget as HTMLButtonElement).style.background = '#EEF3FF'
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.borderColor = '#D5E3FF'
          ;(e.currentTarget as HTMLButtonElement).style.background = '#fff'
        }}
      >
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '13px',
          color: '#8096B4',
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
          color: copied ? '#22C55E' : '#1B5CE6',
          flexShrink: 0,
          transition: 'color 0.2s',
        }}>
          {copied ? '✓ Copied' : 'Copy'}
        </span>
      </button>

      {/* Share buttons */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
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

      {/* Referral reward */}
      <div style={{
        background: '#EEF3FF',
        border: '1px solid #DDEAFF',
        borderRadius: '16px',
        padding: '24px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '16px',
      }}>
        <div style={{
          width: '40px', height: '40px', flexShrink: 0,
          borderRadius: '50%',
          background: '#1B5CE6',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '15px', fontWeight: 700,
            color: '#0B1A35', marginBottom: '6px',
          }}>
            Refer 5 friends who purchase — get your case free.
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '13px', lineHeight: 1.6,
            color: '#3D5070',
          }}>
            Share your link. When 5 people use it to buy a case, yours is on us. Purchases only — no gaming required.
          </p>
        </div>
      </div>
    </div>
  )
}
