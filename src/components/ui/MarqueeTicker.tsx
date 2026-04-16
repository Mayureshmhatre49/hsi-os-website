'use client'

const items = [
  'Precision is the New Luxury.',
  'Build Once. Build Right.',
  'Where Luxury Meets Logic.',
  'Powered by HSIOS™',
  'Intelligent Planning. Flawless Execution.',
  'Sustainability Without Compromise.',
  'The Future of Premium Interiors.',
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
