import { Logo } from './Logo';
import { SearchBar } from './SearchBar';
import { ProfileDropdown } from './ProfileDropdown';

export default function Header() {
  const handleSubmitPost = () => {
    // Add the functionality that was previously in the Sidebar
    console.log('Submit Post clicked');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-900/70 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-800/50" />
      
      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="flex items-center h-16">
          <div className="w-48">
            <Logo />
          </div>
          
          <div className="flex-1 max-w-xl mx-auto">
            <SearchBar />
          </div>

          <div className="w-48 flex justify-end items-center space-x-4">
            <button
              onClick={handleSubmitPost}
              className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors"
            >
              Submit Post
            </button>
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </header>
  );
}