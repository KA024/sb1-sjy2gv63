import { Hash, Users, Bookmark, List, Inbox, X } from 'lucide-react';
import { SidebarLink } from './SidebarLink';
import { useInbox } from '../hooks/useInbox';
import { useSidebar } from '../hooks/useSidebar';

export function Sidebar() {
  const { openInbox } = useInbox();
  const { isOpen, closeSidebar } = useSidebar();

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={closeSidebar}
        />
      )}

      <aside className={`
        fixed top-0 bottom-0 left-0 w-64 lg:w-48 z-50 lg:z-40
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800
        lg:top-16
      `}>
        {/* Mobile close button */}
        <button
          onClick={closeSidebar}
          className="lg:hidden absolute right-4 top-4 p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          aria-label="Close sidebar"
        >
          <X className="w-6 h-6" />
        </button>

        <nav className="p-4 mt-16 lg:mt-0">
          <ul className="space-y-2">
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
    </>
  );
}