import { useQuery } from '@tanstack/react-query'
import { DataService } from '@/lib/data'

export function useGalleries() {
  return useQuery({
    queryKey: ['galleries'],
    queryFn: () => DataService.galleries.getAll(),
    staleTime: 1000 * 60 * 10,
  })
}

export function useGallery(id: string) {
  return useQuery({
    queryKey: ['gallery', id],
    queryFn: () => DataService.galleries.getById(id),
    enabled: !!id,
  })
}
