import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { getAlternates, breadcrumb, serviceSchema } from '@/lib/seo'
import { JsonLd } from '@/lib/JsonLd'

const PAGE_URL = 'https://www.hsios.in/for-sustainability-experts'

export const metadata: Metadata = {
  title: 'HSIOS™ for Sustainability Experts — Carbon, IGBC & Lifecycle Scoring',
  description:
    'A 6-dimension sustainability score, HSI-internal and IGBC-equivalent benchmarking, lifecycle cost projections, and an override workflow that records every advisory decision.',
  alternates: getAlternates('/for-sustainability-experts'),
  openGraph: {
    title: 'HSIOS™ for Sustainability Experts',
    description:
      '6-dimension scoring, IGBC-equivalent benchmarking, lifecycle cost, and override workflow.',
    url: PAGE_URL,
  },
}

const dimensions = [
  { name: 'Carbon',       weight: 35, desc: 'Embodied + operational CO₂e against verified material profiles and component baselines.' },
  { name: 'Circularity',  weight: 20, desc: 'Recycled content, biodegradable origin, end-of-life recoverability score.' },
  { name: 'Energy',       weight: 15, desc: 'Operational energy intensity, automation efficiency, and grid emissions factor.' },
  { name: 'IEQ',          weight: 12, desc: 'Indoor environmental quality — VOC, formaldehyde, allergen risk, daylighting.' },
  { name: 'Water',        weight: 10, desc: 'Fixture flow rates, greywater compatibility, rainwater harvesting integration.' },
  { name: 'Durability',   weight:  8, desc: 'Expected lifecycle years, maintenance frequency, replacement-rate projection.' },
]

const capabilities = [
  {
    title: 'Per-BOQ-item Scoring',
    desc: 'Every line item gets a six-dimension score the moment it is created or updated. The pipeline is non-blocking — sustainability never gates procurement, but it always informs it.',
  },
  {
    title: 'Lifecycle Cost (30-year)',
    desc: 'Initial + maintenance × 30 + replacement × cycles. ROI and payback against a baseline material. The cheaper material is rarely the cheaper material — and now your client can see why.',
  },
  {
    title: 'Compliance Benchmarking',
    desc: 'HSI_INTERNAL benchmarks ship by default. IGBC_EQUIVALENT thresholds run alongside. Per-tenant override benchmarks supported for firms with internal certification frameworks.',
  },
  {
    title: 'Override Workflow',
    desc: 'POOR-band items route into your expert queue. You can mark NOTED, OVERRIDDEN, or APPROVED_AS_IS — each action recorded to the audit trail with your note. Advisory, never blocking.',
  },
  {
    title: 'Carbon Story Engine',
    desc: 'Translates abstract CO₂e numbers into trees absorbed, car-km avoided, flight-km avoided, and household kWh. The same narrative families understand, lenders evaluate, and auditors verify.',
  },
  {
    title: 'Project Snapshots',
    desc: 'Time-based sustainability score history. Detects degradation against the DESIGN baseline (>10pt drop triggers a learning event). Snapshots fire at handover, on PO delivery, and on demand.',
  },
]

const faqs = [
  {
    q: 'How is the 6-dimension score weighted?',
    a: 'Carbon 35%, Circularity 20%, Energy 15%, IEQ 12%, Water 10%, Durability 8%. The weights reflect both Indian climate priorities and IGBC scorecard alignment. Tenant-level override of the weighting is on the roadmap for firms with proprietary frameworks.',
  },
  {
    q: 'Is the score blocking? Can it stop a procurement?',
    a: 'No. The sustainability layer is advisory by design. POOR-band items create a SustainabilityNote and queue for expert review, but they never block BOQ approval, PO generation, or execution. The override is recorded — the procurement is not delayed.',
  },
  {
    q: 'What does "IGBC equivalent" mean in practice?',
    a: 'HSIOS™ ships a benchmark set named IGBC_EQUIVALENT alongside the HSI_INTERNAL defaults. The benchmarks mirror IGBC LEED Green Homes scorecard thresholds for the dimensions HSIOS™ measures. We do not represent the platform as IGBC-certified; we represent it as benchmarked against IGBC-equivalent thresholds — and we make the benchmark explicit in every compliance report.',
  },
  {
    q: 'How are material carbon profiles sourced?',
    a: 'The seed catalogue ships with 16 multi-dimensional material profiles covering common premium-villa materials. Each profile carries CO₂e factor, sustainability rating (A–D), origin (domestic / imported), alternatives list, source citation, and lifecycle data. Tenants can extend the catalogue with their own profiles — additions go through admin review.',
  },
  {
    q: 'Can I see the lifecycle cost calculation methodology?',
    a: 'Yes. Lifecycle cost = initialCost + (maintenanceCost × 30) + (replacementCost × replacementCycles). Each material has a documented lifecycleYears value driving replacementCycles. The formula is transparent and reproducible — and the variance against a baseline material drives the ROI projection.',
  },
  {
    q: 'What happens when a sustainability score degrades during execution?',
    a: 'Snapshots fire at key lifecycle events (BOQ change, PO delivery, execution milestones). If the score drops more than 10 points against the DESIGN-phase baseline, a SUSTAINABILITY_DEGRADED event is published — your tenant\'s sustainability leads are notified, and a learning pattern is recorded against the project so future decisions are weighted accordingly.',
  },
]

const serviceData = serviceSchema({
  name: 'HSIOS™ Platform for Sustainability Experts',
  description:
    'A 6-dimension sustainability scoring engine, IGBC-equivalent benchmarking, lifecycle cost projections, and override workflow.',
  url: PAGE_URL,
  areaServed: ['India'],
})

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
  { name: 'For Sustainability Experts', url: PAGE_URL },
])

export default async function ForSustainabilityExpertsPage() {
  return (
    <>
      <JsonLd data={[serviceData, faqSchema, breadcrumbSchema]} />

      {/* ── HERO ── */}
      <section className="section-py bg-charcoal-800 pt-40">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll>
            <div className="section-label text-sandstone-400">For Sustainability Experts</div>
            <h1 className="font-serif text-display-xl text-white mt-3 mb-7 leading-[1.05]">
              Sustainability scored across{' '}
              <em className="not-italic text-sandstone-300">six dimensions.</em>
            </h1>
            <p className="text-xl text-warmgray-300 leading-relaxed mb-8">
              Carbon. Circularity. Energy. IEQ. Water. Durability. A weighted score, IGBC-equivalent
              benchmarks, 30-year lifecycle cost, and an override workflow that records every
              advisory decision — never blocks one.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/demo" className="btn btn-bronze">Request a Demo</Link>
              <Link href="/sustainability" className="btn btn-outline-white">Sustainability Page</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── THE 6 DIMENSIONS ── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-2xl mb-12">
            <div className="section-label">The Six Dimensions</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mt-2 mb-5">
              One score.{' '}
              <em className="not-italic text-sandstone-600">Six independent inputs.</em>
            </h2>
            <p className="text-warmgray-600 text-lg leading-relaxed">
              The weighting reflects Indian climate priorities and aligns with IGBC LEED Green
              Homes scorecard thresholds.
            </p>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dimensions.map(({ name, weight, desc }, i) => (
              <RevealOnScroll key={name} delay={i * 0.04}>
                <div className="h-full p-7 rounded-2xl bg-white border border-ivory-300">
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="font-serif text-xl text-charcoal-800">{name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="font-serif text-3xl font-bold text-sandstone-700 leading-none">{weight}</span>
                      <span className="text-xs font-semibold text-warmgray-500">%</span>
                    </div>
                  </div>
                  <div className="h-1.5 rounded-full bg-ivory-200 mb-3">
                    <div
                      className="h-1.5 rounded-full bg-sandstone-400"
                      style={{ width: `${weight}%` }}
                    />
                  </div>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="section-py bg-charcoal-800">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-2xl mb-12">
            <div className="section-label text-sandstone-400">Six Expert Capabilities</div>
            <h2 className="font-serif text-display-lg text-white mt-2 mb-5">
              Tools built for{' '}
              <em className="not-italic text-sandstone-300">advisory authority.</em>
            </h2>
            <p className="text-warmgray-300 text-lg leading-relaxed">
              You don&apos;t block procurement. You inform it — with measurement that auditors trust
              and clients understand.
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map(({ title, desc }, i) => (
              <RevealOnScroll key={title} delay={i * 0.04}>
                <div className="h-full p-6 rounded-2xl bg-white/5 border border-white/8 hover:border-sandstone-400/40 transition-colors">
                  <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-sandstone-400 mb-3">
                    {`Capability 0${i + 1}`}
                  </div>
                  <h3 className="font-serif text-lg text-white mb-3 leading-snug">{title}</h3>
                  <p className="text-warmgray-300 text-xs leading-relaxed">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll className="text-center mb-12">
            <div className="section-label justify-center">Frequently Asked</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mt-3">Sustainability-Expert Questions</h2>
          </RevealOnScroll>
          <div className="space-y-5">
            {faqs.map((f, i) => (
              <RevealOnScroll key={i} delay={i * 0.04}>
                <div className="p-7 bg-white border border-ivory-300 rounded-2xl">
                  <h3 className="font-serif text-lg text-charcoal-800 mb-3">{f.q}</h3>
                  <p className="text-warmgray-700 leading-relaxed">{f.a}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-py bg-charcoal-800 text-center">
        <div className="container-luxury max-w-2xl">
          <RevealOnScroll>
            <div className="section-label justify-center text-sandstone-400">For Consulting Practices</div>
            <h2 className="font-serif text-display-md text-white mt-3 mb-5">
              Bring rigour to <span className="text-sandstone-300">every project review.</span>
            </h2>
            <p className="text-warmgray-300 leading-relaxed mb-8">
              We provision sandbox tenants for sustainability consulting firms. Bring your own
              benchmarks, your own material profiles, your own override policies. The platform
              respects your authority.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/demo" className="btn btn-bronze">Request a Demo</Link>
              <Link href="/sustainability" className="btn btn-outline-white">Sustainability Approach</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
