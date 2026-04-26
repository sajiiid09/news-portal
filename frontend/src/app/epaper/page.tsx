import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/layouts/Container'
import { DataService } from '@/lib/data'

export const metadata: Metadata = {
  title: 'ই-পেপার',
  description: 'বর্তমান বাংলার সাম্প্রতিক ই-পেপার সংখ্যা পড়ুন।',
}

export default async function EPaperPage() {
  const issues = await DataService.epaper.getIssues()

  return (
    <Container>
      <section className="bb-section">
        <h1>ই-পেপার - বর্তমান বাংলা</h1>
        <input type="date" defaultValue={issues[0]?.date} />
      </section>

      <section className="bb-section">
        <h2>সাম্প্রতিক সংখ্যা</h2>
        <div className="bb-grid bb-grid--three">
          {issues.map((issue) => (
            <article key={issue.date} className="bb-card">
              <p className="bb-meta">তারিখ: {issue.date}</p>
              <Link href={`/epaper/${issue.date}`}>এই সংখ্যা দেখুন</Link>
            </article>
          ))}
        </div>
      </section>
    </Container>
  )
}
