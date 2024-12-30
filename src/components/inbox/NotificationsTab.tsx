import React from 'react';
import { Heart, MessageCircle, UserPlus, Star } from 'lucide-react';
import { NotificationItem } from './NotificationItem';

const SAMPLE_NOTIFICATIONS = [
  {
    id: 1,
    type: 'like',
    icon: <Heart className="w-4 h-4 text-red-500" />,
    user: 'Sarah Wilson',
    action: 'liked your post',
    content: '"Beautiful sunset at the beach today! 🌅"',
    time: '2m ago',
    read: false,
  },
  {
    id: 2,
    type: 'follow',
    icon: <UserPlus className="w-4 h-4 text-blue-500" />,
    user: 'Michael Chen',
    action: 'followed you',
    time: '1h ago',
    read: true,
  },
  {
    id: 3,
    type: 'comment',
    icon: <MessageCircle className="w-4 h-4 text-green-500" />,
    user: 'John Doe',
    action: 'commented on your post',
    content: '"Great work! Keep it up 👏"',
    time: '3h ago',
    read: false,
  },
];

export function NotificationsTab() {
  return (
    <div className="space-y-2">
      {SAMPLE_NOTIFICATIONS.map((notification) => (
        <NotificationItem key={notification.id} {...notification} />
      ))}
    </div>
  );
}