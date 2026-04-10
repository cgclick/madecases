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
      background: '#F7F9FF',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '0 24px 60px',
      position: 'relative',
    }}>

      {/* dot grid */}
      <div style={{
        position: 'fixed', inset: 0,
        backgroundImage: 'radial-gradient(circle, #C5D8FF 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none', opacity: 0.45, zIndex: 0,
      }} />

      {/* Nav bar */}
      <nav style={{
        position: 'sticky', top: 0,
        width: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px 24px',
        background: 'rgba(247,249,255,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid #D5E3FF',
        marginBottom: '48px',
        zIndex: 10,
      }}>
        <a href="/" style={{
          fontFamily: 'var(--font-display)',
          fontSize: '16px',
          fontWeight: 800,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          color: '#1B5CE6',
        }}>
          MADE CASES
        </a>
      </nav>

      {/* Confirmation */}
      <div className="anim-1" style={{
        textAlign: 'center',
        maxWidth: '520px',
        marginBottom: '48px',
        position: 'relative', zIndex: 1,
      }}>
        {/* Check mark */}
        <div style={{
          width: '56px', height: '56px',
          borderRadius: '50%',
          border: '1px solid #DDEAFF',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 28px',
          background: '#EEF3FF',
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="#1B5CE6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <h1 className="font-display" style={{
          fontSize: 'clamp(40px, 6vw, 64px)',
          fontWeight: 800,
          color: '#0B1A35',
          lineHeight: 1.1,
          marginBottom: '8px',
        }}>
          You&apos;re in,
        </h1>
        <h1 className="font-display" style={{
          fontSize: 'clamp(40px, 6vw, 64px)',
          fontWeight: 800,
          fontStyle: 'italic',
          color: '#1B5CE6',
          lineHeight: 1.1,
          marginBottom: '28px',
        }}>
          {firstName}.
        </h1>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '16px',
          lineHeight: 1.7,
          color: '#3D5070',
        }}>
          You&apos;re on the list. We&apos;ll be in touch with launch timing,
          first-run details, and early access before the public release.
        </p>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          lineHeight: 1.7,
          color: '#3D5070',
          marginTop: '12px',
        }}>
          Know a fellow collector?{' '}
          <strong style={{ color: '#0B1A35', fontWeight: 600 }}>
            Share your link. If 5 people purchase using your referral, your case is on us.
          </strong>
        </p>
      </div>

      {/* Divider */}
      <div style={{
        width: '1px', height: '40px',
        background: 'linear-gradient(to bottom, transparent, #DDEAFF, transparent)',
        marginBottom: '40px',
        position: 'relative', zIndex: 1,
      }} />

      {/* Referral share */}
      <div className="anim-2" style={{ width: '100%', maxWidth: '520px', position: 'relative', zIndex: 1 }}>
        <ReferralShare
          referralCode={decodeURIComponent(code)}
          referralUrl={decodeURIComponent(url)}
          name={name ? decodeURIComponent(name) : ''}
        />
      </div>

      {/* Back link */}
      <a href="/" className="back-link" style={{ position: 'relative', zIndex: 1 }}>
        ← Back to madecases.com
      </a>

      <style>{`
        .back-link {
          font-family: var(--font-body);
          font-size: 12px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #8096B4;
          text-decoration: none;
          margin-top: 48px;
          transition: color 0.2s;
        }
        .back-link:hover { color: #1B5CE6; }
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
