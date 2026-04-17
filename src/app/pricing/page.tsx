import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Pricing — Transparent Project Investment | HSIOS™ | Hestia Smart Interiors',
  description:
    'Understand what drives luxury interior project investment in India. HSIOS™ offers structured, transparent pricing with no hidden costs — from villa execution to premium apartment fitouts.',
  alternates: { canonical: 'https://www.hsios.in/pricing' },
}

const drivers = [
  {
    code: 'AS',
    title: 'Area & Scope',
    desc: 'The size of the project — usable square footage and the number of rooms and wet areas — is the primary cost driver. A 5,000 sq ft villa has fundamentally different execution complexity than a 1,500 sq ft apartment.',
  },
  {
    code: 'FL',
    title: 'Finish Level',
    desc: 'Material grade — imported stone vs domestic, bespoke millwork vs modular, smart home integration vs standard electrical — is the second biggest variable. The same 3,000 sq ft can cost ₹80L or ₹2.5Cr depending on finish choices.',
  },
  {
    code: 'LO',
    title: 'Location',
    desc: 'Coastal sites like Alibag carry a 15–25% material premium for weather-resistant specs. High-rise buildings in Mumbai and Bangalore add logistics and compliance costs. Goa and hill locations have their own supply chain constraints.',
  },
  {
    code: 'EC',
    title: 'Execution Complexity',
    desc: 'The number of trades, smart home integration, structural modifications, custom joinery, or two-building merges all affect execution cost. Complexity is priced — and managed — explicitly.',
  },
]

const tiers = [
  {
    type: 'Premium Apartment',
    subtitle: 'Mumbai · Bangalore · Pune',
    sqft: '1,200 – 3,500 sq ft',
    range: '₹60L – ₹2.5Cr',
    rangeNote: 'Total execution investment',
    perSqft: '₹2,500 – ₹5,500 / sq ft',
    includes: [
      'Full BOQ and execution plan',
      'HSIOS™ platform access',
      'Multi-trade vendor coordination',
      'Live budget dashboard',
      'Quality milestone inspections',
      'Snag resolution and handover pack',
    ],
    cta: 'Discuss Your Apartment',
    highlight: false,
  },
  {
    type: 'Villa & Bungalow',
    subtitle: 'Alibag · Goa · Karjat · Lonavala',
    sqft: '3,000 – 12,000 sq ft',
    range: '₹1.5Cr – ₹8Cr+',
    rangeNote: 'Total execution investment',
    perSqft: '₹3,000 – ₹8,000+ / sq ft',
    includes: [
      'Full BOQ and execution plan',
      'HSIOS™ platform access',
      'Conflict detection pre-execution',
      'Multi-trade sequencing & coordination',
      'Live budget and progress dashboard',
      'Coastal / location material planning',
      'Quality milestone inspections',
      'Sustainability report',
      'Full handover documentation package',
    ],
    cta: 'Discuss Your Villa',
    highlight: true,
  },
  {
    type: 'Developer & Multi-Unit',
    subtitle: 'Sample Flats · Clubhouses · Developments',
    sqft: 'Custom scope',
    range: 'Custom Pricing',
    rangeNote: 'Structured by unit or phase',
    perSqft: 'Discussed at engagement',
    includes: [
      'Dedicated project team',
      'Multi-phase execution planning',
      'Repeatable unit execution framework',
      'Developer-grade reporting and documentation',
      'Brand consistency across units',
      'Developer client dashboard',
    ],
    cta: 'Discuss Your Development',
    highlight: false,
  },
]

const included = [
  { code: 'BQ', title: 'Full BOQ Before Execution Starts', desc: 'A complete Bill of Quantities with material specs and vendor rates — signed off before a single site visit begins.' },
  { code: 'CD', title: 'Conflict Detection Pre-Execution', desc: 'HVAC vs ceiling, plumbing vs millwork, structural vs layout — all clashes identified and resolved before site work begins.' },
  { code: 'BD', title: 'Live Budget Dashboard', desc: 'Real-time cost tracking across every trade and line item. Every change order is logged and approved digitally before spend.' },
  { code: 'PD', title: 'Daily Progress Documentation', desc: 'Milestone-tied progress photos and daily site logs — accessible from anywhere, no site visits required.' },
  { code: 'QI', title: 'Quality Milestone Inspections', desc: 'No phase proceeds until the previous one is inspected and signed off. Every checkpoint is documented in HSIOS™.' },
  { code: 'SR', title: 'Sustainability Report', desc: 'Every project concludes with a full report — material sourcing, waste reduction, carbon estimates, and disposal records.' },
  { code: 'HD', title: 'Handover Documentation Package', desc: 'Warranty records, vendor contacts, material specs, maintenance schedules — everything compiled and handed over at project close.' },
]

const comparisons = [
  {
    point: 'Pricing visibility',
    traditional: 'Lump-sum quote with no breakdown',
    hsi: 'Line-item BOQ — every rupee accounted for before work starts',
  },
  {
    point: 'Budget changes',
    traditional: 'Discovered at handover as surprises',
    hsi: 'Every deviation flagged and approved digitally before spend',
  },
  {
    point: 'Trade conflicts',
    traditional: 'Found on-site, causing rework and delays',
    hsi: 'Detected digitally before execution begins',
  },
  {
    point: 'Progress visibility',
    traditional: 'Weekend site visits or WhatsApp updates',
    hsi: 'Live dashboard — daily photos, milestone status, cost tracking',
  },
  {
    point: 'Vendor accountability',
    traditional: 'Verbal commitments, chasing separately',
    hsi: 'All vendor commitments logged with timelines in HSIOS™',
  },
  {
    point: 'Final documentation',
    traditional: 'Rarely provided',
    hsi: 'Full handover package: warranties, specs, maintenance guide',
  },
]

const faqs = [
  {
    q: 'How does HSIOS™ charge for its services?',
    a: 'HSIOS™ charges a structured project management fee calculated on the approved execution value. This fee is fixed at engagement and covers the full management scope — from BOQ to handover documentation. The fee replaces the traditional contractor margin model, so you know exactly what management costs before any work begins.',
  },
  {
    q: 'Are the cost ranges per sq ft inclusive of everything?',
    a: 'The per sq ft benchmarks reflect total execution cost — materials plus labour across all trades. They do not include loose furniture, landscape design, or architect fees. The HSIOS™ project management fee is separate and discussed at engagement based on project scope.',
  },
  {
    q: 'What is the minimum project value HSIOS™ works with?',
    a: 'We work with projects from approximately ₹50L upward in total execution value. Below this threshold, the structured execution layer that HSIOS™ provides is difficult to deliver cost-effectively. If you are unsure where your project sits, a discovery call will help clarify scope and investment.',
  },
  {
    q: 'Can I bring my own interior designer and still use HSIOS™?',
    a: 'Yes. HSIOS™ is the execution layer, not the design firm. Your designer retains full creative control. We take approved drawings, manage procurement, coordinate all vendors, and run the execution — protecting your designer\'s intent and your budget simultaneously.',
  },
  {
    q: 'Why is the per sq ft cost higher for coastal/villa projects?',
    a: 'Coastal sites like Alibag require marine-grade plywood, SS-304 hardware, elastomeric paints, and specialist waterproofing — all carry a 15–25% material premium over standard city specs. Villa projects also tend to have more structural complexity, more trades, and more custom joinery. These factors raise the execution floor.',
  },
  {
    q: 'Is the HSIOS™ fee worth it compared to a traditional contractor?',
    a: 'The HSIOS™ management fee is typically recovered — and more — through early conflict detection alone. A single structural conflict discovered mid-execution can cost ₹5–20L in rework and 4–8 weeks of delay. Budget surprises at handover on premium projects routinely run 15–30% over the original estimate. Transparent execution does not cost more. Opaque execution does.',
  },
]

export default function PricingPage() {
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

      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        className="relative py-40 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #3A3530 0%, #1C1C1E 100%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bronze-700/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-luxury relative z-10">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <div className="section-label text-sandstone-400">Pricing</div>
              <h1 className="font-serif text-display-xl text-white mb-4">
                Transparent by Design.<br />
                <em className="not-italic text-sandstone-300">No Hidden Costs.</em>
              </h1>
              <p className="text-warmgray-300 text-lg leading-relaxed mb-10 max-w-2xl">
                Most interior projects run over budget because pricing is opaque from the start.
                HSIOS™ fixes this — with a complete BOQ before execution begins, live cost
                tracking throughout, and a fixed management fee you know before any work starts.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-bronze">Book a Pricing Call</Link>
                <Link href="/how-it-works" className="btn btn-outline-white">See How It Works</Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── WHAT DRIVES COST ──────────────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-16">
            <div className="section-label">Cost Drivers</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              What Determines Your<br />
              <span className="text-sandstone-600">Project Investment.</span>
            </h2>
            <p className="text-warmgray-600 mt-4 leading-relaxed">
              No two projects are identical. These four variables determine where your project
              sits on the investment spectrum.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {drivers.map(({ code, title, desc }, i) => (
              <RevealOnScroll key={title} delay={i * 0.07}>
                <div className="card-warm p-8 h-full">
                  <div className="w-10 h-10 rounded-lg bg-sandstone-100 border border-sandstone-200 flex items-center justify-center mb-5">
                    <span className="font-bold text-[9px] tracking-widest text-sandstone-600">{code}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-charcoal-800 mb-3">{title}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── INVESTMENT TIERS ──────────────────────────────── */}
      <section className="section-py bg-charcoal-800">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-16">
            <div className="section-label text-sandstone-400">Investment Benchmarks</div>
            <h2 className="font-serif text-display-lg text-white">
              What Projects Typically<br />
              <em className="not-italic text-sandstone-300">Invest.</em>
            </h2>
            <p className="text-warmgray-300 mt-4 leading-relaxed">
              These ranges reflect total execution investment — materials and labour across all
              trades — based on our completed project portfolio.
            </p>
          </RevealOnScroll>

          <div className="grid lg:grid-cols-3 gap-6">
            {tiers.map(({ type, subtitle, sqft, range, rangeNote, perSqft, includes, cta, highlight }, i) => (
              <RevealOnScroll key={type} delay={i * 0.08}>
                <div className={`
                  relative rounded-3xl p-8 flex flex-col h-full border transition-all duration-300
                  ${highlight
                    ? 'bg-sandstone-400 border-sandstone-300 ring-1 ring-sandstone-300/50'
                    : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20'}
                `}>
                  {highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-charcoal-800 border border-sandstone-300 text-xs font-bold tracking-widest uppercase text-sandstone-300">
                      Most Common
                    </div>
                  )}

                  <div className="mb-6">
                    <div className={`text-xs font-bold tracking-widest uppercase mb-1 ${highlight ? 'text-white/70' : 'text-sandstone-400'}`}>
                      {subtitle}
                    </div>
                    <h3 className={`font-serif text-2xl font-bold mb-1 ${highlight ? 'text-white' : 'text-white'}`}>
                      {type}
                    </h3>
                    <div className={`text-sm ${highlight ? 'text-white/70' : 'text-warmgray-400'}`}>{sqft}</div>
                  </div>

                  <div className={`rounded-2xl p-5 mb-6 ${highlight ? 'bg-white/15' : 'bg-white/5'}`}>
                    <div className={`font-serif text-3xl font-bold mb-0.5 ${highlight ? 'text-white' : 'text-sandstone-300'}`}>
                      {range}
                    </div>
                    <div className={`text-xs ${highlight ? 'text-white/60' : 'text-warmgray-500'}`}>{rangeNote}</div>
                    <div className={`text-sm font-medium mt-2 ${highlight ? 'text-white/80' : 'text-warmgray-300'}`}>
                      {perSqft}
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {includes.map(item => (
                      <li key={item} className={`flex items-start gap-2.5 text-sm ${highlight ? 'text-white/85' : 'text-warmgray-300'}`}>
                        <span className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs ${highlight ? 'bg-white/20 text-white' : 'bg-sandstone-500/20 text-sandstone-400'}`}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`btn w-full justify-center text-sm ${highlight ? 'bg-white text-charcoal-800 hover:bg-ivory-100' : 'btn-outline-white'}`}
                  >
                    {cta} →
                  </Link>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <p className="text-warmgray-500 text-xs text-center mt-8 max-w-2xl mx-auto">
              Ranges reflect total execution investment (materials + labour). Loose furniture, landscape, and architect fees are separate.
              Coastal locations carry a 15–25% material premium. The HSIOS™ project management fee is discussed at engagement.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── WHAT'S ALWAYS INCLUDED ────────────────────────── */}
      <section className="section-py bg-ivory-200">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-16">
            <div className="section-label">Every Project. Every Time.</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              What HSIOS™ Delivers<br />
              <span className="text-sandstone-600">As Standard.</span>
            </h2>
            <p className="text-warmgray-600 mt-4 leading-relaxed">
              These are not optional extras. Every HSIOS™ project — regardless of size —
              includes the full execution intelligence layer.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {included.map(({ code, title, desc }, i) => (
              <RevealOnScroll key={title} delay={i * 0.07}>
                <div className="card-warm p-8 h-full">
                  <div className="w-10 h-10 rounded-lg bg-sandstone-100 border border-sandstone-200 flex items-center justify-center mb-5">
                    <span className="font-bold text-[9px] tracking-widest text-sandstone-600">{code}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-charcoal-800 mb-3">{title}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ────────────────────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-16">
            <div className="section-label">Why It Matters</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              HSIOS™ vs a Traditional<br />
              <span className="text-sandstone-600">Contractor.</span>
            </h2>
          </RevealOnScroll>

          <div className="max-w-4xl">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 mb-3 px-6">
              <div className="text-xs font-bold tracking-widest uppercase text-warmgray-500" />
              <div className="text-xs font-bold tracking-widest uppercase text-warmgray-500 text-center">Traditional Contractor</div>
              <div className="text-xs font-bold tracking-widest uppercase text-sandstone-600 text-center">HSIOS™</div>
            </div>

            <div className="space-y-3">
              {comparisons.map(({ point, traditional, hsi }, i) => (
                <RevealOnScroll key={point} delay={i * 0.05}>
                  <div className="grid grid-cols-3 gap-4 bg-white border border-ivory-300 rounded-2xl p-6 items-start">
                    <div className="font-semibold text-sm text-charcoal-800">{point}</div>
                    <div className="flex items-start gap-2.5 text-sm text-warmgray-500">
                      <span className="w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 text-xs mt-0.5">✗</span>
                      {traditional}
                    </div>
                    <div className="flex items-start gap-2.5 text-sm text-warmgray-700 font-medium">
                      <span className="w-5 h-5 rounded-full bg-sandstone-50 border border-sandstone-200 flex items-center justify-center flex-shrink-0 text-sandstone-600 text-xs mt-0.5">✓</span>
                      {hsi}
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ───────────────────────────────────── */}
      <section className="py-20 bg-ivory-100">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll>
            <div className="card-luxury bg-white p-10 text-center">
              <div className="font-serif text-5xl text-sandstone-300 leading-none mb-6">&ldquo;</div>
              <p className="font-serif text-xl text-charcoal-800 leading-relaxed italic mb-8 max-w-2xl mx-auto">
                The HSIOS™ fee paid for itself before site work even started. One conflict they caught —
                a plumbing line running directly under the kitchen island — would have cost more to fix
                on-site than the entire management fee. That&apos;s the real value proposition.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-11 h-11 rounded-full bg-sandstone-100 flex items-center justify-center font-serif font-bold text-sandstone-700 text-sm">SM</div>
                <div className="text-left">
                  <div className="font-semibold text-charcoal-800 text-sm">Saurabh M.</div>
                  <div className="text-xs text-warmgray-500 mt-0.5">Homeowner · Alibag Villa</div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="section-py bg-charcoal-800">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll className="mb-16">
            <div className="section-label text-sandstone-400">Pricing FAQ</div>
            <h2 className="font-serif text-display-lg text-white">
              Common Pricing<br />
              <em className="not-italic text-sandstone-300">Questions.</em>
            </h2>
          </RevealOnScroll>
          <div className="space-y-5">
            {faqs.map(({ q, a }, i) => (
              <RevealOnScroll key={q} delay={i * 0.06}>
                <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
                  <h3 className="font-serif text-lg font-bold text-white mb-3">{q}</h3>
                  <p className="text-warmgray-400 text-sm leading-relaxed">{a}</p>
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
              Know Your Number Before<br />Breaking Ground.
            </h2>
            <p className="text-white/80 leading-relaxed mb-8">
              A 45-minute discovery call is all it takes to get a structured scope, a realistic
              investment range, and a clear view of what HSIOS™ delivers for your project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn bg-white text-charcoal-800 hover:bg-ivory-100">Book a Pricing Call</Link>
              <Link href="/demo" className="btn btn-outline-white">See the Platform First</Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
