'use client'

import { useState } from 'react'
import { useCategories, useSearch } from '@/hooks'
import { SearchFilters, SearchResults } from '@/components/modules/Search'

export default function SearchPage() {
  const [term, setTerm] = useState('')
  const [category, setCategory] = useState('all')
  const [dateRange, setDateRange] = useState('any')
  const [sortBy, setSortBy] = useState<'relevance' | 'date'>('relevance')
  const { data, isFetching } = useSearch(term)
  const { data: categoriesData = [] } = useCategories()
  const categories = ['all', ...categoriesData.map((item) => item.slug)]

  const filtered = (data || [])
    .filter((item) => (category === 'all' ? true : item.categoryId === category))
    .sort((a, b) =>
      sortBy === 'date'
        ? new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        : a.title.length - b.title.length
    )

  return (
    <div className="bb-container bb-section">
      <h1>সার্চ</h1>
      <input
        value={term}
        onChange={(event) => setTerm(event.target.value)}
        placeholder="খুঁজুন... কীওয়ার্ড, বিষয় বা লেখক"
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

      {isFetching ? <p>খোঁজা হচ্ছে...</p> : null}
      <SearchResults query={term} results={filtered} />
    </div>
  )
}
