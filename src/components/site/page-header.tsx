type PageHeaderProps = {
  eyebrow: string
  title: string
  description?: string
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="st-page-header">
      <div className="st-wrap">
        <p className="st-eyebrow st-eyebrow--on-ink">{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p className="st-page-header-dek">{description}</p>}
      </div>
    </header>
  )
}
