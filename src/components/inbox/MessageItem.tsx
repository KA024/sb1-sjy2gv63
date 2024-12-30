import React from 'react';

interface MessageItemProps {
  avatar: string;
  name: string;
  message: string;
  time: string;
  unread: boolean;
}

export function MessageItem({ avatar, name, message, time, unread }: MessageItemProps) {
  return (
    <div className={`p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer ${
      unread ? 'bg-blue-50 dark:bg-blue-900/20' : ''
    }`}>
      <div className="flex items-center space-x-3">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">{name}</h3>
            <span className="text-xs text-gray-500 dark:text-gray-400">{time}</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 truncate">{message}</p>
        </div>
      </div>
    </div>
  );
}