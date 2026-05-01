import { describe, expect, it } from 'vitest'
import { DataService } from '@/lib/data'

describe('DataService', () => {
  it('returns latest articles sorted by publish date', async () => {
    const latest = await DataService.articles.getLatest(5)
    expect(latest).toHaveLength(5)
    const first = new Date(latest[0].publishedAt).getTime()
    const second = new Date(latest[1].publishedAt).getTime()
    expect(first).toBeGreaterThanOrEqual(second)
  })

  it('filters article by category', async () => {
    const articles = await DataService.articles.getByCategory('sports')
    expect(articles.length).toBeGreaterThan(0)
    expect(articles.every((item) => item.categoryId === 'sports')).toBe(true)
  })

  it('returns Prothom-style subcategories for category pages', async () => {
    const bangladesh = await DataService.subCategories.getByCategory('bangladesh')
    const world = await DataService.subCategories.getByCategory('world')
    const business = await DataService.subCategories.getByCategory('business')

    expect(bangladesh.map((item) => item.name)).toEqual([
      'রাজধানী',
      'জেলা',
      'করোনাভাইরাস',
      'অপরাধ',
      'পরিবেশ',
    ])
    expect(world.map((item) => item.name)).toContain('লাতিন আমেরিকা')
    expect(business.map((item) => item.name)).toContain('বাজেট ২০২৫-২৬')
  })

  it('searches by term across title and body', async () => {
    const results = await DataService.search.query('ঢাকা')
    expect(results.length).toBeGreaterThan(0)
  })

  it('gets comments for target article', async () => {
    const comments = await DataService.comments.getByArticle('article-1')
    expect(comments.length).toBeGreaterThan(0)
  })
})
