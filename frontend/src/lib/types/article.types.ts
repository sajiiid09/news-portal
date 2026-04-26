export interface Article {
  id: string
  slug: string
  title: string
  summary: string
  body: string
  categoryId: string
  subCategoryId?: string
  authorId: string
  tags: string[]
  image: string
  imageCaption?: string
  imageCredit?: string
  views: number
  isFeatured: boolean
  isLive?: boolean
  publishedAt: string
  updatedAt?: string
}
