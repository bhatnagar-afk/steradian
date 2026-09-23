'use client'

import { motion } from 'framer-motion'
import { fadeUpStagger, viewportOnce } from '@/lib/motion'
import { SectionHeading } from '@/components/ui/section-heading'

type TeamMember = {
  name: string
  role: string
  linkedin: string
  bio: string[]
}

const TEAM: TeamMember[] = [
  {
    name: 'Ar. Rajesh Bhatnagar',
    role: 'Founding Principal',
    linkedin: 'https://www.linkedin.com/in/rajesh-bhatnagar-82085734/',
    bio: [
      'With over four decades of architectural practice, Rajesh Bhatnagar brings unmatched depth, discipline and vision to Steradian Architects. An alumnus of IIT Roorkee, his work balances timeless design with functional clarity.',
      'Since 1984, he has led projects spanning residences, institutions, and religious and community buildings, defined by precision and contextual sensitivity.',
    ],
  },
  {
    name: 'Ar. Nitin Bhatnagar',
    role: 'Principal',
    linkedin: 'https://www.linkedin.com/in/nitin-bhatnagar-7112457a/',
    bio: [
      'As the next generation of leadership, Nitin Bhatnagar brings innovation, experimentation and a sensory-driven design philosophy to the practice.',
      'His work emphasises human scale, sustainability and material honesty — blending contemporary thinking with the studio’s legacy.',
    ],
  },
]

export function TeamSection() {
  return (
    <section className="st-team" id="team" aria-label="Our principals">
      <div className="st-wrap">
        <SectionHeading eyebrow="Leadership" title="The Principals" />
        <div className="st-team-grid">
          {TEAM.map((member, i) => (
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
