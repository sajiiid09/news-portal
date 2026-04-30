'use client'

import { useId, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Article } from '@/lib/types'
import { formatBanglaDate } from '@/lib/utils'

export function CategoryFeaturedSlider({
  title = 'নির্বাচিত',
  stories,
  categoryLabel,
}: {
  title?: string
  stories: Article[]
  categoryLabel?: string
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const titleId = useId()

  if (!stories.length) {
    return null
  }

  function scrollTrack(direction: 'previous' | 'next') {
    const track = trackRef.current
    if (!track) return

    track.scrollBy({
      left: direction === 'next' ? track.clientWidth * 0.82 : track.clientWidth * -0.82,
      behavior: 'smooth',
    })
  }

  return (
    <section className="bb-category-featured" aria-labelledby={titleId} data-bb-reveal>
      <div className="bb-category-featured__header">
        <h2 id={titleId}>{title}</h2>
        <div className="bb-category-featured__controls" aria-label="নির্বাচিত খবর নিয়ন্ত্রণ">
          <button type="button" onClick={() => scrollTrack('previous')} aria-label="আগের নির্বাচিত খবর">
            ‹
          </button>
          <button type="button" onClick={() => scrollTrack('next')} aria-label="পরের নির্বাচিত খবর">
            ›
          </button>
        </div>
      </div>

      <div className="bb-category-featured__track" ref={trackRef}>
        {stories.slice(0, 12).map((article, index) => (
          <article key={article.id} className="bb-category-featured__card">
            <Link href={`/article/${article.slug}`} className="bb-category-featured__media">
              <Image
                src={article.image}
                alt={article.title}
                width={440}
                height={260}
                sizes="(max-width: 720px) 82vw, (max-width: 1180px) 34vw, 260px"
                priority={index === 0}
              />
            </Link>
            <div className="bb-category-featured__body">
              {categoryLabel ? <p className="bb-category-featured__category">{categoryLabel}</p> : null}
              <h3>
                <Link href={`/article/${article.slug}`}>{article.title}</Link>
              </h3>
              <p className="bb-category-featured__summary">{article.summary}</p>
              <time dateTime={article.publishedAt}>{formatBanglaDate(article.publishedAt)}</time>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
