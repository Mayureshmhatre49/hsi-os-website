import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: "Sustainable Luxury Interiors: Why 'Good Looking' is No Longer Enough | HSI Insights",
  description:
    "Explore how HSIOS integrates sustainability into luxury interior execution through the Refuse, Reuse, Recycle framework and technology-driven precision.",
  alternates: { canonical: 'https://www.hsios.in/blog-sustainable-luxury' },
  openGraph: {
    title: "Sustainable Luxury Interiors: Why 'Good Looking' is No Longer Enough",
    description: 'How technology and execution intelligence enable true environmental responsibility in luxury home building.',
    url: 'https://www.hsios.in/blog-sustainable-luxury',
    type: 'article',
  },
}

export default function BlogSustainableLuxuryPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "Sustainable Luxury Interiors: Why 'Good Looking' is No Longer Enough",
    description: 'How technology and execution intelligence enable true environmental responsibility in luxury home building.',
    author: { '@type': 'Organization', name: 'Hestia Smart Interiors' },
    publisher: { '@type': 'Organization', name: 'Hestia Smart Interiors', url: 'https://www.hsios.in' },
    url: 'https://www.hsios.in/blog-sustainable-luxury',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

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
            <div className="prose prose-lg max-w-none text-warmgray-700 leading-relaxed space-y-8">
              <p className="text-xl text-warmgray-600">
                For decades, the luxury interior industry has been defined by excess. Rare marbles, exotic woods, 
                and frequent redesigns created beautiful results, but often at a staggering environmental cost. 
                In a typical premium build, material wastage can reach as high as 25% due to fragmented planning 
                and opaque procurement. Today, that definition is changing.
              </p>

              <p>
                At Hestia Smart Interiors, we believe that <strong className="text-charcoal-800">Precision is the ultimate sustainability.</strong> 
                By leveraging our HSIOS™ platform, we move beyond the superficial and embed environmental 
                responsibility into the very logic of execution.
              </p>

              <h2 className="font-serif text-2xl text-charcoal-900 pt-4">
                1. Refuse: Precision Over Procurement
              </h2>
              <p>
                The most sustainable material is the one you never had to buy. Traditional contractors often 
                order &quot;buffer&quot; stock — 15% to 20% extra material to cover up project mismanagement or 
                measurement errors. This excess usually ends up in a landfill.
              </p>
              <p>
                HSIOS™ uses high-fidelity Material Takeoffs (MTOs) to calculate requirements down to the 
                last square inch. By refusing to over-order, we significantly reduce the initial carbon 
                footprint of the project.
              </p>

              <h2 className="font-serif text-2xl text-charcoal-900 pt-4">
                2. Reuse: Valuing the Existing
              </h2>
              <p>
                Luxury doesn&apos;t always mean &quot;new.&quot; It means &quot;quality.&quot; Whether it&apos;s a colonial villa in Alibag 
                or a heritage apartment in Mumbai, we look for opportunities to salvage and integrate 
                existing elements. 
              </p>
              <p>
                Whether it&apos;s restoring high-grade solid-wood rafters or repurposing vintage hardware, the 
                ability to blend yesterday&apos;s craftsmanship with today&apos;s technology is what creates a home 
                with true soul and minimal waste.
              </p>

              <h2 className="font-serif text-2xl text-charcoal-900 pt-4">
                3. Recycle: The Circular Site
              </h2>
              <p>
                Construction debris is one of the largest contributors to urban waste. Our execution 
                framework mandates structured disposal and circular practices. At our sites, we segregate 
                waste at the source, ensuring that off-cuts of high-quality stone, metal, and wood are 
                channeled back into material cycles rather than being mixed and discarded.
              </p>

              <h2 className="font-serif text-2xl text-charcoal-900 pt-4">The Future is Intelligent</h2>
              <p>
                Sustainable luxury is not a compromise on comfort or grandeur. It is the evolution of 
                craftsmanship into the digital age. When execution is intelligent, measurable, and 
                transparent, the result is a home that is elegant not only in appearance — but also in impact.
              </p>
            </div>
          </RevealOnScroll>

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
                  Speak to Our Visionary Team
                </a>
                <Link href="/hsi-os" className="btn btn-outline-dark">
                  Explore HSIOS™ Intelligence
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
                  { href: '/blog-alibag-villa-guide', title: 'The Complete Guide to Villa Interior Design in Alibag (2025)', cat: 'Guide · Alibag Series' },
                  { href: '/blog-nri-remote-management', title: 'Remote Interior Project Management: What NRIs Need to Know', cat: 'Guide · NRI Series' },
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
