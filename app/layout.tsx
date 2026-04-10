import type { Metadata } from 'next'
import { Bricolage_Grotesque, Figtree } from 'next/font/google'
import './globals.css'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-bricolage',
  display: 'swap',
})

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-figtree',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Made Cases — Premium Pokemon Card Display Cases',
  description:
    'Premium acrylic display cases for Pokemon card collectors. Join the waitlist for early access and Founding Member pricing.',
  openGraph: {
    title: 'Made Cases — Premium Pokemon Card Display Cases',
    description: 'Built by collectors, for collectors. Join the founding waitlist.',
    url: 'https://madecases.com',
    siteName: 'Made Cases',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  )
}
