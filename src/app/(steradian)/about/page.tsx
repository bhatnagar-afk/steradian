import HeroSection from "@/components/about/hero-section";
import StorySection from "@/components/about/story-section";
import PortfolioSection from "@/components/about/portfolio-section";
import TeamSection from "@/components/about/team-section";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Steradian Architects',
  description:
    'Learn about Steradian Architects, a Moradabad architecture practice founded in 1984 with architect-led design and build expertise across residences, institutions, hotels and community spaces.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Steradian Architects',
    description:
      'Discover the story, portfolio and leadership behind Steradian Architects in Moradabad, Uttar Pradesh.',
    url: '/about',
  },
}
export default function AboutPage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <HeroSection />
      <StorySection />
      <PortfolioSection />
      <TeamSection />
    </div>
  );
}
