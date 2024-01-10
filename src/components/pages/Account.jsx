import React from 'react';
import SavedShows from '../SavedShows';
import Charts from '../Charts';

const Account = () => {
  return (
    <div>      
        <div className='bg-fixed bg-cover top-0 left-0 w-full h-[550px]'>
          <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold text-blue'>My Dashboard</h1>
        </div>
      </div>
      <SavedShows />
      <Charts />
    </div>
  );
};

export default Account;
