import Link from 'next/link'
import Image from 'next/image'
import { DataService } from '@/lib/data'
import type { Article, Video } from '@/lib/types'
import { TopBar } from './TopBar'
import { NavigationMenu } from './NavigationMenu'
import { BreakingTicker } from './BreakingTicker'
import { MobileMenu } from './MobileMenu'

function HeaderArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/article/${article.slug}`} className="bb-header-card bb-header-card--post">
      <Image
        src={article.image}
        alt={article.title}
        width={220}
        height={124}
        sizes="(max-width: 900px) 42vw, 180px"
      />
      <span>
        <strong>পোস্ট</strong>
        {article.title}
      </span>
    </Link>
  )
}

function HeaderVideoCard({ video }: { video: Video }) {
  return (
    <Link href={`/video/${video.id}`} className="bb-header-card bb-header-card--video">
      <Image
        src={video.thumbnail}
        alt={video.title}
        width={220}
        height={124}
        sizes="(max-width: 900px) 42vw, 180px"
      />
      <span>
        <strong>ভিডিও</strong>
        {video.title}
      </span>
    </Link>
  )
}

export async function Header() {
  const [tickerItems, latestVideos] = await Promise.all([
    DataService.articles.getLatest(10),
    DataService.videos.getLatest(1),
  ])
  const mastheadArticle = tickerItems[0]
  const mastheadVideo = latestVideos[0]

  return (
    <header className="bb-header">
      <TopBar />
      <BreakingTicker items={tickerItems} />
      <div className="bb-header__masthead">
        {mastheadArticle ? <HeaderArticleCard article={mastheadArticle} /> : <span />}
        <div className="bb-header__identity">
          <Link href="/" className="bb-header__brand" aria-label="বর্তমান বাংলা হোম">
            বর্তমান বাংলা
          </Link>
          <p>বিশ্বাসযোগ্য বাংলা সংবাদ</p>
        </div>
        {mastheadVideo ? <HeaderVideoCard video={mastheadVideo} /> : <span />}
      </div>
      <NavigationMenu />
      <MobileMenu />
    </header>
  )
}
