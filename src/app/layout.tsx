import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { headers } from 'next/headers'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyMobileCTA from '@/components/ui/StickyMobileCTA'
import SkipToContent from '@/components/ui/SkipToContent'
import WebVitals from '@/components/WebVitals'
import { getAlternates } from '@/lib/seo'

/* ── Self-hosted fonts via next/font/google ────────────────
   Fonts are downloaded at build time, self-hosted, and served
   with optimal caching — no Google Fonts request at runtime.
   ─────────────────────────────────────────────────────────── */
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

/* ── Site-wide Metadata ────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL('https://www.hsios.in'),

  title: {
    default: 'Luxury Villa Interior Execution — HSIOS™ | Hestia Smart Interiors',
    template: '%s | HSI',
  },
  description:
    'Precision interior execution for luxury villas, premium homes & holiday properties in Alibag, Mumbai and beyond — powered by HSIOS™, India\'s interior execution operating system.',

  authors: [{ name: 'Hestia Smart Interiors', url: 'https://www.hsios.in' }],
  creator: 'Hestia Smart Interiors',
  publisher: 'Hestia Smart Interiors',

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    alternateLocale: ['en_GB', 'en_US', 'en_AU', 'en_SG'],
    url: 'https://www.hsios.in',
    siteName: 'Hestia Smart Interiors',
    title: 'Hestia Smart Interiors — Luxury Villa Interiors, Responsibly Delivered',
    description:
      'Precision interior execution for luxury villas and premium residences — powered by HSIOS™. What is designed, gets built.',
    images: [
      {
        url: '/projects-casa-frangipani-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Casa Frangipani — Hestia Smart Interiors, Alibag',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Hestia Smart Interiors — Luxury Villa Interiors',
    description: 'Precision interior execution powered by HSIOS™ — every rupee tracked, every trade accountable, every project delivered as designed.',
    images: ['/projects-casa-frangipani-1.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large' },
  },

  alternates: getAlternates('/'),

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  }),
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAF7F2',
  viewportFit: 'cover',
}

/* ── JSON-LD Schemas ───────────────────────────────────────── */
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['InteriorDesigner', 'HomeAndConstructionBusiness'],
  '@id': 'https://www.hsios.in/#business',
  name: 'Hestia Smart Interiors',
  alternateName: ['HSI', 'HSIOS', 'Hestia Smart Interiors'],
  url: 'https://www.hsios.in',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.hsios.in/logo.png',
    width: 200,
    height: 60,
  },
  image: [
    'https://www.hsios.in/projects-casa-frangipani-1.jpg',
    'https://www.hsios.in/hestia-villa-bellissimo.jpg',
    'https://www.hsios.in/hestia-villa-blue-haven.jpg',
    'https://www.hsios.in/hestia-serenity-villa.jpg',
  ],
  description:
    'Precision interior execution for luxury villas, premium residences and holiday homes in Alibag, Mumbai and beyond — powered by HSIOS™.',
  telephone: '+91-8010234802',
  email: 'hello@hsios.in',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Alibag',
    addressRegion: 'Maharashtra',
    postalCode: '402201',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 18.6408,
    longitude: 72.8731,
  },
  /*
   * aggregateRating intentionally omitted — Google's structured-data policy
   * requires the rated reviews to be visibly rendered on the same page, with
   * Person + datePublished + reviewBody. Add back when a /reviews page or
   * homepage testimonials block exposes the underlying reviews.
   */
  priceRange: '₹₹₹₹',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '15:00',
    },
  ],
  currenciesAccepted: 'INR',
  paymentAccepted: 'Bank Transfer, NEFT, RTGS',
  foundingDate: '2021',
  areaServed: [
    { '@type': 'City', name: 'Alibag' },
    { '@type': 'City', name: 'Mumbai' },
    { '@type': 'City', name: 'Pune' },
    { '@type': 'City', name: 'Goa' },
    { '@type': 'City', name: 'Bangalore' },
    { '@type': 'City', name: 'Nashik' },
    { '@type': 'City', name: 'Lonavala' },
    { '@type': 'Country', name: 'India' },
  ],
  knowsAbout: [
    'Luxury Interior Design',
    'Villa Interior Execution',
    'Premium Home Construction',
    'Interior Project Management',
    'Sustainable Interior Design',
    'NRI Property Management',
    'Holiday Home Interiors',
    'Boutique Hospitality Interiors',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Interior Design Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Villa Interior Execution' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Premium Apartment Interiors' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Holiday Home Interiors' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Luxury Renovation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Interior Execution' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'NRI Remote Interior Management' } },
    ],
  },
  sameAs: [
    'https://hestiavillas.in',
    'https://www.instagram.com/hestiavillas',
    'https://www.linkedin.com/company/hestiasmartinteriors',
  ],
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.hsios.in/#organization',
  name: 'Hestia Smart Interiors',
  url: 'https://www.hsios.in',
  logo: 'https://www.hsios.in/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-8010234802',
    contactType: 'customer service',
    email: 'hello@hsios.in',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
  parentOrganization: {
    '@type': 'Organization',
    name: 'Hestia Villas',
    url: 'https://hestiavillas.in',
  },
  sameAs: [
    'https://hestiavillas.in',
    'https://www.instagram.com/hestiavillas',
    'https://www.linkedin.com/company/hestiasmartinteriors',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.hsios.in/#website',
  url: 'https://www.hsios.in',
  name: 'Hestia Smart Interiors',
  description:
    'Precision interior execution for luxury villas, premium residences and holiday homes in India — powered by HSIOS™.',
  publisher: { '@id': 'https://www.hsios.in/#business' },
  inLanguage: ['en', 'en-IN'],
}

/* JSON.stringify with '<' escaped so a future stray '</script>' can't break out of the tag. */
const ldJson = (obj: unknown) => JSON.stringify(obj).replace(/</g, '\\u003c')

// Routes that suppress the site Navbar, Footer, and StickyMobileCTA
const LANDING_ROUTES = ['/alibaug-villa', '/enquiry']

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const hdrs = await headers()
  const nonce = hdrs.get('x-nonce') ?? ''
  const pathname = hdrs.get('x-pathname') ?? ''
  const isLanding = LANDING_ROUTES.some(r => pathname === r)
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Geo targeting */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Alibag, Maharashtra, India" />
        <meta name="geo.position" content="18.6408;72.8731" />
        <meta name="ICBM" content="18.6408, 72.8731" />

        {/* Performance: pre-connect to analytics origins */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://wa.me" />

        {/* JSON-LD Schemas — nonce required for nonce-based CSP in production.
            suppressHydrationWarning: React 19 strips `nonce` from the client DOM,
            so SSR (has nonce) and client (no nonce) diverge — accepted pattern. */}
        <script
          nonce={nonce}
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: ldJson(localBusinessSchema) }}
        />
        <script
          nonce={nonce}
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: ldJson(organizationSchema) }}
        />
        <script
          nonce={nonce}
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: ldJson(websiteSchema) }}
        />

        {/* GA4 */}
        {ga4Id && (
          <>
            <script
              nonce={nonce}
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
              suppressHydrationWarning
            />
            <script
              nonce={nonce}
              suppressHydrationWarning
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${ga4Id}',{page_path:window.location.pathname,send_page_view:true});`,
              }}
            />
          </>
        )}
      </head>
      <body className="bg-ivory-100 text-charcoal-800 font-sans antialiased">
        {!isLanding && <SkipToContent />}
        {!isLanding && <Navbar />}
        <main id="main-content">{children}</main>
        {!isLanding && <Footer />}
        {!isLanding && <StickyMobileCTA />}
        <WebVitals />
      </body>
    </html>
  )
}
