'use client'

import { useMemo } from 'react'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { HeroData } from '@/lib/services/sanity-queries'

interface DetailCardProps {
  data: HeroData
  onClose?: () => void
}

export default function DetailCard({ data, onClose }: DetailCardProps) {
  const allImages = [data.imageUrl, ...(data.additionalImages || [])]

  // Create autoplay plugin with 3 second delay
  const autoplayPlugin = useMemo(
    () =>
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  )

  return (
    <Sheet open={true} onOpenChange={(open) => !open && onClose?.()}>
      <SheetContent
        side="right"
        className="bg-neutral-900 text-white border-l border-white/10 overflow-y-auto z-[9999] w-full sm:max-w-2xl p-0"
      >
        <div className="flex flex-col h-full">
          <div className="relative w-full bg-black/50">
            <Carousel
              className="w-full"
              opts={{
                align: 'start',
                loop: true,
              }}
              plugins={[autoplayPlugin]}
            >
              <CarouselContent className="ml-0">
                {allImages.map((img, idx) => (
                  <CarouselItem key={idx} className="pl-0">
                    <div className="relative w-full aspect-video bg-neutral-950">
                      <Image
                        src={img}
                        alt={`${data.title} - Image ${idx + 1}`}
                        fill
                        className="object-contain"
                        priority={idx === 0}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {allImages.length > 1 && (
                <>
                  <CarouselPrevious className="left-4 bg-neutral-800/80 hover:bg-neutral-700/80 border-neutral-700 text-white" />
                  <CarouselNext className="right-4 bg-neutral-800/80 hover:bg-neutral-700/80 border-neutral-700 text-white" />
                </>
              )}
            </Carousel>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            <SheetHeader className="mb-6">
              <SheetTitle className="text-3xl font-bold mb-2 text-left">
                {data.title}
              </SheetTitle>
              <SheetDescription className="text-gray-300 text-base text-left">
                {data.subtitle}
              </SheetDescription>
            </SheetHeader>

            <div className="space-y-4">
              <div className="border-t border-white/10 pt-4">
                <h3 className="text-lg font-semibold mb-3 text-gray-200">
                  Project Details
                </h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Total Images:</span>
                    <span className="text-gray-300">{allImages.length}</span>
                  </div>
                  {data._createdAt && (
                    <div className="flex justify-between">
                      <span className="text-gray-500">Created:</span>
                      <span className="text-gray-300">
                        {new Date(data._createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {allImages.length > 1 && (
                <div className="border-t border-white/10 pt-4">
                  <h3 className="text-lg font-semibold mb-3 text-gray-200">
                    Gallery
                  </h3>
                  <p className="text-sm text-gray-400">
                    Use the navigation arrows above to browse through{' '}
                    {allImages.length} images in this project.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
