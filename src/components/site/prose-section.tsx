import type { ContentSection } from '@/content/types'

type ProseSectionProps = {
  intro: string
  sections: ContentSection[]
}

export function ProseSection({ intro, sections }: ProseSectionProps) {
  return (
    <section className="st-prose">
      <div className="st-wrap">
        <p className="st-prose-intro">{intro}</p>
        {sections.map((section) => (
          <div className="st-prose-item" key={section.heading}>
            <h2>{section.heading}</h2>
            <div className="st-prose-body">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
