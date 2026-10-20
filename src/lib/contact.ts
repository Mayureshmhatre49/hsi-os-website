/**
 * Single source of truth for HSI contact details.
 *
 * PHONES     — displayed everywhere contact info is listed. Each entry powers a
 *              clickable `tel:` link. Order = display priority.
 * WHATSAPP   — the WhatsApp-registered number. WhatsApp deep links (`wa.me/…`)
 *              must use this one number only; do not point WhatsApp CTAs at a
 *              number that is not on WhatsApp.
 * EMAIL      — primary customer-facing address.
 */

export type Phone = {
  /** Human-readable display form, e.g. "+91-8010234802" */
  display: string
  /** E.164 form for `tel:` / `wa.me` links, e.g. "+918010234802" */
  e164: string
}

export const PHONES: Phone[] = [
  { display: '+91-8010234802', e164: '+918010234802' },
  { display: '+91-9766645771', e164: '+919766645771' },
]

/** Primary phone — used where only a single number fits (quick-call CTAs). */
export const PRIMARY_PHONE = PHONES[0]

/** WhatsApp-registered number (E.164 without the leading "+" for wa.me). */
export const WHATSAPP_NUMBER = '918010234802'

export const EMAIL = 'hello@hsios.in'

/** "+91-8010234802 or +91-9766645771" — for inline prose. */
export const PHONES_INLINE = PHONES.map(p => p.display).join(' or ')

export type Office = {
  country: string
  label: string
  company: string
  addressLines: string[]
  phone: Phone
  /** Google Maps search link — only for offices whose address we publish as HSI's own. */
  mapsUrl?: string
}

const maps = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`

/** HSI's own offices in India. Address text exactly as supplied (2026-10-20). */
export const INDIA_OFFICES: Office[] = [
  {
    country: 'India',
    label: 'Alibag Office',
    company: 'Hestia Smart Interiors',
    addressLines: ['Mhatre Road, Dhokawade', 'Alibag, Maharashtra 402201'],
    phone: PHONES[0],
    mapsUrl: maps('Hestia Smart Interiors, Mhatre Road, Dhokawade, Alibag, Maharashtra 402201'),
  },
  {
    country: 'India',
    label: 'Pune Office',
    company: 'Hestia Smart Interiors',
    addressLines: ['C 706, Teerth Technospace', 'Behind Mercedes Benz Showroom', 'Baner, Pune – 411045'],
    phone: PHONES[1],
    mapsUrl: maps('Teerth Technospace, Baner, Pune 411045'),
  },
]

/** International offices. Address text exactly as supplied. */
export const OFFICES: Office[] = [
  {
    country: 'Switzerland',
    label: 'Zuzwil Office',
    company: 'Taurus swiss GmbH',
    addressLines: ['Glärnischstrasse 7', '9524 Zuzwil', 'Switzerland'],
    phone: { display: '+41 78 905 50 40', e164: '+41789055040' },
  },
  {
    country: 'Türkiye',
    label: 'Istanbul Office',
    company: 'Best Services Istanbul',
    addressLines: ['Aksaray Mahallesi', 'Cerrahpaşa Caddesi 7, D:3', 'Fatih, Istanbul', 'Türkiye'],
    phone: { display: '+90 552 888 54 21', e164: '+905528885421' },
  },
]
