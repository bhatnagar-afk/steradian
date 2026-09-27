'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/lib/motion'
import { MediaFrame } from '@/components/ui/media-frame'
import { PracticePlanIllustration } from '@/components/illustrations'

type StorySectionProps = {
  portraitUrl?: string | null
}

export function StorySection({ portraitUrl }: StorySectionProps) {
  return (
    <section className="st-story" aria-label="Our story">
      <div className="st-wrap st-story-grid">
        <motion.div
          className="st-story-media"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <MediaFrame
            src={portraitUrl}
            alt="Steradian Architects studio"
            illustration={<PracticePlanIllustration />}
          />
        </motion.div>
        <motion.div
          className="st-story-copy"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="st-eyebrow">Since 1984</p>
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
        </motion.div>
      </div>
    </section>
  )
}
