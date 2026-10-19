import Image from 'next/image'

interface BrandLogoProps {
  /** `light` = on dark backgrounds, `dark` = on light backgrounds */
  tone?: 'light' | 'dark'
  /** Hide the wordmark below the `sm` breakpoint (mark only) */
  compactOnMobile?: boolean
  priority?: boolean
}

// Horizontal lockup of the Hestia Smart Interiors logo:
// arch mark + gold HESTIA wordmark (images) + "Smart Interiors" sub-line (text, so it stays legible at small sizes).
// Images are decorative — the wrapping link carries the aria-label.
export default function BrandLogo({ tone = 'dark', compactOnMobile = false, priority = false }: BrandLogoProps) {
  return (
    <span className="flex items-center gap-2.5">
      <Image
        src="/logo-mark.png"
        alt=""
        width={162}
        height={160}
        priority={priority}
        className="h-10 w-auto"
      />
      <span className={`${compactOnMobile ? 'hidden sm:flex' : 'flex'} flex-col items-center`}>
        <Image
          src="/logo-wordmark.png"
          alt=""
          width={445}
          height={64}
          priority={priority}
          className="h-[18px] w-auto"
        />
        <span
          className={`font-sans text-[9px] font-semibold tracking-[0.32em] uppercase mt-1 pl-[0.32em] leading-none transition-colors duration-300 ${
            tone === 'light' ? 'text-white/80' : 'text-[#0F2E35]'
          }`}
        >
          Smart Interiors
        </span>
      </span>
    </span>
  )
}
