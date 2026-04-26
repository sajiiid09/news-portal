'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { DataService } from '@/lib/data'
import { useUserStore } from '@/store'
import type { User } from '@/lib/types'

export function useAuth() {
  const queryClient = useQueryClient()
  const { setUser, clearUser, user } = useUserStore()

  const loginMutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      DataService.auth.login(email, password),
    onSuccess: (userData) => {
      if (userData) {
        setUser(userData)
        if (userData.token) {
          localStorage.setItem('auth_token', userData.token)
        }
      }
    },
  })

  const registerMutation = useMutation({
    mutationFn: (userData: User) => DataService.auth.register(userData),
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
    loginError: loginMutation.error,
  }
}
