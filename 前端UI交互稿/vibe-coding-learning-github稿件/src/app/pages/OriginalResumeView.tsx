import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router';

export function OriginalResumeView() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center justify-between px-4 h-14">
          <Link to="/resumes" className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </Link>
          <h1 className="text-base font-semibold text-gray-900">原始简历</h1>
          <div className="w-6" />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        <div className="bg-white rounded-xl p-6 shadow-sm min-h-[600px]">
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">张三</h1>
              <p className="text-gray-600">产品经理</p>
              <p className="text-sm text-gray-500 mt-2">
                手机：138****1234 | 邮箱：example@email.com
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b pb-2">教育背景</h2>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">某某大学 - 计算机科学</h3>
                  <p className="text-sm text-gray-600 mt-1">本科</p>
                </div>
                <span className="text-sm text-gray-500">2018-2022</span>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b pb-2">工作经历</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium text-gray-900">某互联网公司 - 产品经理</h3>
                    <span className="text-sm text-gray-500">2022-2024</span>
                  </div>
                  <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                    <li>负责产品设计和需求分析工作</li>
                    <li>协调开发团队完成项目交付</li>
                    <li>参与用户调研和数据分析</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b pb-2">项目经历</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">电商平台项目</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    参与电商系统开发，负责部分功能模块的设计和实现
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b pb-2">专业技能</h2>
              <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                <li>熟悉前端开发技术</li>
                <li>了解产品设计流程</li>
                <li>具备数据分析能力</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
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
      </div>
    </div>
  );
}
