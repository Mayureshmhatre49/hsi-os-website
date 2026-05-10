import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { getAlternates, breadcrumb } from '@/lib/seo'
import { JsonLd } from '@/lib/JsonLd'

const PAGE_URL = 'https://www.hsios.in/insights/designer-vs-execution-firm'

export const metadata: Metadata = {
  title: 'Interior Designer vs Execution Firm — What\'s the Difference?',
  description:
    'Most luxury home projects fail in execution, not design. A definitive guide to the difference between an interior designer and an execution firm — and why premium homeowners hire both.',
  alternates: getAlternates('/insights/designer-vs-execution-firm'),
  openGraph: {
    title: 'Interior Designer vs Execution Firm — What\'s the Difference?',
    description:
      'Why luxury home projects fail in execution, not design — and what to look for when hiring an execution partner.',
    url: PAGE_URL,
    type: 'article',
  },
}

const comparison = [
  {
    aspect: 'Primary Role',
    designer: 'Conceives the design — material palettes, layouts, lighting plans, finishes, mood.',
    execution: 'Translates approved drawings into a built reality — vendor coordination, procurement, site supervision, and quality control.',
  },
  {
    aspect: 'Deliverable',
    designer: 'GFC drawings, 3D renders, BOQ, material schedules, finish specifications.',
    execution: 'A finished home matching the GFC drawings, delivered on schedule and on budget, with documented sign-offs at every milestone.',
  },
  {
    aspect: 'On-Site Presence',
    designer: 'Periodic site visits to verify design intent. Not responsible for daily site operations.',
    execution: 'Daily on-site project management. Trade sequencing, vendor management, change-order workflow, snagging — all owned end-to-end.',
  },
  {
    aspect: 'Cost Accountability',
    designer: 'Estimates the cost of the design. Not responsible for procurement variance, vendor cost creep, or change-order spend.',
    execution: 'Owns the budget through delivery. Procurement, vendor invoicing, change orders, and final spend reconciliation are all in scope.',
  },
  {
    aspect: 'Schedule Accountability',
    designer: 'Provides indicative timelines. Schedule slippage is typically out of scope.',
    execution: 'Owns the master schedule. Critical-path management, monsoon-aware sequencing, and trade-collision prevention are all in scope.',
  },
  {
    aspect: 'When You Need Them',
    designer: 'You need a design — a vision, a palette, a spatial plan — that doesn\'t yet exist.',
    execution: 'You have an approved design and need it built precisely, with full transparency on cost, schedule, and quality.',
  },
]

const failureModes = [
  {
    title: 'The "Designer Also Executes" Trap',
    body: 'Many design firms also offer execution as an add-on service. The economics rarely work: a small studio with 4–6 designers cannot also field 15+ vendors, manage daily site operations across multiple projects, and run a procurement back-office. Execution becomes a side-of-desk activity, and quality suffers.',
  },
  {
    title: 'The "General Contractor" Gap',
    body: 'A general contractor knows how to build, but rarely how to interpret a luxury design intent. They optimise for what\'s easiest to construct, not what\'s most faithful to the design. Result: substituted materials, simplified joinery details, lost design nuance — visible only at handover.',
  },
  {
    title: 'The Coordination Vacuum',
    body: 'Without a dedicated execution partner, the homeowner becomes the de-facto project manager. Coordinating between architect, designer, civil contractor, electrician, plumber, HVAC engineer, automation specialist, and finishing trades — a full-time job that consumes weekends, evenings, and mental bandwidth for 8–18 months.',
  },
  {
    title: 'The Documentation Black Hole',
    body: 'When execution is informal, decisions are lost. Did you approve the granite upgrade? Was the imported tap variant signed off? When the handover punch list arrives, half the items have no clear paper trail. An execution firm closes this gap by design.',
  },
]

const whenToHireBoth = [
  'Project value above ₹50L (where execution risk dominates outcome)',
  'Multi-trade coordination required (5+ specialised vendors)',
  'Owner cannot be on site daily (NRI, primary residence elsewhere, demanding profession)',
  'Coastal, hill, or remote location with logistics complexity',
  'Design includes imported materials or custom joinery requiring procurement discipline',
  'Architect or designer is based in a different city from the project site',
]

const faqs = [
  {
    q: 'Can my interior designer also handle execution?',
    a: 'Sometimes — but it\'s rarely their strength. Design firms are optimised for creative work; execution firms are optimised for vendor coordination, procurement, and site discipline. For projects above ₹50L, hiring a dedicated execution partner usually pays for itself in cost discipline alone.',
  },
  {
    q: 'Does an execution firm replace the architect or designer?',
    a: 'No. Architects and designers create the design intent. Execution firms translate that intent into a built reality. They work in parallel — your architect retains creative direction, the execution firm owns delivery.',
  },
  {
    q: 'What does a luxury interior execution firm typically charge?',
    a: 'In India, premium execution firms typically charge 8–15% of project value, depending on scope, location, and complexity. The fee covers project management, procurement coordination, vendor management, quality control, and documentation.',
  },
  {
    q: 'How is HSIOS™ different from a typical execution firm?',
    a: 'HSIOS™ is a software-driven execution operating system, not just a project-management service. Conflict detection, live budget dashboards, milestone-locked quality gates, and digital change orders are core features — not optional add-ons. Built specifically for luxury villa and premium-home execution.',
  },
  {
    q: 'When should I bring in an execution partner — before or after design is finalised?',
    a: 'Both are common. Engaging early (during late design / GFC stage) lets the execution partner run pre-execution conflict analysis on the drawings, catching issues before site work begins. Engaging post-design works too, but you lose the early-warning benefit.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Interior Designer vs Execution Firm — What\'s the Difference?',
  description:
    'Most luxury home projects fail in execution, not design. A definitive guide to the difference between an interior designer and an execution firm.',
  url: PAGE_URL,
  author: { '@type': 'Organization', name: 'Hestia Smart Interiors', url: 'https://www.hsios.in' },
  publisher: { '@id': 'https://www.hsios.in/#organization' },
  inLanguage: 'en-IN',
  datePublished: '2026-05-10',
  dateModified: '2026-05-10',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const breadcrumbSchema = breadcrumb([
  { name: 'Home', url: 'https://www.hsios.in' },
  { name: 'Insights', url: 'https://www.hsios.in/insights' },
  { name: 'Designer vs Execution Firm', url: PAGE_URL },
])

export default async function DesignerVsExecutionFirmPage() {
  return (
    <>
      <JsonLd data={[articleSchema, faqSchema, breadcrumbSchema]} />

      {/* ── HERO ── */}
      <section className="section-py bg-charcoal-800 pt-40">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll>
            <nav aria-label="Breadcrumb" className="mb-6 text-xs text-warmgray-400">
              <Link href="/insights" className="text-sandstone-300 hover:text-white">Insights</Link>
              <span className="mx-2 text-warmgray-500">/</span>
              <span className="text-warmgray-300">Designer vs Execution Firm</span>
            </nav>
            <div className="section-label text-sandstone-400">Pillar Guide · Hiring Decisions</div>
            <h1 className="font-serif text-display-xl text-white mt-3 mb-7 leading-[1.05]">
              Interior Designer vs Execution Firm.<br />
              <em className="not-italic text-sandstone-300">What&apos;s the Difference?</em>
            </h1>
            <p className="text-xl text-warmgray-300 leading-relaxed">
              Most luxury home projects fail not in design — but in the gap between what was drawn and
              what was built. This is a working guide to the difference between an interior designer
              and an execution firm, when you need each, and why premium homeowners hire both.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── INTRO BODY ── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll>
            <div className="space-y-6 text-lg text-warmgray-700 leading-relaxed">
              <p>
                The traditional Indian luxury-home model conflates two distinct roles. The <strong>interior designer</strong>
                {' '}— a creative professional who conceives the spatial intent, the material palette, the
                lighting design, the finish specification — and the <strong>execution firm</strong> — an operational
                organisation that translates that creative intent into a built reality, end-to-end.
              </p>
              <p>
                When the same firm tries to do both, one of the two suffers. Usually execution. The
                creative work attracts the partners; the execution work falls to junior staff with
                limited authority over vendors, procurement, or schedule.
              </p>
              <p>
                For projects above ₹50 Lakh — where execution risk dominates outcome — separating the
                two roles is the dominant pattern in mature international markets. India is rapidly
                catching up.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="section-py bg-white">
        <div className="container-luxury max-w-5xl">
          <RevealOnScroll>
            <div className="section-label">Side by Side</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mt-3 mb-10">
              The Two Roles, <span className="text-sandstone-600">Compared.</span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="hidden md:block rounded-3xl overflow-hidden border border-ivory-300 shadow-luxury">
              <div className="grid grid-cols-3 bg-charcoal-800 text-white">
                <div className="px-6 py-5 text-xs font-bold tracking-widest uppercase text-warmgray-400" />
                <div className="px-6 py-5 border-l border-white/10">
                  <div className="text-xs font-bold tracking-widest uppercase text-sandstone-300 mb-1">Interior Designer</div>
                  <div className="text-sm font-medium text-white/70">Creative · Design Intent</div>
                </div>
                <div className="px-6 py-5 bg-sandstone-400/15 border-l border-sandstone-400/20">
                  <div className="text-xs font-bold tracking-widest uppercase text-sandstone-300 mb-1">Execution Firm</div>
                  <div className="text-sm font-semibold text-white">Operational · Delivery</div>
                </div>
              </div>
              {comparison.map(({ aspect, designer, execution }, i) => (
                <div key={aspect} className={`grid grid-cols-3 border-b border-ivory-200 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-ivory-50'}`}>
                  <div className="px-6 py-5 text-xs font-bold tracking-widest uppercase text-warmgray-500 flex items-center">{aspect}</div>
                  <div className="px-6 py-5 border-l border-ivory-200 text-sm text-warmgray-700 leading-relaxed">{designer}</div>
                  <div className="px-6 py-5 bg-sandstone-50/60 border-l border-sandstone-100 text-sm text-charcoal-800 leading-relaxed font-medium">{execution}</div>
                </div>
              ))}
            </div>

            {/* Mobile stacked */}
            <div className="md:hidden space-y-4">
              {comparison.map(({ aspect, designer, execution }) => (
                <div key={aspect} className="rounded-2xl overflow-hidden border border-ivory-300 bg-white">
                  <div className="px-5 py-3 bg-charcoal-800">
                    <span className="text-xs font-bold tracking-widest uppercase text-sandstone-300">{aspect}</span>
                  </div>
                  <div className="grid grid-cols-1 divide-y divide-ivory-200">
                    <div className="p-4">
                      <div className="text-[10px] font-bold tracking-widest uppercase text-warmgray-500 mb-2">Designer</div>
                      <p className="text-sm text-warmgray-700 leading-relaxed">{designer}</p>
                    </div>
                    <div className="p-4 bg-sandstone-50/50">
                      <div className="text-[10px] font-bold tracking-widest uppercase text-sandstone-700 mb-2">Execution Firm</div>
                      <p className="text-sm text-charcoal-800 leading-relaxed font-medium">{execution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── FAILURE MODES ── */}
      <section className="section-py bg-ivory-200">
        <div className="container-luxury max-w-4xl">
          <RevealOnScroll className="max-w-2xl mb-12">
            <div className="section-label">When the Roles Blur</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mt-3 mb-5">
              Four Failure Modes We See <em className="not-italic text-sandstone-600">Repeatedly.</em>
            </h2>
            <p className="text-warmgray-600 text-lg leading-relaxed">
              These patterns are not theoretical. They surface in nearly every luxury home project that
              tries to compress design and execution into a single vendor or treat execution as an
              after-thought.
            </p>
          </RevealOnScroll>

          <div className="space-y-5">
            {failureModes.map(({ title, body }, i) => (
              <RevealOnScroll key={title} delay={i * 0.06}>
                <div className="flex gap-6 p-7 bg-white border border-ivory-300 rounded-2xl">
                  <div className="font-serif text-4xl font-bold text-sandstone-200 leading-none flex-shrink-0">{`0${i + 1}`}</div>
                  <div>
                    <h3 className="font-serif text-xl text-charcoal-800 mb-3">{title}</h3>
                    <p className="text-warmgray-700 leading-relaxed">{body}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHEN TO HIRE BOTH ── */}
      <section className="section-py bg-white">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll>
            <div className="section-label">A Practical Heuristic</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mt-3 mb-6">
              When You Need Both <em className="not-italic text-sandstone-600">a Designer and an Execution Firm.</em>
            </h2>
            <p className="text-warmgray-700 text-lg leading-relaxed mb-8">
              If two or more of these conditions apply to your project, bringing in a dedicated execution
              partner alongside your interior designer is almost certainly the right move:
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.08}>
            <ul className="space-y-3">
              {whenToHireBoth.map((item) => (
                <li key={item} className="flex items-start gap-4 p-4 rounded-xl bg-ivory-100 border border-ivory-300">
                  <span className="flex-shrink-0 mt-1 w-2 h-2 rounded-full bg-sandstone-400" />
                  <span className="text-warmgray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll className="text-center mb-12">
            <div className="section-label justify-center">Frequently Asked</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mt-3">Common Questions</h2>
          </RevealOnScroll>
          <div className="space-y-5">
            {faqs.map((f, i) => (
              <RevealOnScroll key={i} delay={i * 0.05}>
                <div className="p-7 bg-white border border-ivory-300 rounded-2xl">
                  <h3 className="font-serif text-lg text-charcoal-800 mb-3">{f.q}</h3>
                  <p className="text-warmgray-700 leading-relaxed">{f.a}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERNAL LINKS / RELATED ── */}
      <section className="section-py bg-white border-t border-ivory-200">
        <div className="container-luxury max-w-4xl">
          <RevealOnScroll>
            <div className="section-label">Continue Reading</div>
            <h2 className="font-serif text-display-md text-charcoal-800 mt-3 mb-10">Related Resources</h2>
          </RevealOnScroll>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { href: '/hsi-os', title: 'What is HSIOS™?', desc: 'Inside the operating system that translates design intent into precision execution.' },
              { href: '/projects/casa-frangipani', title: 'Casa Frangipani Case Study', desc: 'How HSIOS™ caught 12 conflicts pre-execution on a 6-bedroom Alibag villa.' },
              { href: '/pricing', title: 'Execution Pricing', desc: 'Transparent fee structure for HSIOS™-powered villa interior execution.' },
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
            <div className="section-label justify-center text-sandstone-400">Ready to Talk?</div>
            <h2 className="font-serif text-display-md text-white mt-3 mb-5">
              An Execution Partner for <span className="text-sandstone-300">Premium Homes.</span>
            </h2>
            <p className="text-warmgray-300 leading-relaxed mb-8">
              We work alongside your architect and designer — not in place of them. HSIOS™ owns the
              execution layer so your design intent reaches your home unchanged.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-bronze">Book Private Consultation</Link>
              <Link href="/how-it-works" className="btn btn-outline-white">See How It Works</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
