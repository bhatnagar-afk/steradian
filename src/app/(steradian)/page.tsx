import { client } from '@/lib/sanity'
import HeroSection from '@/components/hero-section'

// Define a type for the hero data
interface HeroData {
  title: string
  subtitle: string
  imageUrl: string
}

// Fetch data from Sanity
async function getHeroData(): Promise<HeroData[]> {
  const data: HeroData[] = await client.fetch(
    `*[_type == "hero"]{
      _createdAt,
      title,
      subtitle,
      "imageUrl": image.asset->url
    } | order(_createdAt desc)`
  )
  console.log('Fetched hero data:', data)
  return data || []
}

export default async function HomePage() {
  const heroes = await getHeroData()

  if (!heroes || heroes.length === 0) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">No hero data found.</h1>
        <p className="text-gray-500">
          Please add hero content in Sanity Studio.
        </p>
      </div>
    )
  }

 return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8 auto-rows-auto">
    {heroes.map((hero, index) => (
    <HeroSection key={index} {...hero} />
  ))}
</div>
)
}