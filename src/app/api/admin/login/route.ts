import { NextRequest, NextResponse } from 'next/server'
import { createHash, timingSafeEqual } from 'crypto'
import { createAdminToken, ADMIN_COOKIE } from '@/lib/admin-auth'
import { createRateLimiter, clientIp } from '@/lib/rate-limit'

// 5 attempts per IP per 15 minutes — blunts password brute-forcing.
const isRateLimited = createRateLimiter(5, 15 * 60_000)

/* Hash both sides so the comparison is constant-time regardless of length. */
function passwordMatches(input: string, expected: string): boolean {
  const a = createHash('sha256').update(input).digest()
  const b = createHash('sha256').update(expected).digest()
  return timingSafeEqual(a, b)
}

export async function POST(req: NextRequest) {
  if (isRateLimited(clientIp(req))) {
    return NextResponse.json({ error: 'Too many attempts. Try again in 15 minutes.' }, { status: 429 })
  }

  const expected = process.env.ADMIN_PASSWORD
  const { password } = await req.json().catch(() => ({ password: '' }))
  if (!expected || typeof password !== 'string' || !password || !passwordMatches(password, expected)) {
    return NextResponse.json({ error: 'Invalid password.' }, { status: 401 })
  }
  const token = createAdminToken()
  const res = NextResponse.json({ ok: true })
  res.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24, // 24h
    path: '/',
  })
  return res
}
