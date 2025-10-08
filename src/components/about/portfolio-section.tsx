export default function PortfolioSection() {
  const types = [
    "Residences & Housing",
    "Educational Institutions",
    "Hotels & Recreational Spaces",
    "Religious & Community Buildings",
  ];

  return (
    <section className="bg-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-100">Our Portfolio</h2>
          <p className="text-gray-200 mt-2">
            From homes to institutions — each project deeply rooted in context, purpose & craft.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {types.map((t) => (
            <div
              key={t}
              className="bg-white rounded-lg p-6 shadow hover:shadow-md transition"
            >
              <h3 className="font-semibold text-gray-800">{t}</h3>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-200 leading-relaxed">
          Each structure we craft embodies advocacy — honoring client values and giving back to communities through architecture that lasts.
        </p>
      </div>
    </section>
  );
}
