'use client'

import { useState } from 'react'
import { SearchModal } from '@/components/modules/Search'

export function SearchLauncher() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className="bb-icon-button" onClick={() => setOpen(true)} aria-label="সার্চ খুলুন">
        <span aria-hidden="true">⌕</span>
        <span className="bb-sr-only">সার্চ</span>
      </button>
      <SearchModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
