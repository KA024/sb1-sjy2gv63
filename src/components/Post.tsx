import React from 'react';
import { Heart, MessageCircle, Repeat2, Share } from 'lucide-react';

interface PostProps {
  avatar: string;
  username: string;
  handle: string;
  content: string;
  timestamp: string;
}

export function Post({ avatar, username, handle, content, timestamp }: PostProps) {
  return (
    <article className="border-b border-gray-200 dark:border-gray-800 p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
      <div className="flex space-x-3">
        <img
          src={avatar}
          alt={username}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h2 className="font-bold text-gray-900 dark:text-gray-100">{username}</h2>
            <span className="text-gray-500 dark:text-gray-400">@{handle}</span>
            <span className="text-gray-500 dark:text-gray-400">·</span>
            <time className="text-gray-500 dark:text-gray-400">{timestamp}</time>
          </div>
          <p className="mt-2 text-gray-900 dark:text-gray-100">{content}</p>
          <div className="flex items-center justify-between mt-4 max-w-md">
            <button className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
              <MessageCircle className="w-5 h-5" />
              <span>Reply</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400">
              <Repeat2 className="w-5 h-5" />
              <span>Repost</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400">
              <Heart className="w-5 h-5" />
              <span>Like</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
              <Share className="w-5 h-5" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}