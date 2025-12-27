import { SectionProps } from "@/objects/home-objects";
import { themes, colors } from "@/config/theme";

export default function HomeHeroSection({ model }: { model: SectionProps }) {
  const themeConfig = model.section.theme === "dark" ? themes.dark : themes.light;
  
  const themeStyles = {
    backgroundColor: themeConfig.background,
    color: themeConfig.text,
  };

  return (
    <div style={themeStyles} className="py-16 px-6">
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden text-center">
        <h1 className="text-5xl font-bold mb-4 transition-opacity duration-700 opacity-100">
          {model.section.title}
        </h1>

        <p className="text-lg max-w-xl text-center transition-opacity duration-700 delay-200 opacity-100">
          {model.section.content}
        </p>

        {/* CTA buttons (only if present) */}
        {model.section.cta && model.section.cta.length > 0 && (
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {model.section.cta.map((ctaItem, idx) => (
              <a
                key={idx}
                href={ctaItem.link}
                style={{ backgroundColor: colors.primary }}
                className="inline-flex items-center justify-center px-6 py-3 
                   rounded-xl font-medium text-base shadow-md transition text-white hover:opacity-90"
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