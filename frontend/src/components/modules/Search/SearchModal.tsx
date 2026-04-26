'use client'

import { useMemo, useState } from 'react'
import { useCategories, useSearch } from '@/hooks'
import { SearchFilters } from './SearchFilters'
import { SearchResults } from './SearchResults'

const STATIC_NOW = new Date('2026-04-24T12:00:00.000Z').getTime()

export function SearchModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const [dateRange, setDateRange] = useState('any')
  const [sortBy, setSortBy] = useState<'relevance' | 'date'>('relevance')
  const { data = [], isFetching } = useSearch(query)
  const { data: categoriesData = [] } = useCategories()
  const categories = ['all', ...categoriesData.map((item) => item.slug)]

  const filtered = useMemo(() => {
    let list = data

    if (category !== 'all') {
      list = list.filter((item) => item.categoryId === category)
    }

    if (sortBy === 'date') {
      list = [...list].sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      )
    }

    if (dateRange !== 'any') {
      const maxAge =
        dateRange === '24h'
          ? 24 * 60 * 60 * 1000
          : dateRange === 'week'
            ? 7 * 24 * 60 * 60 * 1000
            : dateRange === 'month'
              ? 30 * 24 * 60 * 60 * 1000
              : 365 * 24 * 60 * 60 * 1000

      list = list.filter(
        (item) => STATIC_NOW - new Date(item.publishedAt).getTime() <= maxAge
      )
    }

    return list
  }, [data, category, sortBy, dateRange])

  if (!open) {
    return null
  }

  return (
    <div className="bb-search-modal-overlay" role="dialog" aria-modal="true">
      <div className="bb-search-modal">
        <div className="bb-section__header">
          <h2>সার্চ</h2>
          <button onClick={onClose} aria-label="Close search">
            X
          </button>
        </div>

        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="খুঁজুন... কীওয়ার্ড, বিষয় বা লেখক"
          autoFocus
        />

        <SearchFilters
          categories={categories}
          category={category}
          dateRange={dateRange}
          sortBy={sortBy}
          onCategoryChange={setCategory}
          onDateRangeChange={setDateRange}
          onSortByChange={setSortBy}
        />

        {isFetching ? <p>সার্চ হচ্ছে...</p> : null}
        <SearchResults query={query} results={filtered} />
      </div>
    </div>
  )
}
