import React from 'react';
import { Logo } from './Logo';
import { SearchBar } from './SearchBar';
import { ProfileDropdown } from './ProfileDropdown';
import { PostButton } from './submit/PostButton';
import { Menu } from 'lucide-react';
import { useSidebar } from '../hooks/useSidebar';

export default function Header() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all">
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-900/70 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-800/50" />
      
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="flex items-center h-16 gap-4">
          <button 
            onClick={toggleSidebar}
            className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="w-32 md:w-48">
            <Logo />
          </div>
          
          <div className="hidden md:block flex-1 max-w-xl">
            <SearchBar />
          </div>

          <div className="flex items-center gap-2 md:gap-4 ml-auto">
            <PostButton />
            <ProfileDropdown />
          </div>
        </div>

        <div className="md:hidden py-2">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}