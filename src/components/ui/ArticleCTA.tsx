import Link from 'next/link'

/** Shared end-of-article call to action for /insights posts (§3.15). */
export default function ArticleCTA() {
  return (
    <section className="mt-16 rounded-3xl bg-charcoal-800 p-8 sm:p-12 text-center">
      <h2 className="font-serif text-2xl sm:text-3xl text-white mb-4">
        Planning a villa interior in Alibag?
      </h2>
      <p className="text-warmgray-300 leading-relaxed mb-8 max-w-xl mx-auto">
        Book a consultation and we&rsquo;ll walk through your drawings, timeline and budget — in
        person, or over video if you&rsquo;re building from another city or abroad.
      </p>
      <Link href="/contact" className="btn btn-bronze">Book a Consultation</Link>
    </section>
  )
}
