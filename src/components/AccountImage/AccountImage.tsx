import React from 'react';

// Assets
import LinkedinProfileImage from '~/assets/linkedin-profile.jpeg';

export const AccountImage: React.FC = () => {
  return (
    <img src={LinkedinProfileImage} alt='Linkedin profile' width={36} className='rounded-full' />
  );
};
