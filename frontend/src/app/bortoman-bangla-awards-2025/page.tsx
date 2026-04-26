import type { Metadata } from 'next'
import { Container } from '@/components/layouts/Container'
import { DataService } from '@/lib/data'

export const metadata: Metadata = {
  title: 'BortomanBangla Awards 2025',
  description: 'BortomanBangla Awards 2025 বিজয়ীদের তালিকা।',
}

export default async function AwardsPage() {
  const winners = await DataService.awards.getWinners()

  return (
    <Container>
      <section className="bb-section bb-hero__primary">
        <h1>BortomanBangla Awards 2025</h1>
        <p>তারকাদের জমকালো আয়োজন, বিজয়ীদের তালিকা এবং ভিডিও হাইলাইটস।</p>
      </section>

      <section className="bb-section">
        <h2>বিজয়ী তালিকা</h2>
        <div className="bb-grid bb-grid--three">
          {winners.map((winner) => (
            <article key={winner.category} className="bb-card">
              <p className="bb-meta">{winner.category}</p>
              <h3>{winner.name}</h3>
            </article>
          ))}
        </div>
      </section>
    </Container>
  )
}
