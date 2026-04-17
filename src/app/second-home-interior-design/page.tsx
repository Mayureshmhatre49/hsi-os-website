import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Second Home & Holiday Home Interior Design — Execution by HSIOS™',
  description:
    'Premium interior execution for second homes and holiday villas across India. HSIOS™ manages Goa beach houses, hill retreat builds, and weekend homes with remote owner dashboards, transparent costs, and zero site visit dependence.',
  alternates: { canonical: 'https://www.hsios.in/second-home-interior-design' },
  openGraph: {
    title: 'Second Home & Holiday Home Interior Design — HSIOS™',
    description: 'Luxury second home and holiday villa execution across India — managed remotely, delivered precisely.',
    url: 'https://www.hsios.in/second-home-interior-design',
  },
}

const challenges = [
  {
    title: 'You Can\'t Be on Site Daily',
    desc: 'Second homes are by definition built at distance. HSIOS™ eliminates the dependency on physical presence — daily progress photos, live budget tracking, and digital approvals give you full control from your primary residence.',
  },
  {
    title: 'The Absentee Owner Premium',
    desc: 'Contractors historically inflate costs for absentee homeowners who can\'t audit invoices or verify material grades. HSIOS™ blocks this with itemised cost tracking, verified material procurement, and digital change order protocols.',
  },
  {
    title: 'Seasonal Build Windows',
    desc: 'Goa, Lonavala, and Nashik all have monsoon windows that compress the usable build calendar. The HSIOS™ Planning Engine sequences work around these constraints — not as an afterthought, but as a core input.',
  },
  {
    title: 'Specialist Material Logistics',
    desc: 'Premium finishes for holiday homes often must travel from metros to remote locations. Our procurement module tracks every shipment to ensure materials arrive when the trade is ready for them.',
  },
  {
    title: 'Smart Home for Weekend Use',
    desc: 'Second homes benefit enormously from automation — climate pre-conditioning before arrival, security monitoring, remote access management. We integrate smart home systems into the master schedule before walls are finished.',
  },
  {
    title: 'Rental-Ready Specifications',
    desc: 'Many second homes are also managed as luxury rental properties. We execute to the specification standards required for premium short-term rental management — durability, finish quality, and guest-grade functionality.',
  },
]

const locations = [
  { name: 'Goa', desc: 'Beach villas and coastal homes' },
  { name: 'Alibag', desc: 'Coastal retreats near Mumbai' },
  { name: 'Lonavala & Karjat', desc: 'Western Ghats hill retreats' },
  { name: 'Nashik', desc: 'Vineyard estates and farmhouses' },
  { name: 'Coorg', desc: 'Coffee estate homes and retreats' },
  { name: 'Ooty & Kodaikanal', desc: 'Hill station properties' },
]

const faqs = [
  {
    q: 'Can you execute my second home interior if I live in a different city or overseas?',
    a: 'Yes — remote execution is a core use case for HSIOS™. The platform provides daily site updates, live budget dashboards, and digital change approvals that are accessible from anywhere. You do not need to be physically present at any point during execution.',
  },
  {
    q: 'How do you prevent cost escalation on second home projects?',
    a: 'Through the HSIOS™ Budget Intelligence module. Every spend is tracked against the approved estimate in real time. Any cost deviation triggers a formal digital change order before commitment. You always know your current project total — no end-of-project surprises.',
  },
  {
    q: 'Can HSIOS™ design the interior of my holiday home as well as execute it?',
    a: 'We are an execution company, not a design firm. We strongly recommend engaging an interior designer for the aesthetic direction. We then take the approved designs, convert them into trackable execution milestones, and manage all on-ground delivery — coordinating directly with your designer throughout.',
  },
  {
    q: 'Do you handle short-term rental specifications for luxury holiday villas?',
    a: 'Yes. We are familiar with the specification standards required for premium short-term rental platforms. Finishes are selected and executed for durability alongside aesthetics, and smart home integrations are configured for guest management from day one.',
  },
  {
    q: 'What second home locations do you cover?',
    a: 'We execute second home and holiday villa projects across Goa, Alibag, Lonavala, Karjat, Nashik, Pune surrounds, Bangalore, and select South Indian hill stations. For any location not listed, contact us to discuss feasibility.',
  },
]

export default function SecondHomeInteriorDesignPage() {
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
            src="/hestia-villa-blue-haven.jpg"
            alt="Second home and holiday villa interior execution by Hestia Smart Interiors"
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
              <div className="section-label text-sandstone-400">Second Homes · Holiday Villas</div>
              <h1 className="font-serif text-display-xl text-white mb-6">
                Your Holiday Home.{' '}
                <span className="text-sandstone-400">Executed Without</span>
                <br />
                the Weekend Stress.
              </h1>
              <p className="text-xl text-warmgray-300 mb-8 max-w-2xl">
                Goa. Lonavala. Nashik. Alibag. Your second home is built far from your daily
                life — HSIOS™ ensures that distance never costs you quality, transparency,
                or control over your investment.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/918010234802?text=Hi%20HSIOS,%20I'm%20interested%20in%20interior%20execution%20for%20my%20second%20home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-bronze"
                >
                  Start Your Second Home Project
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
              <div className="section-label">The Second Home Execution Problem</div>
              <h2 className="font-serif text-display-lg text-charcoal-800 mt-4">
                What HSIOS™ Eliminates for Holiday Home Owners
              </h2>
              <p className="text-warmgray-600 mt-4 max-w-2xl mx-auto">
                Building a second home comes with unique challenges that primary residence
                projects do not face. Every one of them has a structural solution in HSIOS™.
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

      {/* ── LOCATIONS ── */}
      <section className="py-24 bg-white">
        <div className="container-luxury max-w-4xl">
          <RevealOnScroll>
            <h2 className="font-serif text-display-md text-charcoal-800 mb-6">
              Where We Execute Second Homes
            </h2>
            <p className="text-warmgray-600 leading-relaxed mb-10">
              India&apos;s premium second home markets each have their own execution demands —
              monsoon schedules, logistics constraints, local contractor ecosystems. HSIOS™
              operates with location-specific knowledge across all of them.
            </p>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {locations.map((loc, i) => (
              <RevealOnScroll key={loc.name} delay={i * 0.08}>
                <div className="flex gap-4 items-start p-6 rounded-2xl bg-ivory-50 border border-ivory-200">
                  <span className="w-2 h-2 rounded-full bg-sandstone-400 flex-shrink-0 mt-2" />
                  <div>
                    <div className="font-serif text-lg text-charcoal-800 mb-1">{loc.name}</div>
                    <div className="text-sm text-warmgray-600">{loc.desc}</div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={0.15}>
            <div className="mt-14 pt-10 border-t border-ivory-300">
              <p className="text-warmgray-600 leading-relaxed">
                For remote locations not listed, contact us to discuss project feasibility.
                Our execution platform is location-agnostic — the core system operates
                identically regardless of where your second home is being built.
              </p>
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
                Second Home Interior Questions
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
            <div className="section-label text-white/70 mb-4">Your Retreat Awaits</div>
            <h2 className="font-serif text-display-md text-white mb-5">
              Build Your Second Home Without Becoming Its Full-Time Manager.
            </h2>
            <p className="text-white/80 leading-relaxed mb-8">
              Remote execution. Transparent costs. A holiday home that is ready
              when you arrive — every time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/918010234802?text=Hi%20HSIOS,%20I'm%20interested%20in%20interior%20execution%20for%20my%20second%20home"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-charcoal-800 hover:bg-ivory-100"
              >
                Discuss Your Project
              </a>
              <Link href="/nri-home-interior-management" className="btn btn-outline-white">
                NRI Remote Execution
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
