const orders = [
  {
    id: '1234',
    time: '2 hours ago',
    status: 'completed',
    amount: 'GH₵ 234.00',
    customer: 'John Doe'
  },
  {
    id: '1233',
    time: '3 hours ago',
    status: 'processing',
    amount: 'GH₵ 567.00',
    customer: 'Jane Smith'
  },
  {
    id: '1232',
    time: '5 hours ago',
    status: 'completed',
    amount: 'GH₵ 123.00',
    customer: 'Robert Johnson'
  }
]

export function RecentOrders() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Recent Orders</h3>
          <a href="/admin/orders" className="text-sm text-primary-600 hover:text-primary-900">
            View all
          </a>
        </div>
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="flex justify-between items-center p-4 rounded-lg bg-gray-50">
              <div>
                <p className="font-medium text-gray-900">Order #{order.id}</p>
                <div className="mt-1">
                  <p className="text-sm text-gray-600">{order.customer}</p>
                  <p className="text-sm text-gray-500">{order.time}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">{order.amount}</p>
                <span className={`
                  inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${order.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                `}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 