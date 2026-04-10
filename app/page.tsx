import SignupForm from '@/components/SignupForm'
import ProductGallery from '@/components/ProductGallery'

const PRODUCT_IMAGES = [
  {
    src: '/etb-case-hero_ah.jpg',
    alt: 'Made Cases ETB display case — hero',
  },
  {
    src: '/etb-details.jpg',
    alt: 'Made Cases ETB display case — details',
  },
  {
    src: '/etb-packaging.jpg',
    alt: 'Made Cases ETB display case — packaging',
  },
]

export default function HomePage() {
  return (
    <main style={{ background: '#F7F9FF', minHeight: '100vh' }}>

      {/* ── Nav ── */}
      <nav className="anim-1" style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '16px 48px',
        background: 'rgba(247,249,255,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid #D5E3FF',
      }}>
        <span className="font-display" style={{
          fontSize: '18px', fontWeight: 800, letterSpacing: '0.18em',
          textTransform: 'uppercase', color: '#1B5CE6',
        }}>
          MADE CASES
        </span>
        <span className="badge-live">
          <span className="dot" />
          Founding Now
        </span>
      </nav>

      {/* ── Hero ── */}
      <section className="hero-section" style={{
        minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        padding: '120px 48px 80px',
        maxWidth: '1240px', margin: '0 auto',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '72px', alignItems: 'center', width: '100%',
        }} className="hero-grid">

          {/* Left — Copy */}
          <div>
            <div className="anim-1" style={{ marginBottom: '20px' }}>
              <span className="eyebrow">Elite Trainer Box Display Case</span>
            </div>

            <h1 className="anim-2 font-display" style={{
              fontSize: 'clamp(48px, 5.5vw, 80px)',
              fontWeight: 800,
              lineHeight: 1.05,
              margin: '0 0 8px',
              color: '#0B1A35',
              letterSpacing: '-0.02em',
            }}>
              Your ETB deserves
            </h1>
            <h1 className="anim-2 font-display" style={{
              fontSize: 'clamp(48px, 5.5vw, 80px)',
              fontWeight: 800,
              fontStyle: 'italic',
              lineHeight: 1.05,
              margin: '0 0 28px',
              color: '#1B5CE6',
              letterSpacing: '-0.02em',
            }}>
              better than a shelf.
            </h1>

            <p className="anim-3" style={{
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              lineHeight: 1.7,
              color: '#3D5070',
              maxWidth: '420px',
              marginBottom: '40px',
            }}>
              A custom-fit acrylic display case for sealed Pokémon Elite Trainer Boxes.
              Optical-grade clarity, magnetic closure, UV-filtering. Show it off the way it deserves.
            </p>

            <div className="anim-4" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <a href="#waitlist" className="btn-gold" style={{ padding: '16px 28px', fontSize: '13px' }}>
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
            <div className="anim-5" style={{
              display: 'flex', alignItems: 'center', gap: '12px',
            }}>
              <div style={{ display: 'flex' }}>
                {[0,1,2,3].map(i => (
                  <div key={i} style={{
                    width: '34px', height: '34px', borderRadius: '50%',
                    background: ['linear-gradient(135deg,#DDEAFF,#B8CFFF)','linear-gradient(135deg,#C5D8FF,#94B8FF)','linear-gradient(135deg,#FFE999,#FFD000)','linear-gradient(135deg,#DDEAFF,#94B8FF)'][i],
                    border: '2px solid #fff',
                    marginLeft: i === 0 ? 0 : '-10px',
                  }} />
                ))}
              </div>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                color: '#8096B4',
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
        background: '#1B5CE6',
        padding: '14px 0',
        overflow: 'hidden',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{ display: 'flex', gap: 0 }}>
          {[0, 1].map(n => (
            <div key={n} style={{
              display: 'flex',
              gap: '48px',
              animation: 'marquee 18s linear infinite',
              paddingRight: '48px',
              flexShrink: 0,
            }}>
              {['Custom-Fit for ETBs', 'Optical-Grade Acrylic', 'Flame-Polished Edges', 'N52 Magnetic Closure', 'UV-Filtering Available', 'Collector-Designed'].map(t => (
                <span key={t} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '10px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '11px', fontWeight: 600,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.85)',
                  whiteSpace: 'nowrap',
                }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#FFD000', flexShrink: 0 }} />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Why MadeCases ── */}
      <section id="why" style={{
        padding: '100px 48px',
        maxWidth: '1240px', margin: '0 auto',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="eyebrow" style={{ display: 'inline-block', marginBottom: '16px' }}>
            Why Made Cases
          </span>
          <h2 className="font-display" style={{
            fontSize: 'clamp(32px, 3.5vw, 52px)',
            fontWeight: 800,
            color: '#0B1A35',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}>
            Every detail considered.
            <br />
            <em style={{ color: '#1B5CE6', fontStyle: 'italic' }}>Nothing compromised.</em>
          </h2>
        </div>

        <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {[
            {
              n: '01',
              title: 'Custom-Fit for ETBs',
              body: 'Precision-cut to fit sealed Pokémon Elite Trainer Boxes. No rattling, no padding, no compromises. Snaps in and stays put.',
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
                fontSize: '52px', fontWeight: 800,
                color: '#DDEAFF',
                lineHeight: 1, marginBottom: '16px',
              }}>{n}</div>
              <h3 className="font-display" style={{
                fontSize: '22px', fontWeight: 700,
                color: '#0B1A35', marginBottom: '10px',
              }}>{title}</h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px', lineHeight: 1.7,
                color: '#3D5070',
              }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Waitlist Form ── */}
      <section id="waitlist" style={{
        padding: '100px 48px',
        background: '#1B5CE6',
        position: 'relative', zIndex: 1,
        overflow: 'hidden',
      }}>
        {/* Glow accents */}
        <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(255,208,0,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-40px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <span style={{
            display: 'inline-block',
            fontFamily: 'var(--font-body)',
            fontSize: '11px', fontWeight: 600,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#FFD000', marginBottom: '16px',
          }}>
            Founding Waitlist
          </span>
          <h2 className="font-display" style={{
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 800,
            color: '#fff',
            marginBottom: '16px',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}>
            Join before it opens.
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px', lineHeight: 1.7,
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '48px',
          }}>
            We're building the first run now. Founding members get 48-hour early
            access and up to 20% off before anyone else sees the price.
          </p>

          <div className="glass-card waitlist-card" style={{ padding: '40px 36px', background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.15)' }}>
            <SignupForm />
          </div>
        </div>
      </section>

      {/* ── Referral ── */}
      <section style={{
        padding: '100px 48px',
        maxWidth: '1000px', margin: '0 auto',
        textAlign: 'center',
        position: 'relative', zIndex: 1,
      }}>
        <span className="eyebrow" style={{ display: 'inline-block', marginBottom: '16px' }}>
          Referral Rewards
        </span>
        <h2 className="font-display" style={{
          fontSize: 'clamp(32px, 3.5vw, 48px)',
          fontWeight: 800, color: '#0B1A35',
          marginBottom: '16px',
          letterSpacing: '-0.02em',
        }}>
          Refer friends. <em style={{ color: '#1B5CE6', fontStyle: 'italic' }}>Earn rewards.</em>
        </h2>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '15px', color: '#8096B4',
          maxWidth: '380px', margin: '0 auto 52px',
          lineHeight: 1.7,
        }}>
          Every person you refer gets you closer to a free case.
        </p>

        <div className="tier-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }}>
          {[
            { n: '1', label: 'Referral', reward: '$5 Store Credit', featured: false },
            { n: '3', label: 'Referrals', reward: 'Free Branded Sleeves', featured: true },
            { n: '5+', label: 'Referrals', reward: 'Free Case or Exclusive Colorway', featured: false },
          ].map(({ n, label, reward, featured }) => (
            <div key={n} className="tier-card" style={featured ? {
              borderColor: '#FFD000',
              background: 'linear-gradient(135deg,#FFFBE6,#FFF7CC)',
            } : {}}>
              <div className="tier-number" style={{ color: featured ? '#E6B800' : '#1B5CE6' }}>{n}</div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '11px', fontWeight: 600,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: '#8096B4', marginBottom: '16px',
              }}>{label}</div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px', fontWeight: 600,
                color: featured ? '#E6B800' : '#1B5CE6',
              }}>{reward}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        background: '#0B1A35',
        padding: '32px 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '12px',
        position: 'relative', zIndex: 1,
      }}>
        <span className="font-display" style={{
          fontSize: '16px', fontWeight: 800, letterSpacing: '0.2em',
          textTransform: 'uppercase', color: '#FFD000',
        }}>
          MADE CASES
        </span>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '12px', color: 'rgba(255,255,255,0.3)',
          letterSpacing: '0.08em',
        }}>
          © {new Date().getFullYear()} MADECASES · BUILT BY COLLECTORS
        </span>
      </footer>

      {/* ── Mobile styles ── */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-grid > div:last-child { order: -1; }
          .feature-grid { grid-template-columns: 1fr !important; }
          .tier-grid { grid-template-columns: 1fr !important; max-width: 320px; margin: 0 auto; }
        }
        @media (max-width: 600px) {
          nav { padding: 14px 20px !important; }
          .hero-section { padding: 100px 20px 60px !important; }
          section { padding-left: 20px !important; padding-right: 20px !important; }
          footer { padding: 24px 20px !important; }
          .waitlist-card { padding: 28px 20px !important; }
        }
      `}</style>

    </main>
  )
}
