"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BackgroundAnimation() {
  useEffect(() => {
    // Select all paths inside the SVG
    gsap.utils.toArray<SVGPathElement>("svg path").forEach((path) => {
      const length = path.getTotalLength();

      // Prepare stroke-dash properties
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;

      // Animate strokeDashoffset as we scroll
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: path,
          start: "top bottom", // start when path enters viewport
          end: "bottom top",   // finish when path leaves viewport
          scrub: true,         // tie animation to scroll
        },
      });
    });
  }, []);

  return (
    <div className="w-full min-h-[200vh] flex items-center justify-center bg-slate-900">
      <svg
        viewBox="0 0 800 600"
        className="w-4/5 h-auto stroke-blue-400 fill-none"
        strokeWidth={2}
      >
        {/* Example blueprint lines */}
        <path d="M100 100 H700" />
        <path d="M100 100 V500" />
        <path d="M700 100 V500" />
        <path d="M100 500 H700" />
        <path d="M250 100 V500" />
        <path d="M550 100 V500" />
        <path d="M100 300 H700" />
      </svg>
    </div>
  );
}
