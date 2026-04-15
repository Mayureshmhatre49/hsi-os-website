import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'For Developers — Scale Premium Interior Execution Across Your Portfolio | HSI',
  description:
    'HSIOS™ enables property developers to standardise luxury interior execution across multiple units — reducing delays, maintaining quality consistency and providing buyer transparency.',
  alternates: { canonical: 'https://www.hsios.in/for-developers' },
}

const developerBenefits = [
  { icon: '📐', title: 'Standardised Execution',        desc: 'HSIOS™ creates repeatable execution templates across all your units — consistent quality, every time.' },
  { icon: '📊', title: 'Multi-Unit Dashboard',           desc: 'Manage multiple units in parallel from a single view. Progress, costs and timelines for every property in your portfolio.' },
  { icon: '💰', title: 'Procurement Efficiency',         desc: 'Consolidated procurement across units reduces cost, improves vendor terms and eliminates duplication.' },
  { icon: '🏆', title: 'Quality Documentation',          desc: 'Every quality checkpoint is documented in HSIOS™ — creating a permanent, auditable record for every unit delivered.' },
  { icon: '👥', title: 'Buyer-Facing Transparency',      desc: 'Give your buyers real-time progress visibility as a sales differentiator. Demonstrate premium execution before the keys are handed over.' },
  { icon: '⚡', title: 'Faster Handover Timelines',      desc: 'Structured execution reduces rework and coordination delays — accelerating handover across your entire project timeline.' },
]

const useCases = [
  {
    title: 'Sample Villa Fit-Out',
    desc: 'Your sample villa is your most powerful sales tool. HSIOS™ ensures it is delivered to specification, on time, with a documented quality record to present to buyers.',
    image: '/hestia-villa-bellissimo.jpg',
  },
  {
    title: 'Multi-Unit Luxury Development',
    desc: 'Delivering 10, 20 or 50 premium residences with consistent interior quality requires a system. HSIOS™ is that system — tracking every unit, every phase, every rupee.',
    image: '/hestia-villa-blue-haven.jpg',
  },
  {
    title: 'Boutique Resort Interiors',
    desc: 'Boutique hospitality demands a level of finish and consistency that standard execution cannot guarantee. HSI brings luxury hotel-grade execution discipline to every room.',
    image: '/hestia-serenity-villa.jpg',
  },
]

export default function ForDevelopersPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hestia-villa-blue-haven.jpg"
            alt="Luxury developer project — Hestia Smart Interiors"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/92 via-charcoal-800/50 to-charcoal-900/25" />
        </div>
        <div className="container-luxury relative z-10">
          <RevealOnScroll>
            <div className="max-w-2xl">
              <div className="section-label text-sandstone-400">For Developers</div>
              <h1 className="font-serif text-display-xl text-white mb-6">
                Scale Luxury Execution<br />
                <em className="not-italic text-sandstone-300">Across Your Portfolio.</em>
              </h1>
              <p className="text-warmgray-200 text-lg leading-relaxed mb-8">
                HSIOS™ brings the same execution intelligence and quality discipline
                to every unit in your development — from sample villas to full-scale
                luxury developments.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-bronze">Discuss Your Development</Link>
                <Link href="/hsi-os" className="btn btn-outline-white">Explore HSIOS™</Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── DEVELOPER BENEFITS ────────────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-16">
            <div className="section-label">What HSI Delivers for Developers</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              Consistent Quality.<br />
              <span className="text-sandstone-600">At Any Scale.</span>
            </h2>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {developerBenefits.map(({ icon, title, desc }, i) => (
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

      {/* ── USE CASES ─────────────────────────────────────── */}
      <section className="section-py bg-ivory-200">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-16">
            <div className="section-label">Use Cases</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              Built for Every Stage of{' '}
              <span className="text-sandstone-600">Development.</span>
            </h2>
          </RevealOnScroll>

          <div className="space-y-8">
            {useCases.map(({ title, desc, image }, i) => (
              <RevealOnScroll key={title} delay={i * 0.08}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center rounded-4xl overflow-hidden bg-white border border-ivory-300 ${i % 2 === 1 ? '' : ''}`}>
                  <div className={`relative aspect-[16/9] lg:aspect-auto lg:min-h-[320px] ${i % 2 === 1 ? 'lg:order-last' : ''}`}>
                    <Image
                      src={image}
                      alt={title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-10">
                    <div className="text-xs font-bold tracking-widest uppercase text-sandstone-600 mb-3">
                      Use Case {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-serif text-display-sm text-charcoal-800 mb-4">{title}</h3>
                    <p className="text-warmgray-600 leading-relaxed mb-6">{desc}</p>
                    <Link href="/contact" className="btn btn-outline-dark text-sm">
                      Discuss This →
                    </Link>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── HSIOS FOR DEVELOPERS ──────────────────────────── */}
      <section className="section-py bg-charcoal-800 text-white">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-2xl mb-16">
            <div className="section-label text-sandstone-400">HSIOS™ for Scale</div>
            <h2 className="font-serif text-display-lg text-white">
              The Platform Behind<br />
              <span className="text-sandstone-300">Portfolio-Level Execution.</span>
            </h2>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: '01', title: 'Unit-level dashboards',      desc: 'Individual progress tracking for every unit in your development.' },
              { n: '02', title: 'Portfolio overview',          desc: 'A single view across your entire project — all units, all phases.' },
              { n: '03', title: 'Cost benchmarking',           desc: 'Compare costs across units, identify variances and control budget at scale.' },
              { n: '04', title: 'Buyer access portal',         desc: 'Give each buyer their own visibility into their specific unit\'s progress.' },
            ].map(({ n, title, desc }) => (
              <RevealOnScroll key={n}>
                <div className="p-7 rounded-2xl border border-white/8 bg-white/5 hover:bg-white/8 hover:border-sandstone-400/30 transition-all duration-300">
                  <div className="font-serif text-4xl font-bold text-sandstone-600/30 mb-3 leading-none">{n}</div>
                  <h3 className="font-sans font-semibold text-white mb-2">{title}</h3>
                  <p className="text-warmgray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-24 bg-sandstone-400 text-center">
        <RevealOnScroll>
          <div className="container-luxury max-w-2xl">
            <h2 className="font-serif text-display-md text-white mb-5">
              Let&apos;s Discuss Your Development.
            </h2>
            <p className="text-white/80 leading-relaxed mb-8">
              Whether you are planning a single sample villa or a full luxury development,
              we would love to show you how HSI can work for your portfolio.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn bg-white text-charcoal-800 hover:bg-ivory-100">
                Schedule a Call
              </Link>
              <a
                href="https://wa.me/918010234802?text=Hi%20HSI%2C%20I%27m%20a%20developer%20interested%20in%20your%20services"
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
