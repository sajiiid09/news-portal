import type { Comment, User } from '@/lib/types'

interface LiveUpdateItem {
  id: string
  time: string
  text: string
  location: string
}

interface LiveFeed {
  id: string
  slug: string
  title: string
  publishedAt: string
  items: LiveUpdateItem[]
}

interface EPaperIssue {
  date: string
  pages: string[]
}

interface AwardWinner {
  category: string
  name: string
}

const LOCAL_STORAGE_COMMENTS_KEY = 'bb_comments'

function getLocalStorageComments(): Comment[] {
  if (typeof window === 'undefined' || typeof window.localStorage?.getItem !== 'function') {
    return []
  }

  try {
    return JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_COMMENTS_KEY) || '[]') as Comment[]
  } catch {
    return []
  }
}

export const DataService = {
  articles: {
    getAll: () => import('./articles/articles').then((m) => m.articles),
    getBySlug: (slug: string) =>
      import('./articles/articles').then((m) => m.articles.find((a) => a.slug === slug)),
    getByCategory: (categoryId: string) =>
      import('./articles/articles').then((m) =>
        m.articles.filter((a) => a.categoryId === categoryId)
      ),
    getBySubCategory: (subCategoryId: string) =>
      import('./articles/articles').then((m) =>
        m.articles.filter((a) => a.subCategoryId === subCategoryId)
      ),
    getByAuthor: (authorId: string) =>
      import('./articles/articles').then((m) => m.articles.filter((a) => a.authorId === authorId)),
    getByTag: (tag: string) =>
      import('./articles/articles').then((m) => m.articles.filter((a) => a.tags.includes(tag))),
    getMostRead: (limit: number) =>
      import('./articles/articles').then((m) =>
        [...m.articles].sort((a, b) => b.views - a.views).slice(0, limit)
      ),
    getLatest: (limit: number) =>
      import('./articles/articles').then((m) =>
        [...m.articles]
          .sort(
            (a, b) =>
              new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
          )
          .slice(0, limit)
      ),
    getFeatured: (limit: number) =>
      import('./articles/articles').then((m) =>
        m.articles.filter((a) => a.isFeatured).slice(0, limit)
      ),
  },
  categories: {
    getAll: () => import('./categories/categories').then((m) => m.categories),
    getBySlug: (slug: string) =>
      import('./categories/categories').then((m) => m.categories.find((c) => c.slug === slug)),
    getWithSubCategories: () => import('./categories/categories').then((m) => m.categories),
  },
  subCategories: {
    getAll: () => import('./categories/subcategories').then((m) => m.subCategories),
    getByCategory: (categoryId: string) =>
      import('./categories/subcategories').then((m) =>
        m.subCategories.filter((s) => s.categoryId === categoryId)
      ),
  },
  authors: {
    getAll: () => import('./authors/authors').then((m) => m.authors),
    getBySlug: (slug: string) =>
      import('./authors/authors').then((m) => m.authors.find((a) => a.slug === slug)),
    getArticles: (authorId: string) => DataService.articles.getByAuthor(authorId),
  },
  videos: {
    getAll: () => import('./videos/videos').then((m) => m.videos),
    getLatest: (limit: number) => import('./videos/videos').then((m) => m.videos.slice(0, limit)),
    getByCategory: (categoryId: string) =>
      import('./videos/videos').then((m) => m.videos.filter((v) => v.categoryId === categoryId)),
    getById: (id: string) => import('./videos/videos').then((m) => m.videos.find((v) => v.id === id)),
  },
  galleries: {
    getAll: () => import('./galleries/galleries').then((m) => m.galleries),
    getBySlug: (slug: string) =>
      import('./galleries/galleries').then((m) => m.galleries.find((g) => g.slug === slug)),
    getById: (id: string) =>
      import('./galleries/galleries').then((m) => m.galleries.find((g) => g.id === id)),
    getPhotos: (galleryId: string) =>
      import('./galleries/galleries').then(
        (m) => m.galleries.find((g) => g.id === galleryId)?.photos || []
      ),
  },
  live: {
    getAll: () => import('../../../data/live-updates.json').then((m) => m.default as LiveFeed[]),
    getBySlug: (slug: string) =>
      import('../../../data/live-updates.json').then((m) =>
        (m.default as LiveFeed[]).find((feed) => feed.slug === slug)
      ),
  },
  epaper: {
    getIssues: () =>
      import('../../../data/epaper-issues.json').then((m) => m.default as EPaperIssue[]),
    getByDate: (date: string) =>
      import('../../../data/epaper-issues.json').then((m) =>
        (m.default as EPaperIssue[]).find((issue) => issue.date === date)
      ),
  },
  awards: {
    getWinners: () =>
      import('../../../data/awards-winners.json').then((m) => m.default as AwardWinner[]),
  },
  comments: {
    getByArticle: async (articleId: string) => {
      const moduleComments = (await import('./comments/comments')).comments
      const localComments = getLocalStorageComments()

      return [...moduleComments, ...localComments].filter((c) => c.articleId === articleId)
    },
    add: async (comment: Omit<Comment, 'id' | 'createdAt'>) => {
      const newComment: Comment = {
        ...comment,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      }

      if (typeof window !== 'undefined' && typeof window.localStorage?.setItem === 'function') {
        const currentComments = getLocalStorageComments()
        window.localStorage.setItem(
          LOCAL_STORAGE_COMMENTS_KEY,
          JSON.stringify([...currentComments, newComment])
        )
      }

      return newComment
    },
  },
  search: {
    query: (searchTerm: string) =>
      Promise.all([DataService.articles.getAll()]).then(([articles]) =>
        articles.filter(
          (a) =>
            a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            a.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
            a.body.toLowerCase().includes(searchTerm.toLowerCase())
        )
      ),
  },
  auth: {
    login: (email: string, password: string) =>
      import('./users/users').then((m) =>
        m.users.find((u) => u.email === email && u.password === password)
      ),
    register: (userData: User) => Promise.resolve({ success: true, user: userData }),
    logout: () => Promise.resolve({ success: true }),
  },
}
