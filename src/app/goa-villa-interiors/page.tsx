import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Goa Villa Interiors — Luxury Holiday Home Execution by Hestia Smart Interiors',
  description:
    'Premium villa interior execution in Goa. HSI OS brings transparent project management, real-time cost tracking and precise timelines to luxury holiday homes — managed remotely.',
  alternates: { canonical: 'https://www.hsios.in/goa-villa-interiors' },
  openGraph: {
    title: 'Goa Villa Interiors — Hestia Smart Interiors',
    description: 'Luxury Goa villa execution with total transparency, powered by HSIOS™.',
    url: 'https://www.hsios.in/goa-villa-interiors',
  },
}

const faqs = [
  {
    q: 'How do you manage local Goa contractors?',
    a: 'Through strict, contract-bound milestones integrated into HSI OS. Payments to vendors are only released upon platform-verified completion of work, ensuring speed and accountability regardless of the local pace.',
  },
  {
    q: 'Can I track my Goa site from Dubai or London?',
    a: 'Yes — that is precisely what HSI OS was built for. As an NRI or remote owner, the dashboard acts as your digital site supervisor, providing absolute clarity on costs and progress without requiring site visits.',
  },
  {
    q: "How does Goa's monsoon affect execution timelines?",
    a: 'Our HSI OS Planning Engine builds the monsoon window directly into your master schedule. Civil works, external waterproofing and window installation are prioritised to ensure the villa is weather-tight before June rains halt exterior work.',
  },
  {
    q: 'Do you use weather-resistant materials as standard in Goa?',
    a: 'Yes. Marine-grade woodwork, anti-corrosive SS-304 hardware and premium waterproofing chemicals are mandatory specifications for every Goa project. Our procurement module verifies material grade at site entry.',
  },
]

const challenges = [
  {
    title: 'The Absentee Owner Problem',
    desc: "You shouldn't have to fly down every two weeks. HSI OS gives you daily photographic updates and live milestone tracking so you are always in control from wherever you are.",
  },
  {
    title: 'Extreme Weather Proofing',
    desc: 'Goa\'s humidity and monsoon require marine-grade woodwork and anti-corrosive hardware. Our platform ensures vendors cannot substitute cheaper materials without detection.',
  },
  {
    title: 'Logistics & Sourcing',
    desc: 'Premium finishes must be sourced from Mumbai or Bangalore. We manage the procurement pipeline so your site team is never waiting on materials.',
  },
  {
    title: 'Susegad Vendor Pace',
    desc: 'Local vendor pace is contractually bound to platform milestones. Payments release only upon verified completion — creating accountability without conflict.',
  },
  {
    title: 'Live Budget Auditing',
    desc: "Every rupee spent is audited. No lump-sum shocks. No NRI premium. Goa's holiday-home market has historically been exploited — HSI OS eliminates that entirely.",
  },
  {
    title: 'Remote Change Approvals',
    desc: 'Any design change, material upgrade or budget deviation goes through a digital approval funnel. Your signature, from abroad, before a single rupee is spent.',
  },
]

export default function GoaVillaInteriorsPage() {
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
              'radial-gradient(ellipse 60% 60% at 60% 40%, #6B955533 0%, transparent 70%)',
          }}
        />
        <div className="container-luxury relative z-10">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <div className="section-label text-sandstone-400">Location Services</div>
              <h1 className="font-serif text-display-xl text-white mb-6">
                Villa Interiors in{' '}
                <span className="text-sandstone-400">Goa</span>
                <br />
                Your Holiday Home, Executed Perfectly
              </h1>
              <p className="text-xl text-warmgray-300 mb-8 max-w-2xl">
                Executing Goa&apos;s luxury second homes with total transparency. Built for absentee
                owners who refuse to compromise on quality — powered by HSI OS.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/918010234802?text=Hi%20HSI,%20I'm%20interested%20in%20discussing%20my%20Goa%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-bronze"
                >
                  Start Your Goa Project
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
              <div className="section-label">Why Goa Execution is Different</div>
              <h2 className="font-serif text-display-lg text-charcoal-900 mt-4">
                Problems We Solve for Goa Villa Owners
              </h2>
              <p className="text-warmgray-600 mt-4 max-w-2xl mx-auto">
                Building interiors in Goa often turns into a nightmare for absentee homeowners.
                The local vendor pace, heavy monsoon restrictions and logistics bottlenecks demand
                a rigid system to produce a predictable result.
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
              Why Executing a Goa Villa is Not a Holiday
            </h2>
            <p className="text-warmgray-600 leading-relaxed mb-6">
              Goa is the dream destination for luxury holiday homes. But building interiors here
              often turns into a nightmare for absentee homeowners. The local vendor pace
              (&quot;susegad&quot;), heavy monsoon restrictions and logistical bottlenecks make
              predictable execution nearly impossible without a rigid system in place.
            </p>
            <p className="text-warmgray-600 leading-relaxed">
              HSI OS is that system. We bring military-grade structure to coastal execution —
              allowing homeowners based in Mumbai, Delhi or abroad to build in Goa without the
              anxiety of the unknown. Every rupee spent is audited. Every day of work is logged.
              Every change must pass through your digital approval funnel.
            </p>
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
                Goa Interior Questions
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
              Execute Your Goa Villa{' '}
              <span className="text-sandstone-400">Predictably</span>
            </h2>
            <p className="text-warmgray-400 mb-8">
              Build your dream holiday home without flying down every other week.
            </p>
            <a
              href="https://wa.me/918010234802?text=Hi%20HSI,%20I'm%20interested%20in%20discussing%20my%20Goa%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bronze"
            >
              Discuss Your Goa Project
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
