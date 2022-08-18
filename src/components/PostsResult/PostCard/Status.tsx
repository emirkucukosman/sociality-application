import React from 'react';

// Services
import { Post } from '~/services/socialityApi';

// Props
type Props = {
  post: Post;
};

const STATUS_COLORS: { [key: number]: string } = {
  0: 'bg-yellow-500',
  1: 'bg-green-500',
  3: 'bg-gray-500',
  4: 'bg-red-500',
};

const SOCIAL_ICONS: { [key: string]: string } = {
  instagrambusiness: '/instagram.png',
  twitter: '/twitter.png',
  facebook: '/facebook.png',
};

export const Status: React.FC<Props> = ({ post }) => {
  return (
    <div
      className={`flex shrink-0 items-center justify-center h-full w-8 rounded-tl-md rounded-bl-md ${
        STATUS_COLORS[post.status]
      }`}
    >
      <img src={SOCIAL_ICONS[post.account.channel]} alt='social icon' width={24} />
    </div>
  );
};
