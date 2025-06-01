'use client'

import { ExclamationTriangleIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/outline'

const inventory = [
  {
    id: 1,
    name: 'Premium Tigernut',
    stock: 5,
    status: 'critical',
    minStock: 10
  },
  {
    id: 2,
    name: 'Regular Tigernut',
    stock: 15,
    status: 'warning',
    minStock: 20
  },
  {
    id: 3,
    name: 'Organic Tigernut',
    stock: 8,
    status: 'warning',
    minStock: 15
  }
]

export function InventoryAlerts() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Inventory Alerts</h3>
          <a href="/admin/inventory" className="text-sm text-primary-600 hover:text-primary-900">
            View all
          </a>
        </div>
        <div className="space-y-4">
          {inventory.map((item) => (
            <div 
              key={item.id} 
              className={`
                p-4 rounded-lg
                ${item.status === 'critical' ? 'bg-red-50' : 'bg-yellow-50'}
              `}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-gray-900">{item.name}</p>
                  <p className={`
                    text-sm mt-1
                    ${item.status === 'critical' ? 'text-red-600' : 'text-yellow-600'}
                  `}>
                    {item.stock} units left (Min: {item.minStock})
                  </p>
                </div>
                <button className="text-sm text-primary-600 hover:text-primary-900">
                  Restock
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 