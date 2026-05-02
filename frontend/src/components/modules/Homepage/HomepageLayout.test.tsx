import { afterEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render, screen, within } from '@testing-library/react'
import type { Article, Category, Gallery, Video } from '@/lib/types'
import { HomepageLayout } from './HomepageLayout'

vi.mock('./HomeMotion', () => ({
  HomeMotion: () => null,
}))

function makeArticle(id: string, title: string, categoryId = 'bangladesh'): Article {
  return {
    id,
    slug: id,
    title,
    summary: `${title} summary`,
    body: `${title} body`,
    categoryId,
    authorId: 'author-1',
    tags: [],
    image: '/window.svg',
    views: 1,
    isFeatured: false,
    publishedAt: '2026-04-28T12:00:00.000Z',
  }
}

const categories: Category[] = [
  { id: 'bangladesh', slug: 'bangladesh', name: 'বাংলাদেশ' },
  { id: 'politics', slug: 'politics', name: 'রাজনীতি' },
  { id: 'world', slug: 'world', name: 'বিশ্ব' },
  { id: 'business', slug: 'business', name: 'বাণিজ্য' },
  { id: 'sports', slug: 'sports', name: 'খেলা' },
  { id: 'entertainment', slug: 'entertainment', name: 'বিনোদন' },
  { id: 'jobs', slug: 'jobs', name: 'চাকরি' },
  { id: 'lifestyle', slug: 'lifestyle', name: 'জীবনযাপন' },
] as Category[]

function makeVideo(id: string, title: string): Video {
  return {
    id,
    title,
    thumbnail: '/window.svg',
    publishedAt: '2026-04-28T12:00:00.000Z',
  } as Video
}

function makeGallery(id: string, title: string): Gallery {
  return {
    id,
    title,
    coverImage: '/window.svg',
  } as Gallery
}

describe('HomepageLayout', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders the featured slider after the hero section', () => {
    render(
      <HomepageLayout
        featuredArticles={Array.from({ length: 5 }, (_, index) =>
          makeArticle(`featured-${index + 1}`, `Featured ${index + 1}`)
        )}
        latestArticles={Array.from({ length: 14 }, (_, index) =>
          makeArticle(
            `latest-${index + 1}`,
            `Latest ${index + 1}`,
            index % 2 === 0 ? 'bangladesh' : 'politics'
          )
        )}
        mostRead={Array.from({ length: 5 }, (_, index) =>
          makeArticle(`most-read-${index + 1}`, `Most Read ${index + 1}`)
        )}
        categories={categories}
        opinionArticles={[makeArticle('opinion-1', 'Opinion 1', 'politics')]}
        bangladeshArticles={[makeArticle('bangladesh-1', 'Bangladesh 1')]}
        politicsArticles={[makeArticle('politics-1', 'Politics 1', 'politics')]}
        worldArticles={[makeArticle('world-1', 'World 1', 'world')]}
        businessArticles={[makeArticle('business-1', 'Business 1', 'business')]}
        sportsArticles={[makeArticle('sports-1', 'Sports 1', 'sports')]}
        entertainmentArticles={[makeArticle('entertainment-1', 'Entertainment 1', 'entertainment')]}
        jobsArticles={[makeArticle('jobs-1', 'Jobs 1', 'jobs')]}
        lifestyleArticles={[makeArticle('lifestyle-1', 'Lifestyle 1', 'lifestyle')]}
        videos={[makeVideo('video-1', 'Video 1')]}
        galleries={[makeGallery('gallery-1', 'Gallery 1')]}
      />
    )

    const featuredSlider = screen.getByRole('region', { name: 'নির্বাচিত' })
    expect(featuredSlider).toBeInTheDocument()
    expect(within(featuredSlider).getByText('Latest 6 summary')).toBeInTheDocument()
  })
})