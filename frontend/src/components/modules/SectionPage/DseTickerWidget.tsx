'use client'

import { useEffect, useMemo, useState } from 'react'
import type { DseTickerItem } from '@/lib/types'

function indicatorClass(indicator: DseTickerItem['indicator']) {
  if (indicator === 'উর্ধ') return 'bb-dse-ticker__item--up'
  if (indicator === 'নিম্ন') return 'bb-dse-ticker__item--down'
  return 'bb-dse-ticker__item--stable'
}

function indicatorSymbol(indicator: DseTickerItem['indicator']) {
  if (indicator === 'উর্ধ') return '▲'
  if (indicator === 'নিম্ন') return '▼'
  return '■'
}

export function DseTickerWidget({
  fallbackItems,
  endpoint,
}: {
  fallbackItems: DseTickerItem[]
  endpoint: string
}) {
  const [items, setItems] = useState(fallbackItems)
  const [direction, setDirection] = useState<'normal' | 'reverse'>('normal')
  const [speed, setSpeed] = useState<'slow' | 'fast'>('slow')

  useEffect(() => {
    let cancelled = false

    async function loadTicker() {
      if (!endpoint) return

      try {
        const response = await fetch(endpoint, { cache: 'no-store' })
        if (!response.ok) return
        const payload = (await response.json()) as DseTickerItem[] | { items?: DseTickerItem[] }
        const nextItems = Array.isArray(payload) ? payload : payload.items
        if (!cancelled && nextItems?.length) {
          setItems(nextItems)
        }
      } catch {
        if (!cancelled) {
          setItems(fallbackItems)
        }
      }
    }

    loadTicker()

    return () => {
      cancelled = true
    }
  }, [endpoint, fallbackItems])

  const tickerItems = useMemo(() => [...items, ...items], [items])

  return (
    <section className="bb-dse-widget" aria-labelledby="dse-widget-title">
      <div className="bb-dse-widget__header">
        <div>
          <p className="bb-section-kicker">ডিএসই</p>
          <h2 id="dse-widget-title">শেয়ারবাজার</h2>
        </div>
        <div className="bb-dse-widget__controls" aria-label="টিকার নিয়ন্ত্রণ">
          <button type="button" onClick={() => setDirection('normal')} aria-pressed={direction === 'normal'}>
            ‹
          </button>
          <button type="button" onClick={() => setSpeed(speed === 'slow' ? 'fast' : 'slow')} aria-pressed={speed === 'fast'}>
            {speed === 'slow' ? '1x' : '2x'}
          </button>
          <button type="button" onClick={() => setDirection('reverse')} aria-pressed={direction === 'reverse'}>
            ›
          </button>
        </div>
      </div>
      <div className="bb-dse-ticker" data-direction={direction} data-speed={speed}>
        <div className="bb-dse-ticker__track">
          {tickerItems.map((item, index) => (
            <a
              key={`${item.tradingCode}-${index}`}
              href={`/business?trade-code=${encodeURIComponent(item.tradingCode)}`}
              className={`bb-dse-ticker__item ${indicatorClass(item.indicator)}`}
            >
              <span className="bb-dse-ticker__code">{item.tradingCode}</span>
              <span>{item.lastTradingPrice}</span>
              <span>{item.change}</span>
              <span>{item.changePercent}</span>
              <span className="bb-dse-ticker__indicator" aria-hidden="true">
                {indicatorSymbol(item.indicator)}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
