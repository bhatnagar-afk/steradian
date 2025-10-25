import { client } from '@/lib/sanity'

interface CategoryData {
  title: string
}
// Define a type for the hero data
export interface HeroData {
  _createdAt: string
  title: string
  subtitle: string
  imageUrl: string
  additionalImages: string[]
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
      "imageUrl": image.asset->url,
      "additionalImages": additionalImages[].asset->url
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
