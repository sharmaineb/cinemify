import React from 'react';
import SavedShows from '../SavedShows';
import Charts from '../Charts';
import MovieCharts from '../MovieCharts';

const Account = () => {
  return (
    <div className='bg-[#000000] pt-20 pb-10 flex flex-col items-center justify-center'>
      <h1 className="mb-8 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-indigo-500 from-emerald-600">
          WATCHLIST:
        </span>
      </h1>
      <div className='w-full'>
        <SavedShows />
      </div>
      <div className=' text-white'>
        <MovieCharts />
      </div>
      <div className='text-white'>
        <Charts />
      </div>

    </div>
  );
};

export default Account;

