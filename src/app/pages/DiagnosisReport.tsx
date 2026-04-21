import { useState } from 'react';
import { ArrowLeft, CheckCircle2, AlertCircle, XCircle, MessageSquare } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

export function DiagnosisReport() {
  const navigate = useNavigate();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [customRequirement, setCustomRequirement] = useState('');

  const quickTags = [
    '突出管理经验', '突出项目成果', '更贴近岗位关键词',
    '表达更专业简洁', '弱化不相关经历', '强调行业经验',
    '强调业务结果', '强调技术深度'
  ];

  const requirements = [
    { label: '岗位职责', items: [
      { text: '负责产品规划和需求分析', status: 'complete' },
      { text: '带领团队完成产品迭代', status: 'partial' },
      { text: '数据驱动的产品决策', status: 'missing' },
    ]},
    { label: '核心能力', items: [
      { text: '用户研究与分析能力', status: 'complete' },
      { text: '跨部门协作能力', status: 'partial' },
      { text: 'B端产品经验', status: 'missing' },
    ]},
  ];

  const suggestions = [
    { title: '工作经历优化', desc: '突出在XX公司的数据分析能力，补充具体数据成果' },
    { title: '项目经历调整', desc: '重点描述B端产品项目，弱化C端产品经验' },
    { title: '技能关键词', desc: '增加"数据分析"、"敏捷开发"等JD关键词' },
    { title: '表达优化', desc: '使用更量化、结果导向的描述方式' },
  ];

  const missingInfo = [
    '具体负责过的B端产品项目名称和成果',
    '数据驱动决策的具体案例和数据',
    '团队管理规模和具体职责',
  ];

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleContinue = () => {
    if (missingInfo.length > 0) {
      navigate('/supplement');
    } else {
      navigate('/optimization-progress');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center justify-between px-4 h-14">
          <Link to="/" className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </Link>
          <h1 className="text-base font-semibold text-gray-900">诊断报告</h1>
          <div className="w-6" />
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        {/* Match Score */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
          <div className="text-center mb-4">
            <div className="text-5xl font-bold mb-2">72</div>
            <div className="text-blue-100 text-sm">匹配度分数</div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 inline-flex items-center gap-2 mx-auto">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm font-medium">建议优化后投递</span>
          </div>
        </div>

        {/* JD Analysis */}
        <div className="bg-white rounded-xl p-5">
          <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <div className="w-1 h-5 bg-blue-600 rounded" />
            岗位JD解读
          </h2>

          <div className="space-y-4">
            {requirements.map((req, idx) => (
              <div key={idx}>
                <div className="text-sm font-medium text-gray-700 mb-2">{req.label}</div>
                <div className="space-y-2">
                  {req.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      {item.status === 'complete' && <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />}
                      {item.status === 'partial' && <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />}
                      {item.status === 'missing' && <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />}
                      <span className={`text-sm ${
                        item.status === 'complete' ? 'text-gray-900' :
                        item.status === 'partial' ? 'text-amber-900' :
                        'text-red-900'
                      }`}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optimization Suggestions */}
        <div className="bg-white rounded-xl p-5">
          <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <div className="w-1 h-5 bg-blue-600 rounded" />
            优化建议
          </h2>

          <div className="space-y-3">
            {suggestions.map((suggestion, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-blue-600 text-xs font-semibold">{idx + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900 text-sm mb-1">{suggestion.title}</div>
                    <div className="text-xs text-gray-600">{suggestion.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Missing Info */}
        {missingInfo.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h2 className="font-semibold text-amber-900 mb-3 flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              需要补充的信息
            </h2>
            <ul className="space-y-2">
              {missingInfo.map((info, idx) => (
                <li key={idx} className="text-sm text-amber-900 flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <span>{info}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Custom Requirements */}
        <div className="bg-white rounded-xl p-5">
          <h2 className="font-semibold text-gray-900 mb-3">补充优化要求（可选）</h2>

          <div className="flex flex-wrap gap-2 mb-4">
            {quickTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-full text-xs transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <textarea
            value={customRequirement}
            onChange={(e) => setCustomRequirement(e.target.value)}
            placeholder="其他优化要求..."
            className="w-full h-24 p-3 border border-gray-300 rounded-lg resize-none text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
      </div>

      {/* Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <button
          onClick={handleContinue}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-medium"
        >
          继续优化
        </button>
      </div>
    </div>
  );
}
