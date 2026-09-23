import { ContactInfo } from './contact-info'
import { ContactForm } from './contact-form'

type ContactSectionProps = {
  headingLevel?: 'h1' | 'h2'
}

export function ContactSection({ headingLevel = 'h2' }: ContactSectionProps) {
  const Heading = headingLevel

  return (
    <section className="st-contact" id="contact" aria-label="Contact">
      <div className="st-wrap">
        <p className="st-eyebrow st-eyebrow--on-ink">Contact</p>
        <Heading>
          Let&apos;s build something
          <br />
          <em>worth living in.</em>
        </Heading>

        <div className="st-contact-grid">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
