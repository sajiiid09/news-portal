export type SectionBlockType =
  | 'lead-grid'
  | 'selected-grid'
  | 'story-list'
  | 'visual-strip'
  | 'video-grid'
  | 'subsections'
  | 'split'
  | 'ad'
  | 'dse'

export interface SectionStoryGroup {
  id: string
  title: string
  storyIds: string[]
}

export interface SectionBlock {
  id: string
  type: SectionBlockType
  title: string
  storyIds?: string[]
  groups?: SectionStoryGroup[]
}

export interface SectionPageConfig {
  slug: string
  title: string
  label: string
  sourceFile: string
  template: string
  description: string
  sections: SectionBlock[]
}

export interface DistrictTopic {
  id: string
  name: string
  enName: string | null
  slug: string
  parentId: string | null
  parentName: string | null
  type: 'division' | 'district'
}

export interface DseTickerItem {
  tradingCode: string
  lastTradingPrice: string
  change: string
  changePercent: string
  indicator: 'উর্ধ' | 'নিম্ন' | 'অপরিবর্তন'
}
