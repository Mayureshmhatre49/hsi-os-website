import { NextRequest, NextResponse } from 'next/server'
import { supabase, supabaseAdmin } from '@/lib/supabase'

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const token = req.cookies.get('partner_token')?.value
  if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: { user }, error } = await supabase.auth.getUser(token)
  if (error || !user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const partnerId = user.user_metadata?.partner_id
  if (!partnerId) return NextResponse.json({ error: 'Not a partner account.' }, { status: 403 })

  const { id } = await params

  // Verify this lead belongs to the partner before returning
  const { data: lead, error: leadErr } = await supabaseAdmin
    .from('leads')
    .select('id, name, project_type, location, budget, timeline, status, lead_score, created_at, referral_partner_id')
    .eq('id', id)
    .single()

  if (leadErr || !lead) return NextResponse.json({ error: 'Lead not found.' }, { status: 404 })
  if (lead.referral_partner_id !== partnerId) return NextResponse.json({ error: 'Forbidden.' }, { status: 403 })

  const [historyRes, commentsRes] = await Promise.all([
    supabaseAdmin
      .from('lead_status_history')
      .select('new_status, note, created_at')
      .eq('lead_id', id)
      .order('created_at', { ascending: true }),
    supabaseAdmin
      .from('lead_comments')
      .select('comment, created_by, created_at')
      .eq('lead_id', id)
      .order('created_at', { ascending: true }),
  ])

  return NextResponse.json({
    lead,
    history: historyRes.data ?? [],
    comments: commentsRes.data ?? [],
  })
}
