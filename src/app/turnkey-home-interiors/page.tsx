import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Premium Turnkey Home Interiors — HSIOS™ | Hestia Smart Interiors',
  description:
    'Premium turnkey home interior execution across India. HSIOS™ manages design coordination, procurement, multi-trade execution, and handover — one accountable partner, one finished home.',
  alternates: { canonical: 'https://www.hsios.in/turnkey-home-interiors' },
  openGraph: {
    title: 'Premium Turnkey Home Interiors — HSIOS™',
    description: 'True turnkey luxury interior execution — one partner, zero chaos, from drawings to handover.',
    url: 'https://www.hsios.in/turnkey-home-interiors',
  },
}

const included = [
  {
    title: 'Design Coordination',
    desc: 'We work directly with your architect and interior designer to digitise GFC drawings into trackable execution milestones. The design intent is preserved precisely — down to the last millimetre.',
  },
  {
    title: 'Full Procurement Management',
    desc: 'All materials — from imported stone to custom hardware to smart home equipment — are sourced, verified, and delivered on schedule. No material is substituted without your explicit digital approval.',
  },
  {
    title: 'Multi-Trade Execution',
    desc: 'Civil, MEP, HVAC, carpentry, painting, soft furnishing — all trades are managed as a unified execution project. One plan. One sequence. No trade waiting for another.',
  },
  {
    title: 'Daily Quality Supervision',
    desc: 'Your on-site supervisor logs daily progress against the master schedule. Quality gates ensure no phase proceeds until the previous one passes photographic inspection.',
  },
  {
    title: 'Budget Control',
    desc: 'Every rupee is tracked against the approved estimate in real time. Any cost variance triggers a digital change order before commitment — not after. No surprises at handover.',
  },
  {
    title: 'Snag & Handover',
    desc: 'We manage the complete snag list, defect resolution, and handover documentation. You receive a finished home with a digital project record — not a punch list you have to chase.',
  },
]

const faqs = [
  {
    q: 'What does "turnkey" mean in the context of luxury home interiors?',
    a: 'Turnkey means one partner manages everything from approved drawings to a finished, move-in-ready home — design coordination, procurement, multi-trade execution, quality control, and handover. You do not need to coordinate individual contractors or chase multiple vendors.',
  },
  {
    q: 'Do I need to hire a separate interior designer for a turnkey project?',
    a: 'You can. HSIOS™ is an execution company, not a design firm — we strongly recommend working with a designer for the aesthetic direction. We then take the designer\'s approved drawings and execute them precisely, coordinating directly with your design team throughout.',
  },
  {
    q: 'How is a premium turnkey execution different from a budget fit-out?',
    a: 'Premium turnkey execution operates at a different standard: imported materials are verified for authenticity, concealed work is photographically documented before being covered, quality gates are mandatory at every phase, and your project has dedicated supervision — not a foreman splitting attention across ten sites.',
  },
  {
    q: 'What is the typical timeline for a turnkey luxury home interior?',
    a: 'For a 3,000–5,000 sq. ft. luxury apartment or villa, a well-managed turnkey execution typically runs 5–9 months. For larger independent villas, 9–14 months. The Planning Engine builds the precise timeline for your specific project scope during the onboarding phase.',
  },
  {
    q: 'How do I stay involved without micromanaging the project?',
    a: 'Through the HSIOS™ homeowner dashboard. You see daily progress, live budget, and milestone status on your schedule. When a decision is required — a design variation, a cost change — the system surfaces it as a digital approval. You are in control without being on site.',
  },
]

export default function TurnkeyHomeInteriorsPage() {
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
        <div className="absolute inset-0">
          <Image
            src="/hestia-villa-bellissimo.jpg"
            alt="Premium turnkey home interiors by Hestia Smart Interiors"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/95 via-charcoal-800/50 to-charcoal-900/20" />
        </div>
        <div className="container-luxury relative z-10">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <div className="section-label text-sandstone-400">Turnkey Execution</div>
              <h1 className="font-serif text-display-xl text-white mb-6">
                Premium Turnkey{' '}
                <span className="text-sandstone-400">Home Interiors</span>
                <br />
                One Partner. Zero Chaos.
              </h1>
              <p className="text-xl text-warmgray-300 mb-8 max-w-2xl">
                From design coordination to final handover — HSIOS™ manages every aspect of
                your luxury home interior so you don&apos;t have to. One accountable partner.
                One finished home that matches the drawings.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/918010234802?text=Hi%20HSIOS,%20I'm%20interested%20in%20turnkey%20home%20interior%20execution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-bronze"
                >
                  Start Your Turnkey Project
                </a>
                <Link href="/contact" className="btn btn-outline-white">
                  Get a Cost Estimate
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="py-24 bg-ivory-100">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="section-label">What&apos;s Included</div>
              <h2 className="font-serif text-display-lg text-charcoal-800 mt-4">
                Everything. Managed. By One Partner.
              </h2>
              <p className="text-warmgray-600 mt-4 max-w-2xl mx-auto">
                True turnkey execution means you hand over the drawings and receive the keys.
                Everything in between is our responsibility.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {included.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 0.08}>
                <div className="card-warm p-8 h-full">
                  <h3 className="font-serif text-xl text-charcoal-800 mb-3">{item.title}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{item.desc}</p>
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
              The Problem with &quot;Turnkey&quot; in India
            </h2>
            <p className="text-warmgray-600 leading-relaxed mb-6">
              The word &quot;turnkey&quot; is used liberally in the Indian interior industry. In
              practice, it often means the contractor will try to coordinate multiple vendors
              — and the homeowner still ends up managing the chaos when vendors miss deadlines,
              materials arrive wrong, or quality falls short of spec.
            </p>
            <p className="text-warmgray-600 leading-relaxed mb-6">
              True turnkey execution requires a platform-level system behind it. Every trade
              needs a sequenced schedule. Every material needs a tracked procurement chain.
              Every milestone needs a quality gate. And every cost deviation needs a formal
              approval workflow — before the money moves.
            </p>
            <p className="text-warmgray-600 leading-relaxed mb-10">
              HSIOS™ provides exactly that. When you engage us as your turnkey execution
              partner, you are not hiring a contractor who promises to handle everything.
              You are plugging into a delivery engine that structurally guarantees transparency,
              accountability, and a finished home that matches the drawings.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="bg-sandstone-50 rounded-2xl p-8 border border-sandstone-200">
              <h3 className="font-serif text-xl text-charcoal-800 mb-4">
                Minimum Project Qualification
              </h3>
              <p className="text-warmgray-600 text-sm leading-relaxed mb-4">
                Our turnkey execution framework is designed for premium, complex projects where
                the cost of unmanaged execution is significant. We work with:
              </p>
              <ul className="space-y-2">
                {[
                  'Luxury apartments and penthouses (2,500 sq. ft.+)',
                  'Independent villas and bungalows',
                  'Holiday homes and second residences',
                  'Minimum interior execution value of ₹50 Lakhs',
                ].map(item => (
                  <li key={item} className="flex gap-3 text-sm text-warmgray-700">
                    <span className="text-sandstone-600 font-bold mt-0.5 flex-shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
                Turnkey Interior Questions
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
            <div className="section-label text-white/70 mb-4">True Turnkey</div>
            <h2 className="font-serif text-display-md text-white mb-5">
              Hand Over the Drawings. Receive the Keys.
            </h2>
            <p className="text-white/80 leading-relaxed mb-8">
              No contractor coordination. No material chasing. No budget surprises.
              Just a finished luxury home — exactly as designed.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/918010234802?text=Hi%20HSIOS,%20I'm%20interested%20in%20turnkey%20home%20interior%20execution"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-charcoal-800 hover:bg-ivory-100"
              >
                Start Your Project
              </a>
              <Link href="/hsi-os" className="btn btn-outline-white">
                How HSIOS™ Works
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
