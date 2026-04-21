import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { StatusBar } from '../components/StatusBar';

export function SupplementInfo() {
  const navigate = useNavigate();

  const [answers, setAnswers] = useState<Record<number, string>>({});

  const questions = [
    { id: 1, question: '您在之前的工作中是否负责过B端产品项目？请描述具体的项目和成果' },
    { id: 2, question: '能否提供一些数据驱动决策的具体案例？' },
    { id: 3, question: '您管理的团队规模是多大？请说明团队构成和管理经验' },
    { id: 4, question: '您是否有跨部门协作的经验？请举例说明' },
    { id: 5, question: '您在产品规划和需求分析方面有哪些方法论或工具使用经验？' },
  ];

  const handleAnswerChange = (id: number, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleSkip = () => {
    navigate('/optimization-progress');
  };

  const handleSubmit = () => {
    navigate('/optimization-progress');
  };

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <StatusBar />

      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-11 z-10">
        <div className="flex items-center justify-between px-4 h-14">
          <Link to="/report" className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </Link>
          <h1 className="text-base font-semibold text-gray-900">补充信息</h1>
          <button onClick={handleSkip} className="text-sm text-[#07C160] font-medium">
            跳过
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="px-6 pt-5 pb-3">
        <div className="bg-gradient-to-r from-[#07C160]/5 to-blue-50 rounded-xl p-4">
          <p className="text-sm text-gray-600 leading-relaxed">
            为了更精准地优化您的简历，请回答以下问题。这些信息将帮助AI更好地理解您的经验和优势。
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="px-6 pb-24 space-y-4">
        {questions.map((q) => (
          <div key={q.id} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-6 h-6 bg-[#07C160] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-semibold">{q.id}</span>
              </div>
              <p className="text-sm text-gray-900 flex-1 leading-relaxed">{q.question}</p>
            </div>

            <textarea
              value={answers[q.id] || ''}
              onChange={(e) => handleAnswerChange(q.id, e.target.value)}
              placeholder="请输入您的回答（选填）..."
              className="w-full h-28 p-3 bg-gray-50 border border-gray-200 rounded-lg resize-none text-sm focus:outline-none focus:ring-2 focus:ring-[#07C160] focus:border-transparent"
            />
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <button
          onClick={handleSubmit}
          className="w-full bg-[#07C160] text-white py-3 rounded-lg font-medium"
        >
          提交并继续优化
        </button>
        <p className="text-center text-xs text-gray-500 mt-2">
          所有问题均为选填，可直接提交
        </p>
      </div>
    </div>
  );
}
