import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen, within } from '@testing-library/react'
import type { Article, SectionPageConfig } from '@/lib/types'
import { EditorialSectionPage } from './EditorialSectionPage'

function makeArticle(id: string, title: string): Article {
  return {
    id,
    slug: id,
    title,
    summary: `${title} summary`,
    body: `${title} body`,
    categoryId: 'bangladesh',
    authorId: 'author-1',
    tags: [],
    image: '/window.svg',
    views: 1,
    isFeatured: false,
    publishedAt: '2026-04-28T12:00:00.000Z',
  }
}

const basePage: SectionPageConfig = {
  slug: 'bangladesh',
  title: 'বাংলাদেশ',
  label: 'বাংলাদেশ',
  sourceFile: 'bangladesh.html',
  template: 'category',
  description: 'বাংলাদেশ সংবাদ',
  sections: [],
}

describe('EditorialSectionPage featured slider', () => {
  afterEach(() => {
    cleanup()
  })

  it('uses selected-grid stories for the slider and skips the consumed selected grid', () => {
    const page: SectionPageConfig = {
      ...basePage,
      sections: [
        { id: 'lead', type: 'lead-grid', title: 'বাংলাদেশ', storyIds: ['lead-story'] },
        { id: 'selected', type: 'selected-grid', title: 'নির্বাচিত', storyIds: ['selected-story'] },
        { id: 'more', type: 'story-list', title: 'আরও খবর', storyIds: ['more-story'] },
      ],
    }

    render(
      <EditorialSectionPage
        page={page}
        articles={[
          makeArticle('lead-story', 'Lead Story'),
          makeArticle('selected-story', 'Selected Story'),
          makeArticle('more-story', 'More Story'),
        ]}
        dseItems={[]}
        dseEndpoint="/api/dse/ticker"
      />
    )

    expect(screen.getByRole('region', { name: 'নির্বাচিত' })).toBeInTheDocument()
    expect(screen.getAllByText('Selected Story')).toHaveLength(1)
    expect(screen.getByText('Selected Story summary')).toBeInTheDocument()
    expect(screen.getByText('More Story summary')).toBeInTheDocument()
  })

  it('falls back to story-list stories after excluding lead stories', () => {
    const page: SectionPageConfig = {
      ...basePage,
      sections: [
        { id: 'lead', type: 'lead-grid', title: 'বাংলাদেশ', storyIds: ['lead-story'] },
        { id: 'more', type: 'story-list', title: 'আরও খবর', storyIds: ['lead-story', 'more-story'] },
      ],
    }

    render(
      <EditorialSectionPage
        page={page}
        articles={[makeArticle('lead-story', 'Lead Story'), makeArticle('more-story', 'More Story')]}
        dseItems={[]}
        dseEndpoint="/api/dse/ticker"
      />
    )

    const slider = screen.getByRole('region', { name: 'নির্বাচিত' })
    expect(within(slider).getByText('More Story')).toBeInTheDocument()
    expect(within(slider).queryByText('Lead Story')).not.toBeInTheDocument()
  })
})
