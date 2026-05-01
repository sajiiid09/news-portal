import Image from 'next/image'
import Link from 'next/link'
import type { Article } from '@/lib/types'

export function HeroSection({ articles }: { articles: Article[] }) {
  const [primary, ...secondary] = articles

  if (!primary) {
    return null
  }

  return (
    <section className="bb-hero">
      <article className="bb-hero__primary">
        <Link href={`/article/${primary.slug}`} className="bb-card-media-link">
          <Image
            src={primary.image}
            alt={primary.title}
            width={1200}
            height={675}
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="bb-card-media"
          />
        </Link>
        <p className="bb-tag">{primary.categoryId}</p>
        <h1>
          <Link href={`/article/${primary.slug}`}>{primary.title}</Link>
        </h1>
        <p>{primary.summary}</p>
      </article>
      <div className="bb-hero__secondary">
        {secondary.map((item) => (
          <article key={item.id} className="bb-card">
            <Link href={`/article/${item.slug}`} className="bb-card-media-link">
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={450}
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="bb-card-media"
              />
            </Link>
            <p className="bb-meta">{item.categoryId}</p>
            <h3>
              <Link href={`/article/${item.slug}`}>{item.title}</Link>
            </h3>
            <p className="bb-card__summary">{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
