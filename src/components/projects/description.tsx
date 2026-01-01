'use client'

import { useEffect, useState } from 'react'
import { colors } from '@/config/theme'
type TypingTextProps = {
  text: string
  speed?: number
}

export default function Description({ text, speed = 35 }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    setDisplayedText('')
    let index = 0

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index])
      index++

      if (index >= text.length) {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return (
    <p className="pl-4 text-sm tracking-wide mb-2" style={{ color: colors.gray[400] }} >
      {displayedText}
      <span className="ml-0.5 animate-pulse" style={{color: colors.gray[500]}}>|</span>
    </p>
  )
}
