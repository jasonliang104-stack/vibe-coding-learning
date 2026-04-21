import { FileText, Trash2, Search } from 'lucide-react';
import { Link } from 'react-router';
import { BottomNav } from '../components/BottomNav';
import { StatusBar } from '../components/StatusBar';

export function ResumeList() {
  const originalResumes = [
    { id: 1, name: '产品经理_通用版', date: '2026-04-15', format: 'Word' },
    { id: 2, name: '互联网产品_最新', date: '2026-04-10', format: '文本' },
    { id: 3, name: '产品经理_2026', date: '2026-03-20', format: 'Word' },
  ];

  const optimizedResumes = [
    { id: 1, jobTitle: '高级产品经理 - 字节跳动', score: 89, tag: '可投递', time: '2小时前', tagColor: 'green' },
    { id: 2, jobTitle: 'UI设计师 - 腾讯', score: 78, tag: '建议优化', time: '1天前', tagColor: 'amber' },
    { id: 3, jobTitle: '前端开发 - 阿里巴巴', score: 92, tag: '可投递', time: '3天前', tagColor: 'green' },
    { id: 4, jobTitle: '产品运营 - 美团', score: 65, tag: '风险较高', time: '5天前', tagColor: 'red' },
  ];

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <StatusBar />
      <div className="pb-[70px]">
        {/* Header */}
        <div className="bg-white border-b border-gray-100 sticky top-11 z-10">
          <div className="px-4 pt-4 pb-3">
            <h1 className="text-xl font-semibold text-gray-900 mb-3">简历列表</h1>

            {/* Search */}
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="搜索岗位名称"
                className="w-full pl-10 pr-4 py-2.5 bg-[#f7f8fa] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#07C160]"
              />
            </div>
          </div>
        </div>

      <div className="px-6 py-6 space-y-6">
        {/* Original Resumes */}
        <div>
          <h2 className="text-sm font-semibold text-gray-900 mb-3">原始简历（{originalResumes.length}/5）</h2>

          <div className="flex gap-3 overflow-x-auto pb-2 -mx-6 px-6">
            {originalResumes.map((resume) => (
              <Link
                key={resume.id}
                to={`/resume/original/${resume.id}`}
                className="flex-shrink-0 w-32 bg-white rounded-xl border border-gray-200 p-3 active:bg-gray-50 shadow-sm"
              >
                <div className="w-full aspect-square rounded-lg mb-3 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100">
                  {/* Simple Document Illustration */}
                  <div className="w-16 h-20 bg-white rounded-lg shadow-lg border border-gray-200 p-2 flex flex-col gap-1.5">
                    {/* Avatar placeholder */}
                    <div className="w-5 h-5 rounded-full bg-slate-200 mx-auto"></div>
                    {/* Name lines */}
                    <div className="space-y-0.5">
                      <div className="h-0.5 bg-slate-300 rounded mx-auto w-10"></div>
                      <div className="h-0.5 bg-slate-200 rounded mx-auto w-8"></div>
                    </div>
                    {/* Content sections */}
                    <div className="space-y-0.5 mt-0.5">
                      <div className="h-0.5 bg-slate-200 rounded"></div>
                      <div className="h-0.5 bg-slate-200 rounded w-4/5"></div>
                      <div className="h-0.5 bg-slate-200 rounded w-3/5"></div>
                    </div>
                    <div className="space-y-0.5">
                      <div className="h-0.5 bg-slate-200 rounded"></div>
                      <div className="h-0.5 bg-slate-200 rounded w-4/5"></div>
                    </div>
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-900 truncate mb-1">
                  {resume.name}
                </div>
                <div className="text-xs text-gray-500">{resume.date}</div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs bg-[#07C160]/10 text-[#07C160] px-2 py-0.5 rounded">
                    {resume.format}
                  </span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                    className="p-1"
                  >
                    <Trash2 className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Optimized Resumes */}
        <div>
          <h2 className="text-sm font-semibold text-gray-900 mb-3">优化记录</h2>

          <div className="space-y-3">
            {optimizedResumes.map((resume) => (
              <Link
                key={resume.id}
                to={`/task/${resume.id}`}
                className="block bg-white rounded-xl p-4 active:bg-gray-50 shadow-sm border border-gray-100"
              >
                <div className="flex gap-3">
                  <div className="w-20 h-20 rounded-lg flex-shrink-0 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center">
                    {/* Radial glow effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(7,193,96,0.15),transparent_70%)]"></div>

                    {/* Premium badge ribbon */}
                    <div className="absolute -top-1 -right-1 w-7 h-7">
                      <div className="w-full h-full bg-gradient-to-br from-[#07C160] to-emerald-600 rounded-full shadow-lg flex items-center justify-center">
                        <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                    </div>

                    {/* Document card */}
                    <div className="w-14 h-16 bg-white rounded shadow-md border border-emerald-100 p-1.5 flex flex-col gap-1 relative z-10">
                      {/* Avatar with green ring */}
                      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#07C160] to-emerald-500 mx-auto flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                      </div>

                      {/* Name with highlight */}
                      <div className="space-y-0.5">
                        <div className="h-0.5 bg-gradient-to-r from-[#07C160] to-emerald-400 rounded mx-auto w-8"></div>
                        <div className="h-0.5 bg-emerald-200 rounded mx-auto w-6"></div>
                      </div>

                      {/* Content with highlights */}
                      <div className="space-y-0.5 mt-0.5">
                        <div className="h-0.5 bg-emerald-300 rounded"></div>
                        <div className="h-0.5 bg-emerald-200 rounded w-4/5"></div>
                        <div className="h-0.5 bg-emerald-200 rounded w-3/5"></div>
                      </div>
                      <div className="space-y-0.5">
                        <div className="h-0.5 bg-emerald-300 rounded"></div>
                        <div className="h-0.5 bg-emerald-200 rounded w-4/5"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 text-sm mb-1 truncate">
                      {resume.jobTitle}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        resume.tagColor === 'green' ? 'bg-[#07C160]/10 text-[#07C160]' :
                        resume.tagColor === 'amber' ? 'bg-amber-100 text-amber-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {resume.tag}
                      </span>
                      <span className="text-sm font-semibold text-[#07C160]">
                        {resume.score}分
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">{resume.time}</div>

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      className="mt-2 text-xs text-red-600 flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" />
                      删除
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      </div>

      <BottomNav />
    </div>
  );
}
