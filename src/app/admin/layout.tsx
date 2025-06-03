'use client'

import { Sidebar } from './components/layout/Sidebar'
import { TopBar } from './components/layout/TopBar'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <TopBar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  )
} 