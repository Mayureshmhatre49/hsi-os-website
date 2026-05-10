import { headers } from 'next/headers'

type Schema = Record<string, unknown>

/*
 * Server component that injects JSON-LD schema(s) with the per-request CSP nonce
 * set by src/middleware.ts. Pass a single schema object or an array of schemas.
 *
 * Usage:
 *   <JsonLd data={faqSchema} />
 *   <JsonLd data={[localBusinessSchema, breadcrumbSchema]} />
 */
export async function JsonLd({ data }: { data: Schema | Schema[] }) {
  const nonce = (await headers()).get('x-nonce') ?? undefined
  const items = Array.isArray(data) ? data : [data]

  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          nonce={nonce}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            // Escape '<' so a stray '</script>' in dynamic data can't break out of the tag
            __html: JSON.stringify(item).replace(/</g, '\\u003c'),
          }}
        />
      ))}
    </>
  )
}
