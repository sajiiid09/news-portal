'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { GalleryPhoto } from '@/lib/types'
import { Lightbox } from './Lightbox'

export function GalleryViewer({ photos }: { photos: GalleryPhoto[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  const next = () => {
    if (activeIndex === null) return
    setActiveIndex((activeIndex + 1) % photos.length)
  }

  const prev = () => {
    if (activeIndex === null) return
    setActiveIndex((activeIndex - 1 + photos.length) % photos.length)
  }

  return (
    <div>
      <div className="bb-grid bb-grid--three">
        {photos.map((photo, index) => (
          <button key={photo.id} className="bb-card" onClick={() => setActiveIndex(index)}>
            <Image
              src={photo.url}
              alt={photo.caption}
              width={800}
              height={534}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <p>{photo.caption}</p>
          </button>
        ))}
      </div>

      {activeIndex !== null ? (
        <div
          onTouchStart={(event) => setTouchStartX(event.touches[0]?.clientX || null)}
          onTouchEnd={(event) => {
            const endX = event.changedTouches[0]?.clientX || null
            if (touchStartX === null || endX === null) return
            if (touchStartX - endX > 40) next()
            if (endX - touchStartX > 40) prev()
          }}
        >
          <Lightbox
            photos={photos}
            index={activeIndex}
            onClose={() => setActiveIndex(null)}
            onNext={next}
            onPrev={prev}
          />
        </div>
      ) : null}
    </div>
  )
}
