import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('auth_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }

  return config
})

apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (typeof window !== 'undefined' && error.response?.status === 401) {
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
}
