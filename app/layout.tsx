import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MadeCases — Premium Pokemon Card Display Cases',
  description:
    'Premium acrylic display cases for Pokemon card collectors. Join the waitlist for early access and Founding Member pricing.',
  openGraph: {
    title: 'MadeCases — Premium Pokemon Card Display Cases',
    description: 'Built by collectors, for collectors. Join the waitlist.',
    url: 'https://madecases.com',
    siteName: 'MadeCases',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
