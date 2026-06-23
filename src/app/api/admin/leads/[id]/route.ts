import { NextRequest, NextResponse } from 'next/server'
import { getAdminFromRequest } from '@/lib/admin-auth'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!getAdminFromRequest(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params

  const [leadRes, historyRes, commentsRes] = await Promise.all([
    supabaseAdmin
      .from('leads')
      .select(`*, referral_partners(id, name, email, phone)`)
      .eq('id', id)
      .single(),
    supabaseAdmin
      .from('lead_status_history')
      .select('*')
      .eq('lead_id', id)
      .order('created_at', { ascending: true }),
    supabaseAdmin
      .from('lead_comments')
      .select('*')
      .eq('lead_id', id)
      .order('created_at', { ascending: true }),
  ])

  if (leadRes.error) return NextResponse.json({ error: leadRes.error.message }, { status: 404 })

  return NextResponse.json({
    lead: leadRes.data,
    history: historyRes.data ?? [],
    comments: commentsRes.data ?? [],
  })
}
