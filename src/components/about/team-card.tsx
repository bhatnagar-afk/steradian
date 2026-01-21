'use client';
import { FaLinkedinIn } from "react-icons/fa";
import { themes } from "@/config/theme";
import Link from "next/link";
type TeamCardProps = {
  name: string;
  bio: string[];
  linkedin: string;
};

export default function TeamCard({ name, bio, linkedin }: TeamCardProps) {
  const themeConfig = themes.light;

  const handleClick = () => {
    // 🔹 Analytics-friendly hook
    // Replace with GA / Plausible / PostHog later
    console.log("Team profile clicked:", name);
  };

  return (
    <Link
      href={linkedin}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      style={{ backgroundColor: themeConfig.cardBackground }}
      className="
        group relative block rounded-lg p-8 shadow transition
        hover:shadow-md hover:-translate-y-1
        focus:outline-none focus:ring-2 focus:ring-amber-500
      "
    >
      {/* LinkedIn Icon (appears on hover) */}
      <div
        className="
          absolute top-4 right-4
          opacity-0 translate-y-1
          group-hover:opacity-100 group-hover:translate-y-0
          transition
        "
      >
        <FaLinkedinIn className="text-amber-500 text-xl" />
      </div>

      <h3 className="text-2xl font-semibold text-amber-500 mb-4">
        {name}
      </h3>

      {bio.map((p, i) => (
        <p
          key={i}
          className="leading-relaxed mb-4"
          style={{ color: themeConfig.text }}
        >
          {p}
        </p>
      ))}
    </Link>
  );
}
