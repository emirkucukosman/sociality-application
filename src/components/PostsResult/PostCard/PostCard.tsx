import React from 'react';
import dayjs from 'dayjs';

// Services
import { Post } from '~/services/socialityApi';

// Components
import { Statistics } from './Statistics';
import { Actions } from './Actions';
import { Status } from './Status';

// Props
type Props = {
  post: Post;
};

export const PostCard: React.FC<Props> = ({ post }) => {
  const onImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    return (e.currentTarget.src = '/no-post-image.png');
  };

  return (
    <div className='border-[0.5px] border-gray-400 rounded-md flex bg-white'>
      <Status post={post} />
      <div className='flex flex-col p-4'>
        <div className='flex items-center justify-between'>
          <span className='text-gray-400 text-sm'>
            {dayjs(post.created_at).format('DD MMMM YYYY - HH:mm')}
          </span>
          <Actions post={post} />
        </div>
        <p className='mt-4 text-gray-600'>{post.entry.message}</p>
        <div className='flex items-center justify-center mt-4 bg-gray-100'>
          <img
            src={post.entry.image[0]}
            onError={onImageError}
            alt={'placeholder'}
            className='w-auto h-48'
          />
        </div>
        <Statistics />
      </div>
    </div>
  );
};
