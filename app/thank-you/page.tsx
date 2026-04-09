import { Suspense } from 'react'
import { redirect } from 'next/navigation'
import ReferralShare from '@/components/ReferralShare'

interface PageProps {
  searchParams: Promise<{ code?: string; url?: string; name?: string }>
}

async function ThankYouContent({ searchParams }: PageProps) {
  const params = await searchParams
  const { code, url, name } = params

  if (!code || !url) redirect('/')

  const firstName = name ? decodeURIComponent(name).split(' ')[0] : 'there'

  return (
    <main style={{
      background: '#080809',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '80px 24px 60px',
    }}>

      {/* Nav */}
      <a href="/" style={{
        fontFamily: 'var(--font-display)',
        fontSize: '16px',
        fontWeight: 600,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        marginBottom: '80px',
        display: 'block',
      }} className="holo-text">
        MADE CASES
      </a>

      {/* Confirmation */}
      <div className="anim-1" style={{
        textAlign: 'center',
        maxWidth: '520px',
        marginBottom: '56px',
      }}>
        {/* Check mark */}
        <div style={{
          width: '56px', height: '56px',
          borderRadius: '50%',
          border: '1px solid rgba(201,168,76,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 28px',
          background: 'rgba(201,168,76,0.08)',
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h1 className="font-display" style={{
          fontSize: 'clamp(40px, 6vw, 64px)',
          fontWeight: 300,
          color: '#f0e8d5',
          lineHeight: 1.1,
          marginBottom: '8px',
        }}>
          You&apos;re in,
        </h1>
        <h1 className="font-display" style={{
          fontSize: 'clamp(40px, 6vw, 64px)',
          fontWeight: 600,
          fontStyle: 'italic',
          color: '#c9a84c',
          lineHeight: 1.1,
          marginBottom: '28px',
        }}>
          {firstName}.
        </h1>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '16px',
          lineHeight: 1.7,
          color: 'rgba(240,232,213,0.5)',
        }}>
          Watch your inbox — you&apos;ll get a 48-hour head start before
          Founding Member pricing opens to anyone else.
          <br />
          <strong style={{ color: 'rgba(240,232,213,0.7)', fontWeight: 500 }}>
            Now share your link and earn rewards.
          </strong>
        </p>
      </div>

      {/* Divider */}
      <div style={{
        width: '1px', height: '40px',
        background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)',
        marginBottom: '40px',
      }} />

      {/* Referral share */}
      <div className="anim-2" style={{ width: '100%', maxWidth: '520px' }}>
        <ReferralShare
          referralCode={decodeURIComponent(code)}
          referralUrl={decodeURIComponent(url)}
          name={name ? decodeURIComponent(name) : ''}
        />
      </div>

      {/* Back link */}
      <a href="/" className="back-link">
        ← Back to madecases.com
      </a>

      <style>{`
        .back-link {
          font-family: var(--font-body);
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(240,232,213,0.25);
          text-decoration: none;
          margin-top: 48px;
          transition: color 0.2s;
        }
        .back-link:hover { color: rgba(240,232,213,0.6); }
      `}</style>

    </main>
  )
}

export default function ThankYouPage(props: PageProps) {
  return (
    <Suspense>
      <ThankYouContent {...props} />
    </Suspense>
  )
}
