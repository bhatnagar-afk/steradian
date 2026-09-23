'use client'

import { motion } from 'framer-motion'
import { fadeUpStagger, viewportOnce } from '@/lib/motion'
import { SectionHeading } from '@/components/ui/section-heading'

const STEPS = [
  {
    n: '01',
    title: 'Understand',
    body: 'We begin with people, climate and site — before a single line is drawn.',
  },
  {
    n: '02',
    title: 'Design',
    body: 'Proportion, material, light and movement are developed together, not in sequence.',
  },
  {
    n: '03',
    title: 'Build',
    body: 'Design intent is carried through to site — drawing by drawing, detail by detail.',
  },
  {
    n: '04',
    title: 'Live',
    body: 'A building is only finished once it is lived in, gathered in, used.',
  },
]

export function ApproachSection() {
  return (
    <section className="st-approach" id="approach" aria-label="Our approach">
      <div className="st-wrap">
        <SectionHeading eyebrow="Approach" title="How We Work" onInk />

        <ol className="st-approach-list">
          {STEPS.map((step, i) => (
            <motion.li
              key={step.n}
              className="st-approach-item"
              variants={fadeUpStagger(i * 0.06)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <span className="st-approach-num">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
