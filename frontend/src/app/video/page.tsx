import type { Metadata } from 'next'
import { DataService } from '@/lib/data'
import { Container } from '@/components/layouts/Container'
import { EditorialSectionPage } from '@/components/modules/SectionPage'

export const metadata: Metadata = {
  title: 'ভিডিও',
  description: 'সর্বশেষ ভিডিও সংবাদ এবং বিশ্লেষণ।',
}

export default async function VideoPage() {
  const [page, articles, dseItems] = await Promise.all([
    DataService.sectionPages.getBySlug('video'),
    DataService.articles.getAll(),
    DataService.dse.getTicker(),
  ])

  if (!page) {
    return null
  }

  return (
    <Container>
      <EditorialSectionPage
        page={page}
        articles={articles}
        dseItems={dseItems}
        dseEndpoint={process.env.NEXT_PUBLIC_DSE_TICKER_ENDPOINT || '/api/dse/ticker'}
      />
    </Container>
  )
}
