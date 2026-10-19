import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { createRateLimiter, clientIp } from '@/lib/rate-limit'

// 3 reset emails per IP per 15 minutes — stops mailbox flooding.
const isRateLimited = createRateLimiter(3, 15 * 60_000)

export async function POST(req: NextRequest) {
  if (isRateLimited(clientIp(req))) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
  }

  const body = await req.json().catch(() => ({}))
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Valid email is required.' }, { status: 400 })
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.hsios.in'

  await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${siteUrl}/partner/reset-password`,
  })

  // Always return ok — never reveal whether the email exists
  return NextResponse.json({ ok: true })
}
