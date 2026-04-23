import { useState, useEffect } from 'react';
import { ArrowLeft, Crown, Coins, Check, Play } from 'lucide-react';
import { Link, useSearchParams } from 'react-router';
import { StatusBar } from '../components/StatusBar';

export function Payment() {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<'member' | 'points'>('member');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'points' || tab === 'member') {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const memberPlans = [
    {
      id: 'month',
      name: '月会员',
      price: 29,
      discount: '8.5折',
      points: 50,
      features: ['积分8.5折优惠', '赠送50积分', '积分永不过期']
    },
    {
      id: 'quarter',
      name: '季会员',
      price: 68,
      discount: '8折',
      points: 150,
      features: ['积分8折优惠', '赠送150积分', '积分永不过期']
    },
    {
      id: 'year',
      name: '年会员',
      price: 199,
      discount: '7.5折',
      points: 500,
      features: ['积分7.5折优惠', '赠送500积分', '积分永不过期'],
      recommended: true
    },
  ];

  const pointsPlans = [
    { amount: 6, points: 60 },
    { amount: 12, points: 120 },
    { amount: 30, points: 300 },
    { amount: 68, points: 680 },
    { amount: 128, points: 1280 },
    { amount: 328, points: 3280 },
  ];

  const handleWatchVideo = () => {
    alert('正在加载激励视频...');
    // 视频播放完成后会获得积分
  };

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <StatusBar />
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-11 z-10">
        <div className="flex items-center justify-between px-4 h-14">
          <Link to="/profile" className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </Link>
          <h1 className="text-base font-semibold text-gray-900">充值中心</h1>
          <div className="w-6" />
        </div>

        {/* Tabs */}
        <div className="flex px-4">
          <button
            onClick={() => setActiveTab('member')}
            className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'member'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600'
            }`}
          >
            <Crown className="w-4 h-4 inline mr-1" />
            会员开通
          </button>
          <button
            onClick={() => setActiveTab('points')}
            className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'points'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600'
            }`}
          >
            <Coins className="w-4 h-4 inline mr-1" />
            积分充值
          </button>
        </div>
      </div>

      {/* Member Tab */}
      {activeTab === 'member' && (
        <div className="px-6 py-6">
          <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl p-6 mb-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Crown className="w-6 h-6" />
              <span className="text-lg font-semibold">会员特权</span>
            </div>
            <p className="text-amber-100 text-sm">开通会员享受积分折扣，赠送积分永不过期</p>
          </div>

          <div className="space-y-3">
            {memberPlans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-xl p-5 border-2 relative ${
                  plan.recommended ? 'border-amber-500' : 'border-gray-200'
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-xs px-3 py-1 rounded-full">
                    推荐
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{plan.name}</h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-blue-600">¥{plan.price}</span>
                      <span className="text-sm text-gray-500">赠送{plan.points}积分</span>
                    </div>
                  </div>
                  <div className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                    {plan.discount}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 rounded-lg font-medium ${
                  plan.recommended
                    ? 'bg-amber-500 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  立即开通
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Points Tab */}
      {activeTab === 'points' && (
        <div className="px-6 py-6">
          <div className="bg-[#07C160]/5 rounded-xl p-4 mb-4">
            <div className="flex items-center gap-2 text-gray-900 mb-1">
              <Coins className="w-5 h-5 text-[#07C160]" />
              <span className="font-medium">兑换规则</span>
            </div>
            <p className="text-gray-700 text-sm">1元 = 10积分</p>
          </div>

          {/* Watch Video for Points */}
          <button
            onClick={handleWatchVideo}
            className="w-full bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-xl p-4 mb-6 active:opacity-90"
          >
            <div className="flex items-center justify-center gap-2 mb-1">
              <Play className="w-5 h-5" />
              <span className="font-semibold">观看视频领积分</span>
            </div>
            <p className="text-white/90 text-xs">完整观看视频即可获得积分奖励</p>
          </button>

          <div className="grid grid-cols-2 gap-3">
            {pointsPlans.map((plan, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border-2 border-gray-200 hover:border-blue-600 transition-colors cursor-pointer"
              >
                <div className="text-center mb-3">
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {plan.points}
                  </div>
                  <div className="text-sm text-gray-500">积分</div>
                </div>

                <button className="w-full bg-[#07C160] text-white py-2.5 rounded-lg font-medium text-sm">
                  ¥{plan.amount}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-gray-100 rounded-xl p-4">
            <p className="text-xs text-gray-600 text-center">
              温馨提示：充值积分永久有效，可用于简历优化服务
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
