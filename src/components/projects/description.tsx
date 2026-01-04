'use client'

import { useEffect, useState } from 'react'
import { colors } from '@/config/theme'

type TypingTextProps = {
  text: string
  speed?: number
}

export default function Description({ text, speed = 20 }: TypingTextProps) {
  const [index, setIndex] = useState(0)

  const cleanText = text.trim()

  useEffect(() => {
    setIndex(0)

    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev >= cleanText.length) {
          clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, speed)

    return () => clearInterval(interval)
  }, [cleanText, speed])

  return (
    <p
      className="pl-4 text-sm tracking-wide mb-2 max-[620px]:text-xs"
      style={{ color: colors.gray[400] }}
    >
      {cleanText.slice(0, index)}
      {index < cleanText.length && (
        <span
          className="ml-0.5 animate-pulse"
          style={{ color: colors.gray[500] }}
        >
          |
        </span>
      )}
    </p>
  )
}
