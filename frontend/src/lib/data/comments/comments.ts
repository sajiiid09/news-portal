import type { Comment } from '@/lib/types'
import rawComments from '../../../../data/comments.json'

export const comments = rawComments as Comment[]
