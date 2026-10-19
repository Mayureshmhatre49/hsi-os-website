import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import { JsonLd } from '@/lib/JsonLd'
import { articleSchema as blogPosting, breadcrumb, getAlternates, OG_IMAGE } from '@/lib/seo'
import { MUMBAI, placeSchema } from '@/content/locations'

const SLUG = 'mumbai-apartment-renovation-society-noc'
const PAGE_URL = `https://www.hsios.in/insights/${SLUG}`
const TITLE = 'Renovating a Mumbai Apartment: Society NOC & Rules'
const DESCRIPTION =
  'What a Mumbai housing society expects before you renovate — the NOC application, structural limits, working hours, lift use and how to plan around them.'

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
    q: 'Do I need a society NOC for interior work in my Mumbai flat?',
    a: 'For anything beyond minor repairs, almost always. Most co-operative housing societies in Maharashtra require members to obtain the managing committee’s written permission before additions or alterations, and many apply the same process to full interior fit-outs.',
  },
  {
    q: 'Can I remove a wall in my apartment?',
    a: 'Never touch columns, beams or slabs. Whether a particular wall can be altered depends on the building’s structure, so get a structural engineer’s assessment first. Structural alterations typically need the society’s approval and, where applicable, municipal permission.',
  },
  {
    q: 'What working hours do Mumbai societies usually allow?',
    a: 'It varies by building, but most restrict noisy work to set daytime hours on working days and prohibit it on Sundays and public holidays. Your society’s rules are what count — get them in writing before you schedule trades.',
  },
  {
    q: 'How long does society approval take?',
    a: 'It depends on how often the managing committee meets and how complete your application is. Build the approval window into your project plan rather than mobilising contractors before it is granted.',
  },
]

const application = [
  'A clear scope of work, with layout drawings showing what changes',
  'Contractor and labour details — many societies ask for ID copies for security',
  'The planned start and finish dates, and daily working hours',
  'An undertaking to make good any damage to common areas or neighbouring flats',
  'A refundable security deposit, if your society asks for one',
  'A plan for debris removal and material movement',
]

const checklist = [
  'Read your society’s bye-laws and renovation rules before design is final.',
  'Commission a structural assessment before planning any wall or wet-area changes.',
  'Submit a complete NOC application and wait for written approval before mobilising.',
  'Brief every contractor on working hours, lift protection and debris rules.',
  'Inform the neighbours above and below, and test waterproofing before tiling.',
  'Keep approvals, drawings and change orders documented in one place.',
]

export default function MumbaiApartmentRenovationPage() {
  const article = blogPosting({
    slug: SLUG,
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: '2026-10-19',
    dateModified: '2026-10-19',
    about: [placeSchema(MUMBAI)],
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
        { name: 'Mumbai Apartment Renovation', url: PAGE_URL },
      ])]} />

      {/* ── ARTICLE HERO ── */}
      <section className="pt-40 pb-16 bg-charcoal-900">
        <div className="container-luxury max-w-3xl text-center">
          <RevealOnScroll>
            <div className="section-label text-sandstone-400 mb-4 justify-center">Guide · Mumbai · 7 Min Read</div>
            <h1 className="font-serif text-display-xl text-white mb-6">
              Renovating a Mumbai Apartment:{' '}
              <span className="text-sandstone-400">Society NOC &amp; Rules</span>
            </h1>
            <p className="text-xl text-warmgray-300">
              Before a single tile comes up, your housing society has a say. Here is what it will
              ask for — and how to plan your renovation so approvals never stall the work.
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
                Renovating a premium apartment in Mumbai is as much a governance exercise as a design
                one. Your building has a managing committee, written rules, shared lifts and
                neighbours on every side — and each of them can stop work that was not planned for.
                Get the approvals and the building rules right first, and the rest of the project
                runs far more smoothly.
              </p>

              <h2 className="font-serif text-2xl text-charcoal-900 pt-4">Why the Society Comes First</h2>
              <p>
                Most co-operative housing societies in Maharashtra follow model bye-laws that require a
                member to obtain the managing committee&apos;s permission before making additions or
                alterations to a flat. In practice, many societies apply the same process to any
                significant interior work. Starting without written approval risks a stop-work notice,
                a forfeited deposit and a strained relationship with the people you live next to.
              </p>

              <h2 className="font-serif text-2xl text-charcoal-900 pt-4">What a Typical NOC Application Includes</h2>
              <p>Requirements vary by building, but most committees expect some version of:</p>
              <ul className="list-disc pl-6 space-y-2">
                {application.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p>
                A complete application is the fastest one. Incomplete paperwork is the most common
                reason approvals drift across committee meetings.
              </p>

              <h2 className="font-serif text-2xl text-charcoal-900 pt-4">Structural Limits</h2>
              <p>
                Columns, beams and slabs are off-limits. Before planning to remove or move any wall,
                commission a structural engineer to confirm what it does — in older South Mumbai
                buildings especially, the answer is not always obvious from the drawings. Structural
                alterations generally need the society&apos;s approval and, where applicable,
                permission from the municipal corporation.
              </p>
              <p>
                Wet areas deserve the same care. Moving a bathroom or kitchen over a neighbour&apos;s
                bedroom is often restricted, and any leak into the flat below becomes your liability.
                Waterproofing should be pressure-tested before tiling, not after.
              </p>

              <h2 className="font-serif text-2xl text-charcoal-900 pt-4">Working Hours, Lifts and Debris</h2>
              <p>
                Most buildings restrict noisy work to set daytime hours on working days and prohibit
                it on Sundays and public holidays. Expect rules on goods-lift bookings, mandatory lift
                and corridor protection, how and when materials move through the lobby, and when debris
                may leave the building. These rules decide your real schedule — a three-week task can
                take five if trades only have a few hours of permitted noise each day.
              </p>

              <h2 className="font-serif text-2xl text-charcoal-900 pt-4">Planning the Schedule Around the Building</h2>
              <p>
                The best renovations treat building rules as inputs to the schedule, not obstacles
                discovered on site. That means mapping working windows, lift slots and approval dates
                before mobilisation, and sequencing trades so noisy work, deliveries and debris
                removal fit inside them. In HSIOS™, these constraints are captured at onboarding so
                every trade&apos;s plan already respects them. See how we work on{' '}
                <Link href="/mumbai-luxury-interiors" className="text-bronze-700 underline underline-offset-2 hover:text-bronze-900">
                  Mumbai apartments and penthouses
                </Link>
                .
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
                This guide is general information, not legal advice. Rules differ between societies
                and change over time — always check your society&apos;s bye-laws and current municipal
                requirements, and take professional advice for structural or legal questions.
              </p>
            </div>
          </RevealOnScroll>

          {/* ── IN-ARTICLE CTA ── */}
          <RevealOnScroll delay={0.1}>
            <div className="mt-16 pt-12 border-t border-sandstone-200 text-center">
              <h3 className="font-serif text-2xl text-charcoal-900 mb-3">Renovating in Mumbai?</h3>
              <p className="text-warmgray-600 mb-6">
                We plan society approvals, working windows and lift logistics before the first trade arrives.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/mumbai-luxury-interiors" className="btn-bronze">
                  Mumbai Luxury Interiors
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
                  { href: '/insights/designer-vs-execution-firm', title: 'Interior Designer vs Execution Firm', cat: 'Pillar Guide' },
                  { href: '/insights/alibag-second-home-from-mumbai', title: 'Building an Alibag Second Home While Living in Mumbai', cat: 'Mumbai to Alibag' },
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
