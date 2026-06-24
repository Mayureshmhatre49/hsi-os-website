import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { accessToken, password } = body

  if (!accessToken || typeof accessToken !== 'string') {
    return NextResponse.json({ error: 'Invalid reset token.' }, { status: 400 })
  }
  if (!password || typeof password !== 'string' || password.length < 8) {
    return NextResponse.json({ error: 'Password must be at least 8 characters.' }, { status: 400 })
  }

  // Verify the access token and get the user
  const { data: { user }, error: userErr } = await supabaseAdmin.auth.getUser(accessToken)
  if (userErr || !user) {
    return NextResponse.json({ error: 'Reset link has expired. Please request a new one.' }, { status: 400 })
  }

  // Confirm this is a partner account
  if (user.user_metadata?.role !== 'partner') {
    return NextResponse.json({ error: 'Not a partner account.' }, { status: 403 })
  }

  // Update the password
  const { error: updateErr } = await supabaseAdmin.auth.admin.updateUserById(user.id, { password })
  if (updateErr) {
    return NextResponse.json({ error: updateErr.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
