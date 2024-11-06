'use client';

import { Selector } from '@/components/Selector/Selector';
import { AppContext } from '@/context/AppContext';
import { useContext, useState } from 'react';
import Link from 'next/link';
import getArrayOfYears from '@/utils/functions/getArrayOfYears';
import { Loader } from '@/components/Loader/Loader';

const years = getArrayOfYears(2015);

const Home = () => {
  const { carsList, isLoading } = useContext(AppContext);
  const [selectedMaker, setSelectedMaker] = useState(0);
  const [selectedYear, setSelectedYear] = useState(0);

  const isNextButtonEnabled = selectedMaker && selectedYear;

  return (
    <main className="w-full flex-grow-[1] flex flex-col items-center">
      {isLoading ? (
        <Loader />
      ) : (
        <div
          className="flex flex-col items-end gap-[10px] tablet:gap-[20px] 
            laptop:flex-row laptop:gap-[40px]"
        >
          <Selector
            description={'Vehicle Makes'}
            itemsList={carsList}
            callBack={(itemId) => setSelectedMaker(itemId)}
          />

          <Selector
            description={'Model Year'}
            itemsList={years}
            callBack={(item) => setSelectedYear(+item)}
          />

          <Link href={`/result/${selectedMaker}/${selectedYear}`}>
            <button
              className={`border-2 px-1 rounded-md gap-2 items-center hover:bg-slate-500 duration-300 
              h-8 w-[90px] hover:text-decorationColor1 
              ${!isNextButtonEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!isNextButtonEnabled}
            >
              Next
            </button>
          </Link>
        </div>
      )}
    </main>
  );
};

export default Home;
