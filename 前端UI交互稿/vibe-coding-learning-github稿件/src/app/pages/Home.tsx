import { Plus, ChevronRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';
import { BottomNav } from '../components/BottomNav';
import { StatusBar } from '../components/StatusBar';

export function Home() {
  const recentTasks = [
    { id: 1, jobTitle: '高级产品经理', scoreBefore: 68, scoreAfter: 85, time: '2小时前' },
    { id: 2, jobTitle: 'UI设计师', scoreBefore: 62, scoreAfter: 78, time: '1天前' },
    { id: 3, jobTitle: '前端开发工程师', scoreBefore: 75, scoreAfter: 92, time: '3天前' },
  ];

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <StatusBar />
      <div className="pb-[70px]">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#07C160] to-[#06ae56] px-6 pt-8 pb-8">
          <h1 className="text-white text-2xl font-semibold mb-2">简历优化助手</h1>
          <p className="text-white/90 text-sm">基于目标岗位JD，精准优化简历</p>
        </div>

        {/* Main Action Button */}
        <div className="px-6 -mt-6">
          <Link
            to="/submit"
            className="block bg-white rounded-2xl shadow-sm p-6 active:bg-gray-50"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#07C160]/10 rounded-full flex items-center justify-center">
                  <Plus className="w-7 h-7 text-[#07C160]" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">开始优化简历</h2>
                  <p className="text-sm text-gray-500 mt-1">上传JD和简历，AI智能优化</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-gray-400" />
            </div>
          </Link>
        </div>

        {/* Recent Tasks */}
        <div className="px-6 mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-gray-900">最近优化</h3>
            <Link to="/resumes" className="text-sm text-[#07C160] flex items-center gap-1">
              更多
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-3">
            {recentTasks.map((task) => (
              <Link
                key={task.id}
                to={`/task/${task.id}`}
                className="block bg-white rounded-xl p-4 active:bg-gray-50"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900 flex-1">{task.jobTitle}</h4>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">优化前</span>
                    <span className="text-lg font-semibold text-gray-600">{task.scoreBefore}</span>
                  </div>
                  <div className="text-gray-400">→</div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">优化后</span>
                    <span className="text-lg font-semibold text-[#07C160]">{task.scoreAfter}</span>
                  </div>
                  <div className="flex-1" />
                  <p className="text-xs text-gray-400">{task.time}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Case Study */}
        <div className="px-6 mt-8 pb-4">
          <h3 className="text-base font-semibold text-gray-900 mb-4">优化案例</h3>

          <div className="space-y-3">
            {[
              { id: 1, title: '高级产品经理', before: 62, after: 89, highlights: ['突出数据驱动决策能力', '强化跨部门协作经验', '补充项目量化成果'] },
              { id: 2, title: 'UI设计师', before: 58, after: 85, highlights: ['作品集结构优化', '设计思维方法论', '量化设计影响力'] },
              { id: 3, title: '前端开发工程师', before: 70, after: 92, highlights: ['技术栈深度展示', '性能优化案例', '开源贡献补充'] },
              { id: 4, title: '运营总监', before: 65, after: 88, highlights: ['增长数据可视化', '团队管理经验', '跨渠道运营能力'] },
              { id: 5, title: 'Java后端开发', before: 72, after: 90, highlights: ['架构设计经验', '高并发解决方案', '技术选型能力'] },
            ].map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-[#07C160]" />
                  <h4 className="font-medium text-gray-900 text-sm">{item.title}</h4>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-1 bg-gray-50 rounded-lg p-2 text-center">
                    <div className="text-xs text-gray-500 mb-1">优化前</div>
                    <div className="text-xl font-bold text-gray-600">{item.before}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                  <div className="flex-1 bg-[#07C160]/5 rounded-lg p-2 text-center">
                    <div className="text-xs text-gray-500 mb-1">优化后</div>
                    <div className="text-xl font-bold text-[#07C160]">{item.after}</div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-xs text-gray-700 font-medium mb-1">核心优化</div>
                  <div className="text-xs text-gray-600 space-y-0.5">
                    {item.highlights.map((h, i) => (
                      <div key={i}>• {h}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
