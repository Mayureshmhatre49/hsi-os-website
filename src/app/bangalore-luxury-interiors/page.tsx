import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Luxury Interiors in Bangalore — Smart Execution by HSIOS™ | Hestia Smart Interiors',
  description:
    'Premium interior execution for Bangalore villas, apartments, and tech-enabled homes. HSIOS™ handles multi-trade coordination, smart home integration, and live budget tracking — Whitefield, Koramangala, Indiranagar.',
  alternates: { canonical: 'https://www.hsios.in/bangalore-luxury-interiors' },
  openGraph: {
    title: 'Luxury Interiors in Bangalore — Smart Execution by HSIOS™',
    description: 'Modern, tech-enabled premium interior execution for Bangalore residences, powered by HSIOS™.',
    url: 'https://www.hsios.in/bangalore-luxury-interiors',
  },
}

const challenges = [
  {
    title: 'Smart Home Integration',
    desc: 'Tech wiring and conduit routing must precede civil and millwork. HSIOS™ sequences the timeline so automation integrations land cleanly — no rework, no cutting open finished walls.',
  },
  {
    title: 'Cost Control for Busy Professionals',
    desc: 'Premium material prices fluctuate. Our Budget Intelligence module tracks spend live so your ₹2 Cr. estimate doesn\'t silently become ₹3 Cr. — with full line-item visibility at every stage.',
  },
  {
    title: 'Zero Site Visit Dependence',
    desc: 'Log into HSIOS™ from your office or overseas and see daily progress photos tied to scheduled milestones. You approve changes digitally — not on a 6 pm call.',
  },
  {
    title: 'Villas, Penthouses & Apartments',
    desc: 'Luxury villas in Whitefield, penthouses in Koramangala, sky-floor apartments in Indiranagar — the execution framework adapts across Bangalore\'s premium micro-markets.',
  },
  {
    title: 'Multi-Trade Orchestration',
    desc: 'Interior designers, HVAC consultants, acoustic engineers, home automation vendors, stone installers, carpenters — all sequenced so the final product is flawless and no trade stalls waiting on another.',
  },
  {
    title: 'Digital Change Order Workflow',
    desc: 'Every upgrade, design variation, or budget deviation goes through a documented digital approval. Your decision is on record before a single rupee is committed.',
  },
]

const faqs = [
  {
    q: 'Do you execute interiors for plotted developments and independent villas?',
    a: 'Yes. We handle full shell and core interior execution for independent luxury villas — managing everything from heavy civil alterations to bespoke carpentry and final finishing across Whitefield, Sarjapur Road, and beyond.',
  },
  {
    q: 'How involved do I need to be during the execution phase?',
    a: 'As involved as you choose to be — entirely digitally. With HSIOS™, you only need to log in to approve critical design variations or budget changes. We handle the daily operational complexity so you don\'t have to step away from work.',
  },
  {
    q: 'Can HSIOS™ manage smart home wiring integration with interior finishes?',
    a: 'Yes — and this is a core strength. HSIOS™ structures the timeline so smart home conduit routing happens before civil and millwork begins, preventing the costly rework that plagues unmanaged tech integrations in Bangalore projects.',
  },
  {
    q: 'What happens if my approved budget starts escalating mid-project?',
    a: 'The HSIOS™ Budget Intelligence module tracks your live spend daily. If material costs shift or a change order is requested, you see the exact impact on your project total before any commitment is made — no surprises at handover.',
  },
  {
    q: 'Can I work with my existing interior designer while using HSIOS™ for execution?',
    a: 'Absolutely. HSIOS™ is the execution layer, not the design firm. Your designer retains full creative control. We take the approved drawings, manage procurement, and coordinate all vendor execution on the ground.',
  },
]

export default function BangaloreLuxuryInteriorsPage() {
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

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-charcoal-900" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 60% 50% at 40% 50%, #4A6FA555 0%, transparent 70%)',
          }}
        />
        <div className="container-luxury relative z-10">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <div className="section-label text-sandstone-400">Location Services · Bangalore</div>
              <h1 className="font-serif text-display-xl text-white mb-6">
                Luxury Interiors in{' '}
                <span className="text-sandstone-400">Bangalore</span>
                <br />
                Intelligent Execution. Zero Surprises.
              </h1>
              <p className="text-xl text-warmgray-300 mb-8 max-w-2xl">
                Bangalore homeowners demand more than aesthetics — they expect intelligence,
                automation, and airtight execution. HSIOS™ delivers exactly that.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/918010234802?text=Hi%20HSIOS,%20I'm%20interested%20in%20discussing%20my%20Bangalore%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-bronze"
                >
                  Start Your Bangalore Project
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
      <section className="py-24 bg-ivory-100">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="section-label">Execution Designed for Bangalore</div>
              <h2 className="font-serif text-display-lg text-charcoal-800 mt-4">
                What HSIOS™ Brings to Your Bangalore Home
              </h2>
              <p className="text-warmgray-600 mt-4 max-w-2xl mx-auto">
                Bangalore&apos;s premium residential market has its own demands. HSIOS™ is purpose-built to handle every one of them.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.map((c, i) => (
              <RevealOnScroll key={c.title} delay={i * 0.08}>
                <div className="card-warm p-8 h-full">
                  <h3 className="font-serif text-xl text-charcoal-800 mb-3">{c.title}</h3>
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
            <h2 className="font-serif text-display-md text-charcoal-800 mb-6">
              Structured Execution for Bangalore&apos;s Premium Residences
            </h2>
            <p className="text-warmgray-600 leading-relaxed mb-6">
              Bangalore&apos;s luxury residential market is unlike any other in India. Homeowners
              here are typically high-income tech professionals and senior executives — people who
              are accustomed to structured systems, data visibility, and accountable outcomes. And
              yet, the interior execution industry still runs almost entirely on WhatsApp threads,
              verbal commitments, and surprises at handover.
            </p>
            <p className="text-warmgray-600 leading-relaxed mb-6">
              A premium villa in Whitefield or a penthouse in Koramangala requires coordinating
              15+ agencies — civil contractors, electricians, plumbers, HVAC engineers, home
              automation vendors, stone installers, carpenters — all operating simultaneously
              in a space that has one chance to be right. One sequencing failure cascades into
              weeks of lost time and uncapped cost creep.
            </p>
            <p className="text-warmgray-600 leading-relaxed mb-10">
              HSIOS™ is the operating layer that eliminates this chaos. Every trade is sequenced.
              Every material is tracked. Every cost is transparent. And every decision is
              documented — so you are never chasing a message thread to confirm if you approved
              the imported stone upgrade.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h3 className="font-serif text-2xl text-charcoal-800 mb-5">
              Bangalore-Specific Capabilities
            </h3>
            <ul className="space-y-4 text-warmgray-600 leading-relaxed">
              {[
                'Smart home conduit and wiring routed before civil begins — no retroactive wall cutting',
                'Live budget dashboard with line-item tracking and digital change order approval',
                'Daily progress documentation with milestone-tied photo updates — accessible remotely',
                'Conflict detection across HVAC, civil, electrical, and joinery before site work starts',
                'Local vendor network across Whitefield, Koramangala, Indiranagar, Sarjapur Road, and Hebbal',
                'Sustainability reporting built into every project — material sourcing, waste reduction, carbon estimates',
              ].map(item => (
                <li key={item} className="flex gap-3">
                  <span className="text-sandstone-600 font-bold mt-0.5 flex-shrink-0">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <div className="mt-14 pt-10 border-t border-ivory-300">
              <h3 className="font-serif text-2xl text-charcoal-800 mb-5">
                Micro-Markets We Serve
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  'Whitefield', 'Koramangala', 'Indiranagar',
                  'Sarjapur Road', 'Hebbal', 'Jayanagar',
                  'Sadashivanagar', 'HSR Layout', 'Bannerghatta Road',
                ].map(area => (
                  <div key={area} className="flex items-center gap-2.5 text-sm text-warmgray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-sandstone-400 flex-shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-ivory-200">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll>
            <div className="text-center mb-14">
              <div className="section-label">FAQ</div>
              <h2 className="font-serif text-display-md text-charcoal-800 mt-4">
                Bangalore Interior Questions
              </h2>
            </div>
          </RevealOnScroll>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <RevealOnScroll key={i} delay={i * 0.06}>
                <div className="card-warm p-8">
                  <h3 className="font-serif text-lg text-charcoal-800 mb-3">{f.q}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{f.a}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-sandstone-400 text-center">
        <div className="container-luxury max-w-2xl">
          <RevealOnScroll>
            <div className="section-label text-white/70 mb-4">Ready to Build?</div>
            <h2 className="font-serif text-display-md text-white mb-5">
              Execute Your Bangalore Home Intelligently.
            </h2>
            <p className="text-white/80 leading-relaxed mb-8">
              Smart tech integrations. Precise finishes. Total cost clarity.
              Your Bangalore home, delivered without compromise.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/918010234802?text=Hi%20HSIOS,%20I'm%20interested%20in%20discussing%20my%20Bangalore%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-charcoal-800 hover:bg-ivory-100"
              >
                Discuss Your Bangalore Project
              </a>
              <Link href="/hsi-os" className="btn btn-outline-white">
                Explore HSIOS™
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
