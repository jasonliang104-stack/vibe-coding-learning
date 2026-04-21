import { X, Coins, Play } from 'lucide-react';
import { Link } from 'react-router';

interface InsufficientPointsModalProps {
  isOpen: boolean;
  onClose: () => void;
  requiredPoints: number;
  currentPoints: number;
  onWatchVideo: () => void;
}

export function InsufficientPointsModal({
  isOpen,
  onClose,
  requiredPoints,
  currentPoints,
  onWatchVideo,
}: InsufficientPointsModalProps) {
  if (!isOpen) return null;

  const shortage = requiredPoints - currentPoints;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl max-w-sm w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">积分不足</h3>
          <button onClick={onClose} className="p-1 -mr-1">
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Coins className="w-8 h-8 text-amber-600" />
            </div>
            <p className="text-gray-600 text-sm mb-2">
              当前积分：<span className="font-semibold text-gray-900">{currentPoints}</span>
            </p>
            <p className="text-gray-600 text-sm">
              所需积分：<span className="font-semibold text-[#07C160]">{requiredPoints}</span>
            </p>
            <p className="text-amber-600 text-sm mt-2">
              还需 <span className="font-semibold">{shortage}</span> 积分
            </p>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <Link
              to="/payment?tab=points"
              className="block w-full bg-[#07C160] text-white py-3.5 rounded-lg font-medium text-center"
            >
              立即充值
            </Link>

            <button
              onClick={onWatchVideo}
              className="w-full bg-white border border-[#07C160] text-[#07C160] py-3.5 rounded-lg font-medium flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              观看视频领积分
            </button>
          </div>

          <p className="text-center text-xs text-gray-500 mt-4">
            观看完整视频即可获得积分奖励
          </p>
        </div>
      </div>
    </div>
  );
}
