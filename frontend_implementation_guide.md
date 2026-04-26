# COMPLETE FRONTEND ARCHITECTURE GUIDE – NEXT.JS FOR LOW LATENCY & BACKEND-READY STRUCTURE

## Core Philosophy

Build the frontend as a pure data-driven shell where every piece of content comes from a single source of truth, which is the dummy data layer. The backend API later replaces that layer with zero UI rewrites and zero component refactoring. Every component must be pure and receive data via props or hooks. No component should ever know where the data originates.

---

## 1. COMPLETE FOLDER STRUCTURE

```
Bortomanbangla/
├── src/
│   ├── app/
│   │   ├── (routes)/
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── loading.tsx
│   │   │   ├── error.tsx
│   │   │   ├── not-found.tsx
│   │   │   ├── [category]/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── loading.tsx
│   │   │   │   └── [subcategory]/
│   │   │   │       └── page.tsx
│   │   │   ├── article/
│   │   │   │   └── [slug]/
│   │   │   │       ├── page.tsx
│   │   │   │       ├── loading.tsx
│   │   │   │       └── error.tsx
│   │   │   ├── video/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   ├── photo/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [galleryId]/
│   │   │   │       └── page.tsx
│   │   │   ├── epaper/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [date]/
│   │   │   │       └── page.tsx
│   │   │   ├── opinion/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [columnist]/
│   │   │   │       └── page.tsx
│   │   │   ├── search/
│   │   │   │   └── page.tsx
│   │   │   ├── author/
│   │   │   │   └── [name]/
│   │   │   │       └── page.tsx
│   │   │   ├── tag/
│   │   │   │   └── [tagName]/
│   │   │   │       └── page.tsx
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── register/
│   │   │   │   └── page.tsx
│   │   │   ├── dashboard/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── profile/
│   │   │   │   ├── bookmarks/
│   │   │   │   └── comments/
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   └── privacy/
│   │   │       └── page.tsx
│   │   ├── api/
│   │   │   └── (will be used only when backend is ready)
│   │   └── favicon.ico
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.module.css
│   │   │   │   └── index.ts
│   │   │   ├── Card/
│   │   │   │   ├── ArticleCard.tsx
│   │   │   │   ├── VideoCard.tsx
│   │   │   │   ├── GalleryCard.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Typography/
│   │   │   │   ├── Heading.tsx
│   │   │   │   ├── Text.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Input/
│   │   │   │   ├── SearchInput.tsx
│   │   │   │   ├── TextInput.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Modal/
│   │   │   │   ├── Modal.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Skeleton/
│   │   │   │   ├── ArticleSkeleton.tsx
│   │   │   │   ├── CardSkeleton.tsx
│   │   │   │   └── index.ts
│   │   │   └── Icons/
│   │   │       ├── SearchIcon.tsx
│   │   │       ├── MenuIcon.tsx
│   │   │       ├── CloseIcon.tsx
│   │   │       ├── ShareIcon.tsx
│   │   │       ├── BookmarkIcon.tsx
│   │   │       └── index.ts
│   │   │
│   │   ├── modules/
│   │   │   ├── HeroSection/
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── HeroSection.stories.tsx
│   │   │   │   └── index.ts
│   │   │   ├── NewsGrid/
│   │   │   │   ├── NewsGrid.tsx
│   │   │   │   ├── NewsGridRow.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Sidebar/
│   │   │   │   ├── Sidebar.tsx
│   │   │   │   ├── MostReadWidget.tsx
│   │   │   │   ├── LatestNewsWidget.tsx
│   │   │   │   ├── NewsletterSignup.tsx
│   │   │   │   ├── AdvertisementWidget.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Comments/
│   │   │   │   ├── CommentSection.tsx
│   │   │   │   ├── CommentForm.tsx
│   │   │   │   ├── CommentList.tsx
│   │   │   │   └── index.ts
│   │   │   ├── VideoPlayer/
│   │   │   │   ├── VideoPlayer.tsx
│   │   │   │   ├── VideoControls.tsx
│   │   │   │   └── index.ts
│   │   │   ├── PhotoGallery/
│   │   │   │   ├── GalleryViewer.tsx
│   │   │   │   ├── Lightbox.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Search/
│   │   │   │   ├── SearchModal.tsx
│   │   │   │   ├── SearchFilters.tsx
│   │   │   │   ├── SearchResults.tsx
│   │   │   │   └── index.ts
│   │   │   └── EPapers/
│   │   │       ├── EPagerViewer.tsx
│   │   │       ├── PageNavigation.tsx
│   │   │       └── index.ts
│   │   │
│   │   ├── layouts/
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── TopBar.tsx
│   │   │   │   ├── NavigationMenu.tsx
│   │   │   │   ├── MobileMenu.tsx
│   │   │   │   ├── BreakingTicker.tsx
│   │   │   │   └── index.ts
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── FooterLinks.tsx
│   │   │   │   ├── SocialLinks.tsx
│   │   │   │   └── index.ts
│   │   │   └── Container/
│   │   │       ├── Container.tsx
│   │   │       └── index.ts
│   │   │
│   │   └── providers/
│   │       ├── ThemeProvider.tsx
│   │       ├── AuthProvider.tsx
│   │       ├── QueryProvider.tsx
│   │       └── index.ts
│   │
│   ├── lib/
│   │   ├── data/
│   │   │   ├── articles/
│   │   │   │   ├── articles.ts
│   │   │   │   ├── articles.types.ts
│   │   │   │   └── index.ts
│   │   │   ├── categories/
│   │   │   │   ├── categories.ts
│   │   │   │   ├── subcategories.ts
│   │   │   │   └── index.ts
│   │   │   ├── authors/
│   │   │   │   ├── authors.ts
│   │   │   │   └── index.ts
│   │   │   ├── videos/
│   │   │   │   ├── videos.ts
│   │   │   │   └── index.ts
│   │   │   ├── galleries/
│   │   │   │   ├── galleries.ts
│   │   │   │   └── index.ts
│   │   │   ├── comments/
│   │   │   │   ├── comments.ts
│   │   │   │   └── index.ts
│   │   │   ├── users/
│   │   │   │   ├── users.ts
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── api/
│   │   │   ├── client.ts
│   │   │   ├── endpoints.ts
│   │   │   ├── types.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── types/
│   │   │   ├── article.types.ts
│   │   │   ├── category.types.ts
│   │   │   ├── user.types.ts
│   │   │   ├── comment.types.ts
│   │   │   ├── video.types.ts
│   │   │   ├── gallery.types.ts
│   │   │   ├── api.types.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── utils/
│   │   │   ├── dateFormatter.ts
│   │   │   ├── textTruncator.ts
│   │   │   ├── urlBuilder.ts
│   │   │   ├── localStorageHelper.ts
│   │   │   ├── validators.ts
│   │   │   └── index.ts
│   │   │
│   │   └── constants/
│   │       ├── siteConfig.ts
│   │       ├── routes.ts
│   │       ├── colors.ts
│   │       ├── breakpoints.ts
│   │       └── index.ts
│   │
│   ├── hooks/
│   │   ├── data/
│   │   │   ├── useArticles.ts
│   │   │   ├── useArticle.ts
│   │   │   ├── useCategories.ts
│   │   │   ├── useSubCategories.ts
│   │   │   ├── useVideos.ts
│   │   │   ├── useGalleries.ts
│   │   │   ├── useComments.ts
│   │   │   ├── useSearch.ts
│   │   │   ├── useAuthor.ts
│   │   │   └── index.ts
│   │   ├── ui/
│   │   │   ├── useTheme.ts
│   │   │   ├── useModal.ts
│   │   │   ├── useSidebar.ts
│   │   │   ├── useScrollPosition.ts
│   │   │   ├── useInfiniteScroll.ts
│   │   │   └── index.ts
│   │   ├── auth/
│   │   │   ├── useAuth.ts
│   │   │   ├── useLogin.ts
│   │   │   ├── useRegister.ts
│   │   │   ├── useLogout.ts
│   │   │   └── index.ts
│   │   └── index.ts
│   │
│   ├── store/
│   │   ├── slices/
│   │   │   ├── userSlice.ts
│   │   │   ├── uiSlice.ts
│   │   │   ├── articleSlice.ts
│   │   │   ├── categorySlice.ts
│   │   │   └── index.ts
│   │   ├── store.ts
│   │   └── index.ts
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── variables.css
│   │   ├── typography.css
│   │   ├── utilities.css
│   │   └── themes/
│   │       ├── light.css
│   │       └── dark.css
│   │
│   ├── config/
│   │   ├── site.ts
│   │   ├── navigation.ts
│   │   ├── ads.ts
│   │   └── index.ts
│   │
│   └── middleware.ts
│
├── public/
│   ├── fonts/
│   ├── images/
│   ├── icons/
│   └── fallback/
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .env.local
├── .env.production
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 2. THE DUMMY DATA LAYER (Complete Specification)

Create a single abstraction that the entire app uses. This layer must be fully typed and mirror exactly what the future API will return.

File: src/lib/data/index.ts

```
export const DataService = {
  articles: {
    getAll: () => import('./articles/articles').then(m => m.articles),
    getBySlug: (slug: string) => import('./articles/articles').then(m => m.articles.find(a => a.slug === slug)),
    getByCategory: (categoryId: string) => import('./articles/articles').then(m => m.articles.filter(a => a.categoryId === categoryId)),
    getBySubCategory: (subCategoryId: string) => import('./articles/articles').then(m => m.articles.filter(a => a.subCategoryId === subCategoryId)),
    getByAuthor: (authorId: string) => import('./articles/articles').then(m => m.articles.filter(a => a.authorId === authorId)),
    getByTag: (tag: string) => import('./articles/articles').then(m => m.articles.filter(a => a.tags.includes(tag))),
    getMostRead: (limit: number) => import('./articles/articles').then(m => m.articles.sort((a,b) => b.views - a.views).slice(0, limit)),
    getLatest: (limit: number) => import('./articles/articles').then(m => m.articles.sort((a,b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, limit)),
    getFeatured: (limit: number) => import('./articles/articles').then(m => m.articles.filter(a => a.isFeatured).slice(0, limit)),
  },
  categories: {
    getAll: () => import('./categories/categories').then(m => m.categories),
    getBySlug: (slug: string) => import('./categories/categories').then(m => m.categories.find(c => c.slug === slug)),
    getWithSubCategories: () => import('./categories/categories').then(m => m.categories),
  },
  subCategories: {
    getByCategory: (categoryId: string) => import('./categories/subcategories').then(m => m.subCategories.filter(s => s.categoryId === categoryId)),
  },
  authors: {
    getAll: () => import('./authors/authors').then(m => m.authors),
    getBySlug: (slug: string) => import('./authors/authors').then(m => m.authors.find(a => a.slug === slug)),
    getArticles: (authorId: string) => DataService.articles.getByAuthor(authorId),
  },
  videos: {
    getAll: () => import('./videos/videos').then(m => m.videos),
    getLatest: (limit: number) => import('./videos/videos').then(m => m.videos.slice(0, limit)),
    getByCategory: (categoryId: string) => import('./videos/videos').then(m => m.videos.filter(v => v.categoryId === categoryId)),
  },
  galleries: {
    getAll: () => import('./galleries/galleries').then(m => m.galleries),
    getBySlug: (slug: string) => import('./galleries/galleries').then(m => m.galleries.find(g => g.slug === slug)),
    getPhotos: (galleryId: string) => import('./galleries/galleries').then(m => m.galleries.find(g => g.id === galleryId)?.photos || []),
  },
  comments: {
    getByArticle: (articleId: string) => import('./comments/comments').then(m => m.comments.filter(c => c.articleId === articleId)),
    add: (comment: Omit<Comment, 'id' | 'createdAt'>) => { /* mock add, store in localStorage for demo */ },
  },
  search: {
    query: (searchTerm: string) => Promise.all([
      DataService.articles.getAll(),
    ]).then(([articles]) => articles.filter(a => 
      a.title.includes(searchTerm) || 
      a.summary.includes(searchTerm) || 
      a.body.includes(searchTerm)
    )),
  },
  auth: {
    login: (email: string, password: string) => import('./users/users').then(m => m.users.find(u => u.email === email && u.password === password)),
    register: (userData: any) => Promise.resolve({ success: true, user: userData }),
    logout: () => Promise.resolve({ success: true }),
  },
}
```

Rules for dummy data:
- All data must be in separate TypeScript files with proper typing
- Each dummy data file must export arrays that match the API types
- No async operations inside components using this data layer
- The DataService handles all async patterns consistently

---

## 3. COMPLETE HOOKS PATTERN

Hooks are the only place where components talk to the data layer. When backend is ready, only these files change.

File: src/hooks/data/useArticles.ts

```
import { useQuery } from '@tanstack/react-query'
import { DataService } from '@/lib/data'
import type { Article } from '@/lib/types'

// This hook works with dummy data NOW and will work with real API LATER
export function useArticles(options?: {
  category?: string
  subCategory?: string
  author?: string
  tag?: string
  limit?: number
  featured?: boolean
}) {
  // TODAY: Uses dummy data
  // FUTURE: Replace with API call
  const queryFn = async () => {
    let articles: Article[] = await DataService.articles.getAll()
    
    if (options?.category) {
      articles = await DataService.articles.getByCategory(options.category)
    }
    if (options?.subCategory) {
      articles = await DataService.articles.getBySubCategory(options.subCategory)
    }
    if (options?.limit) {
      articles = articles.slice(0, options.limit)
    }
    
    return articles
  }

  return useQuery({
    queryKey: ['articles', options],
    queryFn,
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  })
}

// Single article hook
export function useArticle(slug: string) {
  const queryFn = async () => {
    return await DataService.articles.getBySlug(slug)
  }

  return useQuery({
    queryKey: ['article', slug],
    queryFn,
    staleTime: 1000 * 60 * 5,
    enabled: !!slug,
  })
}

// Most read hook (cached separately)
export function useMostRead(limit: number = 10) {
  const queryFn = async () => {
    return await DataService.articles.getMostRead(limit)
  }

  return useQuery({
    queryKey: ['most-read', limit],
    queryFn,
    staleTime: 1000 * 60 * 30, // 30 minutes - rarely changes
    gcTime: 1000 * 60 * 60,
  })
}

// Latest news hook (shorter cache)
export function useLatestNews(limit: number = 20) {
  const queryFn = async () => {
    return await DataService.articles.getLatest(limit)
  }

  return useQuery({
    queryKey: ['latest-news', limit],
    queryFn,
    staleTime: 1000 * 60, // 1 minute - updates frequently
    refetchInterval: 1000 * 60, // Refetch every minute in background
  })
}

// Featured articles hook
export function useFeaturedArticles(limit: number = 5) {
  const queryFn = async () => {
    return await DataService.articles.getFeatured(limit)
  }

  return useQuery({
    queryKey: ['featured', limit],
    queryFn,
    staleTime: 1000 * 60 * 10, // 10 minutes
  })
}
```

File: src/hooks/data/useCategories.ts

```
import { useQuery } from '@tanstack/react-query'
import { DataService } from '@/lib/data'

export function useCategories() {
  const queryFn = async () => {
    return await DataService.categories.getAll()
  }

  return useQuery({
    queryKey: ['categories'],
    queryFn,
    staleTime: 1000 * 60 * 60, // 1 hour - changes rarely
    gcTime: 1000 * 60 * 60 * 24, // 24 hours
  })
}

export function useSubCategories(categoryId: string) {
  const queryFn = async () => {
    return await DataService.subCategories.getByCategory(categoryId)
  }

  return useQuery({
    queryKey: ['subcategories', categoryId],
    queryFn,
    staleTime: 1000 * 60 * 60,
    enabled: !!categoryId,
  })
}
```

File: src/hooks/data/useSearch.ts

```
import { useQuery } from '@tanstack/react-query'
import { DataService } from '@/lib/data'
import { useDebounce } from '@/hooks/ui'

export function useSearch(searchTerm: string) {
  const debouncedSearchTerm = useDebounce(searchTerm, 300)

  const queryFn = async () => {
    if (!debouncedSearchTerm || debouncedSearchTerm.length < 2) {
      return []
    }
    return await DataService.search.query(debouncedSearchTerm)
  }

  return useQuery({
    queryKey: ['search', debouncedSearchTerm],
    queryFn,
    enabled: debouncedSearchTerm.length >= 2,
    staleTime: 1000 * 60, // 1 minute
  })
}
```

File: src/hooks/ui/useDebounce.ts

```
import { useEffect, useState } from 'react'

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return debouncedValue
}
```

File: src/hooks/auth/useAuth.ts

```
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { DataService } from '@/lib/data'
import { useUserStore } from '@/store'

export function useAuth() {
  const queryClient = useQueryClient()
  const { setUser, clearUser, user } = useUserStore()

  const loginMutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      DataService.auth.login(email, password),
    onSuccess: (userData) => {
      if (userData) {
        setUser(userData)
        // Store token in cookie or localStorage
        localStorage.setItem('auth_token', userData.token)
      }
    },
  })

  const registerMutation = useMutation({
    mutationFn: (userData: any) => DataService.auth.register(userData),
    onSuccess: (response) => {
      if (response.success) {
        setUser(response.user)
      }
    },
  })

  const logoutMutation = useMutation({
    mutationFn: () => DataService.auth.logout(),
    onSuccess: () => {
      clearUser()
      localStorage.removeItem('auth_token')
      queryClient.clear()
    },
  })

  return {
    user,
    isAuthenticated: !!user,
    login: loginMutation.mutateAsync,
    register: registerMutation.mutateAsync,
    logout: logoutMutation.mutateAsync,
    isLoading: loginMutation.isPending || registerMutation.isPending,
  }
}
```

---

## 4. STATE MANAGEMENT STRATEGY (Zustand)

File: src/store/slices/userSlice.ts

```
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from '@/lib/types'

interface UserState {
  user: User | null
  isAuthenticated: boolean
  setUser: (user: User | null) => void
  clearUser: () => void
  updateUser: (updates: Partial<User>) => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      clearUser: () => set({ user: null, isAuthenticated: false }),
      updateUser: (updates) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null,
        })),
    }),
    {
      name: 'user-storage',
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated }),
    }
  )
)
```

File: src/store/slices/uiSlice.ts

```
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UIState {
  theme: 'light' | 'dark'
  sidebarOpen: boolean
  searchModalOpen: boolean
  mobileMenuOpen: boolean
  cookieConsent: boolean
  toggleTheme: () => void
  setSidebarOpen: (open: boolean) => void
  setSearchModalOpen: (open: boolean) => void
  setMobileMenuOpen: (open: boolean) => void
  acceptCookies: () => void
}

export const useUIStore = create<UIState>()(
  persist(
    (set) => ({
      theme: 'light',
      sidebarOpen: false,
      searchModalOpen: false,
      mobileMenuOpen: false,
      cookieConsent: false,
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      setSearchModalOpen: (open) => set({ searchModalOpen: open }),
      setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
      acceptCookies: () => set({ cookieConsent: true }),
    }),
    {
      name: 'ui-storage',
      partialize: (state) => ({ theme: state.theme, cookieConsent: state.cookieConsent }),
    }
  )
)
```

File: src/store/slices/articleSlice.ts

```
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
      savedArticles: [
        ...state.savedArticles,
        { id: articleId, savedAt: new Date().toISOString() },
      ],
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
      ].slice(0, 50), // Keep last 50
    })),
  clearRecentlyViewed: () => set({ recentlyViewed: [] }),
}))
```

---

## 5. COMPLETE COLOR SYSTEM (CSS Variables)

File: src/styles/variables.css

```
:root {
  /* Base Colors */
  --color-black: #000000;
  --color-white: #ffffff;
  --color-dark-gray: #1a1a1a;
  --color-medium-gray: #666666;
  --color-light-gray: #e5e5e5;
  --color-off-white: #f5f5f5;
  
  /* Gradients */
  --gradient-special: linear-gradient(135deg, #87cee8, #ffffff);
  --gradient-subtle: linear-gradient(90deg, #e8f1f8, #ffffff);
  
  /* Buttons */
  --color-button-primary: #b8c9db;
  --color-button-primary-hover: #a0b5cc;
  --color-button-primary-active: #8aa3bf;
  --color-button-text: #000000;
  
  /* Status */
  --color-error: #d32f2f;
  --color-success: #2e7d32;
  --color-warning: #f57c00;
  --color-live: #ff0000;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.12);
  --shadow-lg: 0 20px 60px rgba(0, 0, 0, 0.3);
  --shadow-hover: 0 4px 12px rgba(0, 0, 0, 0.15);
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
  
  /* Typography */
  --font-primary: 'SolaimanLipi', 'Kalpurush', system-ui, -apple-system, sans-serif;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  --font-size-5xl: 3rem;
  
  /* Spacing */
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-5: 1.25rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
  --spacing-10: 2.5rem;
  --spacing-12: 3rem;
  --spacing-16: 4rem;
  
  /* Layout */
  --container-max-width: 1280px;
  --container-padding: 1rem;
  --header-height-desktop: 80px;
  --header-height-mobile: 60px;
  
  /* Z-Index */
  --z-negative: -1;
  --z-low: 10;
  --z-medium: 20;
  --z-high: 30;
  --z-modal: 40;
  --z-popover: 50;
  --z-toast: 60;
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-black: #ffffff;
    --color-white: #0a0a0a;
    --color-dark-gray: #1a1a1a;
    --color-medium-gray: #aaaaaa;
    --color-light-gray: #333333;
    --color-off-white: #111111;
    --gradient-special: linear-gradient(135deg, #87cee8, #1a1a1a);
    --shadow-sm: 0 1px 3px rgba(255, 255, 255, 0.05);
    --shadow-md: 0 4px 12px rgba(255, 255, 255, 0.08);
    --shadow-lg: 0 20px 60px rgba(0, 0, 0, 0.7);
  }
}

/* Manual Dark Mode Toggle */
[data-theme="dark"] {
  --color-black: #ffffff;
  --color-white: #0a0a0a;
  --color-dark-gray: #1a1a1a;
  --color-medium-gray: #aaaaaa;
  --color-light-gray: #333333;
  --color-off-white: #111111;
  --gradient-special: linear-gradient(135deg, #87cee8, #1a1a1a);
  --shadow-sm: 0 1px 3px rgba(255, 255, 255, 0.05);
  --shadow-md: 0 4px 12px rgba(255, 255, 255, 0.08);
}

[data-theme="light"] {
  --color-black: #000000;
  --color-white: #ffffff;
  --color-dark-gray: #1a1a1a;
  --color-medium-gray: #666666;
  --color-light-gray: #e5e5e5;
  --color-off-white: #f5f5f5;
  --gradient-special: linear-gradient(135deg, #87cee8, #ffffff);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.12);
}
```

---

## 6. COMPLETE BUTTON SYSTEM

File: src/components/ui/Button/Button.tsx

```
import { ReactNode } from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  loading?: boolean
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  icon,
  iconPosition = 'left',
}: ButtonProps) {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--spacing-2)',
    fontWeight: '500',
    borderRadius: '4px',
    cursor: disabled || loading ? 'not-allowed' : 'pointer',
    transition: 'all var(--transition-fast)',
    border: 'none',
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled || loading ? 0.6 : 1,
  }

  const variantStyles = {
    primary: {
      backgroundColor: 'var(--color-button-primary)',
      color: 'var(--color-button-text)',
      ':hover': {
        backgroundColor: 'var(--color-button-primary-hover)',
      },
      ':active': {
        backgroundColor: 'var(--color-button-primary-active)',
      },
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--color-black)',
      border: '1px solid var(--color-button-primary)',
      ':hover': {
        backgroundColor: 'var(--color-button-primary)',
      },
    },
    tertiary: {
      backgroundColor: 'transparent',
      color: 'var(--color-black)',
      textDecoration: 'underline',
      ':hover': {
        opacity: 0.7,
      },
    },
    danger: {
      backgroundColor: 'var(--color-error)',
      color: 'var(--color-white)',
      ':hover': {
        opacity: 0.9,
      },
    },
    success: {
      backgroundColor: 'var(--color-success)',
      color: 'var(--color-white)',
      ':hover': {
        opacity: 0.9,
      },
    },
  }

  const sizeStyles = {
    sm: {
      padding: '6px 12px',
      fontSize: 'var(--font-size-sm)',
    },
    md: {
      padding: '8px 16px',
      fontSize: 'var(--font-size-base)',
    },
    lg: {
      padding: '12px 24px',
      fontSize: 'var(--font-size-lg)',
    },
  }

  return (
    <button
      type={type}
      style={{ ...baseStyles, ...variantStyles[variant], ...sizeStyles[size] }}
      onClick={onClick}
      disabled={disabled || loading}
      className={styles.button}
    >
      {loading && <span className={styles.spinner} />}
      {!loading && icon && iconPosition === 'left' && icon}
      {children}
      {!loading && icon && iconPosition === 'right' && icon}
    </button>
  )
}
```

---

## 7. NEXT.JS CONFIGURATION FOR LOW LATENCY

File: next.config.ts

```
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Static optimization
  output: 'standalone',
  compress: true,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000, // 1 year for static images
  },
  
  // Caching headers
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'CDN-Cache-Control',
            value: 'public, max-age=60, stale-while-revalidate=300',
          },
        ],
      },
    ]
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Performance
  swcMinify: true,
  poweredByHeader: false,
  
  // Bundle analysis (optional)
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
        config.plugins.push(new BundleAnalyzerPlugin())
      }
      return config
    },
  }),
}

export default nextConfig
```

---

## 8. PROVIDERS SETUP

File: src/components/providers/QueryProvider.tsx

```
'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useState } from 'react'

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5,
            gcTime: 1000 * 60 * 10,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retry: 1,
          },
          mutations: {
            retry: 1,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
    </QueryClientProvider>
  )
}
```

File: src/components/providers/ThemeProvider.tsx

```
'use client'

import { useEffect } from 'react'
import { useUIStore } from '@/store'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useUIStore()

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark')
      root.classList.add('dark')
    } else {
      root.setAttribute('data-theme', 'light')
      root.classList.remove('dark')
    }
  }, [theme])

  return <>{children}</>
}
```

File: src/app/layout.tsx

```
import type { Metadata } from 'next'
import { QueryProvider } from '@/components/providers/QueryProvider'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { Header } from '@/components/layouts/Header'
import { Footer } from '@/components/layouts/Footer'
import '@/styles/globals.css'
import '@/styles/variables.css'

export const metadata: Metadata = {
  title: 'প্রথম আলো | বাংলা নিউজ পেপার',
  description: 'বাংলাদেশের সর্বাধিক পঠিত বাংলা নিউজ পেপার',
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    title: 'প্রথম আলো',
    description: 'বাংলাদেশের সর্বাধিক পঠিত বাংলা নিউজ পেপার',
    type: 'website',
    locale: 'bn_BD',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body>
        <QueryProvider>
          <ThemeProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
```

---

## 9. PAGE EXAMPLE (Homepage with Dummy Data)

File: src/app/page.tsx

```
import { HeroSection } from '@/components/modules/HeroSection'
import { NewsGrid } from '@/components/modules/NewsGrid'
import { Sidebar } from '@/components/modules/Sidebar'
import { VideoSection } from '@/components/modules/VideoSection'
import { OpinionSection } from '@/components/modules/OpinionSection'
import { DataService } from '@/lib/data'

// Static generation - pre-builds at deploy time
export const dynamic = 'force-static'
export const revalidate = 60 // Revalidate every 60 seconds

export default async function HomePage() {
  // Fetch data at build time (SSG)
  const featuredArticles = await DataService.articles.getFeatured(5)
  const latestArticles = await DataService.articles.getLatest(20)
  const mostRead = await DataService.articles.getMostRead(10)
  const categories = await DataService.categories.getAll()
  const videos = await DataService.videos.getLatest(6)

  return (
    <div className="container">
      <div className="grid grid--2cols">
        <div className="main-content">
          <HeroSection articles={featuredArticles} />
          <OpinionSection />
          <NewsGrid 
            title="সর্বশেষ খবর"
            articles={latestArticles}
            viewAllLink="/latest"
          />
          <VideoSection videos={videos} />
        </div>
        <div className="sidebar">
          <Sidebar mostRead={mostRead} categories={categories} />
        </div>
      </div>
    </div>
  )
}
```

---

## 10. BACKEND INTEGRATION PLAN (The Swap)

When backend API is ready, follow these steps exactly:

Step 1: Create API client

File: src/lib/api/client.ts

```
import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add auth token interceptor
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Add response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('auth_token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export const api = {
  articles: {
    getAll: () => apiClient.get('/articles'),
    getBySlug: (slug: string) => apiClient.get(`/articles/${slug}`),
    getByCategory: (categoryId: string) => apiClient.get(`/articles?category=${categoryId}`),
    getMostRead: (limit: number) => apiClient.get(`/articles/most-read?limit=${limit}`),
    getLatest: (limit: number) => apiClient.get(`/articles/latest?limit=${limit}`),
    getFeatured: (limit: number) => apiClient.get(`/articles/featured?limit=${limit}`),
  },
  categories: {
    getAll: () => apiClient.get('/categories'),
  },
  // ... rest of endpoints
}
```

Step 2: Update hooks to use API

File: src/hooks/data/useArticles.ts (Updated)

```
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/api/client' // Changed from DataService

export function useArticles(options?: any) {
  const queryFn = async () => {
    // Direct API call instead of dummy data
    const response = await api.articles.getAll()
    return response
  }

  return useQuery({
    queryKey: ['articles', options],
    queryFn,
    staleTime: 1000 * 60 * 5,
  })
}
```

Step 3: Remove or archive lib/data folder

Step 4: Update environment variables

```
NEXT_PUBLIC_API_URL=https://api.yourbackend.com
```

Step 5: Test all pages

The swap takes approximately 30 minutes with zero component changes.

---

## 11. PERFORMANCE TARGETS AND VERIFICATION

Target metrics to achieve O(1) latency feel:

| Metric | Target | Measurement Tool |
|--------|--------|------------------|
| Time to First Byte (TTFB) | < 100ms | Chrome DevTools |
| Largest Contentful Paint (LCP) | < 1.5s | Lighthouse |
| First Input Delay (FID) | < 50ms | Lighthouse |
| Cumulative Layout Shift (CLS) | < 0.1 | Lighthouse |
| Time to Interactive (TTI) | < 2s | Lighthouse |
| Speed Index | < 1.5s | Lighthouse |

Pre-launch checks:
- Run `next build` to ensure all pages are statically generated
- Run `next start` and test with Lighthouse
- Test on slow 3G network in DevTools
- Test on mobile device emulation
- Verify all images have width/height attributes
- Verify all fonts use `font-display: swap`
- Verify no console errors

---
