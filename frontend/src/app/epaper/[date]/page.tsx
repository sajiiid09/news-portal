import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/layouts/Container'
import { EPagerViewer } from '@/components/modules/EPapers'
import { DataService } from '@/lib/data'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ date: string }>
}): Promise<Metadata> {
  const { date } = await params

  return {
    title: `ই-পেপার ${date}`,
    description: `${date} তারিখের ই-পেপার সংস্করণ।`,
  }
}

export default async function EPaperDatePage({
  params,
}: {
  params: Promise<{ date: string }>
}) {
  const { date } = await params
  const issue = await DataService.epaper.getByDate(date)

  if (!issue) {
    notFound()
  }

  return (
    <Container>
      <EPagerViewer date={date} pages={issue.pages} />
    </Container>
  )
}
