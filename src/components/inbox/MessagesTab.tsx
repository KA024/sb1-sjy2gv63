import React from 'react';
import { MessageItem } from './MessageItem';

const SAMPLE_MESSAGES = [
  {
    id: 1,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'John Doe',
    message: 'Hey, how are you doing?',
    time: '2m ago',
    unread: true,
  },
  {
    id: 2,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Sarah Wilson',
    message: 'The project looks great! When can we meet to discuss the next steps?',
    time: '1h ago',
    unread: false,
  },
  {
    id: 3,
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    name: 'Michael Chen',
    message: 'Thanks for your help yesterday!',
    time: '1d ago',
    unread: false,
  },
];

export function MessagesTab() {
  return (
    <div className="space-y-2">
      {SAMPLE_MESSAGES.map((message) => (
        <MessageItem key={message.id} {...message} />
      ))}
    </div>
  );
}