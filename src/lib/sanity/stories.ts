import { sanityClient } from './client'
import type { EditorialStory } from '@/types/project'

interface RawStoryDoc {
  title: string
  content: string[]
  img: string | null
}

export async function listEditorialStories(): Promise<EditorialStory[]> {
  const docs: RawStoryDoc[] = await sanityClient.fetch(
    `*[_type == "home-section"]{ title, content, "img": image.asset->url } | order(_createdAt asc)`,
  )
  return (docs || []).map((doc) => ({
    title: doc.title,
    points: doc.content,
    image: doc.img,
  }))
}
