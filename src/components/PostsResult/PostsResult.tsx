import React from 'react';
import dayjs from 'dayjs';

// Services
import { useGetPostsQuery } from '~/services/socialityApi';
import { PostCard } from './PostCard';

export const PostsResult: React.FC = () => {
  const {
    data: entries,
    isLoading,
    error,
  } = useGetPostsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: Object.entries(result.data?.record.posts_by_date || {}),
    }),
  });

  if (isLoading) {
    return <div className='mt-4'>Loading...</div>;
  }

  if (error) {
    return <div className='mt-4'>Error: {JSON.stringify(error)}</div>;
  }

  return (
    <div className='flex flex-col gap-y-8 mt-4'>
      {entries
        .sort((a, b) => {
          const aDate = dayjs(a[0]);
          const bDate = dayjs(b[0]);
          return aDate.isBefore(bDate) ? 1 : -1;
        })
        .map((entry, i) => (
          <div key={i}>
            <h3 className='text-gray-500 text-xl'>{dayjs(entry[0]).format('DD MMMM YYYY')}</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-2'>
              {entry[1].map((post, j) => (
                <PostCard post={post} key={j} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};
