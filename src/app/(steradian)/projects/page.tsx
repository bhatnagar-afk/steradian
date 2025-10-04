import { getHeroData, getCategories } from '@/lib/services/sanity-queries'
import HeroSection from '@/components/hero-section'

export default async function ProjectsPage() {
  const categories = await getCategories()
  const heroes = await getHeroData()

  console.log('Fetched categories:', categories);
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