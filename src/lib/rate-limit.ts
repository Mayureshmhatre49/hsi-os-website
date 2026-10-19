import { NextRequest } from 'next/server'

/* ── In-memory fixed-window rate limiter ───────────────────
   Sufficient for the single-process PM2 deployment. Each caller
   gets its own bucket map so limits don't bleed across routes.
   ─────────────────────────────────────────────────────────── */
const MAP_CEILING = 10_000

export function createRateLimiter(limit: number, windowMs: number) {
  const hits = new Map<string, { count: number; reset: number }>()

  return function isRateLimited(key: string): boolean {
    const now = Date.now()

    if (hits.size >= MAP_CEILING) {
      for (const [k, v] of hits) if (now > v.reset) hits.delete(k)
    }

    const entry = hits.get(key)
    if (!entry || now > entry.reset) {
      hits.set(key, { count: 1, reset: now + windowMs })
      return false
    }
    if (entry.count >= limit) return true
    entry.count++
    return false
  }
}

/* The LAST X-Forwarded-For hop is the one Nginx appended from the socket
   address; earlier hops are client-supplied and trivially spoofable. */
export function clientIp(req: NextRequest): string {
  const hops = req.headers.get('x-forwarded-for')?.split(',')
  return hops?.[hops.length - 1]?.trim() || 'unknown'
}
