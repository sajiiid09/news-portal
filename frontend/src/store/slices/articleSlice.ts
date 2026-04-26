import { create } from 'zustand'

interface SavedArticle {
  id: string
  savedAt: string
}

interface ArticleState {
  savedArticles: SavedArticle[]
  recentlyViewed: string[]
  saveArticle: (articleId: string) => void
  unsaveArticle: (articleId: string) => void
  isSaved: (articleId: string) => boolean
  addToRecentlyViewed: (articleId: string) => void
  clearRecentlyViewed: () => void
}

export const useArticleStore = create<ArticleState>((set, get) => ({
  savedArticles: [],
  recentlyViewed: [],
  saveArticle: (articleId) =>
    set((state) => ({
      savedArticles: state.savedArticles.some((a) => a.id === articleId)
        ? state.savedArticles
        : [...state.savedArticles, { id: articleId, savedAt: new Date().toISOString() }],
    })),
  unsaveArticle: (articleId) =>
    set((state) => ({
      savedArticles: state.savedArticles.filter((a) => a.id !== articleId),
    })),
  isSaved: (articleId) => get().savedArticles.some((a) => a.id === articleId),
  addToRecentlyViewed: (articleId) =>
    set((state) => ({
      recentlyViewed: [
        articleId,
        ...state.recentlyViewed.filter((id) => id !== articleId),
      ].slice(0, 50),
    })),
  clearRecentlyViewed: () => set({ recentlyViewed: [] }),
}))
