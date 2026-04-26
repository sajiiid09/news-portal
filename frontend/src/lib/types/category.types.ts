export interface Category {
  id: string
  slug: string
  name: string
  description?: string
}

export interface SubCategory {
  id: string
  categoryId: string
  slug: string
  name: string
}
