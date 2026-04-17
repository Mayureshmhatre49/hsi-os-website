import type { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
    default: 'Hestia Smart Interiors — Luxury Villa Interiors, Responsibly Delivered',
    template: '%s | Hestia Smart Interiors',
  },
  description:
    'Luxury turnkey interiors for villas, premium homes & holiday properties in Alibag, Mumbai and beyond — powered by HSIOS™, our precision execution platform.',

  keywords: [
    'luxury interiors Alibag', 'villa interiors Alibag', 'premium interiors Alibag',
    'turnkey interiors India', 'sustainable interiors India', 'villa interiors Mumbai',
    'holiday home interiors', 'interior execution platform', 'HSIOS',
    'Hestia Smart Interiors', 'premium villa interior Maharashtra',
  ],

  authors: [{ name: 'Hestia Smart Interiors', url: 'https://www.hsios.in' }],
  creator: 'Hestia Smart Interiors',
  publisher: 'Hestia Smart Interiors',

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.hsios.in',
    siteName: 'Hestia Smart Interiors',
    title: 'Hestia Smart Interiors — Luxury Villa Interiors, Responsibly Delivered',
    description:
      'Luxury turnkey interiors for villas, premium homes & holiday properties — powered by HSIOS™.',
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
    description: 'Luxury turnkey interiors powered by HSIOS™ — precision, sustainability and calm authority.',
    images: ['/projects-casa-frangipani-1.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large' },
  },

  alternates: { canonical: 'https://www.hsios.in' },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  verification: {
    google: 'REPLACE_WITH_GOOGLE_SITE_VERIFICATION',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAF7F2',
}

/* ── JSON-LD Schemas ───────────────────────────────────────── */
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'InteriorDesigner',
  '@id': 'https://www.hsios.in',
  name: 'Hestia Smart Interiors',
  alternateName: 'HSI Smart Interiors',
  url: 'https://www.hsios.in',
  logo: 'https://www.hsios.in/logo.png',
  image: 'https://www.hsios.in/projects-casa-frangipani-1.jpg',
  description:
    'Luxury turnkey interior execution for villas, premium residences and holiday homes in Alibag, Mumbai and beyond — powered by HSIOS™.',
  telephone: '+91-8010234802',
  email: 'hello@hsios.in',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Alibag',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Alibag' },
    { '@type': 'City', name: 'Mumbai' },
    { '@type': 'City', name: 'Pune' },
    { '@type': 'City', name: 'Goa' },
    { '@type': 'City', name: 'Bangalore' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Interior Design Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Villa Interior Execution' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Premium Apartment Interiors' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Holiday Home Interiors' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Luxury Renovation' } },
    ],
  },
  sameAs: ['https://hestiavillas.in'],
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Hestia Smart Interiors',
  url: 'https://www.hsios.in',
  logo: 'https://www.hsios.in/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-8010234802',
    contactType: 'customer service',
    email: 'hello@hsios.in',
    availableLanguage: ['English', 'Hindi'],
  },
  parentOrganization: {
    '@type': 'Organization',
    name: 'Hestia Villas',
    url: 'https://hestiavillas.in',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* JSON-LD Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* GA4 — replace with your measurement ID */}
        {process.env.NEXT_PUBLIC_GA4_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA4_ID}',{page_path:window.location.pathname});`,
              }}
            />
          </>
        )}
      </head>
      <body className="bg-ivory-100 text-charcoal-800 font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
