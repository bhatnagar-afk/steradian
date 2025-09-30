import Image from 'next/image'

interface HeroProps {
  title: string
  subtitle: string
  imageUrl: string
}

export default function ProjectCard({ title, subtitle, imageUrl }: HeroProps) {
  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-white text-lg font-bold text-center px-4">
          {title}
        </h2>
        <p className="text-gray-200 text-sm mt-2 text-center px-4">
          {subtitle}
        </p>
      </div>

      {/* Image */}
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Optional: Bottom info panel (Pinterest style) */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white font-medium text-sm truncate">{title}</h3>
      </div>
    </div>
  )
}
