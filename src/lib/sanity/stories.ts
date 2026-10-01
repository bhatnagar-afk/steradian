import { sanityClient } from './client'
import type { EditorialStory } from '@/types/project'

interface RawStoryDoc {
  title: string
  content: string[]
  images: string[]
}

export async function listEditorialStories(): Promise<EditorialStory[]> {
  const docs: RawStoryDoc[] = await sanityClient.fetch(
    `*[_type == "home-section"]{ title, content, "images": images[].asset->url } | order(_createdAt asc)`,
  )
  return (docs || []).map((doc) => ({
    title: doc.title,
    points: doc.content,
    images: doc.images || [],
  }))
}
