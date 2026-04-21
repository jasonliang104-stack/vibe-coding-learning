import { ArrowLeft, Download, RefreshCw, Trash2, FileText, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';

export function TaskDetail() {
  const optimizations = [
    { title: '工作经历优化', before: '负责产品设计和需求分析', after: '主导3个核心产品模块的需求分析与设计，用户满意度提升40%' },
    { title: '项目成果量化', before: '完成多个项目开发', after: '主导电商平台重构项目，使页面加载速度提升60%，转化率提高25%' },
    { title: '技能关键词优化', before: '熟悉前端开发', after: '精通React、TypeScript、Tailwind CSS等现代前端技术栈，有丰富的组件库开发经验' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center justify-between px-4 h-14">
          <Link to="/resumes" className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </Link>
          <h1 className="text-base font-semibold text-gray-900">任务详情</h1>
          <button className="p-2 -mr-2">
            <Trash2 className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Job Info */}
        <div className="bg-white rounded-xl p-5">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">高级产品经理</h2>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span>优化时间：2小时前</span>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="text-xs text-gray-600 mb-2">岗位JD概要</div>
            <p className="text-sm text-gray-900 leading-relaxed">
              负责B端产品规划与设计，需要3年以上产品经验，具备数据分析能力和跨部门协作能力...
            </p>
          </div>
        </div>

        {/* Score Comparison */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5" />
            <span className="font-medium">匹配度对比</span>
          </div>

          <div className="flex items-center justify-around">
            <div className="text-center">
              <div className="text-sm text-blue-100 mb-2">优化前</div>
              <div className="text-4xl font-bold">68</div>
              <div className="text-xs text-blue-200 mt-1">建议优化</div>
            </div>

            <div className="text-2xl">→</div>

            <div className="text-center">
              <div className="text-sm text-blue-100 mb-2">优化后</div>
              <div className="text-4xl font-bold">89</div>
              <div className="text-xs text-green-200 mt-1">可投递</div>
            </div>
          </div>
        </div>

        {/* Resume Preview */}
        <div className="bg-white rounded-xl p-5">
          <h3 className="font-semibold text-gray-900 mb-4">简历对比</h3>

          <div className="flex gap-3 mb-4">
            <Link to="/resume/view/1?tab=before" className="flex-1">
              <div className="bg-gray-100 rounded-lg p-4 h-48 flex flex-col items-center justify-center">
                <FileText className="w-12 h-12 text-gray-400 mb-2" />
                <span className="text-sm text-gray-600">优化前简历</span>
              </div>
            </Link>

            <Link to="/resume/view/1?tab=after" className="flex-1">
              <div className="bg-blue-50 rounded-lg p-4 h-48 flex flex-col items-center justify-center">
                <FileText className="w-12 h-12 text-blue-600 mb-2" />
                <span className="text-sm text-blue-600">优化后简历</span>
              </div>
            </Link>
          </div>

          <Link
            to="/resume/view/1?tab=diff"
            className="block text-center text-blue-600 text-sm font-medium"
          >
            查看详细差异对比 →
          </Link>
        </div>

        {/* Optimizations */}
        <div className="bg-white rounded-xl p-5">
          <h3 className="font-semibold text-gray-900 mb-4">具体优化点</h3>

          <div className="space-y-4">
            {optimizations.map((opt, idx) => (
              <div key={idx} className="border-l-2 border-blue-600 pl-4">
                <div className="text-sm font-medium text-gray-900 mb-2">{opt.title}</div>

                <div className="space-y-2">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">优化前：</div>
                    <div className="text-sm text-gray-600 bg-gray-50 rounded p-2">
                      {opt.before}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs text-gray-500 mb-1">优化后：</div>
                    <div className="text-sm text-gray-900 bg-green-50 rounded p-2">
                      {opt.after}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
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

          <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-medium">
            <RefreshCw className="w-5 h-5" />
            重新优化
          </button>

          <button className="w-full bg-white border border-gray-300 text-gray-900 py-3 rounded-xl font-medium">
            格式对齐
          </button>

          <button className="w-full bg-white border border-gray-300 text-gray-900 py-3 rounded-xl font-medium">
            更换模型重跑
          </button>
        </div>
      </div>
    </div>
  );
}
