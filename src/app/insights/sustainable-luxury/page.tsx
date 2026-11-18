import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import QuickAnswer from '@/components/ui/QuickAnswer'
import AuthorByline from '@/components/ui/AuthorByline'
import { AUTHORS } from '@/content/authors'
import { JsonLd } from '@/lib/JsonLd'
import { OG_IMAGE, articleSchema as blogPosting, breadcrumb } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Sustainable Luxury Interiors: Beyond Good Looks',
  description:
    "Explore how HSIOS integrates sustainability into luxury interior execution through the Refuse, Reuse, Recycle framework and technology-driven precision.",
  alternates: { canonical: 'https://www.hsios.in/insights/sustainable-luxury' },
  openGraph: {
    title: "Sustainable Luxury Interiors: Why 'Good Looking' is No Longer Enough",
    description: 'How technology and execution intelligence enable true environmental responsibility in luxury home building.',
    url: 'https://www.hsios.in/insights/sustainable-luxury',
    type: 'article',
    images: [OG_IMAGE],
  },
}

const faqs = [
  {
    q: 'How does digital execution reduce material waste in luxury interiors?',
    a: 'Traditional builds accumulate up to 25% material wastage due to rough manual estimation and buffer ordering. HSIOS™ calculates exact digital Material Takeoffs (MTOs) directly from CAD models, preventing unnecessary procurement and eliminating site surplus.',
  },
  {
    q: 'What is the "Refuse, Reuse, Recycle" circular luxury framework?',
    a: 'The framework Refuses excess ordering through CAD-accurate takeoffs, Reuses and restores existing architectural timber and heritage stonework, and Recycles clean off-cuts of wood, stone, and metal through source-segregated site channels.',
  },
  {
    q: 'Does choosing sustainable execution compromise luxury finish quality?',
    a: 'No. Sustainable luxury optimizes craftsmanship through precision engineering. Low-VOC primers, ethically sourced timber, high-durability BWP marine plywood, and natural stone enhance interior longevity and air quality without compromising aesthetics.',
  },
  {
    q: 'How does HSIOS™ verify eco-conscious material compliance on site?',
    a: 'Materials arriving on site pass through mandatory digital quality gates where certifications, VOC specifications, and sustainable timber credentials are verified before warehouse release and installation.',
  },
]

export default async function BlogSustainableLuxuryPage() {
  const author = AUTHORS['nishant-mhatre']
  const articleSchema = blogPosting({
    slug: 'sustainable-luxury',
    headline: "Sustainable Luxury Interiors: Why 'Good Looking' is No Longer Enough",
    description: 'How technology and execution intelligence enable true environmental responsibility in luxury home building.',
    datePublished: '2026-04-16',
    dateModified: '2026-11-18',
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
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <JsonLd data={[articleSchema, faqSchema, breadcrumb([
        { name: 'Home', url: 'https://www.hsios.in' },
        { name: 'Insights', url: 'https://www.hsios.in/insights' },
        { name: 'Sustainable Luxury Interiors', url: 'https://www.hsios.in/insights/sustainable-luxury' },
      ])]} />

      {/* ── ARTICLE HERO ── */}
      <section className="pt-40 pb-16 bg-charcoal-900">
        <div className="container-luxury max-w-3xl text-center">
          <RevealOnScroll>
            <div className="section-label text-sandstone-400 mb-4">Insights · Sustainability · 6 Min Read</div>
            <h1 className="font-serif text-display-xl text-white mb-6">
              Sustainable Luxury Interiors: Why &ldquo;Good Looking&rdquo; is{' '}
              <span className="text-sandstone-400">No Longer Enough.</span>
            </h1>
            <p className="text-xl text-warmgray-300">
              The true mark of modern luxury isn&apos;t just aesthetics — it&apos;s the intelligence and responsibility 
              behind the execution.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── ARTICLE CONTENT ── */}
      <article className="py-20 bg-white">
        <div className="container-luxury max-w-3xl">
          <RevealOnScroll>
            <QuickAnswer>
              Sustainable luxury interiors replace conventional 20–25% construction material waste with precision engineering. Through HSIOS™, environmental responsibility is enforced via the Refuse, Reuse, Recycle framework: digital material takeoffs eliminate unneeded buffer ordering, existing architectural elements are preserved, and on-site scrap is sorted for circular recycling without compromising high-end aesthetics.
            </QuickAnswer>

            <AuthorByline
              author={author}
              publishedDate="16 Apr 2026"
              modifiedDate="18 Nov 2026"
            />

            <div className="space-y-8 text-warmgray-700 leading-relaxed">
              <p className="text-xl text-warmgray-600">
                For decades, the luxury interior industry has been defined by excess. Rare marbles, exotic woods, 
                and frequent redesigns created beautiful results, but often at a staggering environmental cost. 
                In a typical premium build, material wastage can reach as high as 25% due to fragmented planning 
                and opaque procurement. Today, that definition is changing.
              </p>

              <p>
                At Hestia Smart Interiors, we believe that <strong className="text-charcoal-800">Precision is the ultimate sustainability.</strong> 
                Through our HSIOS™ platform, we move beyond superficial greenwashing and embed environmental 
                responsibility directly into the operational logic of site execution.
              </p>

              <h2 className="font-serif text-2xl text-charcoal-900 pt-4">
                Why is precision engineering the foundation of sustainable luxury?
              </h2>
              <p>
                The most sustainable building material is the one you never had to quarry, mill, or transport.
                Traditional contractors routinely order 15% to 20% &quot;buffer&quot; stock to cushion against
                poor site cuts, mishandling, and measurement errors. This excess material inevitably ends up
                in local municipal landfills.
              </p>
              <p>
                HSIOS™ utilizes CAD-driven Material Takeoffs (MTOs) to calculate exact volumetric requirements
                down to the square inch. By refusing to over-order, we significantly curb embodied carbon and
                procurement waste before logistics begin.
              </p>

              {/* Framework Comparison Table */}
              <div className="pt-6">
                <h3 className="font-serif text-xl text-charcoal-900 mb-4">
                  Traditional Fitout Wastage vs. HSIOS™ Circular Execution
                </h3>
                <div className="overflow-x-auto border border-ivory-300 rounded-2xl shadow-sm">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-sandstone-100/70 border-b border-ivory-300 text-charcoal-900 font-serif">
                        <th className="p-4">Execution Stage</th>
                        <th className="p-4">Conventional Contractor Practice</th>
                        <th className="p-4">HSIOS™ Circular Standard</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-ivory-200 text-warmgray-700">
                      <tr className="hover:bg-ivory-50/50">
                        <td className="p-4 font-semibold text-charcoal-900">Procurement</td>
                        <td className="p-4">15–20% buffer over-ordering to conceal errors</td>
                        <td className="p-4">Precision CAD takeoffs with sub-3% material variance</td>
                      </tr>
                      <tr className="hover:bg-ivory-50/50 bg-sandstone-50/40">
                        <td className="p-4 font-semibold text-charcoal-900">Existing Structures</td>
                        <td className="p-4">Blanket demolition of heritage woodwork and stone</td>
                        <td className="p-4">Selective salvage, architectural restoration, and adaptive reuse</td>
                      </tr>
                      <tr className="hover:bg-ivory-50/50">
                        <td className="p-4 font-semibold text-charcoal-900">Debris Disposal</td>
                        <td className="p-4">Unsorted commingled waste dumped in municipal landfills</td>
                        <td className="p-4">Source-segregated scrap sorted for masonry, timber, and metal recycling</td>
                      </tr>
                      <tr className="hover:bg-ivory-50/50 bg-sandstone-50/40">
                        <td className="p-4 font-semibold text-charcoal-900">Air Quality</td>
                        <td className="p-4">High-VOC solvents and unregulated industrial lacquers</td>
                        <td className="p-4">Low-VOC waterborne finishes and eco-certified adhesive verification</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <h2 className="font-serif text-2xl text-charcoal-900 pt-4">
                How does the &ldquo;Reuse&rdquo; principle protect heritage craftsmanship?
              </h2>
              <p>
                True luxury prioritizes enduring character over transient novelty. Whether restoring a colonial
                estate in Alibag or a heritage apartment in South Mumbai, HSIOS™ actively identifies opportunities
                to restore and celebrate existing materials. Restoring seasoned solid-wood ceiling rafters or
                refinishing vintage brass fittings blends authentic historical craftsmanship with contemporary
                systems, minimizing environmental impact.
              </p>

              <h2 className="font-serif text-2xl text-charcoal-900 pt-4">
                How do circular site practices and material segregation prevent urban pollution?
              </h2>
              <p>
                Interior debris is a major contributor to municipal waste. The HSIOS™ site governance model enforces
                source segregation. Clean stone off-cuts, architectural scrap metal, and untreated timber remnants
                are channelled into verified recycling cycles rather than dumped, establishing a measurable circular
                footprint for every villa project.
              </p>
            </div>
          </RevealOnScroll>

          {/* ── COMMON QUESTIONS (FAQ) ── */}
          <section className="mt-16 pt-12 border-t border-sandstone-200" aria-label="Common questions about sustainable luxury interiors">
            <RevealOnScroll>
              <div className="section-label mb-2">Common Questions</div>
              <h2 className="font-serif text-2xl text-charcoal-900 mb-8">
                Frequently Asked Questions About Sustainable Luxury
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
              <h3 className="font-serif text-2xl text-charcoal-900 mb-3">Want to Build Responsibly?</h3>
              <p className="text-warmgray-600 mb-6">
                Discover how HSIOS™ can bring intelligence and sustainability to your next project.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://wa.me/918010234802?text=Hi%20HSI,%20I'm%20interested%20in%20discussing%20a%20sustainable%20luxury%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-bronze"
                >
                  Speak to Our Execution Team
                </a>
                <Link href="/sustainability" className="btn btn-outline-dark">
                  Our Sustainability Framework
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
                  { href: '/insights/alibag-villa-cost', title: 'How Much Does a Villa Interior Cost in Alibag?', cat: 'Cost' },
                  { href: '/insights/designer-vs-execution-firm', title: 'Interior Designer vs Execution Firm: The Difference', cat: 'Guide' },
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
