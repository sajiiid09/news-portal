import { useQuery } from '@tanstack/react-query'
import { DataService } from '@/lib/data'

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => DataService.categories.getAll(),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
  })
}

export function useSubCategories(categoryId: string) {
  return useQuery({
    queryKey: ['subcategories', categoryId],
    queryFn: () => DataService.subCategories.getByCategory(categoryId),
    staleTime: 1000 * 60 * 60,
    enabled: !!categoryId,
  })
}
