import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { getAlternates, breadcrumb, serviceSchema, OG_IMAGE } from '@/lib/seo'
import { JsonLd } from '@/lib/JsonLd'
import { FACTS } from '@/content/facts'
import { MUMBAI, MUMBAI_AREAS, ALIBAG, placeSchema } from '@/content/locations'

const PAGE_URL = 'https://www.hsios.in/mumbai-luxury-interiors'

export const metadata: Metadata = {
  title: 'Luxury Interiors in Mumbai — Apartments & Penthouses',
  description:
    'Interior execution for Mumbai apartments and penthouses — society approvals, high-rise logistics and vendor coordination with full cost transparency in HSIOS™.',
  alternates: getAlternates('/mumbai-luxury-interiors'),
  openGraph: {
    title: 'Mumbai Luxury Interiors — Apartments & Penthouses',
    description: 'Premium interior execution for Mumbai luxury residences — society-compliant, fully transparent, powered by HSIOS™.',
    url: PAGE_URL,
    images: [OG_IMAGE],
  },
}

const faqs = [
  {
    q: 'How do you manage society working-hour restrictions in Mumbai buildings?',
    a: 'We build society NOC timelines and permitted working windows directly into the HSIOS™ project schedule before execution starts. All vendors are briefed and our daily task plans respect building-level rules automatically.',
  },
  {
    q: 'Can I work with my own interior designer while using HSI for execution?',
    a: 'Yes. HSI acts as the Execution Partner, not the design firm. Your designer retains full creative control. We take the approved drawings, manage procurement and all vendor coordination on the ground.',
  },
  {
    q: 'How do you handle cost overruns in Mumbai projects?',
    a: 'The HSIOS™ Budget Intelligence module tracks every rupee against the approved estimate in real time. Any deviation triggers a digital Change Order that requires your sign-off before a single rupee is spent.',
  },
  {
    q: 'Does the approach differ for new towers and older South Mumbai buildings?',
    a: 'Yes. A new shell in a recent tower is mostly about logistics, builder specifications and goods-lift windows. An older building adds load limits, ageing services and stricter committee scrutiny, so structural and plumbing surveys come before any design is locked. HSIOS™ captures these constraints at onboarding so the schedule reflects the building you actually have.',
  },
  {
    q: 'What society approvals do I need to renovate a Mumbai apartment?',
    a: 'Most housing societies require a written application and NOC from the managing committee before work starts, usually with a scope description, contractor details and a refundable deposit. Structural changes need a structural engineer’s report and, where required, municipal permission. Our guide to Mumbai apartment renovation walks through the process.',
  },
  {
    q: 'I live in Mumbai but am building a villa in Alibag. Can you manage both?',
    a: 'Yes — this is the most common profile we work with. Alibag is our home base, and HSIOS™ gives Mumbai owners the same daily visibility of an Alibag site as a city one: progress photos, live budget and digital approvals, without weekly ferry trips.',
  },
]

const challenges = [
  {
    title: 'High-Rise Logistics',
    desc: 'Material hoisting schedules, goods-lift bookings and floor-protection protocols require precise coordination. HSIOS™ manages every logistics window.',
  },
  {
    title: 'Society Rule Compliance',
    desc: 'Working-hour restrictions, NOC requirements and builder-imposed material specifications are mapped into the project schedule from day one.',
  },
  {
    title: '15+ Vendor Orchestration',
    desc: 'Civil, electrical, plumbing, HVAC, automation, stone, carpentry — sequenced in HSIOS™ so no trade stalls while waiting on another.',
  },
  {
    title: 'Radical Cost Control',
    desc: 'Live budget tracking with line-item visibility. Every vendor invoice is mapped to an approved estimate. No lump-sum surprises at handover.',
  },
  {
    title: 'Remote Owner Visibility',
    desc: 'Daily progress photos tied to scheduled milestones, accessible from any device. Manage your Mumbai home from Singapore or Dubai.',
  },
  {
    title: 'Quality at Finish Level',
    desc: `Milestone-locked quality inspections with photographic proof. No phase proceeds until the previous one passes its milestone checks — ${FACTS.qaCheckpoints} QA checkpoints across the project.`,
  },
]

export default async function MumbaiLuxuryInteriorsPage() {
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
    name: 'Luxury Apartment & Penthouse Interior Execution in Mumbai',
    serviceType: 'Apartment Interior Execution',
    description:
      'Interior execution for Mumbai apartments and penthouses — society NOC planning, high-rise logistics, multi-trade sequencing and live cost tracking through HSIOS™.',
    url: PAGE_URL,
    areaServed: [
      placeSchema(MUMBAI),
      ...MUMBAI_AREAS.flatMap(({ areas }) => areas.map((name) => ({ '@type': 'Place', name: `${name}, Mumbai` }))),
    ],
  })

  return (
    <>
      <JsonLd data={[faqSchema, service, breadcrumb([
        { name: 'Home', url: 'https://www.hsios.in' },
        { name: 'Mumbai Luxury Interiors', url: PAGE_URL },
      ])]} />

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/projects-casa-frangipani-1.jpg"
            alt="Luxury interior executed by Hestia Smart Interiors"
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
              <div className="section-label text-sandstone-400">Location Services</div>
              <h1 className="font-serif text-display-xl text-white mb-6">
                Luxury Interiors in{' '}
                <span className="text-sandstone-400">Mumbai</span>
                <br />
                High-Rise Execution Without Compromise
              </h1>
              <p className="text-xl text-warmgray-300 mb-8 max-w-2xl">
                From Worli penthouses to Bandra sea-facing apartments — HSIOS™ navigates every
                society rule, logistics window, and vendor timeline so you don&apos;t have to.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/918010234802?text=Hi%20HSI,%20I'm%20interested%20in%20discussing%20my%20Mumbai%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-bronze"
                >
                  Start Your Mumbai Project
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
              <div className="section-label">Mumbai Execution Reality</div>
              <h2 className="font-serif text-display-lg text-charcoal-900 mt-4">
                What Makes Mumbai Interiors Different
              </h2>
              <p className="text-warmgray-600 mt-4 max-w-2xl mx-auto">
                Mumbai&apos;s luxury micro-market has its own rules. HSIOS™ has been purpose-built
                to handle all of them without adding friction to your project.
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
              Structured Execution for Mumbai&apos;s Finest Residences
            </h2>
            <p className="text-warmgray-600 leading-relaxed mb-6">
              Mumbai&apos;s premium residential market demands execution precision that goes far
              beyond aesthetics. A Worli sea-facing penthouse requires 15+ agencies — civil
              contractors, electricians, plumbers, HVAC engineers, stone installers, home automation
              specialists — all operating in a building that has its own rules, timings, and
              committees. One coordination failure cascades into weeks of lost time.
            </p>
            <p className="text-warmgray-600 leading-relaxed mb-10">
              HSIOS™ is the operating layer that eliminates this chaos. Every trade is sequenced.
              Every material is tracked. Every cost is transparent. And every decision you make is
              documented — so you are never chasing a WhatsApp thread to remember if you approved
              the imported marble upgrade.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h3 className="font-serif text-2xl text-charcoal-900 mb-4">
              Mumbai-Specific Capabilities
            </h3>
            <ul className="space-y-3 text-warmgray-600 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-bronze-600 font-bold mt-0.5">—</span>
                <span>
                  Pre-project society NOC and builder-specification audit built into the onboarding
                  phase
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-bronze-600 font-bold mt-0.5">—</span>
                <span>
                  Goods-lift and material-hoisting schedule integrated with building management
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-bronze-600 font-bold mt-0.5">—</span>
                <span>
                  Live budget dashboard with line-item vendor payment tracking and digital change
                  order workflow
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-bronze-600 font-bold mt-0.5">—</span>
                <span>{FACTS.qaCheckpoints} QA checkpoints and digital snagging through to handover</span>
              </li>
            </ul>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── NEIGHBOURHOODS ── */}
      <section className="py-24 bg-ivory-50">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <RevealOnScroll>
              <div className="section-label">Across Mumbai</div>
              <h2 className="font-serif text-display-md text-charcoal-900 mb-6">
                Every Building Has Its Own Rules
              </h2>
              <p className="text-warmgray-600 leading-relaxed mb-6">
                A Malabar Hill heritage block, a Worli tower and a Bandra West redevelopment run on
                very different constraints — committee approvals, permitted working hours, goods-lift
                access and load limits. We map those rules into the HSIOS™ schedule before
                mobilisation, so no trade arrives to a locked service lift or a stop-work notice.
              </p>
              <p className="text-warmgray-600 leading-relaxed">
                Planning a renovation? Start with our guide to{' '}
                <Link href="/insights/mumbai-apartment-renovation-society-noc" className="text-sandstone-600 font-semibold underline underline-offset-2 hover:text-sandstone-700">
                  society NOCs and renovation rules in Mumbai
                </Link>
                .
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <div className="space-y-6">
                {MUMBAI_AREAS.map(({ group, areas }) => (
                  <div key={group}>
                    <div className="text-xs font-semibold tracking-widest uppercase text-sandstone-600 mb-3">{group}</div>
                    <ul className="flex flex-wrap gap-2" aria-label={`${group} areas`}>
                      {areas.map((area) => (
                        <li key={area} className="flex items-center gap-1.5 rounded-full bg-white border border-ivory-300 px-3.5 py-1.5 text-sm text-charcoal-800">
                          <MapPin size={13} className="text-sandstone-600" aria-hidden="true" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── MUMBAI → ALIBAG ── */}
      <section className="py-24 bg-charcoal-800">
        <div className="container-luxury grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <RevealOnScroll>
            <div className="section-label text-sandstone-400">For Mumbai Families</div>
            <h2 className="font-serif text-display-md text-white mb-5">
              Building a Second Home in {ALIBAG.name}?
            </h2>
            <p className="text-warmgray-300 leading-relaxed mb-4">
              Alibag is our home base. Most of our villa clients live in Mumbai and build across the
              harbour — and the hardest part is not design, it is running a coastal site you can only
              visit at weekends. HSIOS™ closes that distance with daily site photos, a live budget and
              digital approvals.
            </p>
            <p className="text-warmgray-300 leading-relaxed">
              {FACTS.villasDelivered} villas delivered in and around Alibag, including Casa Frangipani —
              handed over three months ahead of schedule.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <div className="flex flex-col gap-4">
              <Link href="/alibag-villa-interiors" className="btn-bronze justify-center">
                Alibag Villa Interiors <ArrowRight size={15} />
              </Link>
              <Link href="/insights/alibag-second-home-from-mumbai" className="btn btn-outline-white justify-center">
                Guide: Building in Alibag from Mumbai
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-sandstone-50">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <div className="section-label">FAQ</div>
              <h2 className="font-serif text-display-md text-charcoal-900 mt-4">
                Mumbai Interior Questions
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
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-charcoal-900 text-center">
        <div className="container-luxury max-w-2xl">
          <RevealOnScroll>
            <div className="section-label text-sandstone-400 mb-4">Ready to Build?</div>
            <h2 className="font-serif text-display-lg text-white mb-6">
              Execute Your Mumbai Home{' '}
              <span className="text-sandstone-400">Intelligently</span>
            </h2>
            <p className="text-warmgray-400 mb-8">
              No society stress. No vendor chaos. No hidden costs. Just the home you envisioned.
            </p>
            <a
              href="https://wa.me/918010234802?text=Hi%20HSI,%20I'm%20interested%20in%20discussing%20my%20Mumbai%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bronze"
            >
              Discuss Your Mumbai Project
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
