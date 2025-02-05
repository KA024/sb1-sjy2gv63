import React from 'react';
import { CloudSun } from 'lucide-react';

export function Logo() {
  return (
    <a 
      href="/home" 
      className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors"
    >
      <CloudSun className="w-8 h-8" />
      <span className="text-2xl font-bold">skyline</span>
    </a>
  );
}