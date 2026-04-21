import { Wifi, Battery, Signal } from 'lucide-react';

export function StatusBar() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  return (
    <div className="bg-white h-11 flex items-center justify-between px-4 text-xs">
      <div className="flex items-center gap-1">
        <span className="font-medium text-gray-900">{hours}:{minutes}</span>
      </div>
      <div className="flex items-center gap-1.5 text-gray-900">
        <Signal className="w-4 h-4" />
        <Wifi className="w-4 h-4" />
        <Battery className="w-4 h-4" />
      </div>
    </div>
  );
}
