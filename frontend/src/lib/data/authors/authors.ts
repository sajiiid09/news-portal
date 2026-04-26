export interface Author {
  id: string
  slug: string
  name: string
  designation: string
  avatar: string
}

import rawAuthors from '../../../../data/authors.json'

export const authors = rawAuthors as Author[]
