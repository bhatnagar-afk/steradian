'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { MediaFrame } from './media-frame'

type RotatingMediaFrameProps = {
  images: string[]
  alt: string
  illustration: ReactNode
  className?: string
  sizes?: string
  intervalMs?: number
}

export function RotatingMediaFrame({
  images,
  alt,
  illustration,
  className,
  sizes = '(min-width: 900px) 50vw, 100vw',
  intervalMs = 5000,
}: RotatingMediaFrameProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const id = setInterval(() => {
      setActiveIndex((previous) => (previous + 1) % images.length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [images.length, intervalMs])

  if (images.length <= 1) {
    return (
      <MediaFrame src={images[0] ?? null} alt={alt} illustration={illustration} className={className} sizes={sizes} />
    )
  }

  return (
    <div className={`st-media-frame ${className ?? ''}`}>
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={`st-media-frame-img st-rotating-img ${index === activeIndex ? 'is-active' : ''}`}
        />
      ))}
    </div>
  )
}
