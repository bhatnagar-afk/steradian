import HeroSection from "@/components/about/hero-section";
import StorySection from "@/components/about/story-section";
import PortfolioSection from "@/components/about/portfolio-section";
import TeamSection from "@/components/about/team-section";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About'
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
