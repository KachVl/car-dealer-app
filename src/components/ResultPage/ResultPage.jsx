'use client';

import { getDataByParams } from '@/api/ApiClient';
import { useEffect, useState } from 'react';
import { CarCard } from '../CarCard/CarCard';
import { Loader } from '../Loader/Loader';
import Link from 'next/link';

export const ResultPage = ({ makeId, year }) => {
  const [isModelsListLoading, setIsModelsListLoading] = useState(true);
  const [modelsList, setModelsList] = useState([]);

  useEffect(() => {
    getDataByParams(makeId, year)
      .then((data) => setModelsList(data.Results))
      .finally(() => setIsModelsListLoading(false));
  }, [makeId, year]);

  return (
    <div className="w-fit flex flex-col items-center gap-[20px] tablet:gap-[40px]">
      {isModelsListLoading ? (
        <Loader />
      ) : !modelsList.length ? (
        <>
          <Link
            href={'/'}
            className="hover:text-decorationColor1 duration-300 flex items-center"
          >
            <button className="block w-[90px] uppercase font-bold">Home</button>
          </Link>
          <p className="text-lg font-bold">Looks like the are no models...</p>
        </>
      ) : (
        <>
          <div className="w-full flex  gap-[20px] flex-col-reverse tablet:flex-row items-center justify-between">
            <h1 className="w-fit text-4xl font-bold text-center">
              Vehicles for
              <span className="text-decorationColor1">
                {` ${modelsList[0].Make_Name}`}
              </span>
              {` (${year})`}
            </h1>

            <Link
              href={'/'}
              className="hover:text-decorationColor1 duration-300 flex items-center"
            >
              <button className="block w-[90px] uppercase font-bold">
                Home
              </button>
            </Link>
          </div>

          <div
            className="grid auto-cols-max grid-col-1 tablet:grid-cols-2 desktop:grid-cols-3
              wideScreen:grid-cols-4 gap-[20px]"
          >
            {modelsList.map((car, index) => (
              <CarCard car={car} key={new Date().toString() + index} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
