import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { CategorySubNav } from './CategorySubNav'

describe('CategorySubNav', () => {
  it('renders subcategory links under a category slug', () => {
    render(
      <CategorySubNav
        categorySlug="bangladesh"
        items={[
          { id: 'capital', categoryId: 'bangladesh', slug: 'capital', name: 'রাজধানী' },
          { id: 'district', categoryId: 'bangladesh', slug: 'district', name: 'জেলা' },
        ]}
      />
    )

    expect(screen.getByRole('navigation', { name: 'উপবিভাগ' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'রাজধানী' })).toHaveAttribute(
      'href',
      '/bangladesh/capital'
    )
    expect(screen.getByRole('link', { name: 'জেলা' })).toHaveAttribute(
      'href',
      '/bangladesh/district'
    )
  })

  it('renders nothing when there are no subcategories', () => {
    const { container } = render(<CategorySubNav categorySlug="latest" items={[]} />)

    expect(container).toBeEmptyDOMElement()
  })
})
