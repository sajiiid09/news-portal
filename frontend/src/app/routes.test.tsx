import React from 'react'
import { describe, expect, it } from 'vitest'
import HomePage from '@/app/page'
import ArticlePage from '@/app/article/[slug]/page'
import CategoryPage from '@/app/[category]/page'

describe('Critical routes', () => {
  it('renders homepage server component', async () => {
    const jsx = await HomePage()
    expect(React.isValidElement(jsx)).toBe(true)
  })

  it('renders article route for known slug', async () => {
    const jsx = await ArticlePage({ params: Promise.resolve({ slug: 'heatwave-alert-in-dhaka' }) })
    expect(React.isValidElement(jsx)).toBe(true)
  })

  it('renders category route for known category', async () => {
    const jsx = await CategoryPage({ params: Promise.resolve({ category: 'sports' }) })
    expect(React.isValidElement(jsx)).toBe(true)
  })
})
