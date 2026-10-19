import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { createRateLimiter, clientIp } from '@/lib/rate-limit'

// 10 attempts per IP per 15 minutes.
const isRateLimited = createRateLimiter(10, 15 * 60_000)

export async function POST(req: NextRequest) {
  if (isRateLimited(clientIp(req))) {
    return NextResponse.json({ error: 'Too many attempts. Try again in 15 minutes.' }, { status: 429 })
  }

  const { email, password } = await req.json().catch(() => ({}))
  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password required.' }, { status: 400 })
  }

  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error || !data.session) {
    return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 })
  }

  // Verify user is a partner (has partner metadata)
  const role = data.user.user_metadata?.role
  if (role !== 'partner') {
    return NextResponse.json({ error: 'Access denied.' }, { status: 403 })
  }

  const res = NextResponse.json({ ok: true, name: data.user.user_metadata?.name })
  res.cookies.set('partner_token', data.session.access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24,
    path: '/',
  })
  return res
}
