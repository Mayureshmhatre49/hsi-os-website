import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Villa Interiors in Lonavala & Karjat — Hill Retreat Execution | HSIOS™',
  description:
    'Premium villa interior execution in Lonavala, Khandala, and Karjat. HSIOS™ manages luxury hill retreat builds with transparent cost tracking, remote owner dashboards, and multi-trade coordination.',
  alternates: { canonical: 'https://www.hsios.in/lonavala-villa-interiors' },
  openGraph: {
    title: 'Villa Interiors in Lonavala & Karjat — HSIOS™ | Hestia Smart Interiors',
    description: 'Luxury hill retreat execution in Lonavala and Karjat, powered by HSIOS™.',
    url: 'https://www.hsios.in/lonavala-villa-interiors',
  },
}

const challenges = [
  {
    title: 'Hill Climate Specifications',
    desc: 'Lonavala\'s heavy monsoon and elevated humidity demand materials and waterproofing specifications well beyond standard residential practice. We engineer every spec to perform in the Sahyadri microclimate.',
  },
  {
    title: 'Monsoon Window Management',
    desc: 'The planning engine builds the monsoon window into your master schedule. Civil works, roof finishing, and external waterproofing are prioritised so your villa is weather-tight before the June rains halt exterior work.',
  },
  {
    title: 'Absentee Owner Transparency',
    desc: 'Most Lonavala villa owners live in Mumbai or Pune and can visit only occasionally. The HSIOS™ dashboard gives you daily site visibility and live spend tracking without requiring a 2-hour drive each week.',
  },
  {
    title: 'Contractor Accountability',
    desc: 'Local contractor pace in hill station markets is a known challenge. All vendor milestone payments are tied to platform-verified completion — creating accountability without conflict.',
  },
  {
    title: 'Premium Material Sourcing',
    desc: 'Stone, timber, and specialist finishes must be sourced from Pune or Mumbai. Our procurement module tracks lead times and delivery schedules to ensure no trade is delayed waiting for materials.',
  },
  {
    title: 'Smart Home in Remote Locations',
    desc: 'Weekend home owners often want full automation. Smart home conduit routing is planned before civil begins — not retrofitted after walls are finished — ensuring clean tech integration without rework.',
  },
]

const faqs = [
  {
    q: 'Do you execute villa interiors in Lonavala, Khandala, and Karjat?',
    a: 'Yes. We have executed villa projects across the Lonavala-Khandala belt and the Karjat-Khopoli corridor. The execution framework is identical to our city projects — the same planning rigour, the same quality gates, the same digital transparency.',
  },
  {
    q: 'How do you handle the monsoon season in hill station projects?',
    a: 'The HSIOS™ Planning Engine integrates the monsoon window into your master schedule from day one. Civil, waterproofing, and external works are sequenced to be complete before June, ensuring the interior execution can continue through the rains without interruption.',
  },
  {
    q: 'Can I manage my Lonavala project from Mumbai without site visits?',
    a: 'Yes. The HSIOS™ dashboard logs daily progress with milestone-tied photos and live budget tracking, accessible from anywhere. You only need to physically visit when you want to — not because the project requires it.',
  },
  {
    q: 'Do you handle smart home automation for Lonavala weekend homes?',
    a: 'Yes. Smart home conduit and wiring routing is integrated into the master schedule before civil works begin. All automation vendors are sequenced alongside other trades so the integration is clean and the walls are never re-opened.',
  },
  {
    q: 'What is the minimum project size for a Lonavala villa?',
    a: 'We focus on premium villa projects with an interior execution value of ₹50 Lakhs and above. Our framework is designed for complex, multi-trade projects where the cost of unmanaged execution is significant.',
  },
]

export default function LonavalaVillaInteriorsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hestia-villa-rughani.jpeg"
            alt="Villa interiors in Lonavala and Karjat by Hestia Smart Interiors"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/95 via-charcoal-800/50 to-charcoal-900/20" />
        </div>
        <div className="container-luxury relative z-10">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <div className="section-label text-sandstone-400">Location Services · Lonavala · Karjat</div>
              <h1 className="font-serif text-display-xl text-white mb-6">
                Villa Interiors in{' '}
                <span className="text-sandstone-400">Lonavala</span>
                <br />
                Hill Retreats. Precisely Executed.
              </h1>
              <p className="text-xl text-warmgray-300 mb-8 max-w-2xl">
                Lonavala and Karjat&apos;s luxury weekend homes deserve execution that matches
                the Sahyadri backdrop. HSIOS™ delivers structured, transparent villa execution
                in the Western Ghats — managed remotely, delivered precisely.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/918010234802?text=Hi%20HSIOS,%20I'm%20interested%20in%20discussing%20my%20Lonavala%20villa%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-bronze"
                >
                  Start Your Lonavala Project
                </a>
                <Link href="/contact" className="btn btn-outline-white">
                  Get a Cost Estimate
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CHALLENGES ── */}
      <section className="py-24 bg-ivory-100">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="section-label">Built for Hill Retreats</div>
              <h2 className="font-serif text-display-lg text-charcoal-800 mt-4">
                What Makes Lonavala Execution Different
              </h2>
              <p className="text-warmgray-600 mt-4 max-w-2xl mx-auto">
                Hill station villa builds have climate, logistics, and remote ownership challenges
                that require a more rigorous execution system than a city apartment.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((c, i) => (
              <RevealOnScroll key={c.title} delay={i * 0.08}>
                <div className="card-warm p-8 h-full">
                  <h3 className="font-serif text-xl text-charcoal-800 mb-3">{c.title}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="py-24 bg-white">
        <div className="container-luxury max-w-4xl">
          <RevealOnScroll>
            <h2 className="font-serif text-display-md text-charcoal-800 mb-6">
              The Western Ghats Weekend Home Market
            </h2>
            <p className="text-warmgray-600 leading-relaxed mb-6">
              Lonavala, Khandala, and Karjat have long been the preferred weekend retreat
              destinations for Mumbai and Pune&apos;s professionals. The combination of dramatic
              Sahyadri landscapes, cool climate, and 2–3 hour proximity to both cities makes
              these areas ideal for luxury second homes — from stone-and-timber hill retreats
              to modernist glass-and-concrete cliff villas.
            </p>
            <p className="text-warmgray-600 leading-relaxed mb-6">
              But building in these locations requires navigating challenges that city projects
              do not face: monsoon windows that compress the build calendar, material logistics
              that add days to every procurement cycle, and a local contractor ecosystem that
              operates at a pace calibrated to the hill station lifestyle rather than a premium
              client&apos;s timeline expectations.
            </p>
            <p className="text-warmgray-600 leading-relaxed mb-10">
              HSIOS™ brings institutional-grade project management to these builds. The same
              digital execution platform that runs Mumbai penthouses runs your Lonavala
              retreat — with additional inputs built into the planning engine for monsoon
              scheduling and remote logistics.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h3 className="font-serif text-2xl text-charcoal-800 mb-5">
              Locations We Serve
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                'Lonavala', 'Khandala', 'Karjat',
                'Khopoli', 'Rajmachi Area', 'Bhushi Dam Area',
                'Tungarli', 'Valvan', 'Malavli',
              ].map(area => (
                <div key={area} className="flex items-center gap-2.5 text-sm text-warmgray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-sandstone-400 flex-shrink-0" />
                  {area}
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-ivory-200">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <div className="section-label">FAQ</div>
              <h2 className="font-serif text-display-md text-charcoal-800 mt-4">
                Lonavala Villa Interior Questions
              </h2>
            </div>
          </RevealOnScroll>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <RevealOnScroll key={i} delay={i * 0.06}>
                <div className="card-warm p-8">
                  <h3 className="font-serif text-lg text-charcoal-800 mb-3">{f.q}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{f.a}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-charcoal-900 text-center">
        <div className="container-luxury max-w-2xl">
          <RevealOnScroll>
            <div className="section-label text-sandstone-400 mb-4">Build in the Hills</div>
            <h2 className="font-serif text-display-md text-white mb-5">
              Your Hill Retreat.{' '}
              <span className="text-sandstone-400">Built Precisely.</span>
            </h2>
            <p className="text-warmgray-400 leading-relaxed mb-8">
              Premium hill station execution — monsoon-proof, remotely managed,
              delivered without the chaos that defines most hill station builds.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/918010234802?text=Hi%20HSIOS,%20I'm%20interested%20in%20discussing%20my%20Lonavala%20villa%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-bronze"
              >
                Discuss Your Project
              </a>
              <Link href="/projects" className="btn btn-outline-light">
                See Our Portfolio
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
