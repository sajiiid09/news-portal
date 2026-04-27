import type { Metadata } from 'next'
import { Container } from '@/components/layouts/Container'
import { DataService } from '@/lib/data'
import { EditorialSectionPage } from '@/components/modules/SectionPage'

export const metadata: Metadata = {
  title: 'সর্বশেষ',
  description: 'সর্বশেষ আপডেট এবং ব্রেকিং নিউজ।',
}

export default async function LatestPage() {
  const [page, articles, dseItems] = await Promise.all([
    DataService.sectionPages.getBySlug('latest'),
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
