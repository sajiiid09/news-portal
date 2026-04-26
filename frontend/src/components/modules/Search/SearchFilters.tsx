'use client'

interface SearchFiltersProps {
  categories: string[]
  category: string
  dateRange: string
  sortBy: 'relevance' | 'date'
  onCategoryChange: (value: string) => void
  onDateRangeChange: (value: string) => void
  onSortByChange: (value: 'relevance' | 'date') => void
}

const ranges = ['any', '24h', 'week', 'month', 'year']

export function SearchFilters({
  categories,
  category,
  dateRange,
  sortBy,
  onCategoryChange,
  onDateRangeChange,
  onSortByChange,
}: SearchFiltersProps) {
  return (
    <div className="bb-search-filters">
      <select value={category} onChange={(event) => onCategoryChange(event.target.value)}>
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <select value={sortBy} onChange={(event) => onSortByChange(event.target.value as 'relevance' | 'date')}>
        <option value="relevance">প্রাসঙ্গিকতা</option>
        <option value="date">তারিখ</option>
      </select>

      <select value={dateRange} onChange={(event) => onDateRangeChange(event.target.value)}>
        {ranges.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  )
}
