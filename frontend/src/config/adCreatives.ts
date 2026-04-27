export interface AdCreative {
  label: string
  href: string
  image: string
  source: string
  size: string
}

export const adCreatives = {
  leaderboard: {
    label: 'Sponsored creative',
    href: '/advertise',
    image:
      'https://commons.wikimedia.org/wiki/Special:Redirect/file/Knowledge_Is_Human_Homepage_Animated_Banner.gif',
    source: 'Wikimedia Commons',
    size: '728x90',
  },
  inline: {
    label: 'Sponsored creative',
    href: '/advertise',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Graphic_Lab_Animated_Banner.gif',
    source: 'Wikimedia Commons',
    size: '300x250',
  },
  sidebar: {
    label: 'Sponsored creative',
    href: '/advertise',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/AI_banner.gif',
    source: 'Wikimedia Commons',
    size: '300x600',
  },
} satisfies Record<'leaderboard' | 'inline' | 'sidebar', AdCreative>
