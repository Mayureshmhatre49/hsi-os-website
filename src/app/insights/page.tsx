import type { Metadata } from 'next'
import Link from 'next/link'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

export const metadata: Metadata = {
  title: 'Insights — Execution Intelligence for Premium Interiors | HSI',
  description:
    'Field notes, guides and thought leadership on luxury interior execution in India. Deep dives on Alibag villa interiors, NRI remote management and cost transparency.',
  alternates: { canonical: 'https://www.hsios.in/insights' },
}

const posts = [
  {
    slug: 'blog-alibag-villa-guide',
    category: 'Guide · Alibag Series',
    title: 'The Complete Guide to Villa Interior Design in Alibag (2025)',
    excerpt: 'Everything you need to know about weather-proofing, material selection, and executing a premium coastal home without delays or surprises.',
    readTime: '12 min read',
    featured: true,
  },
  {
    slug: 'blog-alibag-villa-cost',
    category: 'Cost Intelligence · Alibag',
    title: 'How Much Does a Villa Interior Cost in Alibag?',
    excerpt: 'A transparent breakdown of premium execution costs, the hidden coastal premium, and why standard quotes consistently fail coastal villa owners.',
    readTime: '9 min read',
  },
  {
    slug: 'blog-alibag-challenges',
    category: 'Insights · Alibag',
    title: 'Top Interior Design Challenges in Coastal Alibag Homes',
    excerpt: 'Why beautiful 3D renders often fail in reality — and how structured execution solves the Alibag coastal puzzle.',
    readTime: '7 min read',
  },
  {
    slug: 'blog-alibag-timeline',
    category: 'Guide · Execution Timeline',
    title: 'Alibag Villa Interior: What to Expect from Start to Finish',
    excerpt: 'A detailed phase-by-phase timeline of executing a premium villa interior. Understand exactly how long it takes and why.',
    readTime: '8 min read',
  },
  {
    slug: 'blog-nri-remote-management',
    category: 'Guide · NRI Series',
    title: 'Remote Interior Project Management: What NRIs Need to Know',
    excerpt: 'The fundamental difference between hoping your contractor performs and guaranteeing your execution from abroad.',
    readTime: '10 min read',
  },
  {
    slug: 'blog-nri-tracking-progress',
    category: 'Insights · NRI Series',
    title: 'How to Track Your India Villa Interior Without Flying Back',
    excerpt: 'Moving beyond grainy WhatsApp updates to real-time, data-driven execution intelligence for remote homeowners.',
    readTime: '7 min read',
  },
  {
    slug: 'blog-nri-cost-inflation',
    category: 'Cost Intelligence · NRI Series',
    title: 'The "NRI Premium": Why Local Contractors Overcharge and How to Avoid It',
    excerpt: 'Exposing the hidden margins in remote interior execution and how radical financial transparency changes everything.',
    readTime: '9 min read',
  },
]

export default function InsightsPage() {
  const [featured, ...rest] = posts

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="py-32 bg-charcoal-800">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="max-w-2xl">
              <div className="section-label text-sandstone-400">Insights</div>
              <h1 className="font-serif text-display-xl text-white mb-5">
                Execution{' '}
                <em className="not-italic text-sandstone-300">Intelligence.</em>
              </h1>
              <p className="text-warmgray-300 text-lg leading-relaxed">
                Field notes, guides and thought leadership from the frontlines of premium interior builds.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── FEATURED POST ─────────────────────────────────── */}
      <section className="section-py bg-ivory-100">
        <div className="container-luxury">
          <RevealOnScroll>
            <div className="badge-warm mb-8">Featured Guide</div>
            <Link
              href={`/${featured.slug}`}
              className="group grid lg:grid-cols-2 gap-12 items-center
                         p-10 rounded-4xl bg-white border border-ivory-300 hover:border-sandstone-300
                         hover:shadow-luxury-md transition-all duration-400"
            >
              <div>
                <div className="text-xs font-semibold tracking-widest uppercase text-sandstone-600 mb-4">
                  {featured.category}
                </div>
                <h2 className="font-serif text-display-sm text-charcoal-800 mb-5 group-hover:text-sandstone-700 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-warmgray-600 leading-relaxed mb-6">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-sandstone-700 group-hover:gap-3 transition-all">
                  Read Full Guide
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
              <div className="flex flex-col gap-5">
                <div className="h-px w-full bg-ivory-300" />
                <div className="text-sm text-warmgray-500">{featured.readTime}</div>
                <p className="font-serif text-2xl text-charcoal-700 leading-snug">
                  &ldquo;Most execution failures in Alibag are predictable — and preventable.&rdquo;
                </p>
              </div>
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── ALL ARTICLES ──────────────────────────────────── */}
      <section className="section-py bg-ivory-200">
        <div className="container-luxury">
          <RevealOnScroll className="max-w-lg mb-12">
            <div className="section-label">All Articles</div>
            <h2 className="font-serif text-display-md text-charcoal-800">
              From the{' '}
              <span className="text-sandstone-600">Field.</span>
            </h2>
          </RevealOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(({ slug, category, title, excerpt, readTime }, i) => (
              <RevealOnScroll key={slug} delay={i * 0.07}>
                <Link
                  href={`/${slug}`}
                  className="group card-luxury flex flex-col h-full bg-white p-8"
                >
                  <div className="text-xs font-semibold tracking-widest uppercase text-sandstone-600 mb-3">
                    {category}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-charcoal-800 mb-3 flex-1 leading-snug group-hover:text-sandstone-700 transition-colors">
                    {title}
                  </h3>
                  <p className="text-warmgray-600 text-sm leading-relaxed mb-6">{excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-warmgray-400 pt-5 border-t border-ivory-200">
                    <span>{readTime}</span>
                    <span className="flex items-center gap-1.5 font-semibold text-sandstone-600 group-hover:gap-2.5 transition-all">
                      Read →
                    </span>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-24 bg-charcoal-800 text-center">
        <RevealOnScroll>
          <div className="container-luxury max-w-2xl">
            <h2 className="font-serif text-display-md text-white mb-5">
              Ready to Build with{' '}
              <span className="text-sandstone-300">Confidence?</span>
            </h2>
            <p className="text-warmgray-300 leading-relaxed mb-8">
              Talk to the experts behind these insights.
            </p>
            <a
              href="https://wa.me/918010234802?text=Hi%20HSI%2C%20I%27d%20like%20to%20discuss%20my%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-bronze"
            >
              Start Your Project Conversation →
            </a>
          </div>
        </RevealOnScroll>
      </section>
    </>
  )
}
