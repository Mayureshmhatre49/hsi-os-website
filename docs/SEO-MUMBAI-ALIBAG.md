# Mumbai & Alibag SEO — Playbook

What is already built into the site, and the off-site work that only the HSI team can do. Off-site work (Google Business Profile, reviews, links) now decides local rankings more than anything left on-page.

---

## 1. Keyword map — one page per intent

Each search intent has exactly one page that should rank. Don't create new pages that target the same intent; strengthen the owner page instead.

| Search intent (examples) | Owner page |
|---|---|
| alibag villa interiors · alibaug interior designer · villa interior execution alibag · interior contractor alibag | `/alibag-villa-interiors` |
| luxury interior designer mumbai · penthouse interiors worli · apartment interiors bandra | `/mumbai-luxury-interiors` |
| build second home alibag · alibag villa from mumbai · atal setu alibag villa | `/insights/alibag-second-home-from-mumbai` |
| society noc for renovation mumbai · flat renovation rules mumbai | `/insights/mumbai-apartment-renovation-society-noc` |
| villa interior cost alibag · cost per sq ft alibag villa | `/insights/alibag-villa-cost` |
| how long does a villa interior take · alibag construction timeline | `/insights/alibag-timeline` |
| luxury villa interiors alibag (brand + head term) | `/` (homepage) |
| casa frangipani alibag | `/projects/casa-frangipani` |

`/alibaug-villa` is a paid-ads landing page and is deliberately `noindex, follow`. Point ads at it freely; it won't compete with the pages above.

## 2. What's on the site now

- **Business schema** (every page): `InteriorDesigner` + `HomeAndConstructionBusiness`. It covers Alibag, Mumbai, Raigad district and the Konkan coast, each linked to its Wikipedia entity, so Alibag/Alibaug/Alibagh all resolve to the same place.
- **Location pages**: a `Service` schema listing the served micro-areas, a `FAQPage` schema, and `BreadcrumbList`.
  - Alibag: Mandwa, Kihim, Awas, Sasawane, Zirad, Thal, Varsoli, Nagaon, Chondhi, Chaul, Revdanda.
  - Mumbai: South Mumbai, the western suburbs and Powai.
- **Articles**: `BlogPosting` with real publish dates, image, publisher logo and `about` place entities, plus breadcrumbs.
- **Internal links**: homepage → Alibag / Mumbai / NRI pages; Mumbai ↔ Alibag; both location pages ↔ guides ↔ the Casa Frangipani case study.
- **AI answer engines**: `public/llms.txt` and `llms-full.txt` carry the Mumbai/Alibag facts, areas and guides.
- **Source of truth**: location names and areas live in `src/content/locations.ts`; numbers live in `src/content/facts.ts`. Edit there, not on individual pages.

## 3. Google Business Profile (highest impact — do first)

1. Create or claim the profile as a **service-area business**. Hide the street address, since none is published on the site, and set the service areas to Alibag, Raigad, Mumbai, Navi Mumbai and Thane.
2. **Primary category**: Interior designer. **Secondary**: Interior construction contractor, Construction company, General contractor.
3. **Name**: exactly `Hestia Smart Interiors`. No keywords in the name (Google suspends for this).
4. **Phone**: +91-8010234802 (matches the site). **Website**: `https://www.hsios.in/alibag-villa-interiors`, with UTM `?utm_source=gbp`.
5. **Hours**: Mon–Fri 09:00–18:00 and Sat 10:00–15:00, the same as the site schema.
6. Add services with short descriptions, matching the keyword map above.
7. Upload real project photos (Casa Frangipani, Bellissimo, Serenity, Awas), with at least 10 to start and a few new ones each month.
8. Post monthly: project milestones, monsoon-prep tips, links to the guides.
9. Seed Q&A with the FAQ questions from the location pages, answered from the business account.

## 4. Reviews

- Ask every handed-over client for a Google review, using the GBP short review link. Ask at handover, when satisfaction peaks.
- It helps when a review naturally mentions the location and the work ("our villa in Kihim", "Mumbai apartment renovation"). Never script or incentivise reviews.
- Reply to every review within 48 hours.
- Once at least 5 real reviews exist, consider showing them on the site. Only then can `aggregateRating` be added to the schema; Google requires the reviews to be visible on the same page.
- **Pending**: the Abhishek Bajoria testimonial was removed until a verified version exists. Get written permission and the exact wording, then add it to `src/content/testimonials.ts` with `verified: true`.

## 5. Citations (NAP consistency)

List HSI on these, with the **name, phone and website exactly as on the site** (+91-8010234802 primary, +91-9766645771 alternate, hello@hsios.in):

- Justdial, Sulekha, IndiaMART: Indian local directories that rank for "interior designer Alibag".
- Houzz India and Architectural Digest India's directory, if eligible.
- Apple Business Connect (Apple Maps) and Bing Places. Bing can import directly from Google Business Profile.
- LinkedIn company page and Instagram bio: same name and phone, linking to the website.

Any old listing that shows +91-9881149629 must be updated, because mismatched phone numbers dilute local trust signals.

## 6. Links and mentions (authority)

- **Hestia Villas** (`hestiavillas.in`): link to the relevant HSIOS pages from each villa listing and case study ("Interiors executed by Hestia Smart Interiors"). This is the easiest high-relevance link available.
- **Architects you've executed for**: ask for a credit link on their project pages.
- **Alibag / Konkan local media and blogs**: pitch the monsoon-proofing and "building from Mumbai" angles. Local news sites carry strong local relevance.
- **Mumbai real-estate press** (Mumbai Mirror property, Hindustan Times Estates, Housing.com news): pitch data-led stories, e.g. "what an Alibag villa interior really costs".
- **Supplier and brand partners** (fixtures, automation): many have "where to buy" or "projects" pages.

## 7. Measurement

1. **Google Search Console**: verify `https://www.hsios.in` (the env var `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` is already supported), submit `/sitemap.xml`, and request indexing for the two new guides and both location pages.
2. **Bing Webmaster Tools**: import from Search Console.
3. Track monthly in Search Console:
   - Impressions and position for queries containing *alibag*, *alibaug* and *mumbai*.
   - Clicks to the keyword-map pages.
4. **GA4**: create a conversion report on `form_submit` and `whatsapp_click`, filtered to landing pages from the keyword map.
5. **GBP Insights**: calls, website clicks and direction requests, monthly.

## 8. Content to add next (in priority order)

Only publish what is genuinely useful and accurate. Thin "interior designer in [village]" pages count as doorway pages and get penalised.

1. **Casa Frangipani**: expand the case study with more photos and a short owner quote, once a verified quote exists.
2. **Alibag monsoon-proofing checklist**: very high intent from April to May each year.
3. **Mumbai penthouse fit-out**: a case study as soon as a Mumbai project can be shown with permission.
4. **Bring the Alibag cost guide in line with the pricing page.** The guide says ₹4,500–7,500/sq ft for villas; the pricing page says ₹3,000–8,000+.
5. **Marathi and Hindi**: only if you'll keep them maintained. At that point hreflang can be extended beyond `en-IN`.
