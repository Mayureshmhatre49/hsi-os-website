import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Alibag Villa Interior: What to Expect from Start to Finish — HSI OS',
  description:
    'A detailed phase-by-phase timeline of executing a premium villa interior in Alibag. Understand exactly how long it takes, what happens in each phase, and how HSI OS guarantees predictability.',
  alternates: { canonical: 'https://www.hsios.in/blog-alibag-timeline' },
  openGraph: {
    title: 'Alibag Villa Interior: What to Expect from Start to Finish',
    description: 'A step-by-step breakdown of how HSI OS manages the lifecycle of a premium luxury execution.',
    url: 'https://www.hsios.in/blog-alibag-timeline',
    type: 'article',
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
    desc: 'The final 5% of execution takes 20% of the effort. Deep villa cleaning. A 200-point digital snagging process conducted by our internal engineers. Loose furniture arrival, curtains hung, final styling complete.',
    ownerView: 'You receive the snagging report digitally. Every item is marked resolved before we schedule the handover walk-through.',
  },
]

export default function BlogAlibagTimelinePage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Alibag Villa Interior: What to Expect from Start to Finish',
    description: 'A detailed phase-by-phase timeline of executing a premium villa interior in Alibag.',
    author: { '@type': 'Organization', name: 'Hestia Smart Interiors' },
    publisher: { '@type': 'Organization', name: 'Hestia Smart Interiors', url: 'https://www.hsios.in' },
    url: 'https://www.hsios.in/blog-alibag-timeline',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

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
              A step-by-step breakdown of how HSI OS manages the lifecycle of a premium luxury
              execution from blank canvas to handed-over home.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── ARTICLE CONTENT ── */}
      <article className="py-20 bg-white">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll>
            <p className="text-xl text-warmgray-600 leading-relaxed mb-12">
              A common friction point between homeowners and interior execution teams is the ambiguity
              of the timeline. &quot;When will it be ready?&quot; is a question that standard contractors
              answer with guesswork. At HSI, we answer it with data. Here is exactly how a premium
              Alibag villa interior transitions from a raw shell to a handed-over home, managed
              entirely through HSI OS.
            </p>
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
                    <h2 className="font-serif text-2xl text-charcoal-900 mb-3">{phase.title}</h2>
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
                  How HSI OS Works
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
                  { href: '/blog-alibag-villa-guide', title: 'The Complete Guide to Villa Interior Design in Alibag', cat: 'Guide' },
                  { href: '/blog-alibag-villa-cost', title: 'How Much Does a Villa Interior Cost in Alibag?', cat: 'Cost Intelligence' },
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
