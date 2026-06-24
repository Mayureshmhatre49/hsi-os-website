import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  const body = await req.json()
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
