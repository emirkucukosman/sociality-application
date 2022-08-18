import React from 'react';

// Redux
import { useReduxDispatch, useReduxSelector } from '~/app/hook';
import { setCollapsibleId, selectCollapsibleId } from '~/slices/layoutSlice';

// Props
type Props = {
  iconPath: string;
  text: string;
};

export const NavItem: React.FC<Props> = ({ iconPath, text }) => {
  const dispatch = useReduxDispatch();
  const collapsibleId = useReduxSelector(selectCollapsibleId);
  const isSelected = collapsibleId === text;

  const onItemSelect = () => {
    dispatch(setCollapsibleId(text));
  };

  return (
    <div>
      <div
        className={`flex items-center justify-between p-3 cursor-pointer ${
          isSelected ? 'bg-[#e36165]' : ''
        }`}
        onClick={onItemSelect}
      >
        <div className='flex items-center gap-x-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke={isSelected ? '#fff' : '#e36165'}
            strokeWidth={2}
          >
            <path strokeLinecap='round' strokeLinejoin='round' d={iconPath} />
          </svg>
          <span className='text-white text-sm'>{text}</span>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-4 w-4'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d={isSelected ? 'M20 12H4' : 'M12 4v16m8-8H4'}
          />
        </svg>
      </div>
      {isSelected && (
        <div className='flex flex-col gap-y-2 py-4 px-8 text-sm font-semibold bg-[#33363a]'>
          <span>• Compose</span>
          <span className='text-[#e36165]'>• Feed</span>
        </div>
      )}
    </div>
  );
};
