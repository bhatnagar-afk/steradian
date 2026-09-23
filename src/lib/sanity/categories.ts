import { sanityClient } from './client'
import { slugify } from '@/lib/slugify'
import type { Category } from '@/types/project'

export async function listCategories(): Promise<Category[]> {
  const categories: Category[] = await sanityClient.fetch(
    `*[_type == "category"]{ title, description } | order(title asc)`,
  )
  return categories || []
}

export async function findCategoryBySlug(slug: string): Promise<Category | null> {
  const categories = await listCategories()
  return categories.find((category) => slugify(category.title) === slug) ?? null
}
