'use client'

import Image from 'next/image'
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
  return (
    <>
      <div className="p-6 border-t border-gray-700">
        <p className="text-white text-xl">Sheet is visible ✅</p>
      </div>

      <Sheet open={true} onOpenChange={(open) => !open && onClose?.()}>
        <SheetContent
          side="right"
          className="bg-neutral-900 text-white border-l border-white/10 overflow-y-auto z-[9999]"
        >
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                {' '}
                <div className="relative w-full h-[300px] bg-black">
                  <Image
                    src={data.imageUrl}
                    alt={data.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </CarouselItem>
              <CarouselItem>...</CarouselItem>
              <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <SheetHeader className="p-6">
            <SheetTitle className="text-2xl font-semibold mb-1">
              {data.title}
            </SheetTitle>
            <SheetDescription className="text-gray-300">
              {data.subtitle}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  )
}
