'use client'

import { useEffect, useState } from 'react'

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
    <p className="pl-4 text-sm text-white/70 tracking-wide mb-2">
      {displayedText}
      <span className="ml-0.5 animate-pulse text-white/50">|</span>
    </p>
  )
}
