import { client } from '@/lib/sanity'

// Define a type for the hero data
interface HeroData {
  _createdAt: string
  title: string
  subtitle: string
  imageUrl: string
}

// Fetch data from Sanity
export async function getHeroData(): Promise<HeroData[]> {
  const data: HeroData[] = await client.fetch(
    `*[_type == "hero"]{
      _createdAt,
      title,
      subtitle,
      "imageUrl": image.asset->url
    } | order(_createdAt desc)`,
  )
  return data || []
}
