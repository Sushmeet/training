import React from 'react';

export const HeaderIcon = ({ Icon, active }: any) => {
  return (
    <div
      className="flex items-center cursor-pointer md:px-10 sm:h-14
     md:hover:bg-gray-100 rounded-xl md:active:bg-gray-200
     active:border-b-2 active:border-blue-500 group"
    >
      <Icon
        className={`h-5 sm:h-7 mx-auto group-hover:text-blue-500 ${
          active && 'text-blue-500 underline'
        }`}
      />
    </div>
  );
};
