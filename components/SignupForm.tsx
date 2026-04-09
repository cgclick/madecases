'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface FormState {
  name: string
  email: string
  phone: string
  quantity_interest: string
  style_interest: string
  city: string
  zip: string
}

const INITIAL_STATE: FormState = {
  name: '',
  email: '',
  phone: '',
  quantity_interest: '1',
  style_interest: 'standard',
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
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name" name="name" type="text" required
          value={form.name} onChange={handleChange} placeholder="Your name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email" name="email" type="email" required
          value={form.email} onChange={handleChange} placeholder="you@email.com"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          id="phone" name="phone" type="tel"
          value={form.phone} onChange={handleChange} placeholder="(215) 555-0100"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div>
        <label htmlFor="quantity_interest" className="block text-sm font-medium text-gray-700 mb-1">
          How many cases are you interested in? <span className="text-red-500">*</span>
        </label>
        <select
          id="quantity_interest" name="quantity_interest"
          value={form.quantity_interest} onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black bg-white"
        >
          <option value="1">1 case</option>
          <option value="2">2 cases</option>
          <option value="3">3 cases</option>
          <option value="4">4+ cases</option>
        </select>
      </div>

      <div>
        <label htmlFor="style_interest" className="block text-sm font-medium text-gray-700 mb-1">
          Which style interests you?
        </label>
        <select
          id="style_interest" name="style_interest"
          value={form.style_interest} onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black bg-white"
        >
          <option value="standard">Standard (single card display)</option>
          <option value="graded">Graded slab display</option>
          <option value="multi">Multi-card display</option>
          <option value="unsure">Not sure yet</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
            City <span className="text-red-500">*</span>
          </label>
          <input
            id="city" name="city" type="text" required
            value={form.city} onChange={handleChange} placeholder="Philadelphia"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div>
          <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
            ZIP <span className="text-red-500">*</span>
          </label>
          <input
            id="zip" name="zip" type="text" required
            value={form.zip} onChange={handleChange} placeholder="19103"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-black text-white py-4 rounded-lg font-semibold text-base hover:bg-gray-900 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Saving your spot…' : 'Join the Waitlist — Get Early Access'}
      </button>

      <p className="text-center text-xs text-gray-400">
        No spam. Early access notification only. Unsubscribe anytime.
      </p>
    </form>
  )
}
