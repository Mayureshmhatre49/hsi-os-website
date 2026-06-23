import { createHmac, timingSafeEqual } from 'crypto'
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'

const COOKIE = 'admin_token'
const TTL_MS = 24 * 60 * 60 * 1000 // 24h

function secret(): string {
  const s = process.env.ADMIN_SECRET
  if (!s) throw new Error('ADMIN_SECRET env var is not set')
  return s
}

function sign(timestamp: number): string {
  return createHmac('sha256', secret()).update(`admin|${timestamp}`).digest('hex')
}

export function createAdminToken(): string {
  const ts = Date.now()
  return `${ts}|${sign(ts)}`
}

export function verifyAdminToken(token: string): boolean {
  const parts = token.split('|')
  if (parts.length !== 2) return false
  const [ts, sig] = parts
  const timestamp = parseInt(ts, 10)
  if (isNaN(timestamp) || Date.now() - timestamp > TTL_MS) return false
  const expected = sign(timestamp)
  try {
    return timingSafeEqual(Buffer.from(sig, 'hex'), Buffer.from(expected, 'hex'))
  } catch {
    return false
  }
}

// Use in server components / API routes
export async function getAdminFromCookie(): Promise<boolean> {
  const store = await cookies()
  const token = store.get(COOKIE)?.value
  return token ? verifyAdminToken(token) : false
}

// Use in API route handlers that receive NextRequest
export function getAdminFromRequest(req: NextRequest): boolean {
  const token = req.cookies.get(COOKIE)?.value
  return token ? verifyAdminToken(token) : false
}

export const ADMIN_COOKIE = COOKIE
