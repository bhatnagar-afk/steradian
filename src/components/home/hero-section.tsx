import { SectionProps } from "@/objects/home-objects";

export default function HomeHeroSection({ model }: { model: SectionProps }) {
  return (
    <div
      className={`py-16 px-6 ${model.section.theme === "dark"
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

        {/* CTA buttons (only if present) */}
        {model.section.cta && model.section.cta.length > 0 && (
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {model.section.cta.map((ctaItem, idx) => (
              <a
                key={idx}
                href={ctaItem.link}
                className="inline-flex items-center justify-center px-6 py-3 
                   rounded-xl font-medium text-base shadow-md transition
                   bg-blue-600 text-white hover:bg-blue-700"
              >
                {ctaItem.text}
              </a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
