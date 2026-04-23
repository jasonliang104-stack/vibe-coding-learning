import { User, Crown, Coins, ShoppingBag, Activity, MessageCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { BottomNav } from '../components/BottomNav';
import { StatusBar } from '../components/StatusBar';

export function Profile() {
  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <StatusBar />
      <div className="pb-[70px]">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#07C160] to-[#06ae56] px-6 pt-8 pb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-[#07C160]" />
            </div>
            <div className="text-white">
              <div className="text-lg font-semibold mb-1">微信用户</div>
              <div className="text-white/80 text-sm">ID: wx_****1234</div>
            </div>
          </div>
        </div>

        {/* Membership & Points */}
        <div className="px-6 -mt-6 mb-6">
          <div className="bg-white rounded-2xl shadow-sm p-5">
            <div className="grid grid-cols-2 gap-4">
              <Link to="/payment?tab=member" className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl p-4 active:opacity-90">
                <div className="flex items-center gap-2 mb-2">
                  <Crown className="w-5 h-5 text-white" />
                  <span className="text-white text-sm font-medium">会员状态</span>
                </div>
                <div className="text-white text-lg font-semibold">未开通</div>
                <div className="text-amber-100 text-xs mt-1">立即开通 享积分折扣</div>
              </Link>

              <Link to="/payment?tab=points" className="bg-gradient-to-br from-[#07C160] to-[#06ae56] rounded-xl p-4 active:opacity-90">
                <div className="flex items-center gap-2 mb-2">
                  <Coins className="w-5 h-5 text-white" />
                  <span className="text-white text-sm font-medium">积分余额</span>
                </div>
                <div className="text-white text-lg font-semibold">280</div>
                <div className="text-white/80 text-xs mt-1">点击充值</div>
              </Link>
            </div>
          </div>
        </div>

      {/* Stats */}
      <div className="px-6 mb-6">
        <div className="bg-white rounded-xl p-5">
          <div className="grid grid-cols-3 divide-x divide-gray-200">
            <div className="text-center">
              <div className="text-2xl font-semibold text-gray-900 mb-1">3</div>
              <div className="text-xs text-gray-500">原始简历</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-gray-900 mb-1">12</div>
              <div className="text-xs text-gray-500">优化简历</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-gray-900 mb-1">12</div>
              <div className="text-xs text-gray-500">优化任务</div>
            </div>
          </div>
        </div>
      </div>

        {/* Menu */}
        <div className="px-6">
          <div className="bg-white rounded-xl overflow-hidden">
            <Link to="/orders" className="flex items-center justify-between p-4 border-b border-gray-50 active:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#07C160]/10 rounded-full flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-[#07C160]" />
                </div>
                <span className="text-gray-900">订单记录</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>

            <Link to="/points-history" className="flex items-center justify-between p-4 border-b border-gray-50 active:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Activity className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-gray-900">积分明细</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>

            <Link to="/feedback" className="flex items-center justify-between p-4 active:bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-orange-600" />
                </div>
                <span className="text-gray-900">问题反馈</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
