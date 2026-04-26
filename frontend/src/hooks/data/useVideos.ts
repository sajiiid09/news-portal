import { useQuery } from '@tanstack/react-query'
import { DataService } from '@/lib/data'

export function useVideos(limit = 8) {
  return useQuery({
    queryKey: ['videos', limit],
    queryFn: () => DataService.videos.getLatest(limit),
    staleTime: 1000 * 60 * 5,
  })
}

export function useVideo(id: string) {
  return useQuery({
    queryKey: ['video', id],
    queryFn: () => DataService.videos.getById(id),
    enabled: !!id,
  })
}
