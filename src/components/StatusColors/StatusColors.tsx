import React from 'react';

export const StatusColors: React.FC = () => {
  return (
    <div className='flex flex-wrap items-center gap-x-4'>
      <div className='flex items-center gap-x-2'>
        <div className='w-2 h-2 rounded-full bg-gray-500'></div>
        <span className='text-sm'>Published</span>
      </div>

      <div className='flex items-center gap-x-2'>
        <div className='w-2 h-2 rounded-full bg-green-500'></div>
        <span className='text-sm'>Scheduled</span>
      </div>

      <div className='flex items-center gap-x-2'>
        <div className='w-2 h-2 rounded-full bg-yellow-500'></div>
        <span className='text-sm'>Need Approval</span>
      </div>

      <div className='flex items-center gap-x-2'>
        <div className='w-2 h-2 rounded-full bg-red-500'></div>
        <span className='text-sm'>Error</span>
      </div>

      <div className='flex items-center gap-x-2'>
        <div className='w-2 h-2 rounded-full bg-blue-500'></div>
        <span className='text-sm'>Notes</span>
      </div>
    </div>
  );
};
