import type { User } from '@/lib/types'
import rawUsers from '../../../../data/users.json'

export const users = rawUsers as User[]
