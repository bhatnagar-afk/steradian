export type Faq = {
  question: string
  answer: string
}

export type ContentSection = {
  heading: string
  body: string[]
}

type ContentPage = {
  slug: string
  // Used verbatim as the <title>, so it carries its own brand suffix.
  metaTitle: string
  metaDescription: string
  eyebrow: string
  h1: string
  intro: string
  sections: ContentSection[]
  faqs: Faq[]
  // ISO date of the last copy change — feeds the sitemap's lastmod.
  updatedAt: string
}

export type ServicePage = ContentPage & {
  name: string
  summary: string
  relatedLocations: string[]
}

export type LocationPage = ContentPage & {
  name: string
  // Matched against a project's `location` to pick which work to show.
  places: string[]
  relatedServices: string[]
}
