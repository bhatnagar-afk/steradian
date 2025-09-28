import HomeHeroSection from "@/components/home/hero-section"
import HomeTextArea from "@/components/home/text-area";
import { getHomeSections } from "@/lib/services/sanity-queries";
import { homePageData } from "@/objects/home-objects";

export default async function HomePage(){
  const homeSections = await getHomeSections();
  return (
    <div>
  <HomeHeroSection model={homePageData[0]} />
  {homeSections.map((section, index) => {
    return <HomeTextArea i={index} key={index} {...section} theme="light" />;
  })}
  <HomeHeroSection model={homePageData[1]} />
</div>
  );
}