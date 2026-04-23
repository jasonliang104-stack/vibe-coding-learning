import { useState } from 'react';
import { ArrowLeft, Plus, ChevronRight, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { StatusBar } from '../components/StatusBar';
import { InsufficientPointsModal } from '../components/InsufficientPointsModal';

export function ResumeSubmit() {
  const navigate = useNavigate();
  const [jdImage, setJdImage] = useState<string | null>(null);
  const [jdText, setJdText] = useState('');
  const [resumeFile, setResumeFile] = useState<string | null>(null);
  const [selectedResumeId, setSelectedResumeId] = useState<number | null>(null);
  const [showInsufficientModal, setShowInsufficientModal] = useState(false);
  const [selectedModel, setSelectedModel] = useState<'fast' | 'advanced'>('fast');

  // 模型配置
  const models = {
    fast: { name: '极速模型', points: 50, description: '快速优化，性价比高，适合批量处理' },
    advanced: { name: '进阶模型', points: 100, description: '深度优化，质量更高，精准匹配岗位需求' }
  };

  // 已有简历列表（原始简历在前，优化后在后）
  const existingResumes = [
    { id: 1, name: '产品经理_通用版', date: '2026-04-15', type: '原始简历' },
    { id: 2, name: '互联网产品_最新', date: '2026-04-10', type: '原始简历' },
    { id: 3, name: '前端开发工程师_2026', date: '2026-04-08', type: '原始简历' },
    { id: 4, name: 'Java后端_三年经验', date: '2026-04-05', type: '原始简历' },
    { id: 5, name: '数据分析师简历', date: '2026-04-01', type: '原始简历' },
    { id: 6, name: '高级产品经理 - 字节跳动', date: '2026-04-20', type: '优化后' },
    { id: 7, name: 'UI设计师 - 腾讯', date: '2026-04-19', type: '优化后' },
    { id: 8, name: '前端开发 - 阿里巴巴', date: '2026-04-18', type: '优化后' },
    { id: 9, name: 'Java开发 - 美团', date: '2026-04-17', type: '优化后' },
    { id: 10, name: '数据分析 - 京东', date: '2026-04-16', type: '优化后' },
  ];

  const handleImageUpload = () => {
    // 模拟选择图片
    alert('打开相册选择JD截图...');
    setJdImage('mock-image-url');
    // 模拟OCR识别
    setTimeout(() => {
      setJdText('岗位职责：\n1. 负责产品规划与设计\n2. 进行需求分析与评审\n\n任职要求：\n1. 3年以上产品经验\n2. 具备数据分析能力');
    }, 500);
  };

  const handleResumeUpload = () => {
    // 模拟选择文件
    alert('打开文件选择器...');
    setResumeFile('产品经理简历.docx');
    setSelectedResumeId(null);
  };

  const handleSelectResume = (id: number) => {
    setSelectedResumeId(id);
    setResumeFile(null);
  };

  const handleSubmit = () => {
    // 模拟积分检查（测试用，实际项目中应从后端获取用户积分）
    const currentPoints = 150;
    const requiredPoints = models[selectedModel].points;

    if (currentPoints < requiredPoints) {
      setShowInsufficientModal(true);
    } else {
      navigate('/diagnosis');
    }
  };

  const handleWatchVideo = () => {
    setShowInsufficientModal(false);
    alert('正在加载激励视频...');
  };

  return (
    <div className="min-h-screen bg-[#f7f8fa]">
      <StatusBar />
      {/* Header */}
      <div className="bg-white border-b border-gray-100 sticky top-11 z-10">
        <div className="flex items-center justify-between px-4 h-14">
          <Link to="/" className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </Link>
          <h1 className="text-base font-semibold text-gray-900">简历优化</h1>
          <div className="w-6" />
        </div>
      </div>

      <div className="px-6 py-5 space-y-5 pb-32">
        {/* JD Input Section */}
        <div>
          <h2 className="text-sm font-semibold text-gray-900 mb-3">岗位JD</h2>

          {/* Image Upload Area */}
          <div className="mb-3">
            {!jdImage ? (
              <button
                onClick={handleImageUpload}
                className="w-full border-2 border-dashed border-gray-300 rounded-xl p-5 bg-gray-50 active:bg-gray-100 transition-colors"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2 shadow-sm">
                    <Plus className="w-6 h-6 text-gray-400" />
                  </div>
                  <p className="text-sm text-gray-600 font-medium">点击上传JD截图</p>
                  <p className="text-xs text-gray-400 mt-0.5">支持从相册选择或拍照</p>
                </div>
              </button>
            ) : (
              <div className="relative bg-gray-100 rounded-xl p-2">
                <button
                  onClick={() => {
                    setJdImage(null);
                    setJdText('');
                  }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
                <div className="h-24 bg-white rounded-lg flex items-center justify-center">
                  <p className="text-sm text-gray-500">JD截图已上传</p>
                </div>
              </div>
            )}
          </div>

          {/* Text Area */}
          <textarea
            value={jdText}
            onChange={(e) => setJdText(e.target.value)}
            placeholder="JD文本将自动识别，您也可以手动输入或编辑..."
            className="w-full h-32 p-4 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-[#07C160] focus:border-transparent text-sm"
          />
        </div>

        {/* Resume Input Section */}
        <div>
          <h2 className="text-sm font-semibold text-gray-900 mb-3">选择简历</h2>

          {/* Upload Resume Button */}
          {!resumeFile && !selectedResumeId && (
            <button
              onClick={handleResumeUpload}
              className="w-full border-2 border-dashed border-gray-300 rounded-xl p-5 bg-gray-50 active:bg-gray-100 transition-colors mb-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-2 shadow-sm">
                  <Plus className="w-6 h-6 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600 font-medium">点击上传简历</p>
                <p className="text-xs text-gray-400 mt-0.5">支持 Word 文档或文本格式</p>
              </div>
            </button>
          )}

          {/* Uploaded Resume Display */}
          {resumeFile && (
            <div className="bg-white border-2 border-[#07C160] rounded-xl p-3 mb-4 relative">
              <button
                onClick={() => setResumeFile(null)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center"
              >
                <X className="w-4 h-4 text-white" />
              </button>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#07C160]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-[#07C160]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{resumeFile}</p>
                  <p className="text-xs text-gray-500 mt-0.5">已选择</p>
                </div>
              </div>
            </div>
          )}

          {/* Existing Resumes List */}
          {existingResumes.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs text-gray-500">已有简历</h3>
                {(resumeFile || selectedResumeId) && (
                  <button
                    onClick={() => {
                      setResumeFile(null);
                      setSelectedResumeId(null);
                    }}
                    className="text-xs text-[#07C160]"
                  >
                    重新选择
                  </button>
                )}
              </div>

              <div className="space-y-2 max-h-64 overflow-y-auto pr-0.5 border border-gray-100 rounded-lg p-2 bg-gray-50/50">
                {existingResumes.map((resume) => (
                  <button
                    key={resume.id}
                    onClick={() => handleSelectResume(resume.id)}
                    disabled={!!resumeFile}
                    className={`w-full text-left p-3 rounded-xl border transition-all ${
                      selectedResumeId === resume.id
                        ? 'border-[#07C160] bg-[#07C160]/5'
                        : resumeFile
                        ? 'border-gray-200 bg-gray-50 opacity-50'
                        : 'border-gray-200 bg-white active:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-sm font-medium text-gray-900 truncate">{resume.name}</p>
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded flex-shrink-0">
                            {resume.type}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">{resume.date}</p>
                      </div>
                      {selectedResumeId === resume.id && (
                        <div className="w-5 h-5 bg-[#07C160] rounded-full flex items-center justify-center flex-shrink-0 ml-3">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                      {!selectedResumeId && !resumeFile && (
                        <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 ml-3" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Model Selection */}
        <div>
          <h2 className="text-sm font-semibold text-gray-900 mb-3">选择优化模型</h2>
          <div className="space-y-2">
            {/* Fast Model */}
            <button
              onClick={() => setSelectedModel('fast')}
              className={`w-full text-left rounded-xl p-3 border-2 transition-all ${
                selectedModel === 'fast'
                  ? 'border-[#07C160] bg-[#07C160]/5'
                  : 'border-gray-200 bg-white active:bg-gray-50'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  selectedModel === 'fast' ? 'bg-[#07C160]' : 'bg-blue-500'
                }`}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900 text-sm">极速模型</h3>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">高性价比</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">
                    {models.fast.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-[#07C160]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs text-gray-600">快速响应</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-[#07C160]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs text-gray-600">50积分/次</span>
                    </div>
                  </div>
                </div>
                {selectedModel === 'fast' && (
                  <div className="w-5 h-5 bg-[#07C160] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </button>

            {/* Advanced Model */}
            <button
              onClick={() => setSelectedModel('advanced')}
              className={`w-full text-left rounded-xl p-3 border-2 transition-all ${
                selectedModel === 'advanced'
                  ? 'border-[#07C160] bg-[#07C160]/5'
                  : 'border-gray-200 bg-white active:bg-gray-50'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  selectedModel === 'advanced' ? 'bg-[#07C160]' : 'bg-gradient-to-br from-purple-500 to-pink-500'
                }`}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900 text-sm">进阶模型</h3>
                    <span className="text-xs bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-2 py-0.5 rounded">高质量</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">
                    {models.advanced.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-[#07C160]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs text-gray-600">深度优化</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-[#07C160]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs text-gray-600">100积分/次</span>
                    </div>
                  </div>
                </div>
                {selectedModel === 'advanced' && (
                  <div className="w-5 h-5 bg-[#07C160] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <button
          onClick={handleSubmit}
          disabled={!jdText || (!resumeFile && !selectedResumeId)}
          className="w-full bg-[#07C160] text-white py-3 rounded-lg font-medium disabled:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
        >
          开始诊断
        </button>
        <p className="text-center text-xs text-gray-500 mt-2">
          本次将消耗 <span className="text-[#07C160] font-medium">{models[selectedModel].points}积分</span>
        </p>
      </div>

      {/* Insufficient Points Modal */}
      <InsufficientPointsModal
        isOpen={showInsufficientModal}
        onClose={() => setShowInsufficientModal(false)}
        requiredPoints={models[selectedModel].points}
        currentPoints={30}
        onWatchVideo={handleWatchVideo}
      />
    </div>
  );
}