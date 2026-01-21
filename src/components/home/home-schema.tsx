// components/HomeSchema.tsx
import Head from 'next/head';

export const HomeSchema = () => {
  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Architect",
            name: "Steradian Architects",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Moradabad",
              addressRegion: "UP",
              addressCountry: "IN",
            },
            areaServed: "Moradabad",
          }),
        }}
      />
    </Head>
  );
};
