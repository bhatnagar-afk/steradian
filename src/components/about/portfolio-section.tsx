import { themes } from "@/config/theme";

export default function PortfolioSection() {
  const types = [
    "Residences & Housing",
    "Educational Institutions",
    "Hotels & Recreational Spaces",
    "Religious & Community Buildings",
  ];

  const themeConfig = themes.dark;

  return (
    <section style={{ backgroundColor: themeConfig.background }} className="py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold" style={{ color: themeConfig.text }}>Our Portfolio</h2>
          <p className="mt-2" style={{ color: themeConfig.textMuted }}>
            From homes to institutions — each project deeply rooted in context, purpose & craft.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {types.map((t) => (
            <div
              key={t}
              style={{ backgroundColor: themeConfig.cardBackground }}
              className="rounded-lg p-6 shadow hover:shadow-md transition"
            >
              <h3 className="font-semibold" style={{ color: themeConfig.text }}>{t}</h3>
            </div>
          ))}
        </div>

        <p className="text-center leading-relaxed" style={{ color: themeConfig.textMuted }}>
          Each structure we craft embodies advocacy — honoring client values and giving back to communities through architecture that lasts.
        </p>
      </div>
    </section>
  );
}
