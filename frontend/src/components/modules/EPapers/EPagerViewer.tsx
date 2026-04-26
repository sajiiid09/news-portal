'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { PageNavigation } from './PageNavigation'

export function EPagerViewer({
  date,
  pages,
}: {
  date: string
  pages: string[]
}) {
  const [page, setPage] = useState(1)

  const current = useMemo(() => pages[page - 1], [pages, page])

  return (
    <section className="bb-section">
      <h2>ই-পেপার - {date}</h2>
      <div className="bb-card">
        <p className="bb-meta">বর্তমান পৃষ্ঠা</p>
        <Image
          src={current}
          alt={`Epaper page ${page}`}
          width={1200}
          height={1697}
          sizes="(max-width: 768px) 100vw, 70vw"
        />
      </div>
      <PageNavigation
        page={page}
        total={pages.length}
        onPrev={() => setPage((value) => Math.max(1, value - 1))}
        onNext={() => setPage((value) => Math.min(pages.length, value + 1))}
      />
    </section>
  )
}
