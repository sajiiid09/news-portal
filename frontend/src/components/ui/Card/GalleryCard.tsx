import Image from 'next/image'
import Link from 'next/link'
import type { Gallery } from '@/lib/types'

export function GalleryCard({ gallery }: { gallery: Gallery }) {
  return (
    <article className="bb-card">
      <Link href={`/photo/${gallery.id}`} className="bb-card-media-link">
        <Image
          src={gallery.coverImage}
          alt={gallery.title}
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="bb-card-media"
        />
      </Link>
      <p className="bb-meta">গ্যালারি • {gallery.photos.length} ছবি</p>
      <h3>
        <Link href={`/photo/${gallery.id}`}>{gallery.title}</Link>
      </h3>
    </article>
  )
}
