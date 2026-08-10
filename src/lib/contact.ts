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
  { display: '+91-9881149629', e164: '+919881149629' },
]

/** Primary phone — used where only a single number fits (quick-call CTAs). */
export const PRIMARY_PHONE = PHONES[0]

/** WhatsApp-registered number (E.164 without the leading "+" for wa.me). */
export const WHATSAPP_NUMBER = '918010234802'

export const EMAIL = 'hello@hsios.in'

/** "+91-8010234802 or +91-9881149629" — for inline prose. */
export const PHONES_INLINE = PHONES.map(p => p.display).join(' or ')
