import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { DataService } from '@/lib/data'
import { NewsGrid } from '@/components/modules/NewsGrid'
import { Container } from '@/components/layouts/Container'
import { CategorySubNav, EditorialSectionPage } from '@/components/modules/SectionPage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>
}): Promise<Metadata> {
  const { category } = await params
  const [categoryData, sectionPage] = await Promise.all([
    DataService.categories.getBySlug(category),
    DataService.sectionPages.getBySlug(category),
  ])

  return {
    title: sectionPage?.label || categoryData?.name || 'বিভাগ',
    description: sectionPage?.description || categoryData?.description || 'বিভাগভিত্তিক সংবাদ',
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>
}) {
  const { category } = await params
  const [categoryData, sectionPage] = await Promise.all([
    DataService.categories.getBySlug(category),
    DataService.sectionPages.getBySlug(category),
  ])

  if (!categoryData && !sectionPage) {
    notFound()
  }

  if (sectionPage) {
    const [articles, dseItems, subCategories] = await Promise.all([
      DataService.articles.getAll(),
      DataService.dse.getTicker(),
      DataService.subCategories.getByCategory(sectionPage.slug),
    ])

    return (
      <Container>
        <EditorialSectionPage
          page={sectionPage}
          articles={articles}
          dseItems={dseItems}
          dseEndpoint={process.env.NEXT_PUBLIC_DSE_TICKER_ENDPOINT || '/api/dse/ticker'}
          subCategories={subCategories}
        />
      </Container>
    )
  }

  if (!categoryData) {
    notFound()
  }

  const [articles, subCategories] = await Promise.all([
    DataService.articles.getByCategory(categoryData.id),
    DataService.subCategories.getByCategory(categoryData.id),
  ])
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
      >
        {JSON.stringify(breadcrumbJsonLd)}
      </script>
      <section className="bb-section bb-section-page__masthead">
        <h1>{categoryData.name}</h1>
        <CategorySubNav categorySlug={categoryData.slug} items={subCategories} />
        {categoryData.description ? <p>{categoryData.description}</p> : null}
      </section>
      <NewsGrid title={categoryData.name} articles={articles} viewAllLink={`/${category}`} />
    </Container>
  )
}
