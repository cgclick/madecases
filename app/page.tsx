import SignupForm from '@/components/SignupForm'
import ProductGallery from '@/components/ProductGallery'

const PRODUCT_IMAGES = [
  {
    src: '/etb-case-hero.jpg',
    alt: 'MadeCases ETB display case — hero',
  },
  {
    src: '/etb-details.jpg',
    alt: 'MadeCases ETB display case — details',
  },
  {
    src: '/etb-packaging.jpg',
    alt: 'MadeCases ETB display case — packaging',
  },
]

export default function HomePage() {
  return (
    <main style={{ background: '#080809', minHeight: '100vh' }}>

      {/* ── Nav ── */}
      <nav className="anim-1" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 40px',
        background: 'linear-gradient(to bottom, rgba(8,8,9,0.95), transparent)',
      }}>
        <span className="holo-text font-display" style={{
          fontSize: '18px', fontWeight: 600, letterSpacing: '0.22em',
          textTransform: 'uppercase',
        }}>
          MadeCases
        </span>
        <span className="badge-live">
          <span className="dot" />
          Founding Now
        </span>
      </nav>

      {/* ── Hero ── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        padding: '120px 40px 80px',
        maxWidth: '1200px', margin: '0 auto',
        position: 'relative',
      }}>
        {/* Ambient glow */}
        <div style={{
          position: 'absolute', top: '20%', left: '-10%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '80px', alignItems: 'center', width: '100%',
        }} className="hero-grid">

          {/* Left — Copy */}
          <div>
            <div className="anim-1" style={{ marginBottom: '28px' }}>
              <span className="eyebrow">Elite Trainer Box Display Case</span>
            </div>

            <div className="gold-line anim-2" style={{ marginBottom: '28px' }} />

            <h1 className="anim-3 font-display" style={{
              fontSize: 'clamp(52px, 6vw, 88px)',
              fontWeight: 300,
              lineHeight: 1.05,
              margin: '0 0 8px',
              color: '#f0e8d5',
              letterSpacing: '-0.01em',
            }}>
              Your ETB deserves
            </h1>
            <h1 className="anim-3 font-display" style={{
              fontSize: 'clamp(52px, 6vw, 88px)',
              fontWeight: 600,
              fontStyle: 'italic',
              lineHeight: 1.05,
              margin: '0 0 36px',
              color: '#c9a84c',
              letterSpacing: '-0.01em',
            }}>
              better than a shelf.
            </h1>

            <p className="anim-4" style={{
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              lineHeight: 1.7,
              color: 'rgba(240,232,213,0.6)',
              maxWidth: '420px',
              marginBottom: '44px',
            }}>
              A custom-fit acrylic display case for sealed Pokemon Elite Trainer Boxes.
              Optical-grade clarity, magnetic closure, UV-filtering. Show it off the way it deserves.
            </p>

            <div className="anim-5" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#waitlist" className="btn-gold" style={{ padding: '16px 32px', fontSize: '13px' }}>
                Secure your spot
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3l5 5-5 5M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#why" className="btn-ghost">
                Learn more
              </a>
            </div>

            {/* Social proof */}
            <div className="anim-6" style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              marginTop: '44px',
            }}>
              <div style={{ display: 'flex' }}>
                {[0,1,2,3].map(i => (
                  <div key={i} style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: `hsl(${30 + i * 15}, 15%, ${18 + i * 3}%)`,
                    border: '2px solid #080809',
                    marginLeft: i === 0 ? 0 : '-10px',
                  }} />
                ))}
              </div>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: 'rgba(240,232,213,0.45)',
              }}>
                Collectors already on the waitlist
              </span>
            </div>
          </div>

          {/* Right — Product gallery */}
          <div className="anim-4" style={{ display: 'flex', justifyContent: 'center' }}>
            <ProductGallery images={PRODUCT_IMAGES} />
          </div>
        </div>
      </section>

      {/* ── Marquee divider ── */}
      <div style={{
        borderTop: '1px solid rgba(201,168,76,0.12)',
        borderBottom: '1px solid rgba(201,168,76,0.12)',
        padding: '18px 0',
        overflow: 'hidden',
      }}>
        <div style={{
          display: 'flex', gap: '64px',
          fontFamily: 'var(--font-body)',
          fontSize: '11px', fontWeight: 500,
          letterSpacing: '0.25em', textTransform: 'uppercase',
          color: 'rgba(201,168,76,0.5)',
          whiteSpace: 'nowrap',
          justifyContent: 'center',
          flexWrap: 'wrap',
          padding: '0 40px',
        }}>
          {['Custom-Fit for ETBs', 'Optical-Grade Acrylic', 'Flame-Polished Edges', 'N52 Magnetic Closure', 'UV-Filtering Available', 'Collector-Designed'].map(t => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>

      {/* ── Why MadeCases ── */}
      <section id="why" style={{
        padding: '120px 40px',
        maxWidth: '1200px', margin: '0 auto',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '20px' }}>
            Why MadeCases
          </span>
          <h2 className="font-display" style={{
            fontSize: 'clamp(36px, 4vw, 56px)',
            fontWeight: 300,
            color: '#f0e8d5',
            letterSpacing: '-0.01em',
          }}>
            Every detail considered.
            <br />
            <em style={{ color: '#c9a84c', fontWeight: 400 }}>Nothing compromised.</em>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {[
            {
              n: '01',
              title: 'Custom-Fit for ETBs',
              body: 'Precision-cut to fit sealed Pokemon Elite Trainer Boxes. No rattling, no padding, no compromises. Snaps in and stays put.',
            },
            {
              n: '02',
              title: 'Optical-Grade Acrylic',
              body: 'Cast acrylic with flame-polished edges, N52 magnetic closure, and optional UV-filtering. Every angle looks like it belongs in a display case.',
            },
            {
              n: '03',
              title: 'Built by Collectors',
              body: 'We made this because nothing on the market was good enough for our own ETBs. If it doesn\'t pass our shelf, it doesn\'t ship.',
            },
          ].map(({ n, title, body }) => (
            <div key={n} className="feature-card">
              <div className="font-display" style={{
                fontSize: '56px', fontWeight: 300,
                color: 'rgba(201,168,76,0.35)',
                lineHeight: 1, marginBottom: '20px',
              }}>{n}</div>
              <h3 className="font-display" style={{
                fontSize: '24px', fontWeight: 500,
                color: '#f0e8d5', marginBottom: '12px',
              }}>{title}</h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px', lineHeight: 1.7,
                color: 'rgba(240,232,213,0.5)',
              }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Waitlist Form ── */}
      <section id="waitlist" style={{
        padding: '100px 40px',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.04) 0%, transparent 60%)',
        borderTop: '1px solid rgba(201,168,76,0.08)',
      }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow" style={{ display: 'block', marginBottom: '20px' }}>
            Founding Waitlist
          </span>
          <h2 className="font-display" style={{
            fontSize: 'clamp(36px, 4vw, 54px)',
            fontWeight: 300,
            color: '#f0e8d5',
            marginBottom: '16px',
            letterSpacing: '-0.01em',
          }}>
            Join before it opens.
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px', lineHeight: 1.7,
            color: 'rgba(240,232,213,0.5)',
            marginBottom: '52px',
          }}>
            We're building the first run now. Founding members get 48-hour early
            access and up to 20% off before anyone else sees the price.
          </p>

          <div className="glass-card" style={{ padding: '48px 40px' }}>
            <SignupForm />
          </div>
        </div>
      </section>

      {/* ── Referral ── */}
      <section style={{
        padding: '100px 40px',
        maxWidth: '1000px', margin: '0 auto',
        textAlign: 'center',
      }}>
        <span className="eyebrow" style={{ display: 'block', marginBottom: '20px' }}>
          Referral Rewards
        </span>
        <h2 className="font-display" style={{
          fontSize: 'clamp(32px, 3.5vw, 48px)',
          fontWeight: 300, color: '#f0e8d5',
          marginBottom: '16px',
        }}>
          Refer friends. <em style={{ color: '#c9a84c' }}>Earn rewards.</em>
        </h2>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '15px', color: 'rgba(240,232,213,0.45)',
          marginBottom: '56px', maxWidth: '420px', margin: '0 auto 56px',
        }}>
          Every person you refer gets you closer to a free case.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
          {[
            { n: '1', label: 'Referral', reward: '$5 Store Credit' },
            { n: '3', label: 'Referrals', reward: 'Free Branded Sleeves' },
            { n: '5+', label: 'Referrals', reward: 'Free Case or Exclusive Colorway' },
          ].map(({ n, label, reward }) => (
            <div key={n} className="tier-card">
              <div className="tier-number">{n}</div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px', fontWeight: 500,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'rgba(240,232,213,0.35)', marginBottom: '16px',
              }}>{label}</div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px', fontWeight: 500,
                color: '#c9a84c',
              }}>{reward}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        borderTop: '1px solid rgba(201,168,76,0.1)',
        padding: '32px 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '12px',
      }}>
        <span className="holo-text font-display" style={{
          fontSize: '16px', fontWeight: 600, letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}>
          MadeCases
        </span>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '12px', color: 'rgba(240,232,213,0.25)',
          letterSpacing: '0.08em',
        }}>
          © {new Date().getFullYear()} MADECASES · BUILT BY COLLECTORS
        </span>
      </footer>

      {/* ── Mobile hero grid fix ── */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .hero-grid > div:last-child {
            order: -1;
          }
        }
        @media (max-width: 600px) {
          nav { padding: 18px 20px !important; }
          section { padding-left: 20px !important; padding-right: 20px !important; }
          footer { padding: 24px 20px !important; }
        }
      `}</style>

    </main>
  )
}
