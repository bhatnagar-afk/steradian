import { colors, themes } from "@/config/theme";

export default function HeroSection() {
  const themeConfig = themes.dark; // About page uses dark theme
  
  return (
    <section style={{ backgroundColor: themeConfig.background }} className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight" style={{ color: themeConfig.text }}>
          <span style={{ color: colors.accent }}>About</span> Steradian Architects
        </h1>
        <p className="text-lg md:text-xl" style={{ color: themeConfig.textMuted }}>
          Founded in 1984, our ethos is rooted in creating spaces that endure, inspire, and belong.
        </p>
      </div>
    </section>
  );
}