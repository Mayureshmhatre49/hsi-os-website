import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Villa Interiors in Nashik — Vineyard Estate & Weekend Home Execution | HSIOS™',
  description:
    'Premium villa interior execution in Nashik. HSIOS™ manages vineyard estates, weekend homes, and farmhouses across Nashik with transparent cost tracking, multi-trade coordination, and remote owner dashboards.',
  alternates: { canonical: 'https://www.hsios.in/nashik-villa-interiors' },
  openGraph: {
    title: 'Villa Interiors in Nashik — HSIOS™ | Hestia Smart Interiors',
    description: 'Luxury villa execution for Nashik vineyard estates and weekend homes, powered by HSIOS™.',
    url: 'https://www.hsios.in/nashik-villa-interiors',
  },
}

const challenges = [
  {
    title: 'Vineyard Estate Execution',
    desc: 'Nashik\'s vineyard estates demand premium finishes that work with the natural landscape — stone, timber, terracotta — while meeting the performance demands of a hospitality-grade second home. We manage every specification precisely.',
  },
  {
    title: 'Weekend Home Logistics',
    desc: 'Premium materials must travel from Pune or Mumbai. Our procurement module tracks every shipment so materials arrive when the site team is ready — no delays from missing finishes.',
  },
  {
    title: 'Remote Owner Management',
    desc: 'Most Nashik villa owners are based in Mumbai or Pune. The HSIOS™ dashboard gives you daily progress photos and live budget status — without requiring a 3-hour drive every weekend.',
  },
  {
    title: 'Climate-Appropriate Specifications',
    desc: 'Nashik\'s elevated climate and temperature variation demand careful material selection. We spec finishes that perform in the Deccan environment — not just finishes that look premium in a showroom.',
  },
  {
    title: 'Multi-Trade Sequencing',
    desc: 'Farmhouse and estate builds require coordination across civil, plumbing, electrical, joinery, stone, and landscaping. HSIOS™ sequences every trade to eliminate the bottlenecks that extend rural builds by months.',
  },
  {
    title: 'Budget Intelligence',
    desc: 'Remote builds in emerging markets like Nashik are particularly vulnerable to cost escalation. Our live budget tracking ensures you see every rupee committed before it is spent.',
  },
]

const faqs = [
  {
    q: 'Do you execute interiors for vineyard estates and wine country properties in Nashik?',
    a: 'Yes. Vineyard estates and boutique hospitality properties in Sula, Dindori, and surrounding areas are a specific focus. We manage the full interior execution — from premium natural material sourcing to smart home integration — while respecting the architectural character of the estate.',
  },
  {
    q: 'How do you manage construction in Nashik when I\'m based in Mumbai?',
    a: 'Through the HSIOS™ remote dashboard. Your on-site supervisor logs daily progress with photos tied to scheduled milestones. You approve design variations and budget changes digitally, on your schedule — no weekend site visits required unless you want them.',
  },
  {
    q: 'Can you source premium materials for a Nashik villa from Mumbai or Pune?',
    a: 'Yes. We manage the full procurement pipeline from vendor cities to site. All materials are tracked through the HSIOS™ platform — verified at site entry for grade and specification compliance before being signed off.',
  },
  {
    q: 'What makes villa execution in Nashik different from a city project?',
    a: 'Rural and semi-urban builds have specific logistics challenges — contractor availability, material lead times, and access infrastructure — that require tighter advance planning. HSIOS™ builds these variables into the master schedule from day one, not as reactive problems.',
  },
]

export default function NashikVillaInteriorsPage() {
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
            alt="Villa interiors in Nashik by Hestia Smart Interiors"
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
              <div className="section-label text-sandstone-400">Location Services · Nashik</div>
              <h1 className="font-serif text-display-xl text-white mb-6">
                Villa Interiors in{' '}
                <span className="text-sandstone-400">Nashik</span>
                <br />
                Wine Country. Premium Execution.
              </h1>
              <p className="text-xl text-warmgray-300 mb-8 max-w-2xl">
                Nashik&apos;s vineyard estates and weekend retreats deserve an execution standard
                that matches their ambition. HSIOS™ delivers structured, transparent villa
                execution in India&apos;s wine country.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/918010234802?text=Hi%20HSIOS,%20I'm%20interested%20in%20discussing%20my%20Nashik%20villa%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-bronze"
                >
                  Start Your Nashik Project
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
              <div className="section-label">Built for Nashik</div>
              <h2 className="font-serif text-display-lg text-charcoal-800 mt-4">
                What HSIOS™ Brings to Your Nashik Villa
              </h2>
              <p className="text-warmgray-600 mt-4 max-w-2xl mx-auto">
                Nashik villa builds have specific challenges — remote logistics, climate
                considerations, and absentee owners. HSIOS™ addresses every one.
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
              Nashik&apos;s Emerging Luxury Villa Market
            </h2>
            <p className="text-warmgray-600 leading-relaxed mb-6">
              Nashik has rapidly emerged as the premier destination for premium weekend homes and
              vineyard estates among Mumbai and Pune&apos;s affluent professionals. The combination
              of Sula Vineyards proximity, pleasant climate, and relatively accessible land has
              created a new category of luxury second home — one that blends residential comfort
              with the character of wine country.
            </p>
            <p className="text-warmgray-600 leading-relaxed mb-6">
              Executing these properties demands a different approach than a city apartment.
              Natural materials — stone, reclaimed timber, terracotta — require specialist vendors
              and careful site management. Logistics from Pune and Mumbai add lead time to every
              procurement decision. And most owners are managing these projects remotely, from
              offices hundreds of kilometres away.
            </p>
            <p className="text-warmgray-600 leading-relaxed mb-10">
              HSIOS™ brings the same structured execution platform that we use on Mumbai penthouses
              and Bangalore villas to Nashik&apos;s wine country properties — giving remote owners
              the visibility and control they need to build confidently in a market that is still
              developing its execution infrastructure.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h3 className="font-serif text-2xl text-charcoal-800 mb-5">
              Areas We Serve in Nashik
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                'Sula Vineyards Area', 'Gangapur Road', 'Dindori Road',
                'Trimbak Road', 'Nashik Road', 'Ozar',
                'Igatpuri Foothills', 'Sinnar', 'Surrounding Estates',
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
                Nashik Villa Interior Questions
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
      <section className="py-24 bg-sandstone-400 text-center">
        <div className="container-luxury max-w-2xl">
          <RevealOnScroll>
            <div className="section-label text-white/70 mb-4">Build in Nashik</div>
            <h2 className="font-serif text-display-md text-white mb-5">
              Your Nashik Estate. Executed Without Compromise.
            </h2>
            <p className="text-white/80 leading-relaxed mb-8">
              Vineyard estates. Weekend retreats. Premium farmhouses.
              All delivered with the transparency and precision your investment demands.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/918010234802?text=Hi%20HSIOS,%20I'm%20interested%20in%20discussing%20my%20Nashik%20villa%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-charcoal-800 hover:bg-ivory-100"
              >
                Discuss Your Nashik Project
              </a>
              <Link href="/projects" className="btn btn-outline-white">
                See Our Portfolio
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
