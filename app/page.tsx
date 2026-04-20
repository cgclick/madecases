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
          Founding Access Open
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
              marginBottom: '16px',
            }}>
              Premium acrylic display cases for sealed Pokémon Elite Trainer Boxes.
              Custom-fit, crystal clear, and built to feel worthy of what&apos;s inside.
            </p>

            <p className="anim-3" style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              lineHeight: 1.7,
              color: '#3D5070',
              maxWidth: '420px',
              marginBottom: '8px',
            }}>
              If your ETB is worth $100, $500, or more — it deserves a case that matches. Not a generic acrylic box from overseas. Something built specifically for it.
            </p>

            <p className="anim-3" style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              lineHeight: 1.6,
              color: '#8096B4',
              maxWidth: '400px',
              marginBottom: '40px',
            }}>
              Join the founding waitlist for first access to launch pricing, production updates, and the first premium production run.
            </p>

            <div className="anim-4" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
              <a href="#waitlist" className="btn-gold" style={{ padding: '16px 28px', fontSize: '13px' }}>
                Join Founding Waitlist
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 3l5 5-5 5M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#why" className="btn-ghost">
                Learn more
              </a>
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

      {/* ── Why Made Cases ── */}
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
              body: 'Premium cast acrylic, polished edges, magnetic closure, and display-first clarity. Built to look as good as the box inside it.',
            },
            {
              n: '03',
              title: 'Built by Collectors',
              body: 'We made this because too many cases on the market feel generic, bulky, or like an afterthought. If it doesn\'t earn a place on our shelf, it doesn\'t ship.',
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

      {/* ── Founding Drop / How It Works ── */}
      <section id="founding" style={{
        padding: '100px 48px',
        background: '#F0F5FF',
        borderTop: '1px solid #D5E3FF',
        borderBottom: '1px solid #D5E3FF',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className="eyebrow" style={{ display: 'inline-block', marginBottom: '16px' }}>
              Founding Drop
            </span>
            <h2 className="font-display" style={{
              fontSize: 'clamp(32px, 3.5vw, 52px)',
              fontWeight: 800,
              color: '#0B1A35',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: '16px',
            }}>
              Be part of the first production run.
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px', lineHeight: 1.7,
              color: '#3D5070',
              maxWidth: '520px', margin: '0 auto',
            }}>
              Made Cases is opening its first premium production run to founding collectors.
              Join early for first access to the initial batch, launch pricing, and priority before public release.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' }} className="feature-grid">
            {[
              {
                step: '1',
                title: 'Join the waitlist',
                body: 'Get early access before the public launch. No commitment required — just your place in line.',
              },
              {
                step: '2',
                title: 'Founding members go first',
                body: 'When the first batch opens, founding members get the first opportunity to secure cases from the initial production run.',
              },
              {
                step: '3',
                title: 'Public release comes next',
                body: 'Any remaining inventory opens to the public after founding members have had first access.',
              },
            ].map(({ step, title, body }) => (
              <div key={step} style={{
                background: '#fff',
                border: '1px solid #D5E3FF',
                borderRadius: '16px',
                padding: '32px 28px',
                position: 'relative',
              }}>
                <div style={{
                  width: '36px', height: '36px',
                  borderRadius: '50%',
                  background: '#1B5CE6',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '20px',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '14px', fontWeight: 800,
                    color: '#fff',
                  }}>{step}</span>
                </div>
                <h3 className="font-display" style={{
                  fontSize: '20px', fontWeight: 700,
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
        </div>
      </section>

      {/* ── Waitlist Form ── */}
      <section id="waitlist" style={{
        padding: '100px 48px',
        background: '#1B5CE6',
        position: 'relative', zIndex: 1,
        overflow: 'hidden',
      }}>
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
            Join the founding waitlist.
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px', lineHeight: 1.7,
            color: 'rgba(255,255,255,0.65)',
            marginBottom: '24px',
          }}>
            Get first access to launch pricing, first-run availability, and production updates before the public release.
          </p>

          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,208,0,0.12)',
            border: '1px solid rgba(255,208,0,0.3)',
            borderRadius: '100px',
            padding: '8px 18px',
            marginBottom: '40px',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FFD000', flexShrink: 0 }} />
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '12px', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#FFD000',
            }}>
              Founding member pricing available at launch
            </span>
          </div>

          <div className="glass-card waitlist-card" style={{ padding: '40px 36px', background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.15)' }}>
            <SignupForm />
          </div>
        </div>
      </section>

      {/* ── Why Join Early ── */}
      <section style={{
        padding: '100px 48px',
        maxWidth: '900px', margin: '0 auto',
        textAlign: 'center',
        position: 'relative', zIndex: 1,
      }}>
        <span className="eyebrow" style={{ display: 'inline-block', marginBottom: '16px' }}>
          Founding Access
        </span>
        <h2 className="font-display" style={{
          fontSize: 'clamp(32px, 3.5vw, 48px)',
          fontWeight: 800, color: '#0B1A35',
          marginBottom: '16px',
          letterSpacing: '-0.02em',
        }}>
          Why join early.
        </h2>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '15px', color: '#8096B4',
          maxWidth: '400px', margin: '0 auto 52px',
          lineHeight: 1.7,
        }}>
          Founding members get access that the general public won't.
        </p>

        <div className="feature-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '16px', maxWidth: '720px', margin: '0 auto', textAlign: 'left' }}>
          {[
            { icon: '→', title: 'First access to launch pricing', body: 'Founding waitlist members are first to receive pricing details when the initial run opens.' },
            { icon: '→', title: 'Priority before public release', body: 'Cases from the first production run go to founding members before any broader availability.' },
            { icon: '→', title: 'Direct production updates', body: 'Stay informed on production progress and timelines as the first run develops.' },
            { icon: '→', title: 'Early access to future drops', body: 'Founding supporters will have continued early access as new products and versions launch.' },
          ].map(({ icon, title, body }) => (
            <div key={title} style={{
              background: '#fff',
              border: '1px solid #D5E3FF',
              borderRadius: '14px',
              padding: '24px',
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
            className="feature-card"
            >
              <div style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                marginBottom: '10px',
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '16px', fontWeight: 800,
                  color: '#1B5CE6',
                }}>{icon}</span>
                <h3 className="font-display" style={{
                  fontSize: '16px', fontWeight: 700,
                  color: '#0B1A35',
                }}>{title}</h3>
              </div>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px', lineHeight: 1.7,
                color: '#3D5070',
              }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{
        padding: '80px 48px 100px',
        maxWidth: '720px', margin: '0 auto',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="eyebrow" style={{ display: 'inline-block', marginBottom: '16px' }}>FAQ</span>
          <h2 className="font-display" style={{
            fontSize: 'clamp(28px, 3vw, 40px)',
            fontWeight: 800, color: '#0B1A35',
            letterSpacing: '-0.02em',
          }}>Common questions.</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            {
              q: 'What does joining the waitlist mean?',
              a: 'You\'ll be first to hear about launch timing, pricing, and access to the first production run. No commitment, no payment — just your place in line.',
            },
            {
              q: 'Is this a preorder?',
              a: 'Not yet. The current waitlist is for early access before the first production run opens to founding members.',
            },
            {
              q: 'Will waitlist members get early pricing?',
              a: 'Yes. Founding waitlist members will be first to receive launch pricing and first-run details.',
            },
            {
              q: 'What product is this made for?',
              a: 'This case is designed specifically for sealed Pokémon Elite Trainer Boxes.',
            },
            {
              q: 'Will there be more sizes or versions later?',
              a: 'That\'s the plan. The first launch is focused on getting the flagship ETB case right.',
            },
          ].map(({ q, a }) => (
            <div key={q} style={{
              background: '#fff',
              border: '1px solid #D5E3FF',
              borderRadius: '14px',
              padding: '24px 28px',
            }}>
              <p className="font-display" style={{
                fontSize: '16px', fontWeight: 700,
                color: '#0B1A35', marginBottom: '8px',
              }}>{q}</p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px', lineHeight: 1.7,
                color: '#3D5070',
                margin: 0,
              }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section style={{
        padding: '80px 48px',
        background: '#0B1A35',
        textAlign: 'center',
        position: 'relative', zIndex: 1,
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(27,92,230,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '540px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span style={{
            display: 'inline-block',
            fontFamily: 'var(--font-body)',
            fontSize: '11px', fontWeight: 600,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#FFD000', marginBottom: '20px',
          }}>Founding Drop</span>
          <h2 className="font-display" style={{
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            fontWeight: 800, color: '#fff',
            letterSpacing: '-0.02em',
            lineHeight: 1.1, marginBottom: '16px',
          }}>
            Get early access to the founding drop.
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px', lineHeight: 1.7,
            color: 'rgba(255,255,255,0.5)',
            marginBottom: '36px',
          }}>
            Join the waitlist now to be first in line for launch pricing, first-run availability, and production updates.
          </p>
          <a href="#waitlist" className="btn-gold" style={{ padding: '16px 32px', fontSize: '13px' }}>
            Join Founding Waitlist
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3l5 5-5 5M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        background: '#0B1A35',
        borderTop: '1px solid rgba(255,255,255,0.06)',
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
