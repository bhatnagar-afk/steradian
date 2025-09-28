import { SectionProps } from "@/objects/home-objects";


export default function HomeHeroSection({ model }: { model: SectionProps }) {
  return (
    <div className={`py-16 px-6 ${
        model.section.theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-900"
      }`}
    >
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden text-center">
      <h1 className="text-5xl font-bold mb-4 transition-opacity duration-700 opacity-100">
        {model.section.title}
      </h1>
      <p className="text-lg text-gray-600 max-w-xl text-center transition-opacity duration-700 delay-200 opacity-100">
        {model.section.content}
      </p>
    </section>
    </div>
  );
}
