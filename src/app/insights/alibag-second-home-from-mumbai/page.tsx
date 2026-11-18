import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import QuickAnswer from '@/components/ui/QuickAnswer'
import AuthorByline from '@/components/ui/AuthorByline'
import { JsonLd } from '@/lib/JsonLd'
import { articleSchema as blogPosting, breadcrumb, getAlternates, OG_IMAGE } from '@/lib/seo'
import { FACTS } from '@/content/facts'
import { AUTHORS } from '@/content/authors'
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
  const author = AUTHORS['nishant-mhatre']
  const article = blogPosting({
    slug: SLUG,
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: '2026-10-19',
    dateModified: '2026-11-18',
    about: [placeSchema(ALIBAG), placeSchema(MUMBAI)],
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
            <QuickAnswer>
              Building an Alibag villa while living in Mumbai succeeds by planning around the late-May monsoon deadline, utilizing Ro-Ro and Atal Setu logistics pipelines, and replacing weekly weekend site commutes with milestone-linked digital governance. A typical 4,000 sq ft Alibag villa interior requires an all-in investment of {FACTS.typicalVillaInvestment} across an 18-week execution window.
            </QuickAnswer>

            <AuthorByline
              author={author}
              publishedDate="19 Oct 2026"
              modifiedDate="18 Nov 2026"
            />

            <div className="space-y-8 text-warmgray-700 leading-relaxed">
              <p className="text-xl text-warmgray-600">
                For many Mumbai families, Alibag — or Alibaug, as it is often spelt — is the obvious
                place for a second home: close enough for weekends, far enough to feel like a
                different life. Building there is a different matter. You are running a coastal site
                you can only see at weekends, with materials, trades and weather that behave nothing
                like a city apartment fit-out.
              </p>

              <h2 className="font-serif text-2xl text-charcoal-900 pt-4">
                How do Atal Setu, ferries, and Ro-Ro services connect Mumbai to Alibag?
              </h2>
              <p>
                Access has improved sharply. The <strong className="text-charcoal-800">Atal Setu</strong>{' '}
                (Mumbai Trans Harbour Link), opened in January 2024, connects Sewri to the mainland
                side of the harbour and has cut the drive substantially. The older road route through
                Panvel and Pen still matters for heavy freight deliveries.
              </p>
              <p>
                By sea, passenger speedboats and catamarans run from the Gateway of India to Mandwa in fair weather, and
                the M2M Ro-Ro ferry from Ferry Wharf (Bhaucha Dhakka) to Mandwa carries passenger cars and commercial cargo.
                Passenger ferries are usually suspended through the monsoon, so plan monsoon-season
                site visits by road.
              </p>

              {/* Transit Breakdown Table */}
              <div className="pt-4">
                <h3 className="font-serif text-xl text-charcoal-900 mb-4">
                  Mumbai to Alibag Transit Options for Owners & Cargo
                </h3>
                <div className="overflow-x-auto border border-ivory-300 rounded-2xl shadow-sm">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-sandstone-100/70 border-b border-ivory-300 text-charcoal-900 font-serif">
                        <th className="p-4">Route</th>
                        <th className="p-4">Travel Time</th>
                        <th className="p-4">Best Suited For</th>
                        <th className="p-4">Monsoon Availability</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ivory-200 text-warmgray-700">
                      <tr className="hover:bg-ivory-50/50">
                        <td className="p-4 font-semibold text-charcoal-900">Atal Setu (MTHL)</td>
                        <td className="p-4">~2 to 2.5 hours</td>
                        <td className="p-4">Personal car travel from South & Central Mumbai</td>
                        <td className="p-4">Year-round all-weather operation</td>
                      </tr>
                      <tr className="hover:bg-ivory-50/50 bg-sandstone-50/40">
                        <td className="p-4 font-semibold text-charcoal-900">M2M Ro-Ro Ferry</td>
                        <td className="p-4">~60 mins + road transfer</td>
                        <td className="p-4">Vehicles and bulk material freight shipments</td>
                        <td className="p-4">Operates with tidal/weather cautions</td>
                      </tr>
                      <tr className="hover:bg-ivory-50/50">
                        <td className="p-4 font-semibold text-charcoal-900">Gateway Catamaran</td>
                        <td className="p-4">~50 mins to Mandwa</td>
                        <td className="p-4">Quick owner passenger day visits</td>
                        <td className="p-4">Suspended June through September</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h2 className="font-serif text-2xl text-charcoal-900 pt-4">
                Why must you build backwards from the Konkan monsoon?
              </h2>
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
                shows how the 18 weeks break down when planned around weather.
              </p>

              <h2 className="font-serif text-2xl text-charcoal-900 pt-4">
                How should Mumbai owners govern an Alibag site without weekend burnout?
              </h2>
              <p>
                The instinct of most Mumbai homeowners is to drive down every Saturday morning to check
                on things. After two months of navigating highway traffic or early ferries, site visits become
                an exhausting chore. Worse, verbal site reviews lead to unrecorded decisions that cause disputes later.
              </p>
              <p>
                The solution is to anchor your site visits around defined milestone quality gates:
              </p>
              <ol className="space-y-3 list-decimal pl-5 text-warmgray-700">
                <li>Layout and civil modification sign-off before structural work starts</li>
                <li>Pre-concealment inspection of plumbing and electrical lines before walls are closed</li>
                <li>Cabinetry and millwork carcass sign-off before finishes are applied</li>
                <li>Pre-handover snag walk-through against a digital punch list</li>
              </ol>
              <p>
                Between those gates, rely on daily photo logs and digital approvals. A properly run project
                keeps you informed on your phone in Mumbai, so site visits are celebratory checkpoints rather
                than firefighting missions.
              </p>

              <h2 className="font-serif text-2xl text-charcoal-900 pt-4">Six Things to Check Before You Commit</h2>
              <p>
                Before you sign a contract or release an advance for an Alibag villa build, work through
                this checklist:
              </p>
              <ul className="space-y-3 list-none pl-0">
                {checklist.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-sandstone-600 font-bold mt-0.5 flex-shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          {/* ── COMMON QUESTIONS (FAQ) ── */}
          <section className="mt-16 pt-12 border-t border-sandstone-200" aria-label="Common questions about building an Alibag villa from Mumbai">
            <RevealOnScroll>
              <div className="section-label mb-2">Common Questions</div>
              <h2 className="font-serif text-2xl text-charcoal-900 mb-8">
                Frequently Asked Questions About Building from Mumbai
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
              <h3 className="font-serif text-2xl text-charcoal-900 mb-3">Planning an Alibag Build from Mumbai?</h3>
              <p className="text-warmgray-600 mb-6">
                Talk to our execution team about realistic schedules, coastal material specs and how to
                run the project without having to live on site.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="btn btn-bronze">
                  Book a Consultation
                </Link>
                <Link href="/alibag-villa-interiors" className="btn btn-outline-dark">
                  Our Alibag Work
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
                  { href: '/insights/alibag-villa-cost', title: 'How Much Does a Villa Interior Cost in Alibag?', cat: 'Cost Intelligence' },
                  { href: '/insights/alibag-timeline', title: 'Alibag Villa Interior: What to Expect from Start to Finish', cat: 'Execution Timeline' },
                  { href: '/insights/alibag-challenges', title: 'Top Interior Design Challenges in Coastal Alibag Homes', cat: 'Coastal Realities' },
                  { href: '/insights/designer-vs-execution-firm', title: 'Interior Designer vs Execution Firm: What is the Difference?', cat: 'Hiring Guide' },
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
