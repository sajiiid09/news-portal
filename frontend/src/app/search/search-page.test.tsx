import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SearchPage from './page'

describe('Search page', () => {
  it('renders search heading', () => {
    const queryClient = new QueryClient()

    render(
      <QueryClientProvider client={queryClient}>
        <SearchPage />
      </QueryClientProvider>
    )

    expect(screen.getByRole('heading', { name: 'সার্চ' })).toBeInTheDocument()
  })
})
