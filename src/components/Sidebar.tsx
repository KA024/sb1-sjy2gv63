import React from 'react';
import { Hash, Users, Bookmark, List, Inbox } from 'lucide-react';
import { SidebarLink } from './SidebarLink';
import { useInbox } from '../hooks/useInbox';
import { SubmitButton } from './submit/SubmitButton';

export function Sidebar() {
  const { openInbox } = useInbox();

  return (
    <aside className="w-48 fixed left-0 top-16 h-full border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-colors">
      <nav className="p-2">
        <ul className="space-y-1">
          <li>
            <SubmitButton />
          </li>
          <li>
            <SidebarLink href="/trending" icon={<Hash />} label="Trending" />
          </li>
          <li>
            <SidebarLink href="/following" icon={<Users />} label="Following" />
          </li>
          <li>
            <button
              onClick={() => openInbox()}
              className="w-full flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors"
            >
              <Inbox className="w-6 h-6" />
              <span>Inbox</span>
            </button>
          </li>
          <li>
            <SidebarLink href="/bookmarks" icon={<Bookmark />} label="Bookmarks" />
          </li>
          <li>
            <SidebarLink href="/lists" icon={<List />} label="Lists" />
          </li>
        </ul>
      </nav>
    </aside>
  );
}