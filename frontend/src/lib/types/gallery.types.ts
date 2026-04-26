export interface GalleryPhoto {
  id: string
  url: string
  caption: string
  credit?: string
}

export interface Gallery {
  id: string
  slug: string
  title: string
  coverImage: string
  photos: GalleryPhoto[]
  publishedAt: string
}
