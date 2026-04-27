import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/layouts/Container'
import { DataService } from '@/lib/data'

export const metadata: Metadata = {
  title: 'জেলা',
  description: 'বিভাগ, জেলা ও স্থানীয় বিষয়ভিত্তিক সংবাদ খোঁজার পাতা।',
}

export default async function DistrictTopicsPage() {
  const topics = await DataService.districtTopics.getAll()
  const divisions = topics.filter((topic) => topic.type === 'division')

  return (
    <Container>
      <main className="bb-district-page">
        <header className="bb-section-page__masthead">
          <h1>জেলা</h1>
        </header>

        <div className="bb-district-page__grid">
          {divisions.map((division) => {
            const children = topics.filter((topic) => topic.parentId === division.id)

            return (
              <section key={division.id} className="bb-district-card">
                <h2>{division.name}</h2>
                <div>
                  {children.map((topic) => (
                    <Link key={topic.id} href={`/tag/${encodeURIComponent(topic.slug)}`}>
                      <span>{topic.name}</span>
                      {topic.enName ? <small>{topic.enName}</small> : null}
                    </Link>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </main>
    </Container>
  )
}
