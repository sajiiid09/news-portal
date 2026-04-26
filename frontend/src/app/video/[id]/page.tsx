import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { DataService } from '@/lib/data'
import { Container } from '@/components/layouts/Container'
import { VideoPlayer } from '@/components/modules/VideoPlayer'

const BASE_URL = 'https://your-domain.com'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const video = await DataService.videos.getById(id)

  return {
    title: video?.title || 'ভিডিও পাওয়া যায়নি',
    description: video ? `${video.title} - ভিডিও রিপোর্ট` : 'ভিডিও পাওয়া যায়নি',
  }
}

export default async function VideoDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const video = await DataService.videos.getById(id)

  if (!video) {
    notFound()
  }

  const videoJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    thumbnailUrl: [video.thumbnail],
    uploadDate: video.publishedAt,
    embedUrl: video.url,
    contentUrl: `${BASE_URL}/video/${video.id}`,
    duration: video.duration,
  }

  return (
    <Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />
      <h1>{video.title}</h1>
      <p className="bb-meta">Duration: {video.duration}</p>
      <VideoPlayer src={video.url} title={video.title} />
    </Container>
  )
}
