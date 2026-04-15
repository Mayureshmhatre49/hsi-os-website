'use client'

const items = [
  'Beautiful Interiors. Responsibly Delivered.',
  'Precision Execution. Every Rupee Tracked.',
  'Powered by HSIOS™',
  'From Villa to Penthouse — One Accountable Team.',
  'Sustainability Built Into Every Decision.',
  'Design Meets Intelligence.',
  'Luxury Without Compromise.',
  'Alibag · Mumbai · Pune · Goa · Beyond.',
]

// Duplicate for seamless CSS loop
const doubled = [...items, ...items]

export default function MarqueeTicker() {
  return (
    <div
      className="w-full overflow-hidden bg-sandstone-400 py-3.5 select-none"
      aria-hidden="true"
    >
      <div
        className="flex whitespace-nowrap animate-marquee will-change-transform"
        style={{ animationDuration: '38s' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-8 text-xs font-semibold
                       tracking-[0.14em] uppercase text-white/90"
          >
            <span className="w-1 h-1 rounded-full bg-white/50 flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
