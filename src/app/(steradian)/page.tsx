import HomeHeroSection from "@/components/home/hero-section"
import ImageSection from "@/components/home/image-section";
import { getHomeSections } from "@/lib/services/sanity-queries";
import { homePageData } from "@/objects/home-objects";
import type { Metadata } from 'next'
import {HomeSchema} from "@/components/home/home-schema";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: 'Steradian Architects - Architecture Firm in Moradabad',
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Steradian Architects - Architecture Firm in Moradabad',
    description: siteConfig.description,
    url: '/',
  },
}
export default async function HomePage(){
  const homeSections = await getHomeSections();
  return (
    <div>
  <HomeSchema />
  <HomeHeroSection model={homePageData[0]} />
  {homeSections.map((section, index) => {
    return <ImageSection i={index} key={index} {...section} theme="light" />;
  })}
  <HomeHeroSection model={homePageData[1]} />
</div>
  );
}
