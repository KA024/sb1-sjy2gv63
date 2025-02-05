import { Bell, MessageCircle } from 'lucide-react';
import { TabType } from '../../hooks/useInbox';

interface InboxTabsProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export function InboxTabs({ activeTab, onTabChange }: InboxTabsProps) {
  return (
    <div className="flex space-x-1 border-b border-gray-200 dark:border-gray-800">
      <button
        onClick={() => onTabChange('notifications')}
        className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
          activeTab === 'notifications'
            ? 'border-blue-500 text-blue-500'
            : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
        }`}
      >
        <Bell className="w-4 h-4" />
        <span>Notifications</span>
      </button>
      
      <button
        onClick={() => onTabChange('messages')}
        className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
          activeTab === 'messages'
            ? 'border-blue-500 text-blue-500'
            : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
        }`}
      >
        <MessageCircle className="w-4 h-4" />
        <span>Messages</span>
      </button>
    </div>
  );
}