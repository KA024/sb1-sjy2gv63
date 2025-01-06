import { Search } from 'lucide-react';

export function SearchBar() {
  return (
    <div className="relative max-w-xl w-full">
      <input
        type="text"
        placeholder="Search Skyline"
        className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-full focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-900 placeholder-gray-500 shadow-md"
      />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
    </div>
  );
}