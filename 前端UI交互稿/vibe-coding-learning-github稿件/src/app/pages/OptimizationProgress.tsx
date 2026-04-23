import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { StatusBar } from '../components/StatusBar';

export function OptimizationProgress() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { id: 1, text: '用户补充信息整理中', icon: '📋' },
    { id: 2, text: '简历结构优化中', icon: '🔧' },
    { id: 3, text: '经历表达优化中', icon: '✍️' },
    { id: 4, text: '优化版简历生成中', icon: '📄' },
  ];

  useEffect(() => {
    // 每2秒切换到下一个步骤
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 2000);

    // 8秒后自动跳转到结果确认页
    const navigationTimer = setTimeout(() => {
      navigate('/result');
    }, 8000);

    return () => {
      clearInterval(stepInterval);
      clearTimeout(navigationTimer);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f8fa] to-white">
      <StatusBar />

      <div className="flex flex-col items-center justify-center min-h-screen px-6 pb-20">
        {/* Main Icon Animation */}
        <div className="relative mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-[#07C160] to-[#05a350] rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          {/* Rotating Ring */}
          <div className="absolute inset-0 w-24 h-24 border-4 border-transparent border-t-[#07C160] rounded-full animate-spin"></div>
        </div>

        {/* Title */}
        <h1 className="text-xl font-bold text-gray-900 mb-2">简历优化中，请稍候</h1>
        <p className="text-sm text-gray-500 mb-8 text-center">
          系统正在为您生成优化版简历<br/>完成后将自动进入结果确认页
        </p>

        {/* Progress Steps */}
        <div className="w-full max-w-sm space-y-3">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-500 ${
                index === currentStep
                  ? 'bg-[#07C160]/10 border-2 border-[#07C160]'
                  : index < currentStep
                  ? 'bg-white border border-gray-200 opacity-60'
                  : 'bg-white border border-gray-200 opacity-40'
              }`}
            >
              <div className={`text-2xl transition-transform duration-500 ${
                index === currentStep ? 'scale-110' : 'scale-100'
              }`}>
                {step.icon}
              </div>
              <div className="flex-1">
                <p className={`text-sm font-medium transition-colors ${
                  index === currentStep ? 'text-[#07C160]' : 'text-gray-600'
                }`}>
                  {step.text}
                </p>
              </div>
              {index < currentStep && (
                <div className="w-6 h-6 bg-[#07C160] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
              {index === currentStep && (
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-[#07C160] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-[#07C160] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-[#07C160] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-sm mt-8">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#07C160] to-[#05a350] transition-all duration-500 ease-out"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-center text-xs text-gray-500 mt-2">
            {currentStep + 1} / {steps.length}
          </p>
        </div>
      </div>
    </div>
  );
}
