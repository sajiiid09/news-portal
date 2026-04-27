import { NextResponse } from 'next/server'
import { DataService } from '@/lib/data'

export async function GET() {
  const items = await DataService.dse.getTicker()

  return NextResponse.json({ items })
}
