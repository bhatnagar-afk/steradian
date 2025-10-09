"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface HomeSection {
    title: string
    content: string[]
    img: string
    theme: "light" | "dark"
}
type HomeTextAreaProps = HomeSection & { i: number };
export default function ImageSection({ title, content, img, i, theme }: HomeTextAreaProps) {
    return (
        <div className={`py-16 px-6 ${theme === "dark"
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-900"
            }`}
        >
            <section
                className="
      grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-16 
      max-w-5xl mx-auto px-4
    "
            >
                {/* Text Content */}
                <div className={`${i % 2 ? "md:order-2" : ""}`}>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="text-3xl font-bold mb-4 text-center md:text-left"
                    >
                        {title}
                    </motion.h2>
                    <ul className="list-disc list-inside text-gray-400 space-y-2 text-center md:text-left">
                        {content.map((point, idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>
                </div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="rounded-2xl overflow-hidden shadow-md"
                >
                    <Image
                        src={img}
                        alt={title}
                        width={600}
                        height={400}
                        className="object-cover"
                    />
                </motion.div>
            </section>
        </div>
    )
}
