import React from 'react';
import { X } from 'lucide-react';
import { useInbox } from '../../hooks/useInbox';
import { InboxTabs } from './InboxTabs';
import { NotificationsTab } from './NotificationsTab';
import { MessagesTab } from './MessagesTab';

export function InboxModal() {
  const { isOpen, activeTab, closeInbox, switchTab } = useInbox();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={closeInbox}
      />
      
      <div className="relative min-h-screen flex items-start justify-center p-4">
        <div className="relative bg-white dark:bg-gray-900 w-full max-w-2xl rounded-xl shadow-xl mt-20">
          <button
            onClick={closeInbox}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6">
            <InboxTabs activeTab={activeTab} onTabChange={switchTab} />
            
            <div className="mt-6">
              {activeTab === 'notifications' && <NotificationsTab />}
              {activeTab === 'messages' && <MessagesTab />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}