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
    <main className="min-h-screen bg-white px-6 py-16 flex flex-col items-center text-center">
      <div className="mb-10 max-w-md">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-black mb-3">You're in, {firstName}.</h1>
        <p className="text-gray-500 text-lg">
          We'll email you 48 hours before anyone else when Founding Member pricing opens.
          In the meantime — share your link and earn rewards.
        </p>
      </div>

      <ReferralShare
        referralCode={decodeURIComponent(code)}
        referralUrl={decodeURIComponent(url)}
        name={name ? decodeURIComponent(name) : ''}
      />

      <a href="/" className="mt-8 text-sm text-gray-400 underline hover:text-gray-600">
        Back to homepage
      </a>
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
