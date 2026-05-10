# HSIOS Website — CLAUDE.md

> Project context for AI coding assistants working on the Hestia Smart Interiors website.

---

## Project Overview

**Hestia Smart Interiors (HSI)** is a luxury interior execution firm. The website (`www.hsios.in`) is the primary marketing and lead-generation platform for HSI's core service offering — **HSIOS™**, an interior execution operating system for premium homes.

The website is **not** a design portfolio. It is a precision-positioned brand platform that communicates execution intelligence, sustainability, and accountability to discerning clients (homeowners, NRIs, architects, developers).

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | **Next.js 15** (App Router, Turbopack) |
| Language | **TypeScript** |
| Styling | **Tailwind CSS v3** + custom design tokens |
| Animations | **Framer Motion** |
| Icons | **Lucide React** |
| Fonts | Playfair Display (`--font-playfair`) + Inter (`--font-inter`) via `next/font/google` |
| Email | **Nodemailer** via SMTP (Hostinger) |
| Analytics | **GA4** via `gtag` (nonce-injected) |
| Performance | `web-vitals` via `WebVitals` component |
| Testing | **Playwright** |
| Hosting | VPS behind Nginx + HTTPS enforcement |

---

## Directory Structure

```
/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout — fonts, metadata, JSON-LD schemas, GA4
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles + Tailwind base
│   │   ├── robots.ts           # Dynamic robots.txt
│   │   ├── sitemap.ts          # Dynamic sitemap
│   │   ├── api/
│   │   │   └── contact/        # Contact form API route (Nodemailer)
│   │   └── [route]/            # Each page as its own directory (App Router convention)
│   ├── components/
│   │   ├── Navbar.tsx          # Site-wide navigation
│   │   ├── Footer.tsx          # Site-wide footer
│   │   ├── WebVitals.tsx       # Core Web Vitals reporter
│   │   └── ui/
│   │       ├── FAQAccordion.tsx
│   │       ├── MarqueeTicker.tsx
│   │       ├── PlatformPreview.tsx  # HSIOS™ platform interactive preview
│   │       ├── RevealOnScroll.tsx   # Framer Motion scroll animation wrapper
│   │       ├── SkipToContent.tsx    # Accessibility skip link
│   │       └── StickyMobileCTA.tsx  # Mobile floating CTA bar
│   ├── lib/                    # Shared utilities / helpers
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
| `/contact` | Contact + consultation booking |
| `/pricing` | Pricing overview |
| `/insights` | Blog / insights hub |
| `/sustainability` | Sustainability commitment page |
| `/demo` | HSIOS™ platform demo |
| `/blog-*` | Individual blog articles |
| `/alibag-villa-interiors` | SEO landing — Alibag |
| `/mumbai-luxury-interiors` | SEO landing — Mumbai |
| `/pune-premium-interiors` | SEO landing — Pune |
| `/goa-villa-interiors` | SEO landing — Goa |
| `/bangalore-luxury-interiors` | SEO landing — Bangalore |
| `/nri-home-interior-management` | SEO landing — NRI clients |
| `/privacy`, `/terms` | Legal pages |

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
# Install dependencies
npm install

# Start development server (Turbopack)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Type-check without emitting
npm run type-check

# Lint
npm run lint
```

Dev server runs on **http://localhost:3000** by default.

---

## Security Architecture

Security is enforced at two layers:

### 1. Static headers — `next.config.ts`
Applied to all routes: HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, CORP, COOP.

### 2. Dynamic CSP — `src/middleware.ts`
- A **per-request nonce** is generated via `crypto.randomUUID()` and base64-encoded.
- The nonce is injected into a strict `Content-Security-Policy` header for HTML routes.
- The nonce is forwarded to server components via the `x-nonce` request header.
- In **production**: `script-src` uses `'self' 'nonce-{nonce}'` — no `unsafe-inline`.
- In **development**: `unsafe-eval` and `unsafe-inline` are permitted for HMR.
- API routes skip nonce injection but still receive HTTPS enforcement.

> **Important**: Any `<script>` tag added to `layout.tsx` or page components **must** receive the `nonce` prop from `headers()` to pass CSP in production.

---

## SEO Conventions

- **Metadata** is defined per-page using Next.js `export const metadata`.
- Root-level metadata lives in `src/app/layout.tsx`.
- **JSON-LD schemas** (LocalBusiness, Organization, WebSite) are injected in the root layout.
- **Canonical URLs** always point to `https://www.hsios.in/{route}`.
- **`hreflang`** tags cover `en`, `en-IN`, `en-GB`, `en-US`, `en-AU`, `en-SG`, `x-default`.
- **Sitemap** is generated dynamically at `/sitemap.ts`.
- **Legacy `.html` redirects**: All old static HTML pages are 301-redirected in `next.config.ts`. When adding new pages, check if an `.html` equivalent exists and add a redirect entry to the `legacyPages` array.

---

## Image Conventions

- All project/hero images are stored in `/public/`.
- Naming convention: `projects-{project-name}-{number}.jpg`, e.g. `projects-casa-frangipani-1.jpg`.
- Use Next.js `<Image>` component for all images — never bare `<img>` tags.
- Supported remote patterns: `hestiavillas.in`, `www.hsios.in`.
- Preferred formats: **AVIF > WebP** (configured in `next.config.ts`).
- `minimumCacheTTL` is set to 30 days.

---

## Design System

### Fonts
- **Playfair Display** — headings, luxury/editorial feel. CSS var: `--font-playfair`.
- **Inter** — body copy, UI text. CSS var: `--font-inter`.

### Tailwind Custom Tokens
Defined in `tailwind.config.ts`. Key tokens include:
- **Colors**: `ivory-*`, `charcoal-*`, `gold-*` palette.
- **Body background**: `bg-ivory-100`.
- **Body text**: `text-charcoal-800`.
- **Font families**: `font-serif` → Playfair Display, `font-sans` → Inter.

### Animation
- Use **Framer Motion** for all scroll-triggered and interactive animations.
- The `RevealOnScroll` wrapper component handles standard scroll reveal patterns — prefer this over custom motion implementations.
- Framer Motion is optimised via `optimizePackageImports` in `next.config.ts`.

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
- No reCAPTCHA is currently active — the keys are commented out in `.env.local.example` and can be enabled if bot traffic is a concern.

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

1. **Nonce propagation**: When adding new `<script>` tags in server components, always read the nonce from `headers().get('x-nonce')` and pass it as the `nonce` prop. Missing nonces will cause CSP violations in production.

2. **Legacy HTML redirects**: The `legacyPages` array in `next.config.ts` maps old `.html` URLs to new clean routes. When adding a new page that previously existed as a `.html` file, add it to this array.

3. **Font variables**: Both font variables (`--font-playfair`, `--font-inter`) must be present on the `<html>` element (set in `layout.tsx`). Do not remove them.

4. **GA4 nonce**: The GA4 `gtag` scripts in `layout.tsx` use the nonce — do not convert them to third-party `<Script>` components without ensuring nonce compatibility.

5. **No `<img>` tags**: Always use `next/image` `<Image>` component. Raw `<img>` tags bypass optimisation and will cause lint warnings.

6. **PHP admin is separate**: The PHP files co-exist in the same repo but are served by a different process (PHP-FPM / separate Nginx block). They do not interact with the Next.js runtime.
