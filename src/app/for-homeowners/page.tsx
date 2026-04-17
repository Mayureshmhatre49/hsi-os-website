import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'For Homeowners — Complete Project Visibility & Control | HSI',
  description:
    'Complete visibility, live cost tracking, and peace of mind for homeowners. Manage your villa project from anywhere in the world with HSIOS™.',
  alternates: { canonical: 'https://www.hsios.in/for-homeowners' },
}

const painPoints = [
  { title: 'Budget overrun discovered at handover',       solution: 'Live tracking — every rupee visible, every day.' },
  { title: 'No idea what stage the project is at',        solution: 'Real-time dashboard — done, active, and pending.' },
  { title: 'Vendor delays with no warning',               solution: 'HSIOS™ flags delays before they impact your timeline.' },
  { title: 'Managing from another city or abroad',        solution: 'Full control from any device, zero site visits required.' },
]

const benefits = [
  { icon: '👁️', title: 'Complete Project Visibility',   desc: 'Phase-by-phase dashboards accessible from any device, anywhere.' },
  { icon: '💰', title: 'Cost Clarity at Every Stage',   desc: 'Real-time budget tracking across every room, trade, and vendor. Approved spend and projected cost — always visible.' },
  { icon: '📋', title: 'Every Decision Documented',     desc: 'No verbal agreements. Every change, approval, and instruction is logged in HSIOS™ — permanently.' },
  { icon: '🏆', title: 'Quality You Can Verify',        desc: 'Photo-documented milestone inspections. Work only proceeds after sign-off.' },
  { icon: '🤝', title: 'One Accountable Team',          desc: 'No blame-shifting. One team managing all vendors, trades, and coordination.' },
  { icon: '📍', title: 'NRI-Ready Remote Management',   desc: 'Same visibility and control whether you\'re in Mumbai or Melbourne.' },
]

export default function ForHomeownersPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hestia-villa-bellissimo.jpg"
            alt="Luxury villa interior — Hestia Smart Interiors, for homeowners"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-800/40 to-charcoal-900/20" />
        </div>
        <div className="container-luxury relative z-10">
          <RevealOnScroll>
            <div className="max-w-2xl">
              <div className="section-label text-sandstone-400">For Homeowners</div>
              <h1 className="font-serif text-display-xl text-white mb-6">
                Your Home. Your Vision.<br />
                <em className="not-italic text-sandstone-300">Your Control.</em>
              </h1>
              <p className="text-warmgray-200 text-lg leading-relaxed mb-8">
                Complete project visibility, cost clarity, and peace of mind — whether you&apos;re on-site or overseas.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-bronze">Book Private Consultation</Link>
                <Link href="/how-it-works" className="btn btn-outline-white">See Our Process</Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── POSITIONING STATEMENT ─────────────────────────── */}
      <section className="py-16 bg-charcoal-800">
        <div className="container-luxury max-w-3xl text-center">
          <RevealOnScroll>
            <p className="font-serif text-display-sm text-white leading-snug mb-4">
              Build once. Build right.
            </p>
            <p className="text-warmgray-300 text-lg leading-relaxed">
              HSIOS™ ends endless rework, budget drift, and vendor dependency. You get clarity, structure, and results.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── PAIN POINTS ───────────────────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-16">
            <div className="section-label">The Problems We Solve</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              Sound Familiar?<br />
              <span className="text-sandstone-600">Here is How HSI Fixes It.</span>
            </h2>
          </RevealOnScroll>

          <div className="space-y-4 max-w-3xl">
            {painPoints.map(({ title, solution }, i) => (
              <RevealOnScroll key={title} delay={i * 0.07}>
                <div className="grid sm:grid-cols-2 gap-6 p-7 rounded-2xl bg-white border border-ivory-300 hover:border-sandstone-300 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">
                      ✗
                    </div>
                    <p className="text-warmgray-700 font-medium leading-snug">{title}</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-sandstone-50 border border-sandstone-200 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm text-sandstone-600">
                      ✓
                    </div>
                    <p className="text-warmgray-600 text-sm leading-relaxed">{solution}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ──────────────────────────────────────── */}
      <section className="section-py bg-ivory-200">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-16">
            <div className="section-label">What You Get</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              The Standard You Deserve.
            </h2>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map(({ icon, title, desc }, i) => (
              <RevealOnScroll key={title} delay={i * 0.07}>
                <div className="card-warm p-8 h-full">
                  <div className="text-4xl mb-5">{icon}</div>
                  <h3 className="font-serif text-lg font-bold text-charcoal-800 mb-3">{title}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── NRI CALLOUT ───────────────────────────────────── */}
      <section className="section-py bg-charcoal-800 text-white">
        <div className="container-luxury grid lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll>
            <div className="section-label text-sandstone-400">NRI Homeowners</div>
            <h2 className="font-serif text-display-md text-white mb-6">
              Your India Villa.<br />
              <span className="text-sandstone-300">Managed From Anywhere.</span>
            </h2>
            <p className="text-warmgray-300 leading-relaxed mb-6">
              HSIOS™ was built with NRI homeowners in mind. Distance is just a timezone difference — your dashboard never leaves you.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Live project dashboard — accessible 24/7 from any device',
                'Daily progress updates with photos and notes',
                'Real-time cost tracking — no financial surprises',
                'Video calls at key milestones — we come to you',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-warmgray-300">
                  <span className="w-5 h-5 rounded-full bg-sandstone-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
                      <path d="M1 3.5l2 2 4-4" stroke="#C4A882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/nri-home-interior-management" className="btn btn-bronze">
              NRI Management Details →
            </Link>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <div className="relative rounded-4xl overflow-hidden aspect-square">
              <Image
                src="/hestia-villa-vayu.jpg"
                alt="NRI villa management — Hestia Smart Interiors"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── TESTIMONIAL ───────────────────────────────────── */}
      <section className="py-20 bg-ivory-100">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll>
            <div className="card-luxury bg-white p-10 text-center">
              <div className="font-serif text-5xl text-sandstone-300 leading-none mb-6">&ldquo;</div>
              <p className="font-serif text-xl text-charcoal-800 leading-relaxed italic mb-8 max-w-2xl mx-auto">
                My husband and I both work full time. We simply didn&apos;t have the bandwidth to visit site every weekend.
                HSIOS™ meant approving things on my phone during lunch, seeing progress by evening,
                and always knowing exactly where the budget stood.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-11 h-11 rounded-full bg-sandstone-100 flex items-center justify-center font-serif font-bold text-sandstone-700 text-sm">NS</div>
                <div className="text-left">
                  <div className="font-semibold text-charcoal-800 text-sm">Nandita S.</div>
                  <div className="text-xs text-warmgray-500 mt-0.5">Homeowner · Mumbai Apartment</div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-24 bg-sandstone-400 text-center">
        <RevealOnScroll>
          <div className="container-luxury max-w-2xl">
            <h2 className="font-serif text-display-md text-white mb-5">
              Ready for a Different Experience?
            </h2>
            <p className="text-white/80 leading-relaxed mb-8">
              Tell us about your project — we&apos;ll show you what complete control looks like.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn bg-white text-charcoal-800 hover:bg-ivory-100">
                Book Consultation
              </Link>
              <a
                href="https://wa.me/918010234802?text=Hi%20HSI%2C%20I%27m%20a%20homeowner%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
