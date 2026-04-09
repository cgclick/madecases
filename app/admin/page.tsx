import { redirect } from 'next/navigation'

function isAuthorized(password: string | null): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword) return true
  return password === adminPassword
}

interface PageProps {
  searchParams: Promise<{ pw?: string }>
}

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://madecases.com'

const QR_CONFIGS = [
  { label: 'Main', url: APP_URL, description: 'General waitlist — use for all events' },
  { label: 'Instagram', url: `${APP_URL}?src=ig`, description: 'Instagram bio link' },
  { label: 'TikTok', url: `${APP_URL}?src=tt`, description: 'TikTok link in bio' },
]

export default async function AdminPage({ searchParams }: PageProps) {
  const params = await searchParams
  const pw = params.pw ?? null

  if (!isAuthorized(pw)) {
    redirect('/')
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-black mb-2">MadeCases Admin</h1>
        <p className="text-gray-500 mb-10">QR Code Generator</p>

        <div className="space-y-6">
          {QR_CONFIGS.map(({ label, url, description }) => (
            <div key={label} className="bg-white rounded-xl p-6 shadow-sm flex items-center gap-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/api/qr?url=${encodeURIComponent(url)}&label=${label.toLowerCase()}`}
                alt={`QR code for ${label}`}
                className="w-24 h-24 rounded-lg border border-gray-200"
              />
              <div className="flex-1">
                <p className="font-bold text-lg">{label}</p>
                <p className="text-sm text-gray-500 mb-3">{description}</p>
                <p className="text-xs text-gray-400 font-mono mb-3 break-all">{url}</p>
                <a
                  href={`/api/qr?url=${encodeURIComponent(url)}&label=${label.toLowerCase()}`}
                  download={`madecases-qr-${label.toLowerCase()}.png`}
                  className="inline-block bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Download PNG
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white rounded-xl p-6 shadow-sm">
          <h2 className="font-bold mb-3">Custom Event QR Code</h2>
          <p className="text-sm text-gray-500 mb-2">
            For event-specific tracking, append a source param to the URL:
          </p>
          <code className="block bg-gray-100 px-3 py-2 rounded text-xs mb-3 break-all">
            {APP_URL}?src=pokemon-regionals-april
          </code>
          <p className="text-sm text-gray-500">
            Then generate at:{' '}
            <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">
              /api/qr?url=YOUR_URL&label=event-name
            </code>
          </p>
        </div>
      </div>
    </main>
  )
}
