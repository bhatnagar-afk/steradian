type GlyphProps = {
  className?: string
}

/**
 * The Steradian mark: a cone of rays from the centre of a sphere subtending
 * a patch on its surface — the literal geometric definition of a steradian.
 * Used as the studio's wordmark glyph throughout the site.
 */
export function Glyph({ className }: GlyphProps) {
  return (
    <svg
      className={`st-glyph ${className ?? ''}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" />
      <path d="M12 12 L4.3 4.2 M12 12 L19.7 4.2" />
      <path d="M4.3 4.2 A 11 11 0 0 1 19.7 4.2" />
    </svg>
  )
}
