import Image from 'next/image'

interface HeroProps {
  title: string
  subtitle: string
  imageUrl: string
}

export default function HeroSection({ title, subtitle, imageUrl }: HeroProps) {
  return (
    <div className="relative group overflow-hidden rounded-xl shadow-lg inline-block align-top">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-white text-lg font-bold">{title}</h2>
        <p className="text-gray-200 text-sm mt-2">{subtitle}</p>
      </div>
      {/* Image */}
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={333}
        className="w-full h-auto object-cover transition-transform transform-gpu duration-300 group-hover:scale-105"
      />
    </div>

  )
}
