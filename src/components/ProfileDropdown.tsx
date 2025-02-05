import { useState, useRef, useEffect } from 'react';
import { User, Settings, LogIn, UserPlus, LogOut } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useAuth } from '../hooks/useAuth';

export function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn] = useState(false);
  const { openAuth } = useAuth();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMouseLeave(event: MouseEvent) {
      const target = event.relatedTarget as Node;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setIsOpen(false);
      }
    }

    const dropdown = dropdownRef.current;
    dropdown?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      dropdown?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={dropdownRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
    >
      <button
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
        aria-label="User menu"
      >
        <User className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1">
          {isLoggedIn ? (
            <>
              <a href="/profile" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">
                <User className="w-4 h-4" />
                <span>Profile</span>
              </a>
              <a href="/settings" className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800">
                <Settings className="w-4 h-4" />
                <span>Settings</span>
              </a>
              <hr className="my-1 border-gray-200 dark:border-gray-700" />
              <ThemeToggle />
              <hr className="my-1 border-gray-200 dark:border-gray-700" />
              <button className="w-full flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-gray-50 dark:hover:bg-gray-800">
                <LogOut className="w-4 h-4" />
                <span>Log out</span>
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => openAuth('login')} 
                className="w-full flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                <LogIn className="w-4 h-4" />
                <span>Log in</span>
              </button>
              <button 
                onClick={() => openAuth('signup')}
                className="w-full flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                <UserPlus className="w-4 h-4" />
                <span>Sign up</span>
              </button>
              <hr className="my-1 border-gray-200 dark:border-gray-700" />
              <ThemeToggle />
            </>
          )}
        </div>
      )}
    </div>
  );
}