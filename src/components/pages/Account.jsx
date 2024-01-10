import React from 'react';
import SavedShows from '../SavedShows';
import Charts from '../Charts';

const Account = () => {
  return (
    <div className='bg-[#000000] pt-20'> 
    <h1 className='text-3xl md:text-5xl font-bold text-white pt-10 pb-7'>My Dashboard</h1>
      <div className=''>
      </div>
      <SavedShows />
      <Charts />
    </div>
  );
};

export default Account;
