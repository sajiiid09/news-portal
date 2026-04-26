import { redirect } from 'next/navigation'

export default async function DeepArticleRoute({
  params,
}: {
  params: Promise<{ category: string; subcategory: string; slug: string }>
}) {
  const { slug } = await params
  redirect(`/article/${slug}`)
}
