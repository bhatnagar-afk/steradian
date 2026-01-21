import { themes } from "@/config/theme";
import TeamCard from "@/components/about/team-card";

const team = [
  {
    name: "Ar. Rajesh Bhatnagar",
    linkedin: "https://www.linkedin.com/in/rajesh-bhatnagar-82085734/",
    bio: [
      "With over four decades of architectural practice, Ar. Rajesh Bhatnagar brings unmatched depth, discipline, and vision to Steradian Architects. An alumnus of IIT Roorkee, his work balances timeless design with functional clarity.",
      "Since 1984, he has led projects spanning residences, institutions, religious & community buildings, defined by precision and contextual sensitivity.",
      "Under his leadership, Steradian fuses architectural integrity with client aspirations — shaping spaces that are meaningful and enduring.",
    ],
  },
  {
    name: "Ar. Nitin Bhatnagar",
    linkedin: "https://www.linkedin.com/in/nitin-bhatnagar-7112457a/",
    bio: [
      "As the new generation of leadership, Ar. Nitin Bhatnagar infuses innovation, experimentation, and a sensory-driven design philosophy.",
      "His body of work emphasizes human scale, sustainability, and material honesty — creating spaces that are felt as much as they are seen.",
      "By blending contemporary thinking with Steradian's legacy, he ensures the studio remains relevant, dynamic, and purpose-driven.",
    ],
  },
];

export default function TeamSection() {
  const themeConfig = themes.light;

  return (
    <section
      style={{ backgroundColor: themeConfig.background, color: themeConfig.text }}
      className="py-20 px-6"
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {team.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              bio={member.bio}
              linkedin={member.linkedin}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
