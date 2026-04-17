import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Luxury Interior Execution Company in India — HSIOS™ | Hestia Smart Interiors',
  description:
    'India\'s leading luxury interior execution company. HSIOS™ brings structured project management, live cost tracking, and multi-trade coordination to premium villas and residences across Mumbai, Bangalore, Pune, and Goa.',
  alternates: { canonical: 'https://www.hsios.in/luxury-interior-execution-india' },
  openGraph: {
    title: 'Luxury Interior Execution Company in India — HSIOS™',
    description: 'Structured, technology-driven luxury interior execution across India — powered by HSIOS™.',
    url: 'https://www.hsios.in/luxury-interior-execution-india',
  },
}

const differentiators = [
  {
    title: 'Execution Intelligence, Not Just Design',
    desc: 'Most interior firms stop at drawings and mood boards. HSIOS™ is the operational layer that converts your architect\'s vision into a delivered, finished home — on time, on budget, without chaos.',
  },
  {
    title: 'Pan-India Multi-Market Capability',
    desc: 'Mumbai villa, Bangalore penthouse, Goa holiday home, or Pune tech-corridor apartment — our execution framework scales across every premium Indian residential market without degradation in quality.',
  },
  {
    title: 'Live Project Dashboard',
    desc: 'Every milestone, every spend, every photo update — accessible from your phone or laptop in real time. No more chasing contractors for status calls. Your project is always transparent.',
  },
  {
    title: 'Digital Change Order Protocol',
    desc: 'Every scope change, design variation, and material upgrade flows through a structured digital approval. Nothing moves forward without your sign-off — and every decision is on permanent record.',
  },
  {
    title: 'Multi-Trade Sequencing Engine',
    desc: 'Civil, MEP, HVAC, joinery, stone, smart home — all sequenced to eliminate the bottlenecks that cause 6-month delays on Indian luxury projects. No trade waits. No rework.',
  },
  {
    title: 'Zero NRI Premium',
    desc: 'Whether you\'re in Mumbai or Mayfair, you see the same itemised costs, the same vendor invoices, the same line-by-line budget. The transparency gap that contractors exploit simply does not exist.',
  },
]

const faqs = [
  {
    q: 'What does an interior execution company do differently from a regular contractor?',
    a: 'A traditional contractor manages labour on site. An execution company like Hestia manages the entire delivery system — vendor selection, procurement, sequencing, quality control, cost tracking, and owner communication — from contract to handover. The result is a finished home, not a construction update.',
  },
  {
    q: 'Which cities does Hestia Smart Interiors operate in?',
    a: 'We execute luxury residential projects across Mumbai, Bangalore, Pune, Goa, Nashik, Lonavala, Alibag, and select NRI remote-managed builds across India. Our core strength is multi-city projects where coordination complexity is highest.',
  },
  {
    q: 'Can I work with my own interior designer while using HSIOS™?',
    a: 'Absolutely. HSIOS™ is the execution layer — your designer retains full creative control. We take GFC drawings, convert them into trackable milestones, and manage all on-ground vendors and procurement while your designer stays involved at key approvals.',
  },
  {
    q: 'What is the minimum project size you work with?',
    a: 'We focus on premium residences with a minimum interior execution value of ₹50 Lakhs. Our framework is purpose-built for projects of complexity and scale — villas, penthouses, and large luxury apartments.',
  },
  {
    q: 'How is cost transparency enforced on luxury projects?',
    a: 'The HSIOS™ Budget Intelligence module tracks every rupee in real time against the approved estimate. All vendor payments, material procurement, and cost deviations are logged digitally. You see the impact of any change order on your project total before committing.',
  },
]

export default function LuxuryInteriorExecutionIndiaPage() {
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
            src="/projects-casa-frangipani-1.jpg"
            alt="Luxury interior execution in India by Hestia Smart Interiors"
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
              <div className="section-label text-sandstone-400">National · Luxury Execution</div>
              <h1 className="font-serif text-display-xl text-white mb-6">
                India&apos;s Premium{' '}
                <span className="text-sandstone-400">Interior Execution</span>
                <br />
                Company
              </h1>
              <p className="text-xl text-warmgray-300 mb-8 max-w-2xl">
                HSIOS™ delivers structured, technology-driven execution for luxury residences across
                India — from Mumbai penthouses to Goa villas. Transparent. On time. Zero surprises.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/918010234802?text=Hi%20HSIOS,%20I'm%20interested%20in%20luxury%20interior%20execution%20for%20my%20home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-bronze"
                >
                  Discuss Your Project
                </a>
                <Link href="/contact" className="btn btn-outline-white">
                  Get a Cost Estimate
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── DIFFERENTIATORS ── */}
      <section className="py-24 bg-ivory-100">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="section-label">The HSIOS™ Standard</div>
              <h2 className="font-serif text-display-lg text-charcoal-800 mt-4">
                What Sets a True Execution Company Apart
              </h2>
              <p className="text-warmgray-600 mt-4 max-w-2xl mx-auto">
                India has thousands of interior firms. Very few have the operational infrastructure
                to deliver a ₹1 Cr.+ project without chaos. HSIOS™ is built for that standard.
              </p>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((d, i) => (
              <RevealOnScroll key={d.title} delay={i * 0.08}>
                <div className="card-warm p-8 h-full">
                  <h3 className="font-serif text-xl text-charcoal-800 mb-3">{d.title}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{d.desc}</p>
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
              Why India&apos;s Luxury Homeowners Need an Execution Partner
            </h2>
            <p className="text-warmgray-600 leading-relaxed mb-6">
              India&apos;s luxury real estate market has grown significantly — but the execution
              infrastructure has not kept pace. A ₹3 Cr. penthouse in Koramangala or a ₹5 Cr.
              villa in Alibag still gets managed the same way it did twenty years ago: through
              WhatsApp threads, verbal commitments, and a contractor who is simultaneously juggling
              five other projects.
            </p>
            <p className="text-warmgray-600 leading-relaxed mb-6">
              The result is predictable. Cost overruns of 30–40% over initial estimates. Timelines
              that extend by 6 to 12 months. Finished walls that need to be opened because the
              plumbing was routed incorrectly. Imported materials that arrive damaged. A handover
              that reveals a dozen defects the homeowner only discovers after moving in.
            </p>
            <p className="text-warmgray-600 leading-relaxed mb-10">
              HSIOS™ was built to eliminate this entirely. It is not a design firm. It is not a
              contractor. It is the execution operating system — the structured layer between your
              architect&apos;s vision and a finished home that matches it precisely, every time.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h3 className="font-serif text-2xl text-charcoal-800 mb-5">
              How HSIOS™ Runs a Luxury Project
            </h3>
            <div className="space-y-6">
              {[
                {
                  num: '01',
                  title: 'Digital Project Onboarding',
                  desc: 'GFC drawings are digitised into trackable milestones. Every trade, every material, every deliverable has an owner and a deadline — before a single worker steps on site.',
                },
                {
                  num: '02',
                  title: 'Procurement & Vendor Management',
                  desc: 'All vendor selection, material procurement, and purchase orders flow through the platform. No off-system sourcing. No undocumented payments. No material substitutions without digital approval.',
                },
                {
                  num: '03',
                  title: 'Daily Site Supervision & Reporting',
                  desc: 'Your on-site supervisor logs daily progress against scheduled tasks — with photographic evidence at every milestone. Quality gates prevent the next phase from starting until the previous one passes inspection.',
                },
                {
                  num: '04',
                  title: 'Budget Intelligence',
                  desc: 'Live spend tracking against your approved estimate. Every variance triggers a digital change order before any cost is committed. You always know your current project total.',
                },
              ].map((step, i) => (
                <RevealOnScroll key={step.num} delay={i * 0.08}>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-full bg-sandstone-100 flex items-center justify-center shrink-0">
                      <span className="font-serif text-sandstone-700 font-bold text-sm">{step.num}</span>
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-charcoal-800 mb-2">{step.title}</h4>
                      <p className="text-warmgray-600 leading-relaxed text-sm">{step.desc}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <div className="mt-14 pt-10 border-t border-ivory-300">
              <h3 className="font-serif text-2xl text-charcoal-800 mb-5">
                Markets We Serve Across India
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  'Mumbai', 'Bangalore', 'Pune',
                  'Goa', 'Alibag', 'Nashik',
                  'Lonavala', 'Hyderabad', 'Delhi NCR',
                ].map(city => (
                  <div key={city} className="flex items-center gap-2.5 text-sm text-warmgray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-sandstone-400 flex-shrink-0" />
                    {city}
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
                Luxury Execution Questions
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
            <div className="section-label text-white/70 mb-4">Ready to Execute?</div>
            <h2 className="font-serif text-display-md text-white mb-5">
              India&apos;s Finest Homes Deserve Flawless Execution.
            </h2>
            <p className="text-white/80 leading-relaxed mb-8">
              Structured delivery. Complete cost transparency. A finished home that matches
              the drawings — without the chaos that defines most luxury projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/918010234802?text=Hi%20HSIOS,%20I'm%20interested%20in%20luxury%20interior%20execution%20for%20my%20home"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-charcoal-800 hover:bg-ivory-100"
              >
                Discuss Your Project
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
