import Link from 'next/link'
import { DataService } from '@/lib/data'
import { TopBar } from './TopBar'
import { NavigationMenu } from './NavigationMenu'
import { BreakingTicker } from './BreakingTicker'
import { MobileMenu } from './MobileMenu'

export async function Header() {
  const tickerItems = await DataService.articles.getLatest(6)

  return (
    <header className="bb-header">
      <TopBar />
      <div className="bb-header__brand">
        <Link href="/">বর্তমান বাংলা</Link>
      </div>
      <NavigationMenu />
      <BreakingTicker items={tickerItems} />
      <MobileMenu />
    </header>
  )
}
