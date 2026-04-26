const formatter = new Intl.DateTimeFormat('bn-BD', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Asia/Dhaka',
})

export function BanglaDate() {
  const dateLabel = `${formatter.format(new Date())}, ঢাকা`

  return (
    <span className="bb-header-date" aria-label="আজকের তারিখ" suppressHydrationWarning>
      {dateLabel}
    </span>
  )
}
