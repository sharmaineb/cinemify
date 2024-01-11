import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai';

const SavedShowsTest = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    console.log('Fetching data...');
    const unsubscribe = onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      console.log('Snapshot received:', doc.data());
      setMovies(doc.data()?.savedShows || []);
    });

    // cleanup function
    return () => unsubscribe();
  }, [user?.email]);

  const movieRef = doc(db, 'users', `${user?.email}`);
  const deleteShow = async (passedID) => {
    try {
      const result = movies.filter((item) => item.id !== passedID);
      console.log('Deleting show with ID:', passedID);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log('Error deleting show:', error);
    }
  };

  return (
    <>
      <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
        <div
          id={'slider'}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
        >
          {movies.map((item) => (
            <div
              key={item.id}
              className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'
            >
              <img
                className='w-full h-auto block rounded-lg'
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                  {item?.title}
                </p>
                <div className='flex flex-wrap justify-center items-center'>
                  {item?.genres && item.genres.length > 0 ? (
                    item.genres.map((genre) => (
                      <span key={genre.id} className='text-xs bg-gray-700 text-white rounded-full px-2 mr-2 mt-1'>
                        {genre.name}
                      </span>
                    ))
                  ) : (
                    <span className='text-xs bg-gray-700 text-white rounded-full px-2 mr-2 mt-1'>
                      No genres available
                    </span>
                  )}
                </div>
                <p onClick={() => deleteShow(item.id)} className='absolute text-gray-300 top-4 right-4'>
                  <AiOutlineClose />
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
      </div>
    </>
  );
};

export default SavedShowsTest;


