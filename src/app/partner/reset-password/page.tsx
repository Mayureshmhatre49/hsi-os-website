'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Lock, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'

export default function ResetPasswordPage() {
  const router = useRouter()
  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [invalid, setInvalid]         = useState(false)
  const [form, setForm]               = useState({ password: '', confirm: '' })
  const [show, setShow]               = useState({ password: false, confirm: false })
  const [loading, setLoading]         = useState(false)
  const [error, setError]             = useState('')
  const [done, setDone]               = useState(false)

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    const params = new URLSearchParams(hash)
    const token = params.get('access_token')
    const type  = params.get('type')

    if (!token || type !== 'recovery') {
      setInvalid(true)
    } else {
      setAccessToken(token)
    }
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (form.password !== form.confirm) {
      setError('Passwords do not match.')
      return
    }
    if (form.password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }

    setLoading(true)
    setError('')

    const res = await fetch('/api/partner/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ accessToken, password: form.password }),
    })

    if (res.ok) {
      setDone(true)
      setTimeout(() => router.replace('/partner/login'), 2500)
    } else {
      const d = await res.json()
      setError(d.error ?? 'Failed to reset password.')
      setLoading(false)
    }
  }

  if (invalid) {
    return (
      <div className="min-h-screen bg-charcoal-800 flex items-center justify-center p-6">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-luxury-lg p-8 text-center space-y-4">
          <div className="text-4xl">⚠️</div>
          <h1 className="text-xl font-bold text-charcoal-800">Invalid Reset Link</h1>
          <p className="text-sm text-warmgray-500">This link has expired or is invalid. Please request a new one.</p>
          <Link href="/partner/forgot-password" className="btn btn-bronze w-full justify-center py-3 text-sm shadow-bronze block text-center">
            Request New Link
          </Link>
        </div>
      </div>
    )
  }

  if (done) {
    return (
      <div className="min-h-screen bg-charcoal-800 flex items-center justify-center p-6">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-luxury-lg p-8 text-center space-y-4">
          <div className="text-4xl">✓</div>
          <h1 className="text-xl font-bold text-charcoal-800">Password Updated</h1>
          <p className="text-sm text-warmgray-500">Redirecting you to login…</p>
        </div>
      </div>
    )
  }

  if (!accessToken) {
    return (
      <div className="min-h-screen bg-charcoal-800 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-sandstone-300 border-t-sandstone-600 animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-charcoal-800 flex items-center justify-center p-6">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-luxury-lg p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-sandstone-400 flex items-center justify-center mb-4 text-white">
            <Lock size={20} />
          </div>
          <h1 className="text-2xl font-bold text-charcoal-800">Set New Password</h1>
          <p className="text-xs text-warmgray-500 mt-1">Choose a strong password for your account.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="form-label">New Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-warmgray-400" size={15} />
              <input
                type={show.password ? 'text' : 'password'}
                value={form.password}
                onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                placeholder="Min. 8 characters"
                className="form-input pl-10 pr-11"
                autoFocus
                required
              />
              <button type="button" onClick={() => setShow(s => ({ ...s, password: !s.password }))}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-warmgray-400 hover:text-charcoal-800">
                {show.password ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          <div>
            <label className="form-label">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-warmgray-400" size={15} />
              <input
                type={show.confirm ? 'text' : 'password'}
                value={form.confirm}
                onChange={e => setForm(f => ({ ...f, confirm: e.target.value }))}
                placeholder="Re-enter password"
                className="form-input pl-10 pr-11"
                required
              />
              <button type="button" onClick={() => setShow(s => ({ ...s, confirm: !s.confirm }))}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-warmgray-400 hover:text-charcoal-800">
                {show.confirm ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>

          {error && <p className="text-red-500 text-xs font-semibold">{error}</p>}

          <button
            type="submit"
            disabled={loading || !form.password || !form.confirm}
            className="btn btn-bronze w-full justify-center py-3 text-sm shadow-bronze disabled:opacity-50"
          >
            {loading ? 'Updating…' : 'Update Password'}
          </button>
        </form>
      </div>
    </div>
  )
}
