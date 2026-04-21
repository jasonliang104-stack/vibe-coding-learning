import { ArrowLeft, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router';

export function PointsHistory() {
  const history = [
    { id: 1, type: 'consume', amount: -50, balance: 280, desc: '简历优化 - 高级产品经理', time: '2026-04-20 10:30' },
    { id: 2, type: 'recharge', amount: 680, balance: 330, desc: '积分充值', time: '2026-04-18 14:20' },
    { id: 3, type: 'consume', amount: -100, balance: 230, desc: '简历优化 - UI设计师（高级模型）', time: '2026-04-17 16:45' },
    { id: 4, type: 'reward', amount: 500, balance: 330, desc: '开通年会员赠送', time: '2026-04-15 09:15' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center justify-between px-4 h-14">
          <Link to="/profile" className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </Link>
          <h1 className="text-base font-semibold text-gray-900">积分明细</h1>
          <div className="w-6" />
        </div>
      </div>

      {/* Current Balance */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 px-6 py-8">
        <div className="text-center text-white">
          <div className="text-sm text-blue-100 mb-2">当前积分余额</div>
          <div className="text-4xl font-bold mb-4">280</div>
          <Link
            to="/payment?tab=points"
            className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium"
          >
            充值积分
          </Link>
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="space-y-3">
          {history.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {item.type === 'consume' && (
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                        <Minus className="w-4 h-4 text-red-600" />
                      </div>
                    )}
                    {(item.type === 'recharge' || item.type === 'reward') && (
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <Plus className="w-4 h-4 text-green-600" />
                      </div>
                    )}
                    <h3 className="font-medium text-gray-900 text-sm">{item.desc}</h3>
                  </div>
                  <p className="text-xs text-gray-500 ml-8">{item.time}</p>
                </div>

                <div className="text-right ml-4">
                  <div className={`text-lg font-semibold ${
                    item.amount > 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {item.amount > 0 ? '+' : ''}{item.amount}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    余额: {item.balance}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {history.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">暂无积分记录</p>
          </div>
        )}
      </div>
    </div>
  );
}
