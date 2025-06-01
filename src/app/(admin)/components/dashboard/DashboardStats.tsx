import {
  CurrencyDollarIcon,
  ShoppingBagIcon,
  ExclamationTriangleIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

const stats = [
  {
    name: 'Total Revenue',
    value: 'GH₵ 23,456',
    change: '+12.3%',
    changeType: 'positive',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Pending Orders',
    value: '12',
    change: '3 new today',
    changeType: 'neutral',
    icon: ShoppingBagIcon,
  },
  {
    name: 'Low Stock Items',
    value: '5',
    change: 'Needs attention',
    changeType: 'negative',
    icon: ExclamationTriangleIcon,
  },
  {
    name: 'Active Customers',
    value: '156',
    change: '+23% this month',
    changeType: 'positive',
    icon: UserGroupIcon,
  },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
        >
          <dt>
            <div className="absolute rounded-md bg-primary-100 p-3">
              <stat.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">{stat.name}</p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6">
            <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            <p
              className={`
                ml-2 flex items-baseline text-sm font-semibold
                ${stat.changeType === 'positive' ? 'text-green-600' :
                  stat.changeType === 'negative' ? 'text-red-600' :
                  'text-gray-500'}
              `}
            >
              {stat.change}
            </p>
          </dd>
        </div>
      ))}
    </div>
  )
} 