'use client'

import Image from 'next/image'
import type { GalleryPhoto } from '@/lib/types'

export function Lightbox({
  photos,
  index,
  onClose,
  onNext,
  onPrev,
}: {
  photos: GalleryPhoto[]
  index: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}) {
  const photo = photos[index]

  if (!photo) {
    return null
  }

  return (
    <div className="bb-lightbox" role="dialog" aria-modal="true">
      <button onClick={onClose} aria-label="Close lightbox">
        X
      </button>
      <button onClick={onPrev} aria-label="Previous image">
        Prev
      </button>
      <figure>
        <Image
          src={photo.url}
          alt={photo.caption}
          width={1400}
          height={933}
          sizes="(max-width: 900px) 90vw, 900px"
        />
        <figcaption>
          {index + 1}/{photos.length} - {photo.caption}
        </figcaption>
      </figure>
      <button onClick={onNext} aria-label="Next image">
        Next
      </button>
    </div>
  )
}
