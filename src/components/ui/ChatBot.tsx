'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { getReply, SUGGESTIONS, type KBLink } from '@/lib/chatbot-knowledge'

type Message = {
  role: 'bot' | 'user'
  text: string
  link?: KBLink
  suggestions?: string[]
}

const GREETING: Message = {
  role: 'bot',
  text: 'Hello! I’m the HSI assistant. Ask me anything about our interior execution services, HSIOS™, pricing, locations or how to get started.',
  suggestions: SUGGESTIONS.slice(0, 4),
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([GREETING])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)

  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to newest message
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  // Focus input + Escape-to-close when open
  useEffect(() => {
    if (!open) return
    const t = setTimeout(() => inputRef.current?.focus(), 120)
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => { clearTimeout(t); document.removeEventListener('keydown', onKey) }
  }, [open])

  const send = useCallback((text: string) => {
    const q = text.trim()
    if (!q) return
    setInput('')
    setMessages(prev => [...prev, { role: 'user', text: q }])
    setTyping(true)
    // Small, deterministic delay for a natural feel (client-only timer).
    window.setTimeout(() => {
      const reply = getReply(q)
      setMessages(prev => [
        ...prev,
        { role: 'bot', text: reply.answer, link: reply.link, suggestions: reply.suggestions },
      ])
      setTyping(false)
    }, 450)
  }, [])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    send(input)
  }

  return (
    <>
      {/* Launcher — bottom-left so it clears the WhatsApp float (right) */}
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
        aria-expanded={open}
        aria-controls="hsi-chat-panel"
        className="group fixed left-4 bottom-20 lg:left-6 lg:bottom-6 z-40 flex items-center gap-2.5 rounded-full bg-charcoal-800 text-white shadow-luxury-lg hover:shadow-bronze-lg transition-all duration-300 hover:scale-105 active:scale-95 p-3.5 lg:pl-4 lg:pr-5"
        style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
      >
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0 text-sandstone-300" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-sandstone-300" aria-hidden="true">
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
          </svg>
        )}
        <span className="hidden lg:inline text-sm font-semibold whitespace-nowrap">
          {open ? 'Close' : 'Ask a question'}
        </span>
      </button>

      {/* Panel */}
      <div
        id="hsi-chat-panel"
        ref={panelRef}
        role="dialog"
        aria-modal="false"
        aria-label="HSI chat assistant"
        className={`fixed left-4 right-4 sm:right-auto z-40 flex flex-col overflow-hidden rounded-3xl border border-ivory-300 bg-ivory-50 shadow-luxury-lg transition-all duration-300 ease-out
          bottom-36 sm:bottom-24 lg:bottom-24 sm:left-6 sm:w-[380px]
          ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        style={{ maxHeight: 'min(70vh, 560px)' }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 bg-charcoal-800 text-white flex-shrink-0">
          <div className="flex items-center justify-center w-9 h-9 rounded-full bg-sandstone-400 text-white text-xs font-bold tracking-widest flex-shrink-0">
            H
          </div>
          <div className="min-w-0">
            <div className="font-serif font-bold leading-tight">HSI Assistant</div>
            <div className="text-[11px] text-warmgray-300 leading-tight">Answers from our site · replies instantly</div>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
            className="ml-auto w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors flex-shrink-0"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3" aria-live="polite">
          {messages.map((m, i) => (
            <div key={i} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
              <div className={`max-w-[85%] ${m.role === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-2`}>
                <div
                  className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-bronze-700 text-white rounded-br-md'
                      : 'bg-white text-charcoal-800 border border-ivory-300 rounded-bl-md'
                  }`}
                >
                  {m.text}
                </div>

                {m.link && (
                  m.link.external ? (
                    <a
                      href={m.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-sandstone-700 hover:text-sandstone-900 underline underline-offset-2"
                    >
                      {m.link.label}
                    </a>
                  ) : (
                    <Link
                      href={m.link.href}
                      onClick={() => setOpen(false)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-sandstone-700 hover:text-sandstone-900 underline underline-offset-2"
                    >
                      {m.link.label} →
                    </Link>
                  )
                )}

                {m.suggestions && m.suggestions.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-0.5">
                    {m.suggestions.map(s => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => send(s)}
                        className="text-left text-xs font-medium text-charcoal-700 bg-white border border-ivory-300 hover:border-sandstone-300 hover:bg-sandstone-50 rounded-full px-3 py-1.5 transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex justify-start">
              <div className="bg-white border border-ivory-300 rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-warmgray-400 animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-warmgray-400 animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-warmgray-400 animate-bounce" />
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={onSubmit} className="flex items-center gap-2 p-3 border-t border-ivory-200 bg-ivory-50 flex-shrink-0">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask about services, pricing…"
            aria-label="Type your question"
            className="flex-1 min-w-0 bg-white border border-ivory-300 rounded-full px-4 py-2.5 text-sm text-charcoal-800 placeholder:text-warmgray-400 focus:outline-none focus:ring-2 focus:ring-sandstone-300 focus:border-sandstone-300"
          />
          <button
            type="submit"
            aria-label="Send message"
            disabled={!input.trim()}
            className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-bronze-700 text-white hover:bg-bronze-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </form>
      </div>
    </>
  )
}
