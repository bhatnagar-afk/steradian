'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/lib/motion'

export function StorySection() {
  return (
    <section className="st-story" aria-label="Our story">
      <div className="st-wrap">
        <motion.div
          className="st-story-grid"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="st-eyebrow">Since 1984</p>
          <div className="st-story-copy">
            <p>
              Founded in 1984 as an independent architectural practice in Moradabad, our journey
              has been one of steady evolution and enduring vision.
            </p>
            <p>
              In 2021, we became Steradian Architects — inspired by the steradian, the SI unit of
              solid angle, from the Greek <em>stereos</em> (&ldquo;solid&rdquo;) and the English{' '}
              <em>radian</em>. It reflects our pursuit of balance, precision and spatial integrity
              in every space we design.
            </p>
            <p>
              We believe design and construction are inseparable. Our architect-led,
              design-build method carries a concept through to completion without compromise —
              from the first sketch to the last detail on site.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
