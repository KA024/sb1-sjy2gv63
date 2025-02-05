import React from 'react';

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export function SidebarLink({ href, icon, label }: SidebarLinkProps) {
  const IconComponent = React.cloneElement(icon as React.ReactElement, {
    className: 'w-6 h-6'
  });

  return (
    <a
      href={href}
      className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors"
    >
      {IconComponent}
      <span>{label}</span>
    </a>
  );
}