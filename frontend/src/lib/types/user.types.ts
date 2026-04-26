export interface User {
  id: string
  name: string
  email: string
  password?: string
  avatar?: string
  role: 'reader' | 'admin' | 'editor'
  token?: string
}
