import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'বর্তমান বাংলা',
    short_name: 'বর্তমান বাংলা',
    description: 'বাংলাদেশের সর্বাধিক পঠিত বাংলা নিউজ পেপার',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0b6bcb',
    lang: 'bn',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
    ],
  }
}
