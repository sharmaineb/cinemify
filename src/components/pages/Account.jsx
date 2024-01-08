import React from 'react';
import SavedShows from '../SavedShows';
import Charts from '../Charts';

const Account = () => {
  return (
    <div>
      <div className='w-full text-white relative'>
        <img
          className='w-full h-[400px] object-cover'
          src='https://img.freepik.com/free-photo/movie-background-collage_23-2149876028.jpg'
          alt=''
        />
        <div className='bg-fixed bg-cover bg-black/60 absolute top-0 left-0 w-full h-[550px]'>
          <div className='absolute top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>Dashboard</h1>
          </div>
        </div>
      </div>
      <SavedShows />
      <Charts />
    </div>
  );
};

export default Account;
