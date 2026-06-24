'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail]   = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent]     = useState(false)
  const [error, setError]   = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/partner/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    if (res.ok) {
      setSent(true)
    } else {
      const d = await res.json()
      setError(d.error ?? 'Something went wrong.')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-charcoal-800 flex items-center justify-center p-6">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-luxury-lg p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-sandstone-400 flex items-center justify-center mb-4 text-white">
            <Mail size={20} />
          </div>
          <h1 className="text-2xl font-bold text-charcoal-800">Reset Password</h1>
          <p className="text-xs text-warmgray-500 mt-1 text-center">
            Enter your partner email and we'll send a reset link.
          </p>
        </div>

        {sent ? (
          <div className="space-y-5">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-800 text-center">
              Check your inbox — a password reset link has been sent to <strong>{email}</strong>.
            </div>
            <Link
              href="/partner/login"
              className="btn btn-bronze w-full justify-center py-3 text-sm shadow-bronze block text-center"
            >
              Back to Login
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="form-label">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-warmgray-400" size={15} />
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="form-input pl-10"
                  autoFocus
                  required
                />
              </div>
            </div>

            {error && <p className="text-red-500 text-xs font-semibold">{error}</p>}

            <button
              type="submit"
              disabled={loading || !email}
              className="btn btn-bronze w-full justify-center py-3 text-sm shadow-bronze disabled:opacity-50"
            >
              {loading ? 'Sending…' : 'Send Reset Link'}
            </button>

            <p className="text-center text-xs text-warmgray-400">
              <Link href="/partner/login" className="text-sandstone-600 hover:underline">← Back to login</Link>
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
