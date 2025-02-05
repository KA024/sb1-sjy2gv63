import { PlusCircle } from 'lucide-react';
import { useSubmitPost } from '../../hooks/useSubmitPost';

export function PostButton() {
  const { openSubmitPost } = useSubmitPost();

  return (
    <button
      onClick={openSubmitPost}
      className="flex items-center gap-2 px-3 md:px-4 py-2 font-medium text-white bg-blue-500 rounded-full
        shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]
        transition-all duration-300 hover:bg-blue-600 hover:scale-105"
    >
      <PlusCircle className="w-5 h-5" />
      <span className="hidden md:inline">Post</span>
    </button>
  );
}