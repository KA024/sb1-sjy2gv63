import React from 'react';

interface SocialButtonProps {
  icon: React.ReactNode;
  provider: string;
  onClick: () => void;
}

export function SocialButton({ icon, provider, onClick }: SocialButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center space-x-2 p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
    >
      {icon}
      <span className="text-gray-700 dark:text-gray-200">Continue with {provider}</span>
    </button>
  );
}