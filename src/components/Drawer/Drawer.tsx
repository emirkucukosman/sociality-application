import React from 'react';

// Redux
import { useReduxDispatch, useReduxSelector } from '~/app/hook';
import { toggleDrawer, selectIsDrawerOpen } from '~/slices/layoutSlice';

// Components
import { NotificationItem } from '~/components/Sidebar/NotificationItem';
import { CompanyItem } from '~/components/Sidebar/CompanyItem';
import { NavItem } from '~/components/Sidebar/NavItem';

// Links
import { navLinks } from '~/components/Sidebar/navLinks';

// Assets
import SocialityMonochrome from '~/assets/sociality-monochrome.png';

export const Drawer: React.FC = () => {
  const dispatch = useReduxDispatch();
  const isDrawerOpen = useReduxSelector(selectIsDrawerOpen);

  const handleToggleDrawer = () => {
    dispatch(toggleDrawer());
  };

  return (
    <div
      className='fixed top-0 h-full bg-[#2b2f33] transition-all duration-200'
      style={{ left: isDrawerOpen ? 0 : '-100%' }}
    >
      <div className='flex items-center p-4 gap-x-4'>
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
        <img src={SocialityMonochrome} alt='Sociality' className='w-32 h-auto' />
      </div>
      <div className='flex h-full'>
        <div className='flex flex-col gap-y-4 mt-4'>
          <CompanyItem id={1} />
          <CompanyItem id={2} badge='99' />
          <CompanyItem id={3} />
          <CompanyItem id={4} />
          <CompanyItem id={5} />
          <CompanyItem id={6} />
        </div>
        <div className='flex flex-col grow bg-[#3a3d42] h-full'>
          <NotificationItem />
          {navLinks.map((navLink, i) => (
            <NavItem iconPath={navLink.iconPath} text={navLink.text} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
