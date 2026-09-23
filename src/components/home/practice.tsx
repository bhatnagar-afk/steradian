'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/lib/motion'
import { MediaFrame } from '@/components/ui/media-frame'
import { PracticePlanIllustration } from '@/components/illustrations'
import { Glyph } from '@/components/site/glyph'

type PracticeProps = {
  portraitUrl?: string | null
}

export function Practice({ portraitUrl }: PracticeProps) {
  return (
    <section className="st-practice" id="practice" aria-label="About the practice">
      <div className="st-wrap st-practice-grid">
        <motion.div
          className="st-practice-media"
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
          className="st-practice-copy"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="st-eyebrow">Practice</p>
          <h2>Steradian Architects</h2>
          <p>
            Established in 1984, Steradian Architects is a practice rooted in a long-standing
            understanding of Indian climate, material and craft — and in the evolving ways people
            inhabit space today. We work across architecture, interiors and design-build delivery,
            led throughout by the architect&apos;s hand, from our studios in Moradabad and Greater
            Noida.
          </p>
          <ul className="st-practice-list">
            <li>Architect-Led Design</li>
            <li>Design-Build</li>
            <li>Interiors</li>
            <li>Institutional</li>
            <li>Hospitality</li>
            <li>Residential</li>
          </ul>
          <div className="st-practice-note">
            <Glyph className="st-practice-note-glyph" />
            <p>
              A steradian is the SI unit of solid angle — a measure of how completely a form is seen
              from a single point in space. We took the name in 2021, as a fair description of what
              we aim for in every room we make.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
