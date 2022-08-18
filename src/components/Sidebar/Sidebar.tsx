import React from 'react';

// Components
import { NotificationItem } from './NotificationItem';
import { CompanyItem } from './CompanyItem';
import { NavItem } from './NavItem';

// Assets
import SocialityMonochrome from '~/assets/sociality-monochrome.png';

// Links
import { navLinks } from './navLinks';

export const Sidebar: React.FC = () => {
  return (
    <div className='hidden md:block fixed left-0 top-0 h-full w-72 bg-[#2b2f33]'>
      <div className='flex items-center justify-center bg-[#32363a] p-4'>
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
