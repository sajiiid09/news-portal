import { Container } from '@/components/layouts/Container'
import { DataService } from '@/lib/data'

export default async function TagPage({
  params,
}: {
  params: Promise<{ tagName: string }>
}) {
  const { tagName } = await params
  const articles = await DataService.articles.getByTag(tagName)

  return (
    <Container>
      <h1>#{tagName}</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </Container>
  )
}
