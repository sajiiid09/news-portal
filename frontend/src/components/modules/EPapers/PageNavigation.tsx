'use client'

export function PageNavigation({
  page,
  total,
  onPrev,
  onNext,
}: {
  page: number
  total: number
  onPrev: () => void
  onNext: () => void
}) {
  return (
    <div className="bb-epaper-nav">
      <button onClick={onPrev} disabled={page <= 1}>
        পূর্ববর্তী
      </button>
      <span>
        Page {page}/{total}
      </span>
      <button onClick={onNext} disabled={page >= total}>
        পরবর্তী
      </button>
    </div>
  )
}
