'use client'

import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { X } from 'lucide-react'
import { HeroData } from '@/lib/services/sanity-queries'
import { Button } from '../ui/button'

interface DetailCardProps {
  data: HeroData
  onClose?: () => void
}

export default function DetailCard({ data, onClose }: DetailCardProps) {
  console.log('this is opened')
  return (
    <Dialog open={true} onOpenChange={(open) => !open && onClose?.()}>
      <DialogContent
        className="bg-neutral-900 text-white border border-white/10 
        w-[90vw] max-w-lg h-[80vh] p-0 overflow-hidden rounded-2xl "
      >
        <div className="relative w-full h-[60vh] rounded-t-xl overflow-hidden">
          <Image
            src={data.imageUrl}
            alt={data.title}
            fill
            className="object-contain bg-black w-full h-full"
          />
        </div>

        {/* Text Section */}
        <DialogHeader className="p-6">
          <DialogTitle className="text-2xl font-semibold mb-2">
            {data.title}
          </DialogTitle>
          <p className="text-gray-300">{data.subtitle}</p>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
