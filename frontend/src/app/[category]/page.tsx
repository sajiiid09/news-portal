import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { DataService } from '@/lib/data'
import { NewsGrid } from '@/components/modules/NewsGrid'
import { Container } from '@/components/layouts/Container'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}): Promise<Metadata> {
  const { category } = await params
  const categoryData = await DataService.categories.getBySlug(category)

  return {
    title: categoryData?.name || 'বিভাগ',
    description: categoryData?.description || 'বিভাগভিত্তিক সংবাদ',
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const categoryData = await DataService.categories.getBySlug(category)

  if (!categoryData) {
    notFound()
  }

  const articles = await DataService.articles.getByCategory(categoryData.id)
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'হোম',
        item: 'https://your-domain.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: categoryData.name,
        item: `https://your-domain.com/${categoryData.slug}`,
      },
    ],
  }

  return (
    <Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section className="bb-section">
        <h1>{categoryData.name}</h1>
        <p>{categoryData.description}</p>
      </section>
      <NewsGrid title={categoryData.name} articles={articles} viewAllLink={`/${category}`} />
    </Container>
  )
}
