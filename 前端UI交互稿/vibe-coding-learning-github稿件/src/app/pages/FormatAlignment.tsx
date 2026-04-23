import { useState, useEffect } from 'react';
import { ArrowLeft, Download, CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

export function FormatAlignment() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          return 100;
        }
        return prev + 10;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const handleComplete = () => {
    navigate('/resumes');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center justify-between px-4 h-14">
          <Link to="/result" className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </Link>
          <h1 className="text-base font-semibold text-gray-900">格式对齐</h1>
          <div className="w-6" />
        </div>
      </div>

      <div className="px-6 py-12">
        {!isComplete ? (
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 relative">
              <svg className="w-24 h-24 transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="#3b82f6"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - progress / 100)}`}
                  className="transition-all duration-300"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">{progress}%</span>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-2">正在对齐格式</h2>
            <p className="text-sm text-gray-600 mb-8">
              AI正在还原您的原始简历格式...
            </p>

            <div className="max-w-xs mx-auto space-y-3 text-left">
              <div className={`flex items-start gap-3 ${progress >= 30 ? 'opacity-100' : 'opacity-40'}`}>
                <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${progress >= 30 ? 'text-green-600' : 'text-gray-400'}`} />
                <div>
                  <div className="text-sm font-medium text-gray-900">分析原始格式</div>
                  <div className="text-xs text-gray-500">识别字体、排版、间距等</div>
                </div>
              </div>

              <div className={`flex items-start gap-3 ${progress >= 60 ? 'opacity-100' : 'opacity-40'}`}>
                <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${progress >= 60 ? 'text-green-600' : 'text-gray-400'}`} />
                <div>
                  <div className="text-sm font-medium text-gray-900">应用格式样式</div>
                  <div className="text-xs text-gray-500">保持原有版式风格</div>
                </div>
              </div>

              <div className={`flex items-start gap-3 ${progress >= 100 ? 'opacity-100' : 'opacity-40'}`}>
                <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${progress >= 100 ? 'text-green-600' : 'text-gray-400'}`} />
                <div>
                  <div className="text-sm font-medium text-gray-900">生成最终文档</div>
                  <div className="text-xs text-gray-500">完成格式对齐</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mb-2">格式对齐完成！</h2>
            <p className="text-sm text-gray-600 mb-8">
              简历已成功还原原始格式，可以导出使用了
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 max-w-md mx-auto">
              <p className="text-xs text-amber-900">
                提示：如果原始文件为PDF转Word，部分格式可能无法100%还原
              </p>
            </div>

            <div className="space-y-3 max-w-sm mx-auto">
              <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-900 py-3 rounded-xl font-medium">
                  <Download className="w-5 h-5" />
                  导出Word
                </button>
                <button className="flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-900 py-3 rounded-xl font-medium">
                  <Download className="w-5 h-5" />
                  导出PDF
                </button>
              </div>

              <button
                onClick={handleComplete}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium"
              >
                完成
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
