'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/lib/motion'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  onInk?: boolean
}

export function SectionHeading({ eyebrow, title, description, onInk }: SectionHeadingProps) {
  return (
    <motion.div
      className="st-section-head"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <div>
        <p className={`st-eyebrow ${onInk ? 'st-eyebrow--on-ink' : ''}`}>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {description && <p className="st-section-cap">{description}</p>}
    </motion.div>
  )
}
