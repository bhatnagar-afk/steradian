'use client'

import { motion } from 'framer-motion'
import { fadeUpStagger, viewportOnce } from '@/lib/motion'
import { SectionHeading } from '@/components/ui/section-heading'

export type JournalEntry = {
  category: string
  title: string
  dek: string
  date: string
  href?: string
}

// Static for now — there is no Sanity schema for journal entries yet. Once
// one exists, fetch it in page.tsx and pass the results in as `entries`.
export const DEFAULT_JOURNAL_ENTRIES: JournalEntry[] = [
  {
    category: 'Architecture',
    title: 'On the Verandah: Rethinking the Threshold',
    dek: 'Why the verandah remains one of the most useful ideas in North Indian domestic architecture.',
    date: 'March 2025',
  },
  {
    category: 'Materials',
    title: 'Local Stone, Local Sense',
    dek: "Notes on sourcing and detailing with stone found within a day's drive of the studio.",
    date: 'November 2024',
  },
  {
    category: 'Studio',
    title: 'Forty Years, One Practice',
    dek: "A short account of how the studio's working method has, and hasn't, changed since 1984.",
    date: 'August 2024',
  },
]

export function Journal({ entries = DEFAULT_JOURNAL_ENTRIES }: { entries?: JournalEntry[] }) {
  return (
    <section className="st-journal" id="journal" aria-label="Journal">
      <div className="st-wrap">
        <SectionHeading
          eyebrow="Journal"
          title="Notes from the Studio"
          description="Short writing on architecture, materials and process, from within the studio."
        />

        <div className="st-journal-list">
          {entries.map((entry, i) => (
            <motion.a
              key={entry.title}
              className="st-journal-item"
              href={entry.href ?? '#'}
              variants={fadeUpStagger(i * 0.05)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <span className="st-journal-cat">{entry.category}</span>
              <span>
                <span className="st-journal-title">{entry.title}</span>
                <p className="st-journal-dek">{entry.dek}</p>
              </span>
              <span className="st-journal-date">{entry.date}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
