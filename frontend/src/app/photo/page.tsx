import type { Metadata } from 'next'
import { DataService } from '@/lib/data'
import { Container } from '@/components/layouts/Container'
import { GalleryCard } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'ছবি',
  description: 'ফটো গ্যালারি এবং চিত্র প্রতিবেদনের সংগ্রহ।',
}

export default async function PhotoPage() {
  const galleries = await DataService.galleries.getAll()

  return (
    <Container>
      <h1>ছবি</h1>
      <div className="bb-grid bb-grid--three">
        {galleries.map((gallery) => (
          <GalleryCard key={gallery.id} gallery={gallery} />
        ))}
      </div>
    </Container>
  )
}
