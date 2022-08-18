import React from 'react';

// Redux
import { useReduxDispatch, useReduxSelector } from '~/app/hook';
import { setCompanyId, selectCompanyId } from '~/slices/layoutSlice';

// Assets
import SocialitySymbol from '~/assets/sociality-symbol.png';

// Props
type Props = {
  id: number;
  badge?: string;
};

export const CompanyItem: React.FC<Props> = ({ id, badge }) => {
  const dispatch = useReduxDispatch();
  const companyId = useReduxSelector(selectCompanyId);
  const isSelected = id === companyId;

  const onCompanySelect = () => {
    dispatch(setCompanyId(id));
  };

  return (
    <div className='relative px-4 cursor-pointer' onClick={onCompanySelect}>
      {badge && (
        <div className='absolute -top-5 right-0 mt-2 mr-2 z-[999]'>
          <span className='bg-green-500 text-white text-[8px] rounded-full p-1'>{badge}</span>
        </div>
      )}
      {isSelected && (
        <div className='absolute w-1 h-10 rounded-tr-md rounded-br-md bg-[#e36165] left-0 top-1/2 -translate-y-1/2' />
      )}
      <div
        className={`w-10 h-10 bg-white flex items-center justify-center rounded-md ${
          !isSelected ? 'brightness-50' : ''
        }`}
      >
        <img src={SocialitySymbol} alt='Sociality' className='w-8 h-8' />
      </div>
    </div>
  );
};
