import { MediaFrame } from '@/components/ui/media-frame'
import { SchoolIllustration } from '@/components/illustrations'

export function ProjectGallery({ images, title }: { images: string[]; title: string }) {
  if (!images.length) return null

  return (
    <section className="st-project-gallery" aria-label={`${title} — photographs`}>
      <div className="st-wrap st-project-gallery-grid">
        {images.map((image, i) => (
          <div className="st-project-gallery-frame" key={image}>
            <MediaFrame
              src={image}
              alt={`${title} — photograph ${i + 1}`}
              illustration={<SchoolIllustration />}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
