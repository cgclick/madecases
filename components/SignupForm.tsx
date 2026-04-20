'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface FormState {
  name: string
  email: string
  phone: string
  quantity_interest: string
  style_interest: string
  price_preference: string
  city: string
  zip: string
}

const INITIAL_STATE: FormState = {
  name: '',
  email: '',
  phone: '',
  quantity_interest: '1',
  style_interest: 'standard',
  price_preference: '',
  city: '',
  zip: '',
}

export default function SignupForm() {
  const router = useRouter()
  const [form, setForm] = useState<FormState>(INITIAL_STATE)
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          quantity_interest: parseInt(form.quantity_interest, 10),
        }),
      })

      const json = await res.json()

      if (!res.ok) {
        setErrorMsg(json.error ?? 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }

      router.push(
        `/thank-you?code=${encodeURIComponent(json.referralCode)}&url=${encodeURIComponent(json.referralUrl)}&name=${encodeURIComponent(form.name)}`
      )
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>

      {/* Row 1: Name + Email */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
        <div>
          <label htmlFor="name" className="mc-label">
            Full Name <span style={{ color: '#FFD000' }}>*</span>
          </label>
          <input
            id="name" name="name" type="text" required
            value={form.name} onChange={handleChange}
            placeholder="Your name"
            className="mc-input"
          />
        </div>
        <div>
          <label htmlFor="email" className="mc-label">
            Email <span style={{ color: '#FFD000' }}>*</span>
          </label>
          <input
            id="email" name="email" type="email" required
            value={form.email} onChange={handleChange}
            placeholder="you@email.com"
            className="mc-input"
          />
        </div>
      </div>

      {/* Row 2: Phone + Quantity */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
        <div>
          <label htmlFor="phone" className="mc-label">
            Phone <span style={{ color: 'rgba(255,255,255,0.3)', textTransform: 'none', letterSpacing: 0 }}>optional</span>
          </label>
          <input
            id="phone" name="phone" type="tel"
            value={form.phone} onChange={handleChange}
            placeholder="(215) 555-0100"
            className="mc-input"
          />
        </div>
        <div>
          <label htmlFor="quantity_interest" className="mc-label">
            Quantity Interest <span style={{ color: '#FFD000' }}>*</span>
          </label>
          <select
            id="quantity_interest" name="quantity_interest"
            value={form.quantity_interest} onChange={handleChange}
            className="mc-select"
          >
            <option value="1">1 case</option>
            <option value="2">2 cases</option>
            <option value="3">3 cases</option>
            <option value="4">4+ cases</option>
          </select>
        </div>
      </div>

      {/* Row 3: Style */}
      <div style={{ marginBottom: '14px' }}>
        <label htmlFor="style_interest" className="mc-label">Product</label>
        <select
          id="style_interest" name="style_interest"
          value={form.style_interest} onChange={handleChange}
          className="mc-select"
        >
          <option value="standard">Elite Trainer Box Case</option>
          <option value="unsure">Not sure yet</option>
        </select>
      </div>

      {/* Price range */}
      <div style={{ marginBottom: '14px' }}>
        <label htmlFor="price_preference" className="mc-label">
          What would you pay for a premium ETB case? <span style={{ color: 'rgba(255,255,255,0.3)', textTransform: 'none', letterSpacing: 0 }}>optional</span>
        </label>
        <select
          id="price_preference" name="price_preference"
          value={form.price_preference} onChange={handleChange}
          className="mc-select"
        >
          <option value="">Select a range</option>
          <option value="under_15">Under $15</option>
          <option value="15_18">$15 – $18</option>
          <option value="18_22">$18 – $22</option>
          <option value="22_26">$22 – $26</option>
          <option value="26_30">$26 – $30</option>
        </select>
      </div>

      {/* Row 4: City + ZIP */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '24px' }}>
        <div>
          <label htmlFor="city" className="mc-label">
            City <span style={{ color: '#FFD000' }}>*</span>
          </label>
          <input
            id="city" name="city" type="text" required
            value={form.city} onChange={handleChange}
            placeholder="Philadelphia"
            className="mc-input"
          />
        </div>
        <div>
          <label htmlFor="zip" className="mc-label">
            ZIP <span style={{ color: '#FFD000' }}>*</span>
          </label>
          <input
            id="zip" name="zip" type="text" required
            value={form.zip} onChange={handleChange}
            placeholder="19103"
            className="mc-input"
          />
        </div>
      </div>

      {/* Error */}
      {status === 'error' && (
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '13px', color: '#FF6B6B',
          marginBottom: '16px',
        }}>{errorMsg}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-submit"
      >
        {status === 'loading' ? (
          'Securing your spot…'
        ) : (
          <>
            Join Founding Waitlist
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3l5 5-5 5M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </>
        )}
      </button>

      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '12px',
        color: 'rgba(255,255,255,0.3)',
        textAlign: 'center',
        marginTop: '14px',
        letterSpacing: '0.05em',
      }}>
        No spam. Just launch updates, early access, and first-run details.
      </p>

      {/* Mobile grid fix */}
      <style>{`
        @media (max-width: 500px) {
          form > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </form>
  )
}
