import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Luxury Interiors in Bangalore — Smart Home Execution by Hestia Smart Interiors',
  description:
    'Premium interior execution for apartments, villas and tech-enabled homes in Bangalore. HSI OS brings total transparency and structured execution to luxury projects in Whitefield, Koramangala and Indiranagar.',
  alternates: { canonical: 'https://www.hsios.in/bangalore-luxury-interiors' },
  openGraph: {
    title: 'Luxury Interiors in Bangalore — Hestia Smart Interiors',
    description: 'Modern, tech-enabled premium interior execution for Bangalore residences, powered by HSIOS™.',
    url: 'https://www.hsios.in/bangalore-luxury-interiors',
  },
}

const faqs = [
  {
    q: 'Do you execute interiors for plotted developments and independent villas?',
    a: 'Yes. We handle extensive shell and core interior execution for independent luxury villas, managing multiple trades from heavy civil alterations to detailed bespoke carpentry across Whitefield and beyond.',
  },
  {
    q: 'How involved do I need to be during the execution phase?',
    a: 'As involved as you want to be — digitally. With HSI OS, you only need to log in to approve critical design variations or budget changes. We handle the daily operational headaches so you don\'t have to step away from work.',
  },
  {
    q: 'Can HSI manage the integration of home automation with the interior finishes?',
    a: 'Yes — and this is a core strength. HSI OS structures the timeline so smart home wiring and conduit routing happens before civil and millwork begins, preventing the costly rework that plagues unmanaged tech integrations.',
  },
  {
    q: 'What happens if my budget is ₹2 Cr. but execution costs start escalating?',
    a: 'The HSI OS Cost Intelligence module tracks your live budget daily. If material costs move or a change order is requested, you see the exact impact on your project total before any commitment is made.',
  },
]

const features = [
  {
    title: 'Complex Tech Integrations',
    desc: 'Smart home wiring must precede civil and millwork. HSI OS structures the timeline so tech integrations are seamless, preventing the costly rework that plagues unmanaged Bangalore smart homes.',
  },
  {
    title: 'Cost Intelligence for Busy Professionals',
    desc: 'The cost of premium materials fluctuates. Our platform tracks live budgets so your ₹2 Cr. estimate doesn\'t silently become a ₹3 Cr. nightmare.',
  },
  {
    title: 'Total Visibility Without Site Visits',
    desc: 'You shouldn\'t have to leave the office to chase contractors. Log into HSI OS and see daily progress photos and milestones checked off in real time.',
  },
  {
    title: 'Villas, Penthouses & Apartments',
    desc: 'Luxury villas in Whitefield, sprawling penthouses in Koramangala or Indiranagar — our execution framework adapts across Bangalore\'s premium micro-markets.',
  },
  {
    title: 'Multi-Trade Orchestration',
    desc: 'Interior designers, HVAC consultants, acoustic engineers, home automation vendors, carpenters — all sequenced so the final product is flawless.',
  },
  {
    title: 'Digital Change Order Workflow',
    desc: 'Every upgrade, design change or budget deviation goes through a digital approval funnel. Your decision, documented, before the spend happens.',
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
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 60% 50% at 40% 50%, #4A6FA533 0%, transparent 70%)',
          }}
        />
        <div className="container-luxury relative z-10">
          <RevealOnScroll>
            <div className="max-w-3xl">
              <div className="section-label text-sandstone-400">Location Services</div>
              <h1 className="font-serif text-display-xl text-white mb-6">
                Luxury Interiors in{' '}
                <span className="text-sandstone-400">Bangalore</span>
                <br />
                Modern, Intelligent, Perfectly Executed
              </h1>
              <p className="text-xl text-warmgray-300 mb-8 max-w-2xl">
                Delivering Bangalore&apos;s modern, tech-enabled premium residences with total
                execution intelligence. Whitefield. Koramangala. Indiranagar. HSI OS runs the show.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/918010234802?text=Hi%20HSI,%20I'm%20interested%20in%20discussing%20my%20Bangalore%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-bronze"
                >
                  Start Your Bangalore Project
                </a>
                <Link href="/contact" className="btn btn-outline-light">
                  Get a Cost Estimate
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-24 bg-ivory-50">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="section-label">Execution Designed for Bangalore</div>
              <h2 className="font-serif text-display-lg text-charcoal-900 mt-4">
                What HSI OS Brings to Your Bangalore Home
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <RevealOnScroll key={f.title} delay={i * 0.08}>
                <div className="card-warm p-8 h-full">
                  <h3 className="font-serif text-xl text-charcoal-900 mb-3">{f.title}</h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed">{f.desc}</p>
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
              Execution Designed for Modern Bangalore Homes
            </h2>
            <p className="text-warmgray-600 leading-relaxed mb-6">
              Bangalore homebuyers demand more than just aesthetics — they expect intelligence,
              automation and precise execution. Whether building a luxury villa in Whitefield or
              outfitting a sprawling penthouse in Koramangala, integrating complex home automation
              systems with high-end millwork requires an execution layer that standard contractors
              simply cannot provide.
            </p>
            <p className="text-warmgray-600 leading-relaxed">
              HSI OS acts as the operating system for your build. We coordinate the intricate dance
              between interior designers, HVAC consultants, acoustic engineers and home automation
              vendors so the final product is flawless — and your entire investment is quantified,
              tracked and protected throughout.
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
                Bangalore Interior Questions
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
              Execute Your Bangalore Home{' '}
              <span className="text-sandstone-400">Intelligently</span>
            </h2>
            <p className="text-warmgray-400 mb-8">
              Smart tech integrations. Precise finishes. Total cost clarity. Your Bangalore home,
              delivered without compromise.
            </p>
            <a
              href="https://wa.me/918010234802?text=Hi%20HSI,%20I'm%20interested%20in%20discussing%20my%20Bangalore%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bronze"
            >
              Discuss Your Bangalore Project
            </a>
          </RevealOnScroll>
        </div>
      </section>
    </>
  )
}
