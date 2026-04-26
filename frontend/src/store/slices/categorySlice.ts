import { create } from 'zustand'

interface CategoryState {
  activeCategory: string | null
  activeSubCategory: string | null
  setCategory: (categorySlug: string | null) => void
  setSubCategory: (subCategorySlug: string | null) => void
}

export const useCategoryStore = create<CategoryState>((set) => ({
  activeCategory: null,
  activeSubCategory: null,
  setCategory: (activeCategory) => set({ activeCategory }),
  setSubCategory: (activeSubCategory) => set({ activeSubCategory }),
}))
