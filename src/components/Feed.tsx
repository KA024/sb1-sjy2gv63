import React from 'react';
import { Post } from './Post';

const SAMPLE_POSTS = [
  {
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    username: 'John Doe',
    handle: 'johndoe',
    content: 'Just deployed my new React application! 🚀 #webdev #react',
    timestamp: '2h ago'
  },
  {
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    username: 'Sarah Wilson',
    handle: 'sarahw',
    content: 'Beautiful sunset at the beach today! 🌅 Nature never fails to amaze me.',
    timestamp: '4h ago'
  },
  {
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    username: 'Michael Chen',
    handle: 'mikechen',
    content: 'Working on some exciting new features for our platform. Stay tuned! 💻',
    timestamp: '6h ago'
  }
];

export function Feed() {
  return (
    <div className="max-w-2xl mx-auto">
      {SAMPLE_POSTS.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
}