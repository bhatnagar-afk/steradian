type CTA = {
  text: string;
  link: string;
};


export type SectionProps = {
  title: string;
  section: {
    title: string;
    content: string;
    theme: string;
    cta?: CTA[];
  };
};

export const homePageData: SectionProps[] = [{
    title: "Home Hero Section",
    section: {
        title: "Designing spaces that endure, inspire, and belong.",
        content: `At Steradian Architects, we believe architecture is more than just
                building structures — it&apos;s about crafting environments that
                resonate with purpose, culture, and timelessness. With every project,
                we bring together design innovation, contextual sensitivity, and
                execution excellence to shape spaces that truly matter.`,
        theme: "dark",
        cta: []
    }
}, {
    title: "Home Text After Section",
    section: {
        title: "Our Commitment to Excellence",
        content: `We see architecture as a rhythm of sketches, discussions, 
        models, and countless cups of coffee. 
        Behind every elevation lies teamwork and a shared dream of creating 
        environments where people feel a sense of belonging.`,
        theme: "dark",
        cta: [
            { text: "Explore Our Projects", link: "/projects" },
            { text: "Get in Touch", link: "/contact" }
        ]
    }
}
];
