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
