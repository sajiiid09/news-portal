'use client'

import Link from 'next/link'
import { useAuth } from '@/hooks'

export default function DashboardPage() {
  const { user, isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return (
      <div className="bb-container">
        <h1>ড্যাশবোর্ড</h1>
        <p>ড্যাশবোর্ড দেখতে লগইন করুন।</p>
        <Link href="/login">লগইন</Link>
      </div>
    )
  }

  return (
    <div className="bb-container bb-section">
      <h1>স্বাগতম, {user?.name}</h1>
      <p className="bb-meta">আপনার পাঠক প্রোফাইল, বুকমার্ক, মন্তব্য এবং পছন্দসমূহ এখান থেকে পরিচালনা করুন।</p>
      <div className="bb-grid bb-grid--three">
        <article className="bb-card">
          <h3>প্রোফাইল</h3>
          <p>নাম, ইমেইল, পছন্দের ভাষা এবং নোটিফিকেশন সেটিংস।</p>
          <Link href="/dashboard/profile">প্রোফাইল সম্পাদনা</Link>
        </article>
        <article className="bb-card">
          <h3>বুকমার্ক</h3>
          <p>সংরক্ষিত সংবাদ দ্রুত পড়ুন এবং ম্যানেজ করুন।</p>
          <Link href="/dashboard/bookmarks">বুকমার্ক দেখুন</Link>
        </article>
        <article className="bb-card">
          <h3>মন্তব্য</h3>
          <p>আপনার মন্তব্য ইতিহাস এবং অংশগ্রহণের সারসংক্ষেপ।</p>
          <Link href="/dashboard/comments">মন্তব্য দেখুন</Link>
        </article>
      </div>
    </div>
  )
}
