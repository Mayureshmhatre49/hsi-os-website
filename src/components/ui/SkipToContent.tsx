export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="
        sr-only focus:not-sr-only
        fixed top-4 left-4 z-[100]
        bg-sandstone-500 text-white
        px-4 py-2 rounded-lg text-sm font-semibold
        focus:outline-none focus:ring-2 focus:ring-sandstone-300
        transition-transform
      "
    >
      Skip to main content
    </a>
  )
}
