import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import HomePage from '@/app/page'
import ArticlePage from '@/app/article/[slug]/page'
import CategoryPage from '@/app/[category]/page'

describe('Critical routes', () => {
  it('renders homepage server component', async () => {
    const jsx = await HomePage()
    expect(React.isValidElement(jsx)).toBe(true)
  })

  it('renders homepage news category sections one after another', async () => {
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: vi.fn().mockReturnValue({ matches: true }),
    })

    const jsx = await HomePage()
    const { container } = render(jsx)

    expect(container.querySelector('.bb-pa-section-pair')).not.toBeInTheDocument()
    expect(container.querySelectorAll('.bb-pa-section').length).toBeGreaterThanOrEqual(9)
  })

  it('renders article route for known slug', async () => {
    const jsx = await ArticlePage({ params: Promise.resolve({ slug: 'heatwave-alert-in-dhaka' }) })
    expect(React.isValidElement(jsx)).toBe(true)
  })

  it('renders category route for known category', async () => {
    const jsx = await CategoryPage({ params: Promise.resolve({ category: 'sports' }) })
    expect(React.isValidElement(jsx)).toBe(true)
  })

  it('renders category subnavigation for category routes', async () => {
    const jsx = await CategoryPage({ params: Promise.resolve({ category: 'bangladesh' }) })
    render(jsx)

    expect(screen.getByRole('navigation', { name: 'উপবিভাগ' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'রাজধানী' })).toHaveAttribute(
      'href',
      '/bangladesh/capital'
    )
  })
})
