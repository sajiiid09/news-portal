import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { DataService } from '@/lib/data'
import { Container } from '@/components/layouts/Container'
import { NewsGrid } from '@/components/modules/NewsGrid'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>
}): Promise<Metadata> {
  const { category, subcategory } = await params
  const parent = await DataService.categories.getBySlug(category)

  if (!parent) {
    return { title: 'উপবিভাগ পাওয়া যায়নি' }
  }

  const subCategoryItems = await DataService.subCategories.getByCategory(parent.id)
  const currentSubCategory = subCategoryItems.find((item) => item.slug === subcategory)

  return {
    title: currentSubCategory ? `${currentSubCategory.name} | ${parent.name}` : 'উপবিভাগ পাওয়া যায়নি',
    description: currentSubCategory
      ? `${currentSubCategory.name} বিভাগে সর্বশেষ সংবাদ`
      : 'উপবিভাগ পাওয়া যায়নি',
  }
}

export default async function SubCategoryPage({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>
}) {
  const { category, subcategory } = await params
  const parent = await DataService.categories.getBySlug(category)

  if (!parent) {
    notFound()
  }

  const subCategoryItems = await DataService.subCategories.getByCategory(parent.id)
  const currentSubCategory = subCategoryItems.find((item) => item.slug === subcategory)

  if (!currentSubCategory) {
    notFound()
  }

  const articles = await DataService.articles.getBySubCategory(currentSubCategory.id)
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
        name: parent.name,
        item: `https://your-domain.com/${category}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: currentSubCategory.name,
        item: `https://your-domain.com/${category}/${subcategory}`,
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
        <h1>
          {currentSubCategory.name} - {parent.name}
        </h1>
      </section>
      <NewsGrid
        title={currentSubCategory.name}
        articles={articles}
        viewAllLink={`/${category}/${subcategory}`}
      />
    </Container>
  )
}
