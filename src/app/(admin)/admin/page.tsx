import { DashboardStats } from '../components/dashboard/DashboardStats'
import { RecentOrders } from '../components/dashboard/RecentOrders'
import { InventoryAlerts } from '../components/dashboard/InventoryAlerts'

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      
      <DashboardStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentOrders />
        <InventoryAlerts />
      </div>
    </div>
  )
} 