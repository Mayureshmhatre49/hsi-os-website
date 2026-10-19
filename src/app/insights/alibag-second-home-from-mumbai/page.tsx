import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { JsonLd } from '@/lib/JsonLd'
import { articleSchema as blogPosting, breadcrumb, getAlternates, OG_IMAGE } from '@/lib/seo'
import { FACTS } from '@/content/facts'
import { ALIBAG, MUMBAI, placeSchema } from '@/content/locations'

const SLUG = 'alibag-second-home-from-mumbai'
const PAGE_URL = `https://www.hsios.in/insights/${SLUG}`
const TITLE = 'Building an Alibag Second Home While Living in Mumbai'
const DESCRIPTION =
  'How Mumbai families plan and build an Alibag (Alibaug) villa without living on site — travel, monsoon timing, logistics, budgets and staying in control.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: getAlternates(`/insights/${SLUG}`),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: 'article',
    images: [OG_IMAGE],
  },
}

const faqs = [
  {
    q: 'How far is Alibag from Mumbai?',
    a: 'Close enough for regular weekend visits. By road, the Atal Setu (Mumbai Trans Harbour Link) has shortened the drive considerably — many owners plan on around two hours depending on traffic and where they start. In fair weather, ferries from the Gateway of India to Mandwa take around an hour, plus a short drive onward.',
  },
  {
    q: 'Can construction or interior work continue during the monsoon in Alibag?',
    a: 'External and wet works largely stop between June and September. Interior work under a sealed, waterproofed shell can continue, which is why the build should be sequenced so the structure is weather-tight before the rains.',
  },
  {
    q: 'Do I need to visit the site every week?',
    a: 'Not if the project is run properly. Plan visits around milestone gates — layout sign-off, pre-closure checks of plumbing and electrical, and pre-handover snagging — and rely on daily photo updates and digital approvals in between.',
  },
  {
    q: 'Is building in Alibag more expensive than an equivalent Mumbai project?',
    a: `Usually, yes. Marine-grade materials, transport from Mumbai and mobilising skilled trades add cost. A typical 4,000 sq ft Alibag villa interior is ${FACTS.typicalVillaInvestment} all-in, depending on finishes and scope.`,
  },
]

const checklist = [
  'Confirm the plot’s title, access road width and power and water connections before design is final.',
  'Appoint the architect and the execution partner together, so drawings are buildable from day one.',
  'Fix the monsoon deadline first: everything weather-sensitive must be sealed before June.',
  'Lock material specifications for coastal exposure — marine-grade ply, SS-304/316 hardware, proper waterproofing.',
  'Agree a visit cadence tied to milestone gates, not to whenever the contractor calls.',
  'Insist on a live budget, photo-verified progress and written approval for every change order.',
]

export default function AlibagSecondHomeFromMumbaiPage() {
  const article = blogPosting({
    slug: SLUG,
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: '2026-10-19',
    dateModified: '2026-10-19',
    about: [placeSchema(ALIBAG), placeSchema(MUMBAI)],
  })
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }

  return (
    <>
      <JsonLd data={[article, faqSchema, breadcrumb([
        { name: 'Home', url: 'https://www.hsios.in' },
        { name: 'Insights', url: 'https://www.hsios.in/insights' },
        { name: 'Alibag Second Home from Mumbai', url: PAGE_URL },
      ])]} />

      {/* ── ARTICLE HERO ── */}
      <section className="pt-40 pb-16 bg-charcoal-900">
        <div className="container-luxury max-w-3xl text-center">
          <RevealOnScroll>
            <div className="section-label text-sandstone-400 mb-4 justify-center">Guide · Mumbai to Alibag · 8 Min Read</div>
            <h1 className="font-serif text-display-xl text-white mb-6">
              Building an Alibag Second Home{' '}
              <span className="text-sandstone-400">While Living in Mumbai</span>
            </h1>
            <p className="text-xl text-warmgray-300">
              The practical playbook for Mumbai families building a villa across the harbour — what to
              plan first, when to build, and how to stay in control without living on site.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── ARTICLE CONTENT ── */}
      <article className="py-20 bg-white">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll>
            <div className="space-y-8 text-warmgray-700 leading-relaxed">
              <p className="text-xl text-warmgray-600">
                For many Mumbai families, Alibag — or Alibaug, as it is often spelt — is the obvious
                place for a second home: close enough for weekends, far enough to feel like a
                different life. Building there is a different matter. You are running a coastal site
                you can only see at weekends, with materials, trades and weather that behave nothing
                like a city apartment fit-out.
              </p>

              <h2 className="font-serif text-2xl text-charcoal-900 pt-4">Getting There: Road, Ferry and RoRo</h2>
              <p>
                Access has improved sharply. The <strong className="text-charcoal-800">Atal Setu</strong>{' '}
                (Mumbai Trans Harbour Link), opened in January 2024, connects Sewri to the mainland
                side of the harbour and has cut the drive substantially. The older road route through
                Panvel and Pen still matters for heavy deliveries.
              </p>
              <p>
                By sea, passenger ferries run from the Gateway of India to Mandwa in fair weather, and
                the RoRo service from Ferry Wharf (Bhaucha Dhakka) to Mandwa carries cars and goods.
                Passenger ferries are usually suspended through the monsoon, so plan monsoon-season
                visits by road and check schedules before you travel.
              </p>
              <p>
                For your project this matters twice: it sets how often you can realistically visit,
                and it shapes how materials reach the site.
              </p>

              <h2 className="font-serif text-2xl text-charcoal-900 pt-4">Build Backwards From the Monsoon</h2>
              <p>
                The Konkan monsoon, roughly June to September, is the single biggest scheduling
                constraint in Alibag. External works, waterproofing and anything that needs dry
                conditions must be finished — and the shell sealed — before the rains. Interior work
                can continue inside a weather-tight structure, but only if the sequencing was planned
                for it.
              </p>
              <p>
                In practice, that means fixing your monsoon deadline before anything else and working
                backwards. Our{' '}
                <Link href="/insights/alibag-timeline" className="text-bronze-700 underline underline-offset-2 hover:text-bronze-900">
                  Alibag execution timeline
                </Link>{' '}
                shows how the phases fit together.
              </p>

              <h2 className="font-serif text-2xl text-charcoal-900 pt-4">Materials and Logistics</h2>
              <p>
                Alibag has limited same-day supply for premium finishes. Most stone, hardware, joinery
                materials and equipment come from Mumbai, so procurement has to be batched against
                quantified material takeoffs rather than ordered day by day. Coastal exposure also
                changes the specification: marine-grade ply, SS-304 or 316 hardware and proper
                waterproofing are not upgrades here — they are the baseline.
              </p>

              <h2 className="font-serif text-2xl text-charcoal-900 pt-4">Budgeting Realistically</h2>
              <p>
                A Mumbai apartment cost model does not transfer to an Alibag villa. Material upgrades,
                transport and mobilising skilled trades all add cost. As a reference point, a typical
                4,000 sq ft Alibag villa interior is{' '}
                <strong className="text-charcoal-800">{FACTS.typicalVillaInvestment}</strong> all-in.
                Our{' '}
                <Link href="/insights/alibag-villa-cost" className="text-bronze-700 underline underline-offset-2 hover:text-bronze-900">
                  Alibag cost guide
                </Link>{' '}
                breaks down where the money goes.
              </p>

              <h2 className="font-serif text-2xl text-charcoal-900 pt-4">Staying in Control From Mumbai</h2>
              <p>
                The owners who struggle are the ones who rely on phone calls and occasional visits to
                find out what is happening. The ones who don&apos;t have three things: a schedule they
                can see, a budget that updates as money moves, and a rule that no change is made
                without their written approval. Visits are then planned around milestone gates —
                when there is something specific to check — rather than every weekend.
              </p>
              <p>
                This is what HSIOS™ was built for: daily photos tied to scheduled tasks, a live budget
                and digital change approvals, so a site across the harbour is as visible as one down
                the road.
              </p>

              <h2 className="font-serif text-2xl text-charcoal-900 pt-4">A Six-Point Checklist</h2>
              <ol className="list-decimal pl-6 space-y-3">
                {checklist.map((item) => <li key={item}>{item}</li>)}
              </ol>

              <h2 className="font-serif text-2xl text-charcoal-900 pt-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((f) => (
                  <div key={f.q}>
                    <h3 className="font-serif text-lg text-charcoal-900 mb-2">{f.q}</h3>
                    <p>{f.a}</p>
                  </div>
                ))}
              </div>

              <p className="text-sm text-warmgray-600 border-t border-ivory-300 pt-6">
                Travel times and ferry schedules change with traffic, weather and operator notices —
                treat the figures here as planning guidance and check current schedules before you
                travel.
              </p>
            </div>
          </RevealOnScroll>

          {/* ── IN-ARTICLE CTA ── */}
          <RevealOnScroll delay={0.1}>
            <div className="mt-16 pt-12 border-t border-sandstone-200 text-center">
              <h3 className="font-serif text-2xl text-charcoal-900 mb-3">Planning an Alibag Villa From Mumbai?</h3>
              <p className="text-warmgray-600 mb-6">
                {FACTS.villasDelivered} villas delivered in and around Alibag — talk to the team that runs them.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/alibag-villa-interiors" className="btn-bronze">
                  Alibag Villa Interiors
                </Link>
                <Link href="/contact" className="btn btn-outline-dark">
                  Book a Private Consultation
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
                  { href: '/insights/alibag-villa-guide', title: 'The Complete Guide to Alibag Villa Interiors', cat: 'Guide' },
                  { href: '/mumbai-luxury-interiors', title: 'Luxury Interiors in Mumbai', cat: 'Mumbai' },
                ].map((r) => (
                  <Link key={r.href} href={r.href} className="card-warm p-6 group block hover:shadow-luxury-md transition-shadow">
                    <div className="text-xs font-semibold tracking-wider uppercase text-bronze-600 mb-2">{r.cat}</div>
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
