'use client';

import { useState } from 'react';
import Image from 'next/image';

export const Selector = ({ description, itemsList, callBack }) => {
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [currentValue, setCurrentValue] = useState(description);

  return (
    <div
      className="w-[180px] tablet:w-[320px] relative min-w-fit"
      onClick={() => setOptionsVisible(!isOptionsVisible)}
      onBlur={() => setOptionsVisible(false)}
    >
      <div
        className="flex cursor-pointer h-8 border-2 px-1 rounded-md gap-2 items-center 
      hover:bg-slate-500 duration-300"
      >
        <div className="flex-grow text-center">{currentValue}</div>
        <div className="w-5 h-full border-l-2 pl-1 relative">
          <Image
            src={'/icons/arrow-down-icon.svg'}
            style={{
              left: '0.1rem',
              objectFit: 'contain',
            }}
            alt="arrow-down icon"
            fill="true"
          />
        </div>
      </div>

      {itemsList.length && isOptionsVisible && (
        <div
          className="w-full h-fit flex flex-col border-2 mt-1.5 rounded-md max-h-[50vh] 
          overflow-y-auto absolute bg-background z-[1]"
        >
          {itemsList.map((item) => {
            const idValue = item.MakeId ? item.MakeId : item;
            const nameValue = item.MakeName ? item.MakeName : item;

            return (
              <div
                className="flex cursor-pointer min-h-fit text-xs tablet:text-sm text-center 
                  [&:not(:last-child)]:border-b-2 px-1 gap-2 items-center justify-center
                hover:bg-slate-500 hover:text-decorationColor1 duration-300"
                onClick={() => {
                  callBack(idValue, nameValue);
                  setCurrentValue(nameValue);
                }}
                key={idValue}
              >
                {nameValue}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
