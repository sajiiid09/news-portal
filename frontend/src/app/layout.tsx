import type { Metadata } from 'next'
import { Noto_Sans_Bengali, Noto_Serif_Bengali } from 'next/font/google'
import { QueryProvider } from '@/components/providers'
import { ThemeProvider } from '@/components/providers'
import { AuthProvider } from '@/components/providers'
import { Header } from '@/components/layouts/Header'
import { Footer } from '@/components/layouts/Footer'
import { BackToTop } from '@/components/layouts/BackToTop'
import { CookieConsent } from '@/components/layouts/CookieConsent'
import './globals.css'
import '@/styles/variables.css'
import '@/styles/typography.css'
import '@/styles/utilities.css'
import '@/styles/themes/light.css'
import '@/styles/themes/dark.css'

const banglaSans = Noto_Sans_Bengali({
  subsets: ['bengali'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-bangla-sans',
})

const banglaSerif = Noto_Serif_Bengali({
  subsets: ['bengali'],
  weight: ['500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-bangla-serif',
})

export const metadata: Metadata = {
  title: 'বর্তমান বাংলা | বাংলা নিউজ পেপার',
  description: 'বাংলাদেশের সর্বাধিক পঠিত বাংলা নিউজ পেপার',
  metadataBase: new URL('https://your-domain.com'),
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': '/feed.xml',
      'application/feed+json': '/feed.json',
    },
  },
  openGraph: {
    title: 'বর্তমান বাংলা',
    description: 'বাংলাদেশের সর্বাধিক পঠিত বাংলা নিউজ পেপার',
    type: 'website',
    locale: 'bn_BD',
    url: 'https://your-domain.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="bn" suppressHydrationWarning>
      <body className={`${banglaSans.variable} ${banglaSerif.variable}`}>
        <QueryProvider>
          <AuthProvider>
            <ThemeProvider>
              <Header />
              <main className="bb-main">{children}</main>
              <Footer />
              <BackToTop />
              <CookieConsent />
            </ThemeProvider>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  )
}
