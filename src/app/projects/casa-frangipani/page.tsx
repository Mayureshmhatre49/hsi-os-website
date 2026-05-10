import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { getAlternates, breadcrumb } from '@/lib/seo'
import { JsonLd } from '@/lib/JsonLd'

const PAGE_URL = 'https://www.hsios.in/projects/casa-frangipani'

export const metadata: Metadata = {
  title: 'Casa Frangipani — 6-Bedroom Villa Case Study, Alibag',
  description:
    'How HSIOS™ delivered Casa Frangipani — a 6,500 sq ft, 6-bedroom luxury villa in Alibag — three weeks ahead of schedule with 12 conflicts detected pre-execution and 100% budget adherence.',
  alternates: getAlternates('/projects/casa-frangipani'),
  openGraph: {
    title: 'Casa Frangipani — Luxury Villa Interior Case Study, Alibag',
    description:
      '6-bedroom complete-execution villa delivered on the Konkan coast — 12 pre-execution conflicts caught, 0 on-site surprises, 3 weeks early.',
    url: PAGE_URL,
    type: 'article',
    images: [
      {
        url: 'https://www.hsios.in/projects-casa-frangipani-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Casa Frangipani — Luxury villa interior in Alibag by Hestia Smart Interiors',
      },
    ],
  },
}

const stats = [
  { value: '6,500', unit: 'sq ft', label: 'Total Built-Up Area' },
  { value: '6',     unit: 'BR',     label: 'Bedrooms' },
  { value: '12',    unit: '',       label: 'Conflicts Caught Pre-Execution' },
  { value: '0',     unit: '',       label: 'On-Site Surprises' },
  { value: '100',   unit: '%',      label: 'Budget Adherence' },
  { value: '-3',    unit: 'wks',    label: 'Delivered Ahead of Schedule' },
]

const interventions = [
  {
    title: 'HVAC Routing vs False Ceiling Depth',
    body: 'Pre-execution clash analysis flagged a 60mm conflict between the master suite HVAC duct and the false ceiling. Re-routed at planning stage. Site impact: zero. Time saved on rework: 3 weeks.',
  },
  {
    title: 'Plumbing vs Kitchen Island',
    body: 'GFC review revealed the kitchen island\'s drainage stack would clash with a structural beam below. Resolved at the drawing stage with a 200mm stack relocation — preventing what would have been a complete kitchen redo.',
  },
  {
    title: 'Electrical Conduit vs Structural Beam',
    body: 'Conflict Detection Engine identified that the planned electrical conduit run for the entertainment ceiling would intersect a primary structural beam. Re-routed to a parallel chase. Avoided a full ceiling redo and ₹4L+ in rework cost.',
  },
  {
    title: 'Vendor Sequencing Across 6 Trades',
    body: 'Civil, plumbing, HVAC, electrical, carpentry, and finishing — all sequenced through HSIOS™ as a unified critical path. Zero idle time, zero trade collisions, zero "waiting on the previous guy" delays.',
  },
  {
    title: 'Real-Time Budget Dashboard',
    body: 'The owner — based 90 minutes from site in Mumbai — had live visibility into every line-item spend, every change order, and every vendor invoice. Three change requests during execution; all approved digitally before any spend occurred.',
  },
  {
    title: 'Material Procurement Discipline',
    body: 'BWP marine-grade ply, SS-304 hardware, Carrara-grade marble — all batch-procured from Mumbai via RORO ferry on a pre-planned MTO schedule. No site team idle days waiting on a missing tile or hardware lot.',
  },
]

const lessonsToOwners = [
  'Pre-execution conflict detection is the single highest-leverage activity in luxury villa execution. Twelve issues caught before the first hammer fell would have surfaced as ₹15L+ of rework otherwise.',
  'Real-time budget transparency converts an absentee NRI owner from "anxious" to "in control." The dashboard pattern eliminates the need for daily site visits.',
  'Coastal projects need marine-grade material specs at procurement, not at handover. Substitution attempts are caught at material entry, not on snag day.',
  'Three weeks ahead of schedule is the natural consequence of trade sequencing — not a stretch goal.',
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Casa Frangipani — 6-Bedroom Villa Case Study, Alibag',
  description:
    'How HSIOS™ delivered a 6,500 sq ft luxury villa interior on the Konkan coast — 12 conflicts detected pre-execution, 0 on-site surprises, 3 weeks ahead of schedule.',
  image: ['https://www.hsios.in/projects-casa-frangipani-1.jpg'],
  url: PAGE_URL,
  author: { '@type': 'Organization', name: 'Hestia Smart Interiors', url: 'https://www.hsios.in' },
  publisher: { '@id': 'https://www.hsios.in/#organization' },
  inLanguage: 'en-IN',
  about: { '@id': 'https://www.hsios.in/#business' },
}

const creativeWorkSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  '@id': `${PAGE_URL}#case-study`,
  name: 'Casa Frangipani — 6-Bedroom Luxury Villa, Alibag',
  description: 'A 6,500 sq ft luxury villa interior executed end-to-end by Hestia Smart Interiors using HSIOS™.',
  url: PAGE_URL,
  image: 'https://www.hsios.in/projects-casa-frangipani-1.jpg',
  locationCreated: {
    '@type': 'Place',
    name: 'Alibag',
    address: { '@type': 'PostalAddress', addressLocality: 'Alibag', addressRegion: 'Maharashtra', addressCountry: 'IN' },
  },
  creator: { '@id': 'https://www.hsios.in/#business' },
  about: ['Luxury Villa Interior Execution', 'Coastal Construction', 'Multi-Trade Coordination'],
}

const breadcrumbSchema = breadcrumb([
  { name: 'Home', url: 'https://www.hsios.in' },
  { name: 'Projects', url: 'https://www.hsios.in/projects' },
  { name: 'Casa Frangipani', url: PAGE_URL },
])

export default async function CasaFrangipaniPage() {
  return (
    <>
      <JsonLd data={[articleSchema, creativeWorkSchema, breadcrumbSchema]} />

      {/* ── HERO ── */}
      <section className="relative min-h-[80vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/projects-casa-frangipani-1.jpg"
            alt="Casa Frangipani — luxury 6-bedroom villa interior in Alibag, executed by Hestia Smart Interiors"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/95 via-charcoal-800/50 to-charcoal-900/15" />
        </div>
        <div className="container-luxury relative z-10">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <nav aria-label="Breadcrumb" className="mb-6 text-xs text-warmgray-300">
                <Link href="/projects" className="text-sandstone-300 hover:text-white">Projects</Link>
                <span className="mx-2 text-warmgray-500">/</span>
                <span className="text-warmgray-200">Casa Frangipani</span>
              </nav>
              <div className="section-label text-sandstone-400">Case Study · 6-Bedroom Coastal Villa</div>
              <h1 className="font-serif text-display-xl text-white mt-3 mb-6 leading-[1.05]">
                Casa Frangipani,<br />
                <em className="not-italic text-sandstone-300">Alibag.</em>
              </h1>
              <p className="text-lg sm:text-xl text-warmgray-300 max-w-2xl mb-8 leading-relaxed">
                A 6,500 sq ft luxury villa, end-to-end interior execution. Twelve conflicts caught before
                site work began. Zero surprises through handover. Three weeks ahead of schedule.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-bronze">Discuss a Similar Project</Link>
                <a
                  href="https://hestiavillas.in/case_study/casa-frangipani-rent-and-buy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-white"
                >
                  Visit Hestia Villas Listing ↗
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section className="py-12 bg-sandstone-400">
        <div className="container-luxury grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-center text-white">
          {stats.map(({ value, unit, label }) => (
            <div key={label}>
              <div className="font-serif text-3xl sm:text-4xl font-bold leading-none">
                {value}
                {unit && <span className="text-base font-medium ml-1 opacity-80">{unit}</span>}
              </div>
              <div className="text-[10px] sm:text-xs text-white/85 mt-2 uppercase tracking-wider leading-tight">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── THE BRIEF ── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury max-w-4xl">
          <RevealOnScroll>
            <div className="section-label">The Brief</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mt-3 mb-8">
              A 6,500 sq ft Coastal Villa.<br />
              <span className="text-sandstone-600">Zero Margin for Rework.</span>
            </h2>
            <div className="space-y-5 text-warmgray-700 text-lg leading-relaxed">
              <p>
                Casa Frangipani was conceived as a complete end-to-end execution project — six bedrooms,
                an open-plan kitchen-and-living core, twin terraces, an outdoor pool deck, and a service
                wing — across 6,500 sq ft on the Konkan coast at Alibag.
              </p>
              <p>
                The owner&apos;s brief was simple in intent and exacting in standard: deliver the architect&apos;s
                design intent precisely, with no on-site improvisation, no silent cost overruns, and no
                surprises at handover. Six trades. Six bedrooms. One coordinated execution layer.
              </p>
              <p>
                The owner lived 90 minutes from site in Mumbai and could not be on the project daily.
                The execution had to be auditable from a phone — and pass the scrutiny of an owner who
                expected total transparency on every rupee spent.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── INTERVENTIONS ── */}
      <section className="section-py bg-charcoal-800">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-2xl mb-14">
            <div className="section-label text-sandstone-400">HSIOS™ Interventions</div>
            <h2 className="font-serif text-display-lg text-white mt-3 mb-5">
              What Was Caught<br />
              <em className="not-italic text-sandstone-300">Before It Became a Problem.</em>
            </h2>
            <p className="text-warmgray-300 text-lg leading-relaxed">
              Six representative decisions made during pre-execution clash analysis and live trade
              sequencing — each of which would have surfaced as costly rework on a traditional project.
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {interventions.map(({ title, body }, i) => (
              <RevealOnScroll key={title} delay={i * 0.05}>
                <div className="h-full p-7 rounded-2xl bg-white/5 border border-white/8 hover:border-sandstone-400/40 transition-colors">
                  <div className="font-serif text-2xl text-sandstone-300 mb-3">{`0${i + 1}`}</div>
                  <h3 className="font-serif text-xl text-white mb-3 leading-snug">{title}</h3>
                  <p className="text-warmgray-300 text-sm leading-relaxed">{body}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMAGE GALLERY ── */}
      <section className="section-py bg-ivory-200">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-12">
            <div className="section-label">The Result</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mt-3">
              Built Exactly{' '}
              <em className="not-italic text-sandstone-600">as Designed.</em>
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RevealOnScroll>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/projects-casa-frangipani-1.jpg"
                  alt="Casa Frangipani living room — luxury villa interior in Alibag"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.08}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/projects-casa-frangipani-2.jpg"
                  alt="Casa Frangipani master bedroom — Hestia Smart Interiors"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.16}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden md:col-span-2">
                <Image
                  src="/projects-casa-frangipani-3.jpg"
                  alt="Casa Frangipani outdoor terrace and pool deck — Alibag villa"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="100vw"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── LESSONS / TAKEAWAYS ── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll>
            <div className="section-label">What This Project Taught Us</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mt-3 mb-10">
              Four Lessons That Now<br />
              <em className="not-italic text-sandstone-600">Power Every HSIOS™ Engagement.</em>
            </h2>
          </RevealOnScroll>
          <div className="space-y-6">
            {lessonsToOwners.map((lesson, i) => (
              <RevealOnScroll key={i} delay={i * 0.06}>
                <div className="flex gap-5 p-7 bg-white border border-ivory-300 rounded-2xl">
                  <div className="font-serif text-4xl font-bold text-sandstone-200 leading-none flex-shrink-0">
                    {`0${i + 1}`}
                  </div>
                  <p className="text-warmgray-700 leading-relaxed">{lesson}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS ── */}
      <section className="section-py bg-white border-t border-ivory-200">
        <div className="container-luxury max-w-4xl">
          <RevealOnScroll>
            <div className="section-label">Continue Reading</div>
            <h2 className="font-serif text-display-md text-charcoal-800 mt-3 mb-10">
              Related Resources
            </h2>
          </RevealOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                href: '/alibag-villa-interiors',
                title: 'Villa Interiors in Alibag',
                desc: 'How we approach coastal execution end-to-end — material specs, monsoon sequencing, and 7 villas of track record.',
              },
              {
                href: '/projects',
                title: 'All Case Studies',
                desc: 'Six more luxury villas delivered with the same execution discipline — from Karjat hill homes to Alibag merge projects.',
              },
              {
                href: '/insights/designer-vs-execution-firm',
                title: 'Designer vs Execution Firm',
                desc: 'Why most luxury projects fail in execution, not design — and what to look for when hiring an execution partner.',
              },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="block p-6 rounded-2xl bg-ivory-100 border border-ivory-300 hover:border-sandstone-400 transition-colors"
              >
                <h3 className="font-serif text-lg text-charcoal-800 mb-2">{c.title}</h3>
                <p className="text-sm text-warmgray-600 leading-relaxed mb-3">{c.desc}</p>
                <span className="text-xs font-semibold uppercase tracking-wide text-sandstone-600">Read →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-py bg-charcoal-800 text-center">
        <div className="container-luxury max-w-2xl">
          <RevealOnScroll>
            <div className="section-label justify-center text-sandstone-400">Your Project, Next.</div>
            <h2 className="font-serif text-display-md text-white mt-3 mb-5">
              Bring this Standard to <span className="text-sandstone-300">Your Villa.</span>
            </h2>
            <p className="text-warmgray-300 leading-relaxed mb-8">
              We&apos;re currently accepting three new engagements this quarter. Premium villa, ₹50 Lakh+ project value.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-bronze">Book Private Consultation</Link>
              <Link href="/hsi-os" className="btn btn-outline-white">Explore HSIOS™</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
