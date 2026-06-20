/**
 * Pill button ala Mercedes F1.
 * variant: "mint" (solid mint, teks hitam) | "ghost" (outline)
 */
export default function Button({ children, href, onClick, variant = 'mint', className = '', arrow = true, ...props }) {
  if (onClick) {
    if (variant === 'ghost') {
      return (
        <button onClick={onClick} className={`btn-f1-ghost ${className}`} {...props}>
          <span className="btn-f1-ghost-inner">
            {children}
            {arrow && <span aria-hidden="true">→</span>}
          </span>
        </button>
      )
    }

    return (
      <button
        onClick={onClick}
        className={`inline-flex items-center gap-2 px-6 py-3 font-heading font-bold text-sm tracking-wide transition-all duration-300 tag-f1 bg-mint text-f1-black hover:bg-white cursor-pointer ${className}`}
        {...props}
      >
        {children}
        {arrow && <span aria-hidden="true">→</span>}
      </button>
    )
  }

  const targetHref = href || '#'
  if (variant === 'ghost') {
    return (
      <a href={targetHref} className={`btn-f1-ghost ${className}`} {...props}>
        <span className="btn-f1-ghost-inner">
          {children}
          {arrow && <span aria-hidden="true">→</span>}
        </span>
      </a>
    )
  }

  // Solid mint button
  return (
    <a
      href={targetHref}
      className={`inline-flex items-center gap-2 px-6 py-3 font-heading font-bold text-sm tracking-wide transition-all duration-300 tag-f1 bg-mint text-f1-black hover:bg-white cursor-pointer ${className}`}
      {...props}
    >
      {children}
      {arrow && <span aria-hidden="true">→</span>}
    </a>
  )
}
