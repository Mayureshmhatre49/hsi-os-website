import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Sustainable Luxury Interiors — HSIOS™ | Hestia Smart Interiors',
  description:
    'HSI embeds sustainability into every project — smarter materials, lower waste, and documented carbon reduction. Luxury without compromise.',
  alternates: { canonical: 'https://www.hsios.in/sustainability' },
}

const pillars = [
  {
    word: 'Refuse',
    icon: '🚫',
    title: 'Refuse Waste at Source',
    desc: 'Unnecessary materials, over-ordering, and inefficient processes are rejected before procurement approval. If it can be avoided, it is.',
    points: ['Unnecessary materials', 'Over-ordering and surplus', 'Single-use site waste', 'Inefficient trade sequencing'],
  },
  {
    word: 'Reuse',
    icon: '♻️',
    title: 'Reuse Wherever Meaningful',
    desc: 'Salvageable materials, premium fixtures, and structural elements are retained, refurbished, and reintegrated — reducing both cost and landfill contribution.',
    points: ['Salvageable site materials', 'Existing premium fixtures', 'Structural elements', 'Quality hardware and fittings'],
  },
  {
    word: 'Recycle',
    icon: '🌿',
    title: 'Recycle Responsibly',
    desc: 'Construction waste is segregated and routed to certified recyclers. Every project receives a documented waste disposal record.',
    points: ['Segregated construction waste', 'Certified recycling channels', 'Packaging waste recovery', 'Documented disposal records'],
  },
  {
    word: 'Reduce',
    icon: '📉',
    title: 'Reduce Carbon Footprint',
    desc: 'Local vendor preference and consolidated transport cycles lower the carbon cost of every project. Less waste means fewer trips, fewer emissions.',
    points: ['Local vendor preference', 'Consolidated material deliveries', 'Lower transport emissions', 'Carbon offset tracking'],
  },
]

const capabilities = [
  { icon: '🪵', title: 'Smarter Material Choices',        desc: 'Alternate low-impact materials with longer lifespans — recommended at planning stage before procurement. Lower environmental footprint, same premium outcome.' },
  { icon: '💡', title: 'Natural Light Optimisation',      desc: 'Layout planning maximises natural light penetration, reducing artificial lighting dependency and lowering long-term energy consumption.' },
  { icon: '🌬️', title: 'Ventilation and Airflow',         desc: 'Cross-ventilation strategies and better circulation planning reduce reliance on mechanical cooling — improving air quality and lowering energy use.' },
  { icon: '🚚', title: 'Optimised Material Transport',    desc: 'Consolidated procurement and local vendor preference reduce the number of deliveries, transport emissions, and carbon cost per project.' },
  { icon: '🔩', title: 'Durable Long-Life Finishes',      desc: 'Finishes and materials selected for longevity — reducing replacement cycles, renovation frequency, and lifetime waste.' },
  { icon: '📊', title: 'Sustainability Reporting',        desc: 'Every project ends with a full sustainability report — waste reduction, sourcing decisions, carbon estimates, and documented disposal records.' },
]

const myths = [
  { myth: 'Sustainability means lower quality',              truth: 'The best sustainable materials are the most durable and premium.' },
  { myth: 'Sustainable projects always cost more',           truth: 'Better planning and less waste reduces total project cost.' },
  { myth: 'You have to choose between luxury and responsibility', truth: 'HSIOS™ was built to prove they\'re not in conflict.' },
  { myth: 'It\'s just a marketing claim',                    truth: 'We track and report it — with data, not words.' },
]

export default function SustainabilityPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        className="relative py-40 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #3A3530 0%, #1C1C1E 100%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-bronze-700/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-luxury relative z-10">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <div className="section-label text-sandstone-400">Sustainability</div>
              <h1 className="font-serif text-display-xl text-white mb-4">
                Luxury Without<br />
                <em className="not-italic text-sandstone-300">Compromise.</em>
              </h1>
              <p className="font-serif text-xl text-sandstone-200 mb-6">
                Responsible execution is not a trade-off. It is the standard.
              </p>
              <p className="text-warmgray-300 text-lg leading-relaxed mb-10 max-w-2xl">
                HSIOS™ integrates sustainability into core planning — not as an expensive add-on, but as an intelligence layer that makes every project smarter, leaner, and more valuable. No cost premium. No compromise on aesthetics or functionality.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn btn-bronze">Start a Sustainable Project</Link>
                <Link href="/hsi-os" className="btn btn-outline-white">Explore HSIOS™</Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── BRAND PHILOSOPHY ──────────────────────────────── */}
      <section className="py-16 bg-sandstone-400">
        <div className="container-luxury">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 divide-x divide-white/20 text-center">
            {pillars.map(({ word, icon }) => (
              <RevealOnScroll key={word}>
                <div className="px-6 py-2">
                  <div className="text-3xl mb-2">{icon}</div>
                  <div className="font-serif text-2xl font-bold text-white">{word}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILLARS IN DETAIL ─────────────────────────────── */}
      <section className="section-py bg-charcoal-800">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-16">
            <div className="section-label text-sandstone-400">Our Framework</div>
            <h2 className="font-serif text-display-lg text-white">
              How We Build<br />
              <em className="not-italic text-sandstone-300">Responsibly.</em>
            </h2>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map(({ word, icon, title, desc, points }, i) => (
              <RevealOnScroll key={word} delay={i * 0.08}>
                <div className="p-9 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/8 hover:border-sandstone-400/30 transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="text-4xl">{icon}</div>
                    <div>
                      <div className="font-serif text-2xl font-bold text-sandstone-300">{word}</div>
                      <h3 className="font-sans font-semibold text-white text-sm mt-0.5">{title}</h3>
                    </div>
                  </div>
                  <p className="text-warmgray-400 text-sm leading-relaxed mb-5">{desc}</p>
                  <ul className="space-y-2">
                    {points.map(p => (
                      <li key={p} className="flex items-center gap-2.5 text-xs text-warmgray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-sandstone-400 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ──────────────────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-16">
            <div className="section-label">Sustainability Intelligence</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              Built Into Every{' '}
              <span className="text-sandstone-600">Project.</span>
            </h2>
            <p className="text-warmgray-600 mt-4 leading-relaxed">
              Sustainability isn&apos;t an add-on — it&apos;s embedded into the execution intelligence layer of every project.
            </p>
          </RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map(({ icon, title, desc }, i) => (
              <RevealOnScroll key={title} delay={i * 0.07}>
                <div className="card-warm p-8 h-full">
                  <div className="text-4xl mb-5">{icon}</div>
                  <h3 className="font-serif text-lg font-bold text-charcoal-800 mb-3">{title}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── MYTHS VS TRUTH ────────────────────────────────── */}
      <section className="section-py bg-ivory-200">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-xl mb-16">
            <div className="section-label">Setting the Record Straight</div>
            <h2 className="font-serif text-display-lg text-charcoal-800">
              Sustainability Myths<br />
              <span className="text-sandstone-600">We Reject.</span>
            </h2>
          </RevealOnScroll>
          <div className="space-y-4 max-w-3xl">
            {myths.map(({ myth, truth }, i) => (
              <RevealOnScroll key={myth} delay={i * 0.07}>
                <div className="grid sm:grid-cols-2 gap-6 p-7 rounded-2xl bg-white border border-ivory-300">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">✗</div>
                    <p className="text-warmgray-600 text-sm leading-relaxed italic">&ldquo;{myth}&rdquo;</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-sandstone-50 border border-sandstone-200 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm text-sandstone-600">✓</div>
                    <p className="text-warmgray-700 text-sm leading-relaxed font-medium">{truth}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATEMENT ─────────────────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #3A3530 0%, #1C1C1E 100%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bronze-700/10 rounded-full blur-3xl pointer-events-none" />
        <RevealOnScroll>
          <div className="container-luxury text-center relative z-10 max-w-3xl mx-auto">
            <div className="font-serif text-6xl text-sandstone-400/30 leading-none mb-6">&ldquo;</div>
            <p className="font-serif text-display-sm text-white leading-snug mb-6">
              Precision is the new luxury.<br />
              <em className="not-italic text-sandstone-300">And responsible precision is the future.</em>
            </p>
            <p className="text-warmgray-400 text-sm">— Nishant Mhatre, Founder · HSIOS</p>
          </div>
        </RevealOnScroll>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-24 bg-sandstone-400 text-center">
        <RevealOnScroll>
          <div className="container-luxury max-w-2xl">
            <h2 className="font-serif text-display-md text-white mb-5">
              Premium Interiors.<br />Responsible Outcomes.
            </h2>
            <p className="text-white/80 leading-relaxed mb-8">
              Every HSI project ends with a sustainability report — waste reduction, sourcing decisions, carbon estimates, and disposal records.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn bg-white text-charcoal-800 hover:bg-ivory-100">Book Private Consultation</Link>
              <Link href="/hsi-os" className="btn btn-outline-white">Explore HSIOS™</Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
