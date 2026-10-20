import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { getAlternates, breadcrumb, serviceSchema, OG_IMAGE } from '@/lib/seo'
import { JsonLd } from '@/lib/JsonLd'
import { ClientFeature } from '@/components/ui/ClientSpotlight'
import { FACTS } from '@/content/facts'
import { ALIBAG, ALIBAG_AREAS, placeSchema } from '@/content/locations'

const PAGE_URL = 'https://www.hsios.in/alibag-villa-interiors'

export const metadata: Metadata = {
  title: 'Alibag Villa Interiors (Alibaug) — HSIOS™ Execution',
  description:
    'Villa interior execution in Alibag (Alibaug): coastal material specs, monsoon scheduling, 15+ trades coordinated and full cost transparency through HSIOS™.',
  alternates: getAlternates('/alibag-villa-interiors'),
  openGraph: {
    title: 'Alibag Villa Interiors — Premium Interior Execution by HSIOS™',
    description: 'Villa interior execution in Alibag — coastal material expertise, milestone-verified delivery, powered by HSIOS™.',
    url: PAGE_URL,
    images: [OG_IMAGE],
  },
}

const faqs = [
  {
    q: 'Do you work across Alibag — Mandwa, Kihim, Awas, Nagaon and beyond?',
    a: `Yes. We execute villa interiors across Alibag taluka — ${ALIBAG_AREAS.slice(0, -1).join(', ')} and ${ALIBAG_AREAS[ALIBAG_AREAS.length - 1]} — and along the wider Raigad coast. Every site runs on the same HSIOS™ process, wherever it sits.`,
  },
  {
    q: 'How much does a villa interior cost in Alibag?',
    a: `A typical 4,000 sq ft Alibag villa interior is ${FACTS.typicalVillaInvestment} all-in, depending on finishes and scope. Coastal material upgrades and Mumbai logistics make it costlier than an equivalent city project. Our pricing page and Alibag cost guide break this down line by line.`,
  },
  {
    q: 'How long does a villa interior take in Alibag?',
    a: 'On-site interior execution typically runs around 18 weeks once the shell is ready — from mobilisation to handover; planning and procurement add lead time before that. The real constraint is the monsoon: anything weather-sensitive must be sealed before June, so the schedule is planned backwards from the rains.',
  },
  {
    q: 'How do you handle material procurement for a remote location like Alibag?',
    a: "We perform strict Material Takeoffs (MTOs) from the architect's GFC drawings upfront. All premium finishes are batch-procured from Mumbai and shipped via RoRo ferry or road, eliminating the daily shortages that kill momentum on a coastal site.",
  },
  {
    q: 'Can I work with my Mumbai-based architect while using HSI for Alibag execution?',
    a: 'Absolutely. HSI is an Execution Partner, not a design firm. We plug into your existing design team, take the GFC drawings, and handle the on-ground execution while your architect retains full creative direction.',
  },
  {
    q: 'What happens if execution runs into the monsoon season?',
    a: 'The HSIOS™ timeline module tracks critical path dependencies daily. If your pre-monsoon weatherproofing milestone is at risk by March, you know it — allowing corrective action before the June rains force a 4-month work stoppage.',
  },
  {
    q: 'Do you use marine-grade materials as standard?',
    a: 'Yes. BWP (Boiling Water Proof) marine-grade ply for all carcasses, SS-304 hardware, and high-grade waterproofing are non-negotiable on every Alibag project. Our procurement module tracks grade compliance at entry.',
  },
]

const challenges = [
  {
    title: 'Coastal Material Intelligence',
    desc: 'Saline air, humidity, and monsoon exposure demand marine-grade ply, SS-304 hardware, and correct waterproofing chemicals — specified and verified at procurement.',
  },
  {
    title: 'Logistics & Procurement',
    desc: 'Alibag has no same-day supplier. HSI batch-ships from Mumbai via RoRo or road, pre-planned to your MTOs, so your site team is never idle waiting on a missing tile.',
  },
  {
    title: 'Monsoon Critical Path',
    desc: 'Civil finishing and window installations must be weather-tight before June. Our timeline engine tracks this dependency daily and flags risk months in advance.',
  },
  {
    title: 'Remote Owner Visibility',
    desc: 'Daily progress photos tied to scheduled tasks, live budget tracking, and digital change approvals give you full control from Mumbai or anywhere in the world.',
  },
  {
    title: '15+ Vendor Orchestration',
    desc: 'Plumbers, electricians, HVAC, automation, carpenters — all sequenced in HSIOS™ so no trade breaks the work of another.',
  },
  {
    title: `${FACTS.villasDelivered} Villas Delivered`,
    desc: `We have completed ${FACTS.villasDelivered} luxury villas in and around Alibag, catching ${FACTS.conflictsCaughtPreExecution} trade conflicts before they reached site. That track record is your assurance that the coastal problems are already solved.`,
  },
]

const reading = [
  { href: '/insights/alibag-second-home-from-mumbai', cat: 'Guide · Mumbai to Alibag', title: 'Building an Alibag Second Home While Living in Mumbai' },
  { href: '/insights/alibag-villa-guide', cat: 'Guide · Alibag Series', title: 'The Complete Guide to Alibag Villa Interiors' },
  { href: '/insights/alibag-villa-cost', cat: 'Cost Intelligence', title: 'How Much Does a Villa Interior Cost in Alibag?' },
  { href: '/insights/alibag-timeline', cat: 'Execution Timeline', title: 'Alibag Villa Interior: Start to Finish' },
]

export default async function AlibagVillaInteriorsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const service = serviceSchema({
    name: 'Villa Interior Execution in Alibag',
    serviceType: 'Villa Interior Execution',
    description:
      'Turnkey villa interior execution in Alibag (Alibaug) and the Raigad coast — coastal-grade materials, monsoon-planned schedules and live cost tracking through HSIOS™.',
    url: PAGE_URL,
    areaServed: [
      placeSchema(ALIBAG),
      ...ALIBAG_AREAS.map((name) => ({ '@type': 'Place', name: `${name}, Alibag` })),
    ],
  })

  return (
    <>
      <JsonLd data={[faqSchema, service, breadcrumb([
        { name: 'Home', url: 'https://www.hsios.in' },
        { name: 'Alibag Villa Interiors', url: PAGE_URL },
      ])]} />

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/projects-casa-frangipani-1.jpg"
            alt="Casa Frangipani villa interior in Alibag, executed by Hestia Smart Interiors"
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/95 via-charcoal-800/50 to-charcoal-900/20" />
        </div>
        <div className="container-luxury relative z-10">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <div className="section-label text-sandstone-400">Alibag · Alibaug · Raigad Coast</div>
              <h1 className="font-serif text-display-xl text-white mb-6">
                Villa Interiors in{' '}
                <span className="text-sandstone-400">Alibag</span>
                <br />
                Coastal Execution, Structured to Perfection
              </h1>
              <p className="text-xl text-warmgray-300 mb-8 max-w-2xl">
                {FACTS.villasDelivered} luxury villas delivered on the Konkan coast. HSIOS™ manages every
                material, vendor, and monsoon window so you never discover surprises after handover.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/918010234802?text=Hi%20HSI,%20I'm%20interested%20in%20discussing%20my%20Alibag%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-bronze"
                >
                  Start Your Alibag Project
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
      <section className="py-24 bg-ivory-50">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="section-label">Why Alibag is Different</div>
              <h2 className="font-serif text-display-lg text-charcoal-900 mt-4">
                Execution Challenges We Solve
              </h2>
              <p className="text-warmgray-600 mt-4 max-w-2xl mx-auto">
                Treating Alibag like a Mumbai suburb is a recipe for budget overruns and monsoon
                disasters. We have built the systems to prevent all of them.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((c, i) => (
              <RevealOnScroll key={c.title} delay={i * 0.08}>
                <div className="card-warm p-8 h-full">
                  <h3 className="font-serif text-xl text-charcoal-900 mb-3">{c.title}</h3>
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
            <h2 className="font-serif text-display-md text-charcoal-900 mb-6">
              The Standard for Alibag Villa Execution
            </h2>
            <p className="text-warmgray-600 leading-relaxed mb-6">
              Alibag — Alibaug on many maps and signboards — is no longer just a weekend getaway. It
              has matured into a premier destination for primary and second luxury residences. But
              many homeowners face a rude awakening when execution begins. The gap between a
              considered 3D render and the on-ground reality of a coastal, semi-remote site is vast.
            </p>
            <p className="text-warmgray-600 leading-relaxed mb-10">
              HSIOS™ bridges that gap. We translate your architect&apos;s vision into hundreds of
              trackable micro-tasks, manage material procurement from Mumbai, and sequence every trade
              so your project is weather-tight before the monsoon and delivered without surprises.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h3 className="font-serif text-2xl text-charcoal-900 mb-4">Our Alibag Process</h3>
            <div className="space-y-4 text-warmgray-600 leading-relaxed">
              <p>
                From day one, your project is mapped onto the HSIOS™ platform. GFC drawings are
                translated into quantified Material Takeoffs. Procurement is batch-shipped from
                Mumbai. Daily progress photos are tied to scheduled tasks, not chosen by the
                contractor. Change orders require your digital signature before any spend occurs.
              </p>
              <p>
                By the time you walk through the doors on handover day, you will have seen
                pressure-tested plumbing, verified marine-ply installation, and approved every
                single material upgrade along the way. No surprises. No NRI premium.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── WHERE WE WORK ── */}
      <section className="py-24 bg-ivory-50">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <RevealOnScroll>
              <div className="section-label">Where We Work</div>
              <h2 className="font-serif text-display-md text-charcoal-900 mb-6">
                Across Alibag Taluka and the Raigad Coast
              </h2>
              <p className="text-warmgray-600 leading-relaxed mb-6">
                From the Mandwa jetty belt to Revdanda in the south, every Alibag micro-location has
                its own access roads, soil and exposure to the sea. Beachfront plots near Kihim or
                Nagaon face heavier salt load than inland farmhouse sites; approach roads decide how
                large a delivery can reach your gate. We plan procurement and sequencing around the
                specific site — not a generic &ldquo;Alibag&rdquo; template.
              </p>
              <p className="text-warmgray-600 leading-relaxed">
                Building from Mumbai? Read our guide to{' '}
                <Link href="/insights/alibag-second-home-from-mumbai" className="text-sandstone-600 font-semibold underline underline-offset-2 hover:text-sandstone-700">
                  building an Alibag second home while living in Mumbai
                </Link>
                {' '}— or see how we work for{' '}
                <Link href="/mumbai-luxury-interiors" className="text-sandstone-600 font-semibold underline underline-offset-2 hover:text-sandstone-700">
                  Mumbai residences
                </Link>
                .
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3" aria-label="Alibag areas we serve">
                {ALIBAG_AREAS.map((area) => (
                  <li key={area} className="flex items-center gap-2 rounded-xl bg-white border border-ivory-300 px-4 py-3 text-sm font-medium text-charcoal-800">
                    <MapPin size={14} className="text-sandstone-600 flex-shrink-0" aria-hidden="true" />
                    {area}
                  </li>
                ))}
              </ul>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── PROOF ── */}
      <section className="py-20 bg-white">
        <div className="container-luxury max-w-4xl">
          <RevealOnScroll>
            <div className="card-warm p-8 sm:p-10 grid sm:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <div className="section-label">Alibag Case Study</div>
                <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-900 mb-3">
                  Casa Frangipani — delivered three months early
                </h2>
                <p className="text-warmgray-600 leading-relaxed">
                  A 8,500 sq ft, 6-bedroom villa in Alibag. Twelve trade conflicts caught in HSIOS™
                  before site work began, coastal-grade materials verified at entry.
                </p>
              </div>
              <Link href="/projects/casa-frangipani" className="btn btn-outline-dark whitespace-nowrap">
                Read the case study <ArrowRight size={15} />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CURRENT CLIENT ── */}
      <section className="pb-20 bg-white">
        <div className="container-luxury">
          <ClientFeature context="alibag" />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-sandstone-50">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <div className="section-label">FAQ</div>
              <h2 className="font-serif text-display-md text-charcoal-900 mt-4">
                Alibag Execution Questions
              </h2>
            </div>
          </RevealOnScroll>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <RevealOnScroll key={i} delay={i * 0.06}>
                <div className="card-warm p-8">
                  <h3 className="font-serif text-lg text-charcoal-900 mb-3">{f.q}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{f.a}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <p className="text-center text-sm text-warmgray-600 mt-10">
            Want the numbers in detail? See{' '}
            <Link href="/pricing" className="text-sandstone-600 font-semibold underline underline-offset-2">pricing</Link>
            {' '}or the{' '}
            <Link href="/insights/alibag-villa-cost" className="text-sandstone-600 font-semibold underline underline-offset-2">Alibag cost guide</Link>.
          </p>
        </div>
      </section>

      {/* ── FURTHER READING ── */}
      <section className="py-20 bg-white">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="section-label">Alibag Guides</div>
            <h2 className="font-serif text-display-sm text-charcoal-900 mb-8">Plan Your Alibag Villa</h2>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reading.map((r) => (
              <Link key={r.href} href={r.href} className="card-warm p-6 group block hover:shadow-luxury-md transition-shadow">
                <div className="text-xs font-semibold tracking-wider uppercase text-sandstone-600 mb-2">{r.cat}</div>
                <p className="font-serif text-charcoal-900 group-hover:text-bronze-700 transition-colors">{r.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-charcoal-900 text-center">
        <div className="container-luxury max-w-2xl">
          <RevealOnScroll>
            <div className="section-label text-sandstone-400 mb-4">Ready to Build?</div>
            <h2 className="font-serif text-display-lg text-white mb-6">
              Execute Your Alibag Villa{' '}
              <span className="text-sandstone-400">Predictably</span>
            </h2>
            <p className="text-warmgray-400 mb-8">
              Join {FACTS.villasDelivered} families who built their coastal home with every rupee,
              decision and site day on record.
            </p>
            <a
              href="https://wa.me/918010234802?text=Hi%20HSI,%20I'm%20interested%20in%20discussing%20my%20Alibag%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bronze"
            >
              Speak to Our Alibag Team
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
