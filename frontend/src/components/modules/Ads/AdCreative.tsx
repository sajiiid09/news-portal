import Link from 'next/link'
import Image from 'next/image'
import { adCreatives } from '@/config'

type AdCreativeVariant = keyof typeof adCreatives

export function AdCreative({
  variant = 'inline',
  className = '',
}: {
  variant?: AdCreativeVariant
  className?: string
}) {
  const creative = adCreatives[variant]
  const dimensions = variant === 'leaderboard' ? { width: 970, height: 104 } : { width: 468, height: 250 }

  return (
    <Link
      href={creative.href}
      className={`bb-ad-creative bb-ad-creative--${variant} ${className}`.trim()}
      aria-label={`${creative.label} ${creative.size}`}
    >
      <span>বিজ্ঞাপন</span>
      <Image
        src={creative.image}
        alt={`${creative.label} ${creative.size}`}
        width={dimensions.width}
        height={dimensions.height}
        sizes={variant === 'leaderboard' ? '(max-width: 768px) 100vw, 970px' : '468px'}
        unoptimized
      />
      <small>{creative.size}</small>
    </Link>
  )
}
