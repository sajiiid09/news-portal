import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import type { Article } from '@/lib/types'
import { CategoryFeaturedSlider } from './CategoryFeaturedSlider'

const story: Article = {
  id: 'story-1',
  slug: 'featured-story',
  title: 'নির্বাচিত খবর',
  summary: 'সংক্ষিপ্ত বর্ণনা',
  body: 'বিস্তারিত',
  categoryId: 'bangladesh',
  authorId: 'author-1',
  tags: [],
  image: '/window.svg',
  views: 10,
  isFeatured: true,
  publishedAt: '2026-04-28T12:00:00.000Z',
}

describe('CategoryFeaturedSlider', () => {
  it('renders featured cards and manual arrow controls', () => {
    const { container } = render(
      <CategoryFeaturedSlider title="নির্বাচিত" stories={[story]} categoryLabel="বাংলাদেশ" />
    )
    const track = container.querySelector('.bb-category-featured__track') as HTMLDivElement
    const scrollBy = vi.fn()
    Object.defineProperty(track, 'clientWidth', { value: 500 })
    Object.defineProperty(track, 'scrollBy', { value: scrollBy })

    expect(screen.getByRole('heading', { name: 'নির্বাচিত' })).toBeInTheDocument()
    const storyLinks = screen.getAllByRole('link', { name: 'নির্বাচিত খবর' })
    expect(storyLinks).toHaveLength(2)
    expect(storyLinks.every((link) => link.getAttribute('href') === '/article/featured-story')).toBe(
      true
    )
    expect(screen.getByText('বাংলাদেশ')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'পরের নির্বাচিত খবর' }))
    expect(scrollBy).toHaveBeenCalledWith({ left: 410, behavior: 'smooth' })
  })

  it('renders nothing when no stories are available', () => {
    const { container } = render(<CategoryFeaturedSlider stories={[]} />)

    expect(container).toBeEmptyDOMElement()
  })
})
