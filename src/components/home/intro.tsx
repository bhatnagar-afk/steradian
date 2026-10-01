'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/lib/motion'
import { MediaFrame } from '@/components/ui/media-frame'
import { FactoryIllustration } from '@/components/illustrations'

type IntroProps = {
  statsBackgroundUrl?: string | null
}

export function Intro({ statsBackgroundUrl }: IntroProps) {
  return (
    <section className="st-intro" id="intro" aria-label="Introduction to the practice">
      <div className="st-wrap st-intro-grid">
        <motion.div
          className="st-intro-copy"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="st-eyebrow">Since 1984</p>
          <p className="st-intro-statement">
            We have spent four decades shaping spaces around the way people live, gather and grow.
          </p>
          <p className="st-intro-para">
            Steradian Architects is an architect-led design and design-build practice based in
            Moradabad, Uttar Pradesh, with a second studio in Greater Noida. Across four decades our
            work has moved between residences, institutions, hospitality and community buildings —
            always returning to the same questions of proportion, material and light.
          </p>
        </motion.div>

        <motion.div
          className="st-intro-stats-media"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <MediaFrame
            src={statsBackgroundUrl}
            alt="Steradian Architects at work"
            illustration={<FactoryIllustration />}
          />
          <div className="st-intro-stats-veil" aria-hidden="true" />
          <div className="st-intro-stats">
            <div className="st-stat">
              <span className="st-stat-num">1984</span>
              <span className="st-stat-label">Founded</span>
            </div>
            <div className="st-stat">
              <span className="st-stat-num">40+ Years</span>
              <span className="st-stat-label">In Practice</span>
            </div>
            <div className="st-stat">
              <span className="st-stat-num">Architecture · Interiors · Design-Build</span>
              <span className="st-stat-label">What We Do</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
