'use client'

import { useState } from 'react'

interface ReferralShareProps {
  referralCode: string
  referralUrl: string
  name: string
}

export default function ReferralShare({ referralCode, referralUrl, name }: ReferralShareProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(referralUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const el = document.createElement('textarea')
      el.value = referralUrl
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const shareText = `I just joined the MadeCases waitlist for premium Pokemon card display cases. Use my link to get early access: ${referralUrl}`

  return (
    <div className="w-full max-w-md space-y-4">
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 text-center">
        <p className="text-sm text-gray-500 mb-1">Your referral code</p>
        <p className="text-2xl font-black tracking-widest text-gray-900">{referralCode}</p>
        <p className="text-xs text-gray-400 mt-1">Share this with your crew</p>
      </div>

      <button
        onClick={handleCopy}
        className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors"
      >
        <span className="text-gray-600 truncate">{referralUrl}</span>
        <span className="ml-3 shrink-0 font-semibold text-black">
          {copied ? 'Copied!' : 'Copy'}
        </span>
      </button>

      <div className="grid grid-cols-2 gap-3">
        <a
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center py-3 px-4 bg-black text-white rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors"
        >
          Share on X
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Instagram
        </a>
      </div>

      <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-600">
        <p className="font-semibold mb-2">Every referral earns you rewards:</p>
        <ul className="space-y-1">
          <li>1 friend → $5 store credit</li>
          <li>3 friends → free branded sleeves</li>
          <li>5+ friends → free case or exclusive colorway</li>
        </ul>
      </div>
    </div>
  )
}
