export interface ProjectSummary {
  slug: string
  title: string
  category: string | null
  description: string | null
  heroImage: string | null
  publishedAt: string
}

export interface Project extends ProjectSummary {
  gallery: string[]
}

export interface Category {
  title: string
  description: string | null
}

export interface EditorialStory {
  title: string
  points: string[]
  image: string | null
}
