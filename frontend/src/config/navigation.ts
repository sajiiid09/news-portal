export interface NavItem {
  label: string
  href: string
}

export const navigation: NavItem[] = [
  { label: 'সর্বশেষ', href: '/latest' },
  { label: 'বাংলাদেশ', href: '/bangladesh' },
  { label: 'জেলা', href: '/district-topics' },
  { label: 'রাজনীতি', href: '/politics' },
  { label: 'বিশ্ব', href: '/world' },
  { label: 'বাণিজ্য', href: '/business' },
  { label: 'মতামত', href: '/opinion' },
  { label: 'খেলা', href: '/sports' },
  { label: 'বিনোদন', href: '/entertainment' },
  { label: 'চাকরি', href: '/jobs' },
  { label: 'জীবনযাপন', href: '/lifestyle' },
  { label: 'ভিডিও', href: '/video' },
]
