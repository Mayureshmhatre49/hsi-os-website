import { NextRequest, NextResponse } from 'next/server'
import { getAdminFromRequest } from '@/lib/admin-auth'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!getAdminFromRequest(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await params
  const { comment } = await req.json()

  if (!comment?.trim()) {
    return NextResponse.json({ error: 'Comment cannot be empty.' }, { status: 400 })
  }

  const { data, error } = await supabaseAdmin
    .from('lead_comments')
    .insert([{ lead_id: id, comment: comment.trim() }])
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ comment: data }, { status: 201 })
}
