'use client'

import { InventoryAlerts } from './components/dashboard/InventoryAlerts'

export default function AdminDashboard() {
  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <InventoryAlerts />
            {/* Add more dashboard widgets here */}
          </div>
        </div>
      </div>
    </div>
  )
} 