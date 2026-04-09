import Image from 'next/image'
import SignupForm from '@/components/SignupForm'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-6 pt-16 pb-10 max-w-2xl mx-auto text-center">
        <p className="text-xs font-bold tracking-[0.25em] text-gray-400 uppercase mb-6">
          MadeCases
        </p>

        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-gray-900 mb-4 leading-tight">
          Your chase card deserves a&nbsp;case that matches its value.
        </h1>

        <p className="text-lg text-gray-500 mb-8 max-w-md mx-auto">
          Premium acrylic display cases for Pokemon card collectors.
          Built by collectors, for collectors.
          <strong className="text-gray-700"> Join the waitlist for Founding Member pricing.</strong>
        </p>

        {/* Product placeholder image */}
        <div className="relative w-full aspect-video bg-gray-100 rounded-2xl overflow-hidden mb-10 mx-auto max-w-md">
          <Image
            src="https://via.placeholder.com/600x400"
            alt="MadeCases acrylic display case"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        {/* Social proof stub */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
            ))}
          </div>
          <p className="text-sm text-gray-500">Collectors already on the waitlist</p>
        </div>

        <div className="flex justify-center">
          <SignupForm />
        </div>
      </section>

      {/* Why MadeCases */}
      <section className="px-6 py-14 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Why MadeCases?</h2>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { title: 'Premium Acrylic', body: 'Optical-grade cast acrylic. No distortion, no yellowing. Your cards look exactly as they should.' },
              { title: 'Built to Display', body: 'Magnetic closures, flame-polished edges, UV-filtering options. This is display-worthy protection.' },
              { title: 'Collector-First', body: 'We collect too. Every design decision starts with the question: would we want this for our own collection?' },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-sm text-gray-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral teaser */}
      <section className="px-6 py-14 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Refer friends, earn rewards</h2>
        <p className="text-gray-500 mb-6">
          Every person you refer who joins the waitlist earns you credit toward your order.
          Refer 5 friends and your first case could be on us.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 text-sm">
          {[
            { label: '1 referral', reward: '$5 store credit' },
            { label: '3 referrals', reward: 'Free branded sleeves' },
            { label: '5+ referrals', reward: 'Free case or exclusive colorway' },
          ].map(({ label, reward }) => (
            <div key={label} className="bg-gray-50 rounded-xl p-4">
              <p className="font-semibold">{label}</p>
              <p className="text-gray-500">{reward}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-100 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} MadeCases. Built by collectors.
      </footer>
    </main>
  )
}
