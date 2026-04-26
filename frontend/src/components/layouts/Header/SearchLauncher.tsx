'use client'

import { useState } from 'react'
import { SearchModal } from '@/components/modules/Search'

export function SearchLauncher() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)} aria-label="Open search">
        সার্চ
      </button>
      <SearchModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
