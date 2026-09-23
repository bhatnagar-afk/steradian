import Image from 'next/image'
import type { ReactNode } from 'react'

type MediaFrameProps = {
  /**
   * The image URL — pass a Sanity asset URL here once real photography is
   * curated for this slot. Leave undefined/null and the section shows its
   * duotone line-art placeholder instead, so the page never breaks while
   * content is still being added in Sanity.
   */
  src?: string | null
  alt: string
  illustration: ReactNode
  className?: string
  sizes?: string
  priority?: boolean
}

export function MediaFrame({
  src,
  alt,
  illustration,
  className,
  sizes = '(min-width: 900px) 50vw, 100vw',
  priority,
}: MediaFrameProps) {
  return (
    <div className={`st-media-frame ${className ?? ''}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="st-media-frame-img"
        />
      ) : (
        <div className="st-media-frame-illustration" aria-hidden="true">
          {illustration}
        </div>
      )}
    </div>
  )
}
