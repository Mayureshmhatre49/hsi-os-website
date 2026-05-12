import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { getAlternates, breadcrumb, serviceSchema } from '@/lib/seo'
import { JsonLd } from '@/lib/JsonLd'

const PAGE_URL = 'https://www.hsios.in/for-bim-managers'

export const metadata: Metadata = {
  title: 'HSIOS™ for BIM Managers — Clash Detection, Validation & IFC Export',
  description:
    'A working clash-detection layer, a 26-rule design validation engine, and in-browser IFC4 export. HSIOS™ gives BIM Managers a single execution layer that respects the model.',
  alternates: getAlternates('/for-bim-managers'),
  openGraph: {
    title: 'HSIOS™ for BIM Managers',
    description:
      'Clash detection, 26-rule design validation, IFC4 export, and a Decision Engine that learns from your project history.',
    url: PAGE_URL,
  },
}

const capabilities = [
  {
    title: 'MEP Clash Detection',
    metric: '6 systems',
    desc: 'Parametric segment-intersection across HVAC, plumbing, electrical, structural, sprinklers, and automation. Conflicts surfaced before site work begins — not on a clash-report PDF nobody opens.',
  },
  {
    title: 'AI Design Validation',
    metric: '26 rules',
    desc: 'Material, climate, ventilation, luxury, execution categories. Rule severity tunable from the admin console. Weighted risk score 0–100 with a remediation plan attached to every CRITICAL finding.',
  },
  {
    title: 'In-Browser IFC4 Export',
    metric: '0 plugins',
    desc: 'Generates valid ISO-10303-21 IFC4 directly from the project hierarchy. No external library, no plugin, no licence wall. Round-trips into Revit and Navisworks for federated coordination.',
  },
  {
    title: '5-Mode Digital Twin',
    metric: '5 canvases',
    desc: 'Structural tree, Floor Plan with draggable rooms, 4D Timeline, Isometric stack, MEP Clash overlay. The model you build is the model the contractor executes against — not a frozen render.',
  },
  {
    title: 'Component Spatial Position',
    metric: 'X / Y / Z',
    desc: 'Every component carries spatial coordinates in the database. Drag a fixture on the Floor Plan, and the position persists. The twin matches the BOQ matches the site — by design, not by spreadsheet.',
  },
  {
    title: 'Decision Engine Learning',
    metric: '5 objectives',
    desc: 'Conflict patterns from past projects inform the next one. Cost stress, delay stress, carbon stress, pattern confidence, and learning weight all combine into a single weighted decision score with full explainability.',
  },
]

const workflow = [
  {
    step: '01',
    title: 'Import the model',
    desc: 'Upload GFC drawings or an IFC. The platform unpacks rooms, components, MEP routing, and material specifications into a queryable hierarchy.',
  },
  {
    step: '02',
    title: 'Run validation + clash detection',
    desc: 'The 26-rule engine runs deterministically across every room. MEP Clash detection scans the six systems for parametric intersections. CRITICAL findings escalate to the Gemini reasoning layer.',
  },
  {
    step: '03',
    title: 'Resolve and re-validate',
    desc: 'Each finding ships with a remediation suggestion. Re-run validation incrementally — only the touched rooms re-evaluate. Resolved findings are recorded against the project memory.',
  },
  {
    step: '04',
    title: 'Hand off to execution',
    desc: 'Sign off the model. Execution layer inherits the validated state. BOQ items inherit room context. QA checklist phases inherit the design intent. The model stays the source of truth.',
  },
]

const faqs = [
  {
    q: 'Does HSIOS™ replace Revit or Navisworks?',
    a: 'No. HSIOS™ is an execution intelligence layer that sits next to your BIM tools, not in place of them. We import IFC, run our validation and clash detection against the unpacked hierarchy, and export IFC4 back when you need to round-trip into Revit or Navisworks for federated coordination.',
  },
  {
    q: 'How is the clash detection different from Navisworks Clash Detective?',
    a: 'Navisworks runs on geometry. HSIOS™ runs on the unpacked semantic model: MEP route, room boundary, structural member, fixture position. The output is a list of decisions with cost and time impact, not 14,000 untriaged collisions. It is execution-grade clash detection, not coordination-grade.',
  },
  {
    q: 'Can I tune the design validation rules for my firm\'s standards?',
    a: 'Yes. The 26 rules ship with sensible defaults but are editable from the admin console — severity, message text, recommendation text, and active flag. Patches propagate to all projects in your tenant after a 5-minute cache TTL.',
  },
  {
    q: 'Does the IFC export include MEP routing?',
    a: 'It includes the spatial hierarchy (project → site → building → storey → space) plus components with their spatial positions. MEP routing is exported as a separate IfcPipeSegment / IfcCableSegment set, properly classified. The output validates against the IFC4 schema.',
  },
  {
    q: 'How does HSIOS™ handle versioning of the model?',
    a: 'Every Design Document gets a version field that is write-once after creation. To version a document, you create a new record — never overwrite. The Decision Engine tracks which version was active when a decision was made, so post-handover audits stay faithful to the timeline.',
  },
  {
    q: 'Is there a sandbox environment for evaluating the platform?',
    a: 'Yes. Request a demo and we will provision a tenant with sample geometry. The 26 validation rules and the clash detection engine run identically in the sandbox and in production — there is no "demo mode" with reduced fidelity.',
  },
]

const serviceData = serviceSchema({
  name: 'HSIOS™ Platform Access for BIM Managers',
  description:
    'Clash detection, design validation, IFC4 export, and Decision Engine for BIM Managers on premium interior projects.',
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
  { name: 'For BIM Managers', url: PAGE_URL },
])

export default async function ForBimManagersPage() {
  return (
    <>
      <JsonLd data={[serviceData, faqSchema, breadcrumbSchema]} />

      {/* ── HERO ── */}
      <section className="section-py bg-charcoal-800 pt-40">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll>
            <div className="section-label text-sandstone-400">For BIM Managers</div>
            <h1 className="font-serif text-display-xl text-white mt-3 mb-7 leading-[1.05]">
              The model stays the{' '}
              <em className="not-italic text-sandstone-300">source of truth.</em>
            </h1>
            <p className="text-xl text-warmgray-300 leading-relaxed mb-8">
              HSIOS™ unpacks the semantic model into a queryable hierarchy, runs deterministic
              clash detection across six MEP systems, validates against a 26-rule design engine,
              and exports valid IFC4 back into your federated coordination workflow.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/demo" className="btn btn-bronze">Request a Demo</Link>
              <Link href="/hsi-os" className="btn btn-outline-white">Platform Overview</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-2xl mb-12">
            <div className="section-label">Six BIM-Manager Capabilities</div>
            <h2 className="font-serif text-display-lg text-charcoal-800 mt-2 mb-5">
              Built for{' '}
              <em className="not-italic text-sandstone-600">model-driven execution.</em>
            </h2>
            <p className="text-warmgray-600 text-lg leading-relaxed">
              Six concrete capabilities, each shipping today. None are roadmap promises.
            </p>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map(({ title, metric, desc }, i) => (
              <RevealOnScroll key={title} delay={i * 0.05}>
                <div className="h-full p-7 rounded-2xl bg-white border border-ivory-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-[10px] font-bold tracking-[0.18em] uppercase text-sandstone-600">
                      {`Capability 0${i + 1}`}
                    </div>
                    <div className="text-xs font-semibold text-sandstone-700">{metric}</div>
                  </div>
                  <h3 className="font-serif text-xl text-charcoal-800 mb-3">{title}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKFLOW ── */}
      <section className="section-py bg-charcoal-800">
        <div className="container-luxury max-w-4xl">
          <RevealOnScroll className="max-w-2xl mb-12">
            <div className="section-label text-sandstone-400">Workflow</div>
            <h2 className="font-serif text-display-lg text-white mt-2 mb-5">
              Model → Validate → Resolve → <em className="not-italic text-sandstone-300">Execute.</em>
            </h2>
            <p className="text-warmgray-300 text-lg leading-relaxed">
              Four steps from a federated model to a validated execution-ready state.
            </p>
          </RevealOnScroll>

          <div className="space-y-5">
            {workflow.map(({ step, title, desc }) => (
              <RevealOnScroll key={step}>
                <div className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/8">
                  <div className="font-serif text-4xl font-bold text-sandstone-300 leading-none flex-shrink-0">{step}</div>
                  <div>
                    <h3 className="font-serif text-xl text-white mb-2">{title}</h3>
                    <p className="text-warmgray-300 text-sm leading-relaxed">{desc}</p>
                  </div>
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
            <h2 className="font-serif text-display-lg text-charcoal-800 mt-3">BIM-Manager Questions</h2>
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
            <div className="section-label justify-center text-sandstone-400">For Federated Teams</div>
            <h2 className="font-serif text-display-md text-white mt-3 mb-5">
              See the platform under <span className="text-sandstone-300">your model.</span>
            </h2>
            <p className="text-warmgray-300 leading-relaxed mb-8">
              We provision sandbox tenants with your sample geometry. The 26-rule engine, the clash
              detection, and the IFC export all run at full fidelity. No demo-mode reductions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/demo" className="btn btn-bronze">Request a Demo</Link>
              <Link href="/contact" className="btn btn-outline-white">Talk to Engineering</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
