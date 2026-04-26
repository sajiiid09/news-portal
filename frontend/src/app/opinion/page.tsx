import type { Metadata } from 'next'
import { DataService } from '@/lib/data'
import { Container } from '@/components/layouts/Container'
import { NewsGrid } from '@/components/modules/NewsGrid'

export const metadata: Metadata = {
  title: 'মতামত',
  description: 'সম্পাদকীয়, কলাম এবং বিশ্লেষণ।',
}

export default async function OpinionPage() {
  const opinionArticles = await DataService.articles.getByCategory('opinion')

  return (
    <Container>
      <h1>মতামত</h1>
      <NewsGrid title="সর্বশেষ মতামত" articles={opinionArticles} viewAllLink="/opinion" />
    </Container>
  )
}
