import { client } from '@/lib/sanity'

interface CategoryData {
  title: string,
  description?: string
}

// Define a type for the hero data
export interface HeroData {
  _createdAt: string
  title: string
  subtitle: string
  imageUrl: string
  additionalImages: string[]
  category: { _id: string; title: string } | null
}

interface HomeTextArea {
  title: string
  content: string[]
  img: string
}

export async function getCategories(): Promise<CategoryData[]> {
  const categories: CategoryData[] = await client.fetch(
    `*[_type == "category"]{
      title,
      description
    }`,
  )
  return categories || []
}

// Fetch data from Sanity
export async function getHeroData(
  activeCategory: string = '',
): Promise<HeroData[]> {
  const data: HeroData[] = await client.fetch(
    `*[_type == "hero" && lower(category->title) == lower($activeCategory)]{
      _createdAt,
       "category": category->{
        _id,
        title
      },
      title,
      subtitle,
      "additionalImages": additionalImages[].asset->url,
      "imageUrl": image.asset->url
    } | order(_createdAt desc)`,
    { activeCategory },
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
    } | order(_createdAt asc)`,
  )
  return sections || []
}
