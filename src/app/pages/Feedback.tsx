import { useState } from 'react';
import { ArrowLeft, Upload, X } from 'lucide-react';
import { Link } from 'react-router';

export function Feedback() {
  const [content, setContent] = useState('');
  const [contact, setContact] = useState('');
  const [images, setImages] = useState<string[]>([]);

  const handleSubmit = () => {
    // Submit feedback
    alert('感谢您的反馈！');
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="flex items-center justify-between px-4 h-14">
          <Link to="/profile" className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </Link>
          <h1 className="text-base font-semibold text-gray-900">问题反馈</h1>
          <div className="w-6" />
        </div>
      </div>

      <div className="px-6 py-6">
        <div className="bg-white rounded-xl p-5 mb-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-3">问题描述</h2>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="请详细描述您遇到的问题或建议..."
            className="w-full h-40 p-4 bg-gray-50 border border-gray-200 rounded-xl resize-none text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>

        <div className="bg-white rounded-xl p-5 mb-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-3">
            上传截图 <span className="text-gray-500 font-normal">（选填，最多3张）</span>
          </h2>

          <div className="grid grid-cols-3 gap-3">
            {images.map((image, index) => (
              <div key={index} className="relative aspect-square bg-gray-100 rounded-lg">
                <img src={image} alt="" className="w-full h-full object-cover rounded-lg" />
                <button
                  onClick={() => removeImage(index)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            ))}

            {images.length < 3 && (
              <button className="aspect-square bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center">
                <Upload className="w-6 h-6 text-gray-400 mb-1" />
                <span className="text-xs text-gray-500">上传</span>
              </button>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 mb-6">
          <h2 className="text-sm font-semibold text-gray-900 mb-3">
            联系方式 <span className="text-gray-500 font-normal">（选填）</span>
          </h2>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="手机号/邮箱，方便我们与您联系"
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={!content}
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          提交反馈
        </button>

        <p className="text-center text-xs text-gray-500 mt-4">
          我们会尽快处理您的反馈，感谢您的支持！
        </p>
      </div>
    </div>
  );
}
