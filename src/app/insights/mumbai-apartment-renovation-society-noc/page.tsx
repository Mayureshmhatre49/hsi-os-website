import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import QuickAnswer from '@/components/ui/QuickAnswer'
import AuthorByline from '@/components/ui/AuthorByline'
import { JsonLd } from '@/lib/JsonLd'
import { articleSchema as blogPosting, breadcrumb, getAlternates, OG_IMAGE } from '@/lib/seo'
import { AUTHORS } from '@/content/authors'
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
    a: 'For anything beyond minor cosmetic repairs, almost always. Most co-operative housing societies in Maharashtra require members to obtain the managing committee’s written permission before additions or alterations, and many apply the same process to full interior fit-outs.',
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
  'A refundable security deposit, usually held until work finishes without complaint',
]

const checklist = [
  'Request the society’s written renovation rules and NOC application form before drawing final plans.',
  'Get a structural engineer’s sign-off before planning any wall removal.',
  'Build the society’s permitted hours and lift rules directly into the contractor’s master schedule.',
  'Inform the neighbours above and below, and test waterproofing before tiling.',
  'Keep approvals, drawings and change orders documented in one place.',
]

export default function MumbaiApartmentRenovationPage() {
  const author = AUTHORS['sanjay-joshi']
  const article = blogPosting({
    slug: SLUG,
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: '2026-10-19',
    dateModified: '2026-11-18',
    about: [placeSchema(MUMBAI)],
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
            <QuickAnswer>
              Renovating a Mumbai apartment requires formal managing committee NOC approval before civil work begins. Key compliance rules mandate zero alterations to load-bearing columns, beams, or shear walls, restricted noisy work hours (typically 9 AM–6 PM on weekdays, prohibited on Sundays/holidays), designated service elevator slots, and secured debris disposal deposits.
            </QuickAnswer>

            <AuthorByline
              author={author}
              publishedDate="19 Oct 2026"
              modifiedDate="18 Nov 2026"
            />

            <div className="space-y-8 text-warmgray-700 leading-relaxed">
              <p className="text-xl text-warmgray-600">
                Renovating a premium apartment in Mumbai is as much a governance exercise as a design
                one. Your building has a managing committee, written rules, shared lifts and
                neighbours on every side — and each of them can stop work that was not planned for.
                Get the approvals and the building rules right first, and the rest of the project
                runs far more smoothly.
              </p>

              <h2 className="font-serif text-2xl text-charcoal-900 pt-4">Why does society NOC approval come first?</h2>
              <p>
                Most co-operative housing societies in Maharashtra follow model bye-laws that require a
                member to obtain the managing committee&apos;s permission before making additions or
                alterations to a flat. In practice, many societies apply the same process to any
                significant interior work. Starting without written approval risks a stop-work notice,
                a forfeited deposit and a strained relationship with the people you live next to.
              </p>

              <h2 className="font-serif text-2xl text-charcoal-900 pt-4">What does a typical society NOC application include?</h2>
              <p>Requirements vary by building, but most committees expect some version of:</p>
              <ul className="list-disc pl-6 space-y-2">
                {application.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p>
                A complete application is the fastest one. Incomplete paperwork is the most common
                reason approvals drift across committee meetings.
              </p>

              {/* Society Renovation Guidelines Table */}
              <div className="pt-4">
                <h3 className="font-serif text-xl text-charcoal-900 mb-4">
                  Standard Mumbai Housing Society Renovation Rules
                </h3>
                <div className="overflow-x-auto border border-ivory-300 rounded-2xl shadow-sm">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-sandstone-100/70 border-b border-ivory-300 text-charcoal-900 font-serif">
                        <th className="p-4">Regulatory Area</th>
                        <th className="p-4">Typical Society Policy</th>
                        <th className="p-4">HSIOS™ Compliance Workflow</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ivory-200 text-warmgray-700">
                      <tr className="hover:bg-ivory-50/50">
                        <td className="p-4 font-semibold text-charcoal-900">Working Hours</td>
                        <td className="p-4">Mon–Fri: 9 AM–6 PM; Sat: 9 AM–1 PM; Sundays/Holidays prohibited</td>
                        <td className="p-4">Schedule locks noisy trades (core cutting, hacking) strictly to legal slots</td>
                      </tr>
                      <tr className="hover:bg-ivory-50/50 bg-sandstone-50/40">
                        <td className="p-4 font-semibold text-charcoal-900">Service Lift Use</td>
                        <td className="p-4">Designated morning/evening freight slots; padding mandatory</td>
                        <td className="p-4">Site supervisor coordinates lift protective cladding and booked logistics slots</td>
                      </tr>
                      <tr className="hover:bg-ivory-50/50">
                        <td className="p-4 font-semibold text-charcoal-900">Debris Disposal</td>
                        <td className="p-4">No corridor/lobby dumping; bagged removal via approved carriers</td>
                        <td className="p-4">Daily source-bagged removal; transit route protective floor coverings</td>
                      </tr>
                      <tr className="hover:bg-ivory-50/50 bg-sandstone-50/40">
                        <td className="p-4 font-semibold text-charcoal-900">Structural Safety</td>
                        <td className="p-4">Strict prohibition on beam, column, or slab hacking</td>
                        <td className="p-4">Structural engineer review prior to partition wall alteration</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h2 className="font-serif text-2xl text-charcoal-900 pt-4">What structural limits must be respected?</h2>
              <p>
                Columns, beams and slabs are strictly off-limits. Before planning to remove or move any wall,
                commission a structural engineer to confirm what it does — in older South Mumbai
                buildings especially, the answer is not always obvious from original drawings. Structural
                alterations generally need the society&apos;s approval and municipal corporation sanctions.
              </p>
              <p>
                Wet areas deserve equal care. Moving a bathroom or kitchen over a neighbour&apos;s
                bedroom is widely restricted, and any leak into the flat below becomes your legal liability.
                Waterproofing should be flood-tested for 48 hours before tiling, not after.
              </p>

              <h2 className="font-serif text-2xl text-charcoal-900 pt-4">Checklist Before You Renovate</h2>
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
          <section className="mt-16 pt-12 border-t border-sandstone-200" aria-label="Common questions about Mumbai apartment renovation rules">
            <RevealOnScroll>
              <div className="section-label mb-2">Common Questions</div>
              <h2 className="font-serif text-2xl text-charcoal-900 mb-8">
                Frequently Asked Questions About Society NOCs
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
              <h3 className="font-serif text-2xl text-charcoal-900 mb-3">Planning a Mumbai Apartment Renovation?</h3>
              <p className="text-warmgray-600 mb-6">
                Talk to our team about society approval planning, high-rise logistics and precision execution
                for South Mumbai, Bandra, Juhu and Worli residences.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="btn btn-bronze">
                  Book a Consultation
                </Link>
                <Link href="/mumbai-luxury-interiors" className="btn btn-outline-dark">
                  Mumbai Services
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
                  { href: '/insights/designer-vs-execution-firm', title: 'Interior Designer vs Execution Firm: What is the Difference?', cat: 'Hiring Guide' },
                  { href: '/insights/alibag-second-home-from-mumbai', title: 'Building an Alibag Second Home While Living in Mumbai', cat: 'Alibag Guide' },
                  { href: '/insights/nri-remote-management', title: 'Remote Interior Project Management: What NRIs Need to Know', cat: 'NRI Guide' },
                  { href: '/mumbai-luxury-interiors', title: 'Luxury Apartment Interiors in Mumbai', cat: 'Services' },
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
