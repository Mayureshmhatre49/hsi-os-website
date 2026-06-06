# HSIOS Website — CLAUDE.md

> Project context for AI coding assistants working on the Hestia Smart Interiors website.

---

## Project Overview

**Hestia Smart Interiors (HSI)** is a luxury interior execution firm. The website (`www.hsios.in`) is the primary marketing and lead-generation platform for HSI's core service offering — **HSIOS™**, an interior execution operating system for premium homes.

The website is **not** a design portfolio. It is a precision-positioned brand platform that communicates execution intelligence, sustainability, and accountability to discerning clients (homeowners, NRIs, architects, developers).

**Parent organisation**: Hestia Villas (`hestiavillas.in`)
**External platform**: `os.hsios.in` (live HSIOS™ platform, external link)
**Phone**: +91-8010234802 | **Email**: hello@hsios.in | **Founded**: 2021
**Social**: instagram.com/hestiavillas · linkedin.com/company/hestiasmartinteriors

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | **Next.js 15.3** (App Router, Turbopack) |
| Language | **TypeScript 5.8** |
| Runtime | **React 19.1** |
| Styling | **Tailwind CSS v3** + custom design tokens |
| Animations | **Framer Motion 12** |
| Icons | **Lucide React 1.14** |
| Fonts | Playfair Display + Inter via `next/font/google` |
| Email | **Nodemailer 8** via SMTP (Hostinger) |
| Analytics | **GA4** via `gtag` (nonce-injected) |
| Performance | `web-vitals` via `WebVitals` component |
| Testing | **Playwright 1.59** |
| Hosting | VPS behind Nginx + HTTPS enforcement |

---

## Directory Structure

```
/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout — fonts, metadata, JSON-LD schemas, GA4
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles + Tailwind base + CSS component classes
│   │   ├── robots.ts           # Dynamic robots.txt
│   │   ├── sitemap.ts          # Dynamic sitemap
│   │   ├── api/
│   │   │   └── contact/        # Contact form API route (Nodemailer)
│   │   └── [route]/            # Each page as its own directory (App Router convention)
│   ├── components/
│   │   ├── Navbar.tsx          # Site-wide navigation (client component)
│   │   ├── Footer.tsx          # Site-wide footer
│   │   ├── WebVitals.tsx       # Core Web Vitals reporter
│   │   └── ui/
│   │       ├── EngagementModels.tsx     # Two HSIOS™ engagement model cards (Platform / Managed)
│   │       ├── ExecutionDisciplines.tsx # 10 execution discipline grid with expand/collapse
│   │       ├── FAQAccordion.tsx
│   │       ├── MarqueeTicker.tsx
│   │       ├── PlatformPreview.tsx      # HSIOS™ platform interactive preview
│   │       ├── RevealOnScroll.tsx       # Framer Motion scroll animation wrapper
│   │       ├── SkipToContent.tsx        # Accessibility skip link
│   │       └── StickyMobileCTA.tsx      # Mobile floating CTA bar
│   ├── lib/
│   │   ├── JsonLd.tsx          # Server component — injects JSON-LD with CSP nonce
│   │   ├── analytics.ts        # GA4 typed event helpers (client-only)
│   │   └── seo.ts              # getAlternates(), breadcrumb(), serviceSchema() helpers
│   └── middleware.ts           # HTTPS redirect + nonce-based CSP injection
├── admin/                      # PHP admin panel (legacy)
│   ├── dashboard.php
│   ├── login.php
│   ├── setup.php
│   └── logout.php
├── includes/                   # PHP shared includes
│   ├── config.php
│   ├── db.php
│   └── mailer.php
├── public/                     # Static assets (images, favicon, etc.)
├── next.config.ts              # Security headers, image config, legacy .html redirects
├── tailwind.config.ts          # Custom design tokens
├── BRAND_LANGUAGE_GUIDE.md     # Brand voice, vocabulary, and copy rules
└── .env.local.example          # Environment variable template
```

---

## Pages (App Router Routes)

| Route | Purpose |
|-------|---------|
| `/` | Homepage — hero, services overview, process, projects |
| `/about` | Company story, mission, team |
| `/projects` | Portfolio of completed projects |
| `/how-it-works` | HSIOS™ platform explainer |
| `/hsi-os` | HSIOS™ product deep-dive |
| `/for-homeowners` | Audience page — homeowners |
| `/for-developers` | Audience page — property developers |
| `/for-architects` | Audience page — architects & designers |
| `/for-bim-managers` | Audience page — BIM managers |
| `/for-sustainability-experts` | Audience page — sustainability experts |
| `/commercial-interiors` | Commercial interiors service page |
| `/contact` | Contact + consultation booking |
| `/pricing` | Pricing overview |
| `/insights` | Blog / insights hub |
| `/sustainability` | Sustainability commitment page |
| `/security` | Security & trust page |
| `/demo` | HSIOS™ platform demo |
| `/blog-alibag-challenges` | Blog — Alibag project challenges |
| `/blog-alibag-timeline` | Blog — Alibag project timeline |
| `/blog-alibag-villa-cost` | Blog — Alibag villa cost breakdown |
| `/blog-alibag-villa-guide` | Blog — Alibag villa guide |
| `/blog-nri-cost-inflation` | Blog — NRI cost & inflation |
| `/blog-nri-remote-management` | Blog — NRI remote management |
| `/blog-nri-tracking-progress` | Blog — NRI tracking progress |
| `/blog-sustainable-luxury` | Blog — Sustainable luxury interiors |
| `/alibag-villa-interiors` | SEO landing — Alibag |
| `/mumbai-luxury-interiors` | SEO landing — Mumbai |
| `/pune-premium-interiors` | SEO landing — Pune |
| `/goa-villa-interiors` | SEO landing — Goa |
| `/bangalore-luxury-interiors` | SEO landing — Bangalore |
| `/lonavala-villa-interiors` | SEO landing — Lonavala |
| `/nashik-villa-interiors` | SEO landing — Nashik |
| `/nri-home-interior-management` | SEO landing — NRI clients |
| `/luxury-interior-execution-india` | SEO landing — India-wide luxury execution |
| `/second-home-interior-design` | SEO landing — Second home interiors |
| `/turnkey-home-interiors` | SEO landing — Turnkey interiors |
| `/villa-interior-project-management` | SEO landing — Villa project management |
| `/privacy`, `/terms` | Legal pages |

---

## Navbar Structure

**Primary links** (desktop bar): Projects · HSIOS™ · Sustainability · Pricing · About

**Solutions dropdown**: For Homeowners · For Developers · For Architects · Commercial Spaces · NRI Remote Build · Try HSIOS™ → (`os.hsios.in`, external) · Request a Demo

**Mobile-only extras**: How It Works · Insights

Navbar behaviour: transparent at top → backdrop-blur on scroll. Closes on route change, outside click, or Escape key.

---

## Environment Variables

Copy `.env.local.example` → `.env.local` and populate:

```bash
# SMTP (Hostinger)
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=hello@hsios.in
SMTP_PASS=<password>

# Notification recipients (comma-separated)
NOTIFY_EMAILS=hello@hsios.in,mayureshmhatre49@gmail.com,nishant.mhatre@mail.com

# Analytics
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX

# Site URL
NEXT_PUBLIC_SITE_URL=https://www.hsios.in

# Google Search Console (optional)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=<token>
```

---

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server (Turbopack) on port 4000
npm run build        # Production build
npm start            # Production server on port 4000
npm run type-check   # tsc --noEmit
npm run lint         # ESLint
```

Dev server runs on **http://localhost:4000** (port set via `-p 4000` flag in all npm scripts).

---

## Security Architecture

### 1. Static headers — `next.config.ts`

Applied to all routes:

| Header | Value |
|--------|-------|
| `X-DNS-Prefetch-Control` | `on` |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | camera, microphone, geolocation, browsing-topics, interest-cohort all `()` |
| `Cross-Origin-Opener-Policy` | `same-origin-allow-popups` |
| `Cross-Origin-Resource-Policy` | `cross-origin` |

Static assets (`/_next/static/*`, images, fonts) receive `Cache-Control: public, max-age=31536000, immutable`.

### 2. Dynamic CSP — `src/middleware.ts`

- A **per-request nonce** is generated via `btoa(crypto.randomUUID())` (Web Crypto, Edge-compatible).
- Forwarded to server components via the `x-nonce` request header.
- **Production** `script-src`: `'nonce-{nonce}' 'strict-dynamic' https://www.googletagmanager.com https://*.google-analytics.com`
- **Development** `script-src`: `'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://*.google-analytics.com`

Full CSP directives:
```
default-src 'self'
script-src  {see above}
style-src   'self' 'unsafe-inline'
font-src    'self' data:
img-src     'self' data: blob: https://hestiavillas.in https://www.hsios.in
connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com
frame-src   'none'
frame-ancestors 'none'
form-action 'self'
base-uri    'self'
object-src  'none'
upgrade-insecure-requests
```

Middleware matcher: all routes except `_next/static`, `_next/image`, `favicon.ico`, and static asset extensions (jpg/png/svg/gif/webp/avif/ico/woff/woff2). API routes skip nonce injection but still get HTTPS enforcement.

> **Important**: Any `<script>` tag in server components **must** read the nonce from `headers().get('x-nonce')` and pass it as the `nonce` prop. Missing nonces will cause CSP violations in production.

---

## next.config.ts Details

```ts
reactStrictMode: true
compress: true
poweredByHeader: false   // removes X-Powered-By: Next.js
generateEtags: true

images:
  formats: ['image/avif', 'image/webp']
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048]
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  minimumCacheTTL: 2592000  // 30 days
  remotePatterns: hestiavillas.in, www.hsios.in

experimental:
  optimizePackageImports: ['framer-motion', 'lucide-react']
```

Legacy `.html` redirects are managed via the `legacyPages` array — each slug maps `/{slug}.html` → `/{slug}` with `permanent: true`.

---

## SEO Conventions

- **Metadata** defined per-page via Next.js `export const metadata`.
- Root-level metadata lives in `src/app/layout.tsx` (title template: `'%s | HSI'`).
- **Viewport**: `themeColor: '#FAF7F2'`, `viewportFit: 'cover'`.
- **Canonical URLs** always point to `https://www.hsios.in/{route}`.
- **`hreflang`** tags: only `en-IN` and `x-default` are currently emitted (via `getAlternates()` in `src/lib/seo.ts`). Other locale tags (en-GB, en-US etc.) are intentionally omitted until genuinely localised landing pages exist.
- **Sitemap** is generated dynamically at `/sitemap.ts`.
- **Legacy `.html` redirects**: tracked in the `legacyPages` array in `next.config.ts`. When adding a new page that previously existed as a `.html` file, add it there.

### JSON-LD Schemas (root layout)

Three schemas are injected in `layout.tsx` for every page:

1. **LocalBusiness** (`@type: ['InteriorDesigner', 'HomeAndConstructionBusiness']`) — includes `areaServed` (Alibag, Mumbai, Pune, Goa, Bangalore, Nashik, Lonavala, India), business hours (Mon–Fri 09–18, Sat 10–15), `priceRange: '₹₹₹₹'`, payment: Bank Transfer / NEFT / RTGS, `hasOfferCatalog` with 6 services.
2. **Organization** — includes `contactPoint` (telephone, customer service, en/hi), `parentOrganization: Hestia Villas`.
3. **WebSite** — links to the LocalBusiness publisher via `@id`.

> `aggregateRating` is intentionally omitted — Google requires reviews to be visibly rendered on the same page.

### Per-page JSON-LD (via `src/lib/JsonLd.tsx`)

```tsx
// Server component — handles nonce automatically
<JsonLd data={faqSchema} />
<JsonLd data={[breadcrumbSchema, serviceSchema]} />
```

---

## Shared Library (`src/lib/`)

### `seo.ts` exports

| Export | Signature | Purpose |
|--------|-----------|---------|
| `getAlternates` | `(path: string)` | Returns `{ canonical, languages: { 'en-IN': url, 'x-default': url } }` |
| `breadcrumb` | `(items: Array<{name, url}>)` | Returns Schema.org `BreadcrumbList` object |
| `serviceSchema` | `({ name, description, url, areaServed? })` | Returns Schema.org `Service` object linked to `/#business` |

### `analytics.ts` exports (client-only, wraps `window.gtag`)

| Method | GA4 event | Category |
|--------|-----------|----------|
| `analytics.ctaClick(label, destination?)` | `cta_click` | `engagement` |
| `analytics.whatsappClick(source)` | `whatsapp_click` | `contact` |
| `analytics.formSubmit(formName)` | `form_submit` | `conversion` |
| `analytics.formStart(formName)` | `form_start` | `engagement` |
| `analytics.phoneClick(source)` | `phone_click` | `contact` |
| `analytics.scrollDepth(percent, page)` | `scroll_depth` | `engagement` |
| `analytics.projectView(projectName)` | `project_view` | `content` |
| `analytics.demoRequest(source)` | `demo_request` | `conversion` |

---

## Shared UI Components

### `EngagementModels`

Communicates the two ways HSIOS™ is engaged. Props:

| Prop | Type | Default | Purpose |
|------|------|---------|---------|
| `emphasis` | `'neutral' \| 'platform' \| 'managed'` | `'neutral'` | Highlights one card with a ring |
| `eyebrow` | `string` | `'Engagement Models'` | Override section eyebrow per page |

- **Option A — Platform Only**: HSIOS™ for own team/vendors. CTA → `/demo`.
- **Option B — Managed Execution**: HSI orchestrates via empaneled partner network. CTA → `/contact`.

### `ExecutionDisciplines`

Interactive grid of all 10 execution disciplines. Each card expands to show services list + HSIOS™ integration note. Props:

| Prop | Type | Default | Purpose |
|------|------|---------|---------|
| `variant` | `'full' \| 'compact'` | `'full'` | `full` shows quantified stats (10 disciplines, 104 QA checkpoints, 0 rework incidents) |
| `showCTA` | `boolean` | `true` | Shows consultation CTA strip at bottom |
| `context` | `'homepage' \| 'hsi-os' \| 'how-it-works' \| 'for-homeowners' \| 'for-developers' \| 'for-architects'` | `'homepage'` | Selects contextual closing message |

10 disciplines: Structural Coordination · Flooring & Surfaces · Bespoke Joinery · Architectural Metal & Glass · Electrical & Smart Systems · Plumbing & Bathrooms · HVAC & Mechanical · Ceiling & Drywall · Surface Finishing · Smart Villa Integration.

---

## Image Conventions

- All project/hero images are stored in `/public/`.
- Naming convention: `projects-{project-name}-{number}.jpg`, e.g. `projects-casa-frangipani-1.jpg`.
- Use Next.js `<Image>` component for all images — never bare `<img>` tags.
- Supported remote patterns: `hestiavillas.in`, `www.hsios.in`.
- Preferred formats: **AVIF > WebP** (configured in `next.config.ts`).
- `minimumCacheTTL` is 30 days (2592000 seconds).

---

## Design System

### Font Variables

`next/font/google` generates two CSS custom properties on the `<html>` element:
- `--font-playfair` — Playfair Display (weights 400–900)
- `--font-inter` — Inter (weights 400–800)

`globals.css` then maps these to the semantic vars consumed by Tailwind:
```css
--font-serif: var(--font-playfair), Georgia, "Times New Roman", serif;
--font-sans:  var(--font-inter), system-ui, -apple-system, sans-serif;
```

Tailwind `fontFamily` config: `font-serif` → `var(--font-serif)`, `font-sans` → `var(--font-sans)`.

### Color Palette (Tailwind tokens)

| Scale | Key values | Usage |
|-------|-----------|-------|
| `ivory-*` | 50–400 | Page backgrounds (`bg-ivory-100` = `#FAF7F2`) |
| `sandstone-*` | 50–800 | Primary accent; `sandstone-400` = `#C4A882`, `sandstone-600` = `#9A7A54` |
| `bronze-*` | 300–800 | CTA buttons; `bronze-600` = `#8B6B35` |
| `charcoal-*` | 50–900 | Text & dark surfaces; `charcoal-800` = `#1C1C1E` (body text / headings) |
| `warmgray-*` | 100–800 | Muted text / borders |

> The old CLAUDE.md listed a `gold-*` palette — this does not exist. The correct accent scales are `sandstone-*` and `bronze-*`.

### Custom Typography Scale

Defined in `tailwind.config.ts` as `fontSize` extensions with `clamp()`:

| Token | Size | Line height | Letter spacing |
|-------|------|-------------|---------------|
| `text-display-2xl` | clamp(3rem, 6vw, 5.5rem) | 1.05 | -0.03em |
| `text-display-xl` | clamp(2.5rem, 5vw, 4.5rem) | 1.08 | -0.025em |
| `text-display-lg` | clamp(2rem, 4vw, 3.5rem) | 1.12 | -0.02em |
| `text-display-md` | clamp(1.75rem, 3vw, 2.75rem) | 1.18 | -0.015em |
| `text-display-sm` | clamp(1.5rem, 2.5vw, 2rem) | 1.25 | -0.01em |

### Custom Spacing Tokens

`spacing`: `18` (4.5rem) · `22` (5.5rem) · `26` (6.5rem) · `30` (7.5rem) · `34` (8.5rem) · `38` (9.5rem) · `42` (10.5rem)

### Custom Max-Width Tokens

`maxWidth`: `8xl` (90rem) · `9xl` (100rem)

### Custom Shadows

| Token | Usage |
|-------|-------|
| `shadow-luxury` | Default card elevation |
| `shadow-luxury-md` | Hover card / active state |
| `shadow-luxury-lg` | Modals / drawers |
| `shadow-bronze` | Bronze-tinted CTA shadow |
| `shadow-bronze-lg` | Bronze CTA hover |
| `shadow-card` | Subtle card resting shadow |
| `shadow-card-hover` | Card hover state |

### Custom Animations (Tailwind)

`marquee` (35s) · `marquee-slow` (55s) · `float` (4s) · `fade-up` (0.7s) · `shimmer` (2.5s) · `spin-slow` (8s)

### CSS Layout & Component Classes (globals.css)

| Class | Purpose |
|-------|---------|
| `.container-luxury` | Centred container, max-w 1200px, responsive padding via `clamp(1.5rem, 5vw, 5rem)` |
| `.section-py` | Responsive vertical padding via `clamp(3.5rem, 5.5vw, 6rem)` |
| `.section-label` | Small-caps eyebrow with 1.75rem leading line decoration |
| `.divider-warm` | Sandstone-to-transparent horizontal rule |
| `.btn` | Base button — rounded-full, semibold, 300ms transition |
| `.btn-dark` | Charcoal fill button |
| `.btn-bronze` | Bronze fill button (primary CTA) |
| `.btn-outline-dark` | Charcoal outline button |
| `.btn-outline-white` | White outline button (on dark backgrounds) |
| `.btn-outline-warm` | Sandstone outline button |
| `.card-luxury` | White card with luxury shadow + hover lift |
| `.card-warm` | Ivory-background card with sandstone hover border |
| `.grain` | `::after` pseudo-element SVG noise texture overlay |
| `.badge-warm` | Sandstone pill badge |
| `.form-input` | Styled text input (ivory border, sandstone focus ring) |
| `.form-label` | Uppercase tracking label |

### CSS Custom Properties (globals.css `:root`)

```css
--ivory, --ivory-dark, --cream
--sandstone, --sandstone-dark
--bronze, --bronze-light
--charcoal, --charcoal-mid
--warm-gray, --muted
--font-serif, --font-sans
--section-py:    clamp(3.5rem, 5.5vw, 6rem)
--container-px:  clamp(1.5rem, 5vw, 5rem)
--max-w:         1200px
--ease-luxury:   cubic-bezier(0.21, 0.47, 0.32, 0.98)
--transition-fast: 0.2s var(--ease-luxury)
--transition-med:  0.4s var(--ease-luxury)
--transition-slow: 0.7s var(--ease-luxury)
```

### Animation

- Use **Framer Motion** for all scroll-triggered and interactive animations.
- `RevealOnScroll` wrapper handles standard scroll reveal — prefer over custom motion implementations.
- Framer Motion is optimised via `optimizePackageImports` in `next.config.ts`.
- `prefers-reduced-motion` is respected globally via `globals.css` — all durations collapse to 0.01ms.

---

## Brand & Copy Rules

> **Always read `BRAND_LANGUAGE_GUIDE.md` before writing any user-facing copy.**

Key rules summarised:

- **HSIOS™** — always include the ™ symbol on first use per page.
- Avoid: "seamless", "world-class", "cutting-edge", "dream home", "luxury experience", "stunning", "transform your space".
- Prefer: "precision execution", "milestone-verified", "documented accountability", "execution intelligence".
- Sustainability claims must be specific and provable — never claim "carbon neutral" or "zero waste".
- CTAs are benefit-led: "Book a Private Consultation", "Start Your Project", "Request a Demo".
- Tone per audience:
  - **Homeowners**: empathetic, reassuring, empowering.
  - **Architects**: peer-level, collaborative, respectful of expertise.
  - **Developers**: operational, numbers-driven, scalable.
  - **NRI clients**: control-focused, distance-agnostic.

---

## Contact Form API

Located at `src/app/api/contact/`.

- Accepts `POST` requests with lead form data.
- Sends email via **Nodemailer** using Hostinger SMTP.
- Notification recipients defined in `NOTIFY_EMAILS` env var (comma-separated).
- No reCAPTCHA is currently active — keys are commented out in `.env.local.example`.

---

## Admin Panel (PHP — Legacy)

Located in `/admin/`. This is a **legacy PHP dashboard** that predates the Next.js migration.

- `login.php` — session-based authentication.
- `dashboard.php` — lead management and enquiry viewer.
- `setup.php` — initial database setup.
- `db.php` / `config.php` in `/includes/` — shared DB connection and config.
- Protected by `/admin/.htaccess`.

> **Note**: Do not extend the PHP admin panel. Future admin features should be built as authenticated Next.js API routes or a separate admin application.

---

## Deployment

- Deployed on a VPS behind **Nginx**.
- Nginx handles SSL termination and sets `x-forwarded-proto: https`.
- The middleware enforces HTTPS for any `http` request via 301 redirect.
- `deploy.sh` — deployment script (check before running on production).
- Static assets (`/_next/static/*`, images, fonts) are cached for **1 year** (immutable).

---

## Known Patterns & Gotchas

1. **Nonce propagation**: When adding `<script>` tags in server components, read the nonce from `headers().get('x-nonce')` and pass it as the `nonce` prop. Use `suppressHydrationWarning` because React 19 strips the `nonce` attribute from the client DOM for security, causing an expected SSR/client mismatch.

2. **Legacy HTML redirects**: The `legacyPages` array in `next.config.ts` maps old `.html` URLs to new clean routes. When adding a new page that previously existed as `.html`, add the slug to `legacyPages`.

3. **Font variable chain**: `--font-playfair` / `--font-inter` (set by next/font on `<html>`) → `--font-serif` / `--font-sans` (mapped in `globals.css` `:root`) → `font-serif` / `font-sans` (consumed via Tailwind). Both font vars must be present on the `<html>` element.

4. **GA4 nonce**: The GA4 `gtag` scripts in `layout.tsx` use the nonce — do not convert them to third-party `<Script>` components without ensuring nonce compatibility.

5. **No `<img>` tags**: Always use `next/image` `<Image>` component. Raw `<img>` tags bypass optimisation and will cause lint warnings.

6. **PHP admin is separate**: The PHP files co-exist in the same repo but are served by a different process (PHP-FPM / separate Nginx block). They do not interact with the Next.js runtime.

7. **Color palette naming**: The correct Tailwind color scales are `ivory`, `sandstone`, `bronze`, `charcoal`, and `warmgray`. There is no `gold-*` scale.

8. **hreflang scope**: `getAlternates()` currently only emits `en-IN` and `x-default`. Do not add other locale tags until locale-specific landing pages exist — Google's guidelines treat identical-content hreflang variants as noise.

9. **`os.hsios.in`**: The live HSIOS™ platform is hosted separately at `os.hsios.in`. Links to it should use `external: true` / `target="_blank" rel="noopener"` and never be treated as an internal Next.js route.
