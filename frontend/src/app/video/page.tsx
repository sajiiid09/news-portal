import type { Metadata } from 'next'
import { DataService } from '@/lib/data'
import { Container } from '@/components/layouts/Container'
import { VideoCard } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'ভিডিও',
  description: 'সর্বশেষ ভিডিও সংবাদ এবং বিশ্লেষণ।',
}

export default async function VideoPage() {
  const videos = await DataService.videos.getAll()

  return (
    <Container>
      <section className="bb-section">
        <h1>ভিডিও</h1>
      </section>
      <div className="bb-grid bb-grid--three">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </Container>
  )
}
