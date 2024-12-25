import React from 'react';
import { Plane } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2 p-4">
      <div className="relative">
        <Plane size={32} className="text-[#C3423F] transform -rotate-45" />
      </div>
      <div>
        <h1 className="text-xl font-bold text-white">Atlas Airways</h1>
        <p className="text-xs text-gray-400">Admin Dashboard</p>
      </div>
    </div>
  );
}