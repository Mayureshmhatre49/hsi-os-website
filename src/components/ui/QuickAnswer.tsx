import React from 'react'

interface QuickAnswerProps {
  label?: string
  children: React.ReactNode
  className?: string
}

export default function QuickAnswer({
  label = 'Quick Answer',
  children,
  className = '',
}: QuickAnswerProps) {
  return (
    <aside
      aria-label={label}
      className={`my-8 p-6 sm:p-7 rounded-2xl bg-sandstone-50 border-l-4 border-bronze-600 border-t border-r border-b border-sandstone-200 text-left shadow-sm ${className}`}
    >
      <div className="flex items-center gap-2 mb-2.5">
        <span className="w-2 h-2 rounded-full bg-bronze-600" />
        <span className="text-xs font-bold uppercase tracking-wider text-bronze-800">
          {label}
        </span>
      </div>
      <div className="text-base sm:text-lg text-charcoal-900 font-medium leading-relaxed">
        {children}
      </div>
    </aside>
  )
}
