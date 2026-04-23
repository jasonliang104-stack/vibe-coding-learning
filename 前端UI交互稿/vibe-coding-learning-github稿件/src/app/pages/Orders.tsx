import { ArrowLeft, Crown, Coins } from 'lucide-react';
import { Link } from 'react-router';

export function Orders() {
  const orders = [
    { id: 1, type: 'member', name: '年会员', amount: 199, status: '已支付', time: '2026-04-18 14:30' },
    { id: 2, type: 'points', name: '积分充值', amount: 68, points: 680, status: '已支付', time: '2026-04-15 10:20' },
    { id: 3, type: 'points', name: '积分充值', amount: 30, points: 300, status: '已支付', time: '2026-04-10 16:45' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center justify-between px-4 h-14">
          <Link to="/profile" className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </Link>
          <h1 className="text-base font-semibold text-gray-900">订单记录</h1>
          <div className="w-6" />
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="space-y-3">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    order.type === 'member' ? 'bg-amber-100' : 'bg-blue-100'
                  }`}>
                    {order.type === 'member' ? (
                      <Crown className="w-5 h-5 text-amber-600" />
                    ) : (
                      <Coins className="w-5 h-5 text-blue-600" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{order.name}</h3>
                    {order.points && (
                      <p className="text-xs text-gray-500 mt-1">获得 {order.points} 积分</p>
                    )}
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-semibold text-gray-900">¥{order.amount}</div>
                  <div className="text-xs text-green-600 mt-1">{order.status}</div>
                </div>
              </div>

              <div className="text-xs text-gray-500 pt-3 border-t border-gray-100">
                {order.time}
              </div>
            </div>
          ))}
        </div>

        {orders.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">暂无订单记录</p>
          </div>
        )}
      </div>
    </div>
  );
}
