import React from 'react';

interface LinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export function Link({ href, icon, label }: LinkProps) {
  return (
    <a
      href={href}
      className="flex flex-col items-center text-gray-500 hover:text-blue-500 transition-colors"
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </a>
  );
}