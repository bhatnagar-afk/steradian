'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/lib/motion'

const LETTERS = 'STERADIAN'.split('')

export function WordmarkStrip() {
  return (
    <motion.div
      className="st-wrap st-wordstrip"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      aria-hidden="true"
    >
      <div className="st-wordstrip-letters">
        {LETTERS.map((letter, i) => (
          <span key={i}>{letter}</span>
        ))}
      </div>
      <div className="st-wordstrip-facts">
        <span>Architecture · Interiors · Design-Build</span>
        <span>Est. 1984</span>
        <span>Moradabad, India</span>
      </div>
    </motion.div>
  )
}
