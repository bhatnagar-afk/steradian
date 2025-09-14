import Image from "next/image"
interface HeroProps {
  title: string
  subtitle: string
  imageUrl: string
}

export default function HeroSection({ title, subtitle, imageUrl }: HeroProps) {
  console.log("HeroSection props:", { title, subtitle, imageUrl })
  return (
    <section className="text-center p-8">
      <Image src={imageUrl} alt={title} 
      width={500}  
        height={333}  
      className="mx-auto rounded-2xl mb-4" />
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-lg text-gray-600">{subtitle}</p>
    </section>
  )
}
