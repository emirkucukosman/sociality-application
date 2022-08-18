import React from 'react';

// Redux
import { useReduxDispatch, useReduxSelector } from '~/app/hook';
import { toggleDrawer, selectIsDrawerOpen } from '~/slices/layoutSlice';

// Assets
import SocialityMonochrome from '~/assets/sociality-monochrome.png';

export const TopBar: React.FC = () => {
  const dispatch = useReduxDispatch();
  const isDrawerOpen = useReduxSelector(selectIsDrawerOpen);

  const handleToggleDrawer = () => {
    dispatch(toggleDrawer());
  };

  return (
    <div className='block w-full md:hidden bg-[#32363A]'>
      <div className='flex items-center p-4 gap-x-4'>
        {isDrawerOpen ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
            onClick={handleToggleDrawer}
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
            onClick={handleToggleDrawer}
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        )}

        <img src={SocialityMonochrome} alt='Sociality' className='w-32 h-auto' />
      </div>
    </div>
  );
};
