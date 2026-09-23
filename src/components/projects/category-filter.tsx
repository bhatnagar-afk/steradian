import Link from 'next/link'
import { slugify } from '@/lib/slugify'
import type { Category } from '@/types/project'

type CategoryFilterProps = {
  categories: Category[]
  activeSlug?: string
}

export function CategoryFilter({ categories, activeSlug }: CategoryFilterProps) {
  if (!categories.length) return null

  return (
    <nav className="st-category-filter" aria-label="Filter projects by category">
      <Link href="/projects" className={!activeSlug ? 'is-active' : ''}>
        All
      </Link>
      {categories.map((category) => {
        const slug = slugify(category.title)
        return (
          <Link
            key={slug}
            href={`/projects?category=${slug}`}
            className={activeSlug === slug ? 'is-active' : ''}
          >
            {category.title}
          </Link>
        )
      })}
    </nav>
  )
}
