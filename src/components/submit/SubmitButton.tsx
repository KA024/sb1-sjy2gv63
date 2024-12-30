import React from 'react';
import { PlusCircle } from 'lucide-react';
import { useSubmitPost } from '../../hooks/useSubmitPost';

export function SubmitButton() {
  const { openSubmitPost } = useSubmitPost();

  return (
    <button
      onClick={openSubmitPost}
      className="w-full flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors"
    >
      <PlusCircle className="w-6 h-6" />
      <span>Submit Post</span>
    </button>
  );
}