import Link from 'next/link'

type LinkListProps = {
  eyebrow: string
  title: string
  links: { href: string; label: string; description?: string }[]
}

export function LinkList({ eyebrow, title, links }: LinkListProps) {
  return (
    <section className="st-link-list" aria-label={title}>
      <div className="st-wrap">
        <p className="st-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <span className="st-link-list-label">{link.label} →</span>
                {link.description && <span className="st-link-list-dek">{link.description}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
