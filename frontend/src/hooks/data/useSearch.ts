import { useQuery } from '@tanstack/react-query'
import { DataService } from '@/lib/data'
import { useDebounce } from '@/hooks/ui/useDebounce'

export function useSearch(searchTerm: string) {
  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  return useQuery({
    queryKey: ['search', debouncedSearchTerm],
    queryFn: async () => {
      if (!debouncedSearchTerm || debouncedSearchTerm.length < 2) {
        return []
      }

      return DataService.search.query(debouncedSearchTerm)
    },
    enabled: debouncedSearchTerm.length >= 2,
    staleTime: 1000 * 60,
  })
}
