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
import { themes } from '@/config/theme'

interface DetailCardProps {
  data: HeroData
  onClose?: () => void
}

export default function DetailCard({ data, onClose }: DetailCardProps) {
  const allImages = [data.imageUrl, ...(data.additionalImages || [])]
  const themeConfig = themes.dark;

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
        className="overflow-y-auto z-[9999] w-full sm:max-w-2xl p-0"
        style={{ backgroundColor: themeConfig.background, borderColor: themeConfig.border }}
      >
        <div className="flex flex-col h-full">
          <div className="relative w-full" style={{ backgroundColor: themeConfig.cardBackground }}>
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
                    <div className="relative w-full aspect-video" style={{ backgroundColor: '#000' }}>
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
                  <CarouselPrevious style={{ backgroundColor: themeConfig.cardBackground, borderColor: themeConfig.border }} className="left-4 text-white" />
                  <CarouselNext style={{ backgroundColor: themeConfig.cardBackground, borderColor: themeConfig.border }} className="right-4 text-white" />
                </>
              )}
            </Carousel>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            <SheetHeader className="mb-6">
              <SheetTitle style={{ color: themeConfig.text }} className="text-3xl font-bold mb-2 text-left">
                {data.title}
              </SheetTitle>
              <SheetDescription style={{ color: themeConfig.textMuted }} className="text-base text-left">
                {data.subtitle}
              </SheetDescription>
            </SheetHeader>

            <div className="space-y-4">
              <div className="border-t pt-4" style={{ borderColor: themeConfig.border }}>
                <h3 style={{ color: themeConfig.text }} className="text-lg font-semibold mb-3">
                  Project Details
                </h3>
                <div className="space-y-2 text-sm" style={{ color: themeConfig.textMuted }}>
                  <div className="flex justify-between">
                    <span style={{ color: themeConfig.textMuted }}>Total Images:</span>
                    <span style={{ color: themeConfig.text }}>{allImages.length}</span>
                  </div>
                  {data._createdAt && (
                    <div className="flex justify-between">
                      <span style={{ color: themeConfig.textMuted }}>Created:</span>
                      <span style={{ color: themeConfig.text }}>
                        {new Date(data._createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {allImages.length > 1 && (
                <div className="border-t pt-4" style={{ borderColor: themeConfig.border }}>
                  <h3 style={{ color: themeConfig.text }} className="text-lg font-semibold mb-3">
                    Gallery
                  </h3>
                  <p className="text-sm" style={{ color: themeConfig.textMuted }}>
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