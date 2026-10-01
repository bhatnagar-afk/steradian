'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/lib/motion'
import { RotatingMediaFrame } from '@/components/ui/rotating-media-frame'
import { StudioDetailIllustration } from '@/components/illustrations'
import type { EditorialStory } from '@/types/project'

export function EditorialBlocks({ stories }: { stories: EditorialStory[] }) {
  if (!stories.length) return null

  return (
    <section className="st-editorial" aria-label="From the studio">
      <div className="st-wrap">
        {stories.map((story, i) => (
          <motion.div
            key={story.title}
            className={`st-editorial-block ${i % 2 ? 'st-editorial-block--reverse' : ''}`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="st-editorial-media">
              <RotatingMediaFrame
                images={story.images}
                alt={story.title}
                illustration={<StudioDetailIllustration />}
              />
            </div>
            <div className="st-editorial-copy">
              <h3>{story.title}</h3>
              <ul className="st-editorial-list">
                {story.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
