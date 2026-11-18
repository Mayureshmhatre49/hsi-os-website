import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import QuickAnswer from '@/components/ui/QuickAnswer'
import AuthorByline from '@/components/ui/AuthorByline'
import { ALIBAG, placeSchema } from '@/content/locations'
import { FACTS } from '@/content/facts'
import { AUTHORS } from '@/content/authors'
import { JsonLd } from '@/lib/JsonLd'
import { OG_IMAGE, articleSchema as blogPosting, breadcrumb } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Alibag Villa Interior Timeline: Start to Finish',
  description:
    'A phase-by-phase timeline for a premium villa interior in Alibag — how long each stage takes, what happens in it, and how HSIOS™ keeps it on track.',
  alternates: { canonical: 'https://www.hsios.in/insights/alibag-timeline' },
  openGraph: {
    title: 'Alibag Villa Interior: What to Expect from Start to Finish',
    description: 'A step-by-step breakdown of how HSIOS™ manages the lifecycle of a premium luxury execution.',
    url: 'https://www.hsios.in/insights/alibag-timeline',
    type: 'article',
    images: [OG_IMAGE],
  },
}

const phases = [
  {
    num: '01',
    weeks: 'Weeks 1–2',
    title: 'Project Intake & Digital Onboarding',
    desc: 'Before a single hammer is swung, the project must exist completely in the digital realm. We intake the architect\'s Good For Construction (GFC) drawings, translate them into hundreds of trackable micro-tasks via the Project Planning Engine, generate Material Takeoffs (MTOs), and lock the initial master budget on your dashboard.',
    ownerView: 'You receive dashboard access and can see your entire project structure before execution begins.',
  },
  {
    num: '02',
    weeks: 'Weeks 3–5',
    title: 'Core and Shell Rectification',
    desc: 'Most bare-shell structures require preparatory work before premium finishes can be applied: waterproofing terraces and wet areas, core cutting for HVAC ducts, laying foundational conduits for home automation, and plaster leveling — because premium marble cannot be laid on an uneven subfloor.',
    ownerView: 'You receive photos of raw plumbing and electrical lines being pressure-tested before they are concealed.',
  },
  {
    num: '03',
    weeks: 'Weeks 6–11',
    title: 'Initial Millwork & Ceiling',
    desc: 'The skeleton of the interior is built: gypsum false ceiling framing and boarding, installation of internal door frames, primary BWP Marine Ply carcasses for wardrobes and kitchens, and the first coat of wall primer and putty to seal the environment.',
    ownerView: 'Daily progress photos show exact carcass installation progress. Any contractor attempting to swap marine ply for commercial ply is caught at the material-entry quality check.',
  },
  {
    num: '04',
    weeks: 'Weeks 12–16',
    title: 'Finishes & High-End Assembly',
    desc: 'The space finally begins to look like a home. Italian marble or premium stone is laid, cured, and mirror-polished. Veneers are applied to casework and PU/melamine spraying begins in dust-free chambers. Air conditioning final cassettes and automation panels are installed.',
    ownerView: 'If a specific imported stone jumps in price, the Cost Intelligence module sends a change approval request to your phone before procurement is authorised.',
  },
  {
    num: '05',
    weeks: 'Weeks 17–18',
    title: 'Styling, Snagging & Handover',
    desc: 'The final 5% of execution takes 20% of the effort. Deep villa cleaning. A digital snagging process — part of the 104 QA checkpoints on every project — conducted by our internal engineers. Loose furniture arrival, curtains hung, final styling complete.',
    ownerView: 'You receive the snagging report digitally. Every item is marked resolved before we schedule the handover walk-through.',
  },
]

const faqs = [
  {
    q: 'How long does a villa interior take to complete in Alibag?',
    a: `A luxury villa interior in Alibag takes ${FACTS.villaTimelineWeeks} (approximately 4.5 months) of active interior execution once the structural shell is ready and weather-tight. Custom estates above 8,000 sq ft or projects with extensive overseas procurement may require 20–24 weeks.`,
  },
  {
    q: 'Can interior execution continue in Alibag during the monsoon?',
    a: 'Yes, provided the building shell, roof, windows, and waterproofing are 100% weather-tight before June. Interior woodwork and painting can proceed under controlled moisture levels, while external wet works and civil alterations are paused.',
  },
  {
    q: 'What causes the most severe schedule slippages in Alibag builds?',
    a: 'The three main drivers of delay are uncoordinated trade clashes (MEP vs false ceiling heights), monsoon moisture ruining unsealed plaster, and delayed physical change-order approvals between absentee owners and local contractors.',
  },
  {
    q: 'How does HSIOS™ keep interior execution on schedule?',
    a: `HSIOS™ sequences 10 disciplines in a clash-free order and tracks progress through ${FACTS.qaCheckpoints} milestone quality gates. By catching conflicts digitally before site work begins, Casa Frangipani was delivered ${FACTS.casaFrangipaniOutcome}.`,
  },
]

export default async function BlogAlibagTimelinePage() {
  const author = AUTHORS['vishal-patil']
  const articleSchema = blogPosting({
    slug: 'alibag-timeline',
    headline: 'Alibag Villa Interior: What to Expect from Start to Finish',
    description: 'A detailed phase-by-phase timeline of executing a premium villa interior in Alibag.',
    datePublished: '2026-04-13',
    dateModified: '2026-11-18',
    about: [placeSchema(ALIBAG)],
    author: {
      '@type': 'Person',
      '@id': author.id,
      name: author.name,
      jobTitle: author.role,
      url: `https://www.hsios.in${author.aboutUrl}`,
    },
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

  return (
    <>
      <JsonLd data={[articleSchema, faqSchema, breadcrumb([
        { name: 'Home', url: 'https://www.hsios.in' },
        { name: 'Insights', url: 'https://www.hsios.in/insights' },
        { name: 'Alibag Villa Interior Timeline', url: 'https://www.hsios.in/insights/alibag-timeline' },
      ])]} />

      {/* ── ARTICLE HERO ── */}
      <section className="pt-40 pb-16 bg-charcoal-900">
        <div className="container-luxury max-w-3xl text-center">
          <RevealOnScroll>
            <div className="section-label text-sandstone-400 mb-4">Guide · Execution Intelligence · 6 Min Read</div>
            <h1 className="font-serif text-display-xl text-white mb-6">
              Alibag Villa Interior: What to Expect from{' '}
              <span className="text-sandstone-400">Start to Finish</span>
            </h1>
            <p className="text-xl text-warmgray-300">
              A step-by-step breakdown of how HSIOS™ manages the lifecycle of a premium luxury
              execution from blank canvas to handed-over home.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── ARTICLE CONTENT ── */}
      <article className="py-20 bg-white">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll>
            <QuickAnswer>
              A luxury villa interior in Alibag takes {FACTS.villaTimelineWeeks} (4.5 months) once the civil shell is weather-tight. The timeline spans five coordinated phases: digital onboarding (weeks 1–2), shell rectification (weeks 3–5), millwork and ceilings (weeks 6–11), finishes and marble (weeks 12–16), and snagging and handover (weeks 17–18).
            </QuickAnswer>

            <AuthorByline
              author={author}
              publishedDate="13 Apr 2026"
              modifiedDate="18 Nov 2026"
            />

            <p className="text-xl text-warmgray-600 leading-relaxed mb-10">
              A common friction point between homeowners and interior execution teams is the ambiguity
              of the timeline. &quot;When will it be ready?&quot; is a question that standard contractors
              answer with guesswork. At HSI, we answer it with data. Here is exactly how a premium
              Alibag villa interior transitions from a raw shell to a handed-over home, managed
              entirely through HSIOS™.
            </p>
          </RevealOnScroll>

          {/* Timeline Breakdown Table */}
          <RevealOnScroll delay={0.05}>
            <div className="mb-14">
              <h2 className="font-serif text-2xl text-charcoal-900 mb-4">
                How is the 18-week villa execution timeline phased?
              </h2>
              <div className="overflow-x-auto border border-ivory-300 rounded-2xl shadow-sm">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-sandstone-100/70 border-b border-ivory-300 text-charcoal-900 font-serif">
                      <th className="p-4">Phase</th>
                      <th className="p-4">Duration</th>
                      <th className="p-4">Core Site Activities</th>
                      <th className="p-4">Quality Deliverable</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-ivory-200 text-warmgray-700">
                    <tr className="hover:bg-ivory-50/50">
                      <td className="p-4 font-semibold text-charcoal-900">01. Onboarding</td>
                      <td className="p-4">Weeks 1–2</td>
                      <td className="p-4">GFC drawing intake, clash detection scan, material takeoff generation</td>
                      <td className="p-4">Digital dashboard live, baseline budget locked</td>
                    </tr>
                    <tr className="hover:bg-ivory-50/50 bg-sandstone-50/40">
                      <td className="p-4 font-semibold text-charcoal-900">02. Shell Prep</td>
                      <td className="p-4">Weeks 3–5</td>
                      <td className="p-4">Terrace waterproofing, HVAC core cutting, automation conduits, plaster leveling</td>
                      <td className="p-4">Pressure-tested plumbing, substrate leveling proof</td>
                    </tr>
                    <tr className="hover:bg-ivory-50/50">
                      <td className="p-4 font-semibold text-charcoal-900">03. Millwork & Ceilings</td>
                      <td className="p-4">Weeks 6–11</td>
                      <td className="p-4">Gypsum false ceiling framing, door frames, BWP marine ply wardrobe carcasses</td>
                      <td className="p-4">Material-entry inspection sign-off, carcass alignment check</td>
                    </tr>
                    <tr className="hover:bg-ivory-50/50 bg-sandstone-50/40">
                      <td className="p-4 font-semibold text-charcoal-900">04. Finishes</td>
                      <td className="p-4">Weeks 12–16</td>
                      <td className="p-4">Italian marble laying, veneer application, dust-free PU spray, VRV cassettes</td>
                      <td className="p-4">Marble curing checks, mirror polish sign-off</td>
                    </tr>
                    <tr className="hover:bg-ivory-50/50">
                      <td className="p-4 font-semibold text-charcoal-900">05. Handover</td>
                      <td className="p-4">Weeks 17–18</td>
                      <td className="p-4">Deep cleaning, 104 QA checkpoint digital snagging, loose furniture placement</td>
                      <td className="p-4">Zero-snag verification report, keys & Digital Twin dossier</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </RevealOnScroll>

          <div className="space-y-12">
            {phases.map((phase, i) => (
              <RevealOnScroll key={phase.num} delay={i * 0.06}>
                <div className="flex gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-charcoal-900 flex items-center justify-center">
                      <span className="font-serif text-sandstone-400 font-bold">{phase.num}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-bronze-600 mb-1 tracking-wider uppercase">
                      {phase.weeks}
                    </div>
                    <h3 className="font-serif text-2xl text-charcoal-900 mb-3">{phase.title}</h3>
                    <p className="text-warmgray-600 leading-relaxed mb-4">{phase.desc}</p>
                    <div className="bg-sandstone-50 rounded-xl p-4 border border-sandstone-200">
                      <p className="text-sm font-semibold text-charcoal-800 mb-1">Homeowner View:</p>
                      <p className="text-sm text-warmgray-600">{phase.ownerView}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* ── COMMON QUESTIONS (FAQ) ── */}
          <section className="mt-16 pt-12 border-t border-sandstone-200" aria-label="Common questions about Alibag villa interior timeline">
            <RevealOnScroll>
              <div className="section-label mb-2">Common Questions</div>
              <h2 className="font-serif text-2xl text-charcoal-900 mb-8">
                Frequently Asked Questions About Villa Timelines
              </h2>
            </RevealOnScroll>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <RevealOnScroll key={i} delay={i * 0.05}>
                  <div className="p-6 bg-ivory-100 border border-ivory-300 rounded-2xl">
                    <h3 className="font-serif text-lg text-charcoal-900 mb-2 font-semibold">{f.q}</h3>
                    <p className="text-warmgray-700 leading-relaxed text-sm sm:text-base">{f.a}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </section>

          {/* ── IN-ARTICLE CTA ── */}
          <RevealOnScroll delay={0.1}>
            <div className="mt-16 pt-12 border-t border-sandstone-200 text-center">
              <h3 className="font-serif text-2xl text-charcoal-900 mb-3">
                Want a Predictable Timeline?
              </h3>
              <p className="text-warmgray-600 mb-6">
                Traditional contractors estimate. We calculate.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://wa.me/918010234802?text=Hi%20HSI,%20I'm%20interested%20in%20discussing%20my%20Alibag%20project's%20timeline"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-bronze"
                >
                  Plan Your Execution
                </a>
                <Link href="/how-it-works" className="btn btn-outline-dark">
                  How HSIOS™ Works
                </Link>
              </div>
            </div>
          </RevealOnScroll>

          {/* ── RELATED ── */}
          <RevealOnScroll delay={0.15}>
            <div className="mt-16 pt-12 border-t border-sandstone-200">
              <h3 className="font-serif text-xl text-charcoal-900 mb-6">Continue Reading</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { href: '/insights/alibag-villa-cost', title: 'How Much Does a Villa Interior Cost in Alibag?', cat: 'Cost' },
                  { href: '/insights/alibag-challenges', title: 'Top Interior Design Challenges in Coastal Alibag Homes', cat: 'Insights' },
                ].map((r) => (
                  <Link key={r.href} href={r.href} className="card-warm p-6 group block hover:shadow-luxury-md transition-shadow">
                    <div className="section-label text-bronze-600 mb-2 text-xs">{r.cat}</div>
                    <p className="font-serif text-charcoal-900 group-hover:text-bronze-700 transition-colors">{r.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </article>
    </>
  )
}
