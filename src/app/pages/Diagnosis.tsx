import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Loader2, FileSearch, Brain, Sparkles } from 'lucide-react';

export function Diagnosis() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/report');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const steps = [
    { icon: FileSearch, label: 'JD解读中', delay: 0 },
    { icon: Brain, label: '简历诊断中', delay: 1500 },
    { icon: Sparkles, label: '优化建议生成中', delay: 3000 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center p-6">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto">
            <Loader2 className="w-24 h-24 text-white animate-spin" />
          </div>
        </div>

        <h1 className="text-white text-2xl font-semibold mb-3">AI正在分析中</h1>
        <p className="text-blue-100 text-sm mb-12">这可能需要几秒钟，请稍候...</p>

        <div className="space-y-4 max-w-xs mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-center gap-3 animate-pulse"
                style={{ animationDelay: `${step.delay}ms` }}
              >
                <Icon className="w-6 h-6 text-white flex-shrink-0" />
                <span className="text-white text-sm font-medium">{step.label}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <div className="flex gap-2 justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
