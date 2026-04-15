import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'For Homeowners — Clarity, Control & Visibility in Your Interior Project | HSI',
  description:
    'HSI gives homeowners complete visibility into their villa or apartment interior project — clear costs, live progress and peace of mind. Use HSI as a full partner or alongside your existing team.',
  alternates: { canonical: 'https://www.hsios.in/for-homeowners' },
}

const painPoints = [
  { title: 'Discovering the Project is 40% Over Budget at the End',    solution: 'Live budget tracking in HSIOS™ means you see every rupee, every day.' },
  { title: 'Not Knowing What Stage Your Project Is At',                 solution: 'A real-time dashboard shows exactly what is done, what is next and what is pending.' },
  { title: 'Vendor Delays Nobody Warned You About',                     solution: 'HSIOS™ tracks all vendor commitments and flags delays before they impact your timeline.' },
  { title: 'Managing This From Another City or Abroad',                 solution: 'Your dashboard travels with you. Full project visibility, zero site visits required.' },
]

const benefits = [
  { icon: '👁️', title: 'Complete Project Visibility',   desc: 'Live dashboards showing phase-by-phase progress, upcoming milestones and completed tasks — accessible from any device, anywhere.' },
  { icon: '💰', title: 'Cost Clarity at Every Stage',   desc: 'Real-time budget tracking across every room, trade and vendor. Approved spend, pending payments and projected completion cost — always visible.' },
  { icon: '📋', title: 'Every Decision Documented',     desc: 'No verbal agreements. Every change, approval and instruction is logged in HSIOS™, creating a permanent, transparent record.' },
  { icon: '🏆', title: 'Quality You Can Verify',        desc: 'Milestone-based quality inspections with photo documentation. Work does not proceed until the previous phase is signed off.' },
  { icon: '🤝', title: 'One Team, One Responsibility',  desc: 'No blame shifting. One accountable team managing all vendors, trades and coordination — with you in the loop at all times.' },
  { icon: '📍', title: 'NRI-Ready Remote Management',   desc: 'Built for homeowners who cannot be on-site. HSIOS™ gives you the same visibility and control whether you are in Mumbai or Melbourne.' },
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
                Premium interior execution with complete visibility, cost clarity and
                peace of mind — whether you are in the next room or the next continent.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-bronze">Book Private Consultation</Link>
                <Link href="/how-it-works" className="btn btn-outline-white">See Our Process</Link>
              </div>
            </div>
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
              Managing Your India Villa<br />
              <span className="text-sandstone-300">From Anywhere in the World.</span>
            </h2>
            <p className="text-warmgray-300 leading-relaxed mb-6">
              HSIOS™ was built with NRI homeowners in mind. Distance is no longer a
              disadvantage — it is simply a timezone difference. Your dashboard gives you
              the same visibility and control as being on-site.
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

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-24 bg-sandstone-400 text-center">
        <RevealOnScroll>
          <div className="container-luxury max-w-2xl">
            <h2 className="font-serif text-display-md text-white mb-5">
              Ready for a Different Experience?
            </h2>
            <p className="text-white/80 leading-relaxed mb-8">
              Book a private consultation. Tell us about your project — we&apos;ll show you
              exactly what working with HSI looks like for you.
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
