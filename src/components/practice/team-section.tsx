'use client'

import { motion } from 'framer-motion'
import { fadeUpStagger, viewportOnce } from '@/lib/motion'
import { SectionHeading } from '@/components/ui/section-heading'
import { principals } from '@/config/site'

export function TeamSection() {
  return (
    <section className="st-team" id="team" aria-label="Our principals">
      <div className="st-wrap">
        <SectionHeading eyebrow="Leadership" title="The Principals" />
        <div className="st-team-grid">
          {principals.map((member, i) => (
            <motion.a
              key={member.name}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="st-team-card"
              variants={fadeUpStagger(i * 0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <span className="st-eyebrow">{member.role}</span>
              <h3>{member.name}</h3>
              {member.bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <span className="st-team-link">View LinkedIn Profile →</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
