import { notFound } from 'next/navigation'
import { DataService } from '@/lib/data'
import { Container } from '@/components/layouts/Container'

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ name: string }>
}) {
  const { name } = await params
  const author = await DataService.authors.getBySlug(name)

  if (!author) {
    notFound()
  }

  const articles = await DataService.authors.getArticles(author.id)

  return (
    <Container>
      <h1>{author.name}</h1>
      <p>{author.designation}</p>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </Container>
  )
}
