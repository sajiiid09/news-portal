import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { DataService } from '@/lib/data'
import { Container } from '@/components/layouts/Container'
import { GalleryViewer } from '@/components/modules/PhotoGallery'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ galleryId: string }>
}): Promise<Metadata> {
  const { galleryId } = await params
  const gallery = await DataService.galleries.getById(galleryId)

  return {
    title: gallery?.title || 'গ্যালারি পাওয়া যায়নি',
    description: gallery ? `${gallery.title} ফটো গ্যালারি` : 'গ্যালারি পাওয়া যায়নি',
  }
}

export default async function GalleryDetailPage({
  params,
}: {
  params: Promise<{ galleryId: string }>
}) {
  const { galleryId } = await params
  const gallery = await DataService.galleries.getById(galleryId)

  if (!gallery) {
    notFound()
  }

  const galleryJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: gallery.title,
    associatedMedia: gallery.photos.map((photo) => ({
      '@type': 'ImageObject',
      contentUrl: photo.url,
      caption: photo.caption,
    })),
  }

  return (
    <Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd) }}
      />
      <h1>{gallery.title}</h1>
      <p className="bb-meta">মোট {gallery.photos.length} ছবি</p>
      <GalleryViewer photos={gallery.photos} />
    </Container>
  )
}
