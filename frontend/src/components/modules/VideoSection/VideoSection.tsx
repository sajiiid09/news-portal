import type { Video } from '@/lib/types'
import { VideoCard } from '@/components/ui/Card'

export function VideoSection({ videos }: { videos: Video[] }) {
  return (
    <section className="bb-section">
      <div className="bb-section__header">
        <h2>ভিডিও</h2>
      </div>
      <div className="bb-grid bb-grid--three">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  )
}
