import type { Metadata } from 'next'
import { Container } from '@/components/layouts/Container'
import { DataService } from '@/lib/data'
import { NewsGrid } from '@/components/modules/NewsGrid'

export const metadata: Metadata = {
  title: 'সর্বশেষ',
  description: 'সর্বশেষ আপডেট এবং ব্রেকিং নিউজ।',
}

export default async function LatestPage() {
  const latest = await DataService.articles.getLatest(20)

  return (
    <Container>
      <h1>সর্বশেষ</h1>
      <NewsGrid title="সর্বশেষ আপডেট" articles={latest} viewAllLink="/latest" />
    </Container>
  )
}
