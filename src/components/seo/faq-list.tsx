import type { Faq } from '@/content/types'

type FaqListProps = {
  faqs: Faq[]
  title?: string
}

export function FaqList({ faqs, title = 'Questions' }: FaqListProps) {
  return (
    <section className="st-faq" aria-label="Frequently asked questions">
      <div className="st-wrap st-faq-grid">
        <div>
          <p className="st-eyebrow">FAQ</p>
          <h2>{title}</h2>
        </div>
        <div className="st-faq-list">
          {faqs.map((faq) => (
            <details key={faq.question} className="st-faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
