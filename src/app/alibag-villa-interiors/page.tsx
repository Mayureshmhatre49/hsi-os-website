import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Alibag Villa Interiors — Coastal Execution by Hestia Smart Interiors',
  description:
    'Premium villa interior execution in Alibag. HSI OS manages logistics, coastal material specs, monsoon scheduling and 15+ vendor coordination for luxury second homes.',
  alternates: { canonical: 'https://www.hsios.in/alibag-villa-interiors' },
  openGraph: {
    title: 'Alibag Villa Interiors — Coastal Execution by Hestia Smart Interiors',
    description: 'Premium villa interior execution in Alibag with total transparency powered by HSIOS™.',
    url: 'https://www.hsios.in/alibag-villa-interiors',
  },
}

const faqs = [
  {
    q: 'How do you handle material procurement for a remote location like Alibag?',
    a: "We perform strict Material Takeoffs (MTOs) from the architect's GFC drawings upfront. All premium finishes are batch-procured from Mumbai and shipped via RORO ferry, eliminating daily shortages that kill momentum on a coastal site.",
  },
  {
    q: 'Can I work with my Mumbai-based architect while using HSI for Alibag execution?',
    a: 'Absolutely. HSI is an Execution Partner, not a design firm. We plug into your existing design team, take the GFC drawings, and handle the on-ground execution while your architect retains full creative direction.',
  },
  {
    q: 'What happens if execution runs into the monsoon season?',
    a: 'The HSI OS timeline module tracks critical path dependencies daily. If your pre-monsoon weatherproofing milestone is at risk by March, you know it — allowing corrective action before the June rains force a 4-month work stoppage.',
  },
  {
    q: 'Do you use marine-grade materials as standard?',
    a: 'Yes. BWP (Boiling Water Proof) marine-grade ply for all carcasses, SS-304 hardware, and high-grade waterproofing are non-negotiable on every Alibag project. Our procurement module tracks grade compliance at entry.',
  },
]

const challenges = [
  {
    title: 'Coastal Material Intelligence',
    desc: 'Saline air, humidity, and monsoon exposure demand marine-grade ply, SS-304 hardware, and correct waterproofing chemicals — specified and verified at procurement.',
  },
  {
    title: 'Logistics & Procurement',
    desc: 'Alibag has no same-day supplier. HSI batch-ships from Mumbai via RORO, pre-planned to your MTOs, so your site team is never idle waiting on a missing tile.',
  },
  {
    title: 'Monsoon Critical Path',
    desc: 'Civil finishing and window installations must be weather-tight before June. Our timeline engine tracks this dependency daily and flags risk months in advance.',
  },
  {
    title: 'Remote Owner Visibility',
    desc: 'Daily progress photos tied to scheduled tasks, live budget tracking, and digital change approvals give you full control from Mumbai or anywhere in the world.',
  },
  {
    title: '15+ Vendor Orchestration',
    desc: 'Plumbers, electricians, HVAC, automation, carpenters — all sequenced in HSI OS so no trade breaks the work of another.',
  },
  {
    title: '7 Villas Delivered',
    desc: 'We have completed seven luxury villas in and around Alibag. That track record is your assurance that we have solved every coastal execution problem already.',
  },
]

export default function AlibagVillaInteriorsPage() {
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
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 60% 50% at 70% 50%, #C4935A33 0%, transparent 70%)',
          }}
        />
        <div className="container-luxury relative z-10">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <div className="section-label text-sandstone-400">Location Services</div>
              <h1 className="font-serif text-display-xl text-white mb-6">
                Villa Interiors in{' '}
                <span className="text-sandstone-400">Alibag</span>
                <br />
                Coastal Execution, Structured to Perfection
              </h1>
              <p className="text-xl text-warmgray-300 mb-8 max-w-2xl">
                Seven luxury villas delivered on the Konkan coast. HSI OS manages every material,
                vendor, and monsoon window so you never discover surprises after handover.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/918010234802?text=Hi%20HSI,%20I'm%20interested%20in%20discussing%20my%20Alibag%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-bronze"
                >
                  Start Your Alibag Project
                </a>
                <Link href="/contact" className="btn btn-outline-light">
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
              <div className="section-label">Why Alibag is Different</div>
              <h2 className="font-serif text-display-lg text-charcoal-900 mt-4">
                Execution Challenges We Solve
              </h2>
              <p className="text-warmgray-600 mt-4 max-w-2xl mx-auto">
                Treating Alibag like a Mumbai suburb is a recipe for budget overruns and monsoon
                disasters. We have built the systems to prevent all of them.
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
              The Standard for Alibag Villa Execution
            </h2>
            <p className="text-warmgray-600 leading-relaxed mb-6">
              Alibag is no longer just a weekend getaway — it has matured into a premier destination
              for primary and secondary luxury residences. But many homeowners face a rude awakening
              when execution begins. The gap between a stunning 3D render and the on-ground reality
              of a coastal, semi-remote site is vast.
            </p>
            <p className="text-warmgray-600 leading-relaxed mb-10">
              HSI OS bridges that gap. We translate your architect&apos;s vision into hundreds of
              trackable micro-tasks, manage material procurement from Mumbai, and sequence every trade
              so your project is weather-tight before the monsoon and delivered without surprises.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h3 className="font-serif text-2xl text-charcoal-900 mb-4">Our Alibag Process</h3>
            <div className="space-y-4 text-warmgray-600 leading-relaxed">
              <p>
                From day one, your project is mapped onto the HSI OS platform. GFC drawings are
                translated into quantified Material Takeoffs. Procurement is batch-shipped from
                Mumbai. Daily progress photos are tied to scheduled tasks, not chosen by the
                contractor. Change orders require your digital signature before any spend occurs.
              </p>
              <p>
                By the time you walk through the doors on handover day, you will have seen
                pressure-tested plumbing, verified marine-ply installation, and approved every
                single material upgrade along the way. No surprises. No NRI premium.
              </p>
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
                Alibag Execution Questions
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
              Execute Your Alibag Villa{' '}
              <span className="text-sandstone-400">Predictably</span>
            </h2>
            <p className="text-warmgray-400 mb-8">
              Join seven other families who built their dream coastal home without the anxiety.
            </p>
            <a
              href="https://wa.me/918010234802?text=Hi%20HSI,%20I'm%20interested%20in%20discussing%20my%20Alibag%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bronze"
            >
              Speak to Our Alibag Experts
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
