import React from 'react';

interface NotificationItemProps {
  icon: React.ReactNode;
  user: string;
  action: string;
  content?: string;
  time: string;
  read: boolean;
}

export function NotificationItem({ icon, user, action, content, time, read }: NotificationItemProps) {
  return (
    <div className={`p-4 rounded-lg transition-colors ${
      read ? 'bg-transparent' : 'bg-blue-50 dark:bg-blue-900/20'
    }`}>
      <div className="flex items-start space-x-3">
        <div className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm">
          {icon}
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-900 dark:text-gray-100">
            <span className="font-medium">{user}</span> {action}
            {content && (
              <span className="text-gray-600 dark:text-gray-400"> {content}</span>
            )}
          </p>
          <span className="text-xs text-gray-500 dark:text-gray-400">{time}</span>
        </div>
      </div>
    </div>
  );
}