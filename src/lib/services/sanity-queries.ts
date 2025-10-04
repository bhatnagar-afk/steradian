import { client } from '@/lib/sanity'

// Define a type for the hero data

interface CategoryData {
  title: string
}
interface HeroData {
  title: string
  subtitle: string
  imageUrl: string
}

interface HomeTextArea {
  title: string
  content: string[]
  img: string
}

export async function getCategories(): Promise<CategoryData[]> {
  const categories: CategoryData[] = await client.fetch(
    `*[_type == "category"]{
      title
    }`
  )
  return categories || []
}

// Fetch data from Sanity
export async function getHeroData(): Promise<HeroData[]> {
  const data: HeroData[] = await client.fetch(
    `*[_type == "hero"]{
      _createdAt,
      category,
      title,
      subtitle,
      "imageUrl": image.asset->url
    } | order(_createdAt desc)`
  )
  return data || []
}

export async function getHomeSections(): Promise<HomeTextArea[]> {
  const sections: HomeTextArea[] = await client.fetch(
    `*[_type == "home-section"]{
      _createdAt,
      title,
      content,
      "img": image.asset->url
    } | order(_createdAt asc)`
  )
  return sections || []
}