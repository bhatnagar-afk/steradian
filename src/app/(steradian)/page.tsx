import HomeHeroSection from "@/components/home/hero-section"
import HomeTextArea from "@/components/home/text-area";
import { getHomeSections } from "@/lib/services/sanity-queries";
export default async function HomePage(){
  const homeSections = await getHomeSections();
  return (
    <div className="text-center">
      <HomeHeroSection />
          {homeSections.map((section, index) => (
          <HomeTextArea key={index} {...section} i={index} />
        ))}
    </div>
  );
}