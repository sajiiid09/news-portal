import Image from 'next/image'
import Link from 'next/link'
import type { Video } from '@/lib/types'

export function VideoCard({ video }: { video: Video }) {
  return (
    <article className="bb-card">
      <Link href={`/video/${video.id}`} className="bb-card-media-link">
        <Image
          src={video.thumbnail}
          alt={video.title}
          width={800}
          height={450}
          sizes="(max-width: 768px) 100vw, 33vw"
          className="bb-card-media"
        />
      </Link>
      <p className="bb-meta">ভিডিও • {video.duration}</p>
      <h3>
        <Link href={`/video/${video.id}`}>{video.title}</Link>
      </h3>
      <p className="bb-meta">{video.views.toLocaleString('en-US')} views</p>
    </article>
  )
}
