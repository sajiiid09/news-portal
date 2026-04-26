import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/layouts/Container'
import { DataService } from '@/lib/data'

export const revalidate = 30

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const feed = await DataService.live.getBySlug(slug)

  return {
    title: feed ? `${feed.title} | লাইভ` : 'লাইভ আপডেট',
    description: 'লাইভ আপডেট পেজ',
  }
}

export default async function LivePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const feed = await DataService.live.getBySlug(slug)

  if (!feed) {
    notFound()
  }

  const updates = feed.items

  return (
    <Container>
      <section className="bb-section">
        <h1>
          <span className="bb-live-badge">সরাসরি</span> {feed.title || slug.replaceAll('-', ' ')}
        </h1>
        <p className="bb-meta">সর্বশেষ আপডেট: {updates[0]?.time}</p>
        <p className="bb-meta">এই পেজ প্রতি ৩০ সেকেন্ডে রিফ্রেশ হয়।</p>
      </section>

      <section className="bb-section">
        {updates.map((item, index) => (
          <article key={item.id} className={`bb-card ${index === 0 ? 'bb-live-card' : ''}`}>
            <p className="bb-meta">
              {item.time} • {item.location}
            </p>
            <p>{item.text}</p>
            {index === 0 ? <span className="bb-live-badge">সরাসরি আপডেট</span> : null}
          </article>
        ))}
      </section>
    </Container>
  )
}
