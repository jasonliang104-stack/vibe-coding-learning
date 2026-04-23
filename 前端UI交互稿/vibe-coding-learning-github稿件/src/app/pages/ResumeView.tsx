import { useState, useEffect } from 'react';
import { ArrowLeft, Download } from 'lucide-react';
import { Link, useSearchParams } from 'react-router';

export function ResumeView() {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<'before' | 'after' | 'diff'>('after');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'before' || tab === 'after' || tab === 'diff') {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const diffItems = [
    {
      section: '工作经历',
      changes: [
        {
          type: 'modified',
          before: '负责产品设计和需求分析工作',
          after: '主导核心产品模块设计，完成200+需求分析与评审，用户满意度提升40%',
        },
      ],
    },
    {
      section: '项目经历',
      changes: [
        {
          type: 'modified',
          before: '参与电商系统开发',
          after: '主导电商平台重构项目，使页面加载速度提升60%，GMV转化率提高25%',
        },
      ],
    },
    {
      section: '技能总结',
      changes: [
        {
          type: 'modified',
          before: '熟悉前端开发技术',
          after: '精通React、TypeScript、Tailwind CSS等现代前端技术栈，有丰富的大型组件库开发经验',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center justify-between px-4 h-14">
          <Link to="/task/1" className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </Link>
          <h1 className="text-base font-semibold text-gray-900">简历查看</h1>
          <div className="w-6" />
        </div>

        {/* Tabs */}
        <div className="flex px-4">
          <button
            onClick={() => setActiveTab('before')}
            className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'before'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600'
            }`}
          >
            优化前
          </button>
          <button
            onClick={() => setActiveTab('after')}
            className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'after'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600'
            }`}
          >
            优化后
          </button>
          <button
            onClick={() => setActiveTab('diff')}
            className={`flex-1 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'diff'
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600'
            }`}
          >
            差异对比
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {(activeTab === 'before' || activeTab === 'after') && (
          <div className="bg-white rounded-xl p-6 shadow-sm min-h-[600px]">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">张三</h1>
                <p className="text-gray-600">高级产品经理</p>
                <p className="text-sm text-gray-500 mt-2">
                  手机：138****1234 | 邮箱：example@email.com
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b pb-2">工作经历</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-900">某互联网公司 - 产品经理</h3>
                      <span className="text-sm text-gray-500">2022-2024</span>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {activeTab === 'before'
                        ? '负责产品设计和需求分析工作'
                        : '主导核心产品模块设计，完成200+需求分析与评审，用户满意度提升40%'}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b pb-2">项目经历</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">电商平台项目</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {activeTab === 'before'
                        ? '参与电商系统开发'
                        : '主导电商平台重构项目，使页面加载速度提升60%，GMV转化率提高25%'}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b pb-2">技能总结</h2>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {activeTab === 'before'
                    ? '熟悉前端开发技术'
                    : '精通React、TypeScript、Tailwind CSS等现代前端技术栈，有丰富的大型组件库开发经验'}
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'diff' && (
          <div className="space-y-6">
            {diffItems.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <div className="w-1 h-5 bg-blue-600 rounded" />
                  {item.section}
                </h3>

                <div className="space-y-4">
                  {item.changes.map((change, i) => (
                    <div key={i} className="space-y-3">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <div className="text-xs text-red-700 mb-1 flex items-center gap-1">
                          <span className="font-medium">删除：</span>
                        </div>
                        <p className="text-sm text-red-900 line-through">{change.before}</p>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <div className="text-xs text-green-700 mb-1 flex items-center gap-1">
                          <span className="font-medium">新增：</span>
                        </div>
                        <p className="text-sm text-green-900">{change.after}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
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
