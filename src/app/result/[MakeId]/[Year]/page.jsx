import { getData } from '@/api/ApiClient';
import { Loader } from '@/components/Loader/Loader';
import { ResultPage } from '@/components/ResultPage/ResultPage';
import getArrayOfYears from '@/utils/functions/getArrayOfYears';
import { Suspense } from 'react';

export async function generateStaticParams() {
  const result = [];
  const carsList = await getData();
  const yearsList = getArrayOfYears(2015);

  for (const car of carsList.Results) {
    for (const year of yearsList) {
      result.push({ MakeId: car.MakeId.toString(), Year: year.toString() });
    }
  }

  return result;
}

export default async function ResultsPage({ params }) {
  const { MakeId, Year } = await params;

  return (
    <main className="w-full flex flex-col items-center h-full flex-grow-[1]">
      <Suspense fallback={<Loader />}>
        <ResultPage makeId={MakeId} year={Year} />
      </Suspense>
    </main>
  );
}
