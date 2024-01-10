import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import YouTube from 'react-youtube';
import Movie from './Movie';

const Row = ({ title, fetchURL, rowId }) => {
  const [movies, setMovies] = useState([]);
  const [trailerURL, setTrailerURL] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchURL);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider' + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setTrailerURL('');
    setIsModalOpen(false);
  };

  const opts = {
    height: '600px',
    width: '750px',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = async (movie) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );

      if (response.data.results.length > 0) {
        setTrailerURL(response.data.results[0]?.key);
        openModal();
      } else {
        console.log('No trailers available for this movie');
      }
    } catch (error) {
      console.error('Error fetching trailers:', error);
    }
  };

  return (
    <div>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
        <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {movies.map((item, id) => (
            <div key={id} className='inline-block cursor-pointer relative p-2' onClick={() => handleClick(item)}>
              <Movie item={item} />
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
      </div>
      {isModalOpen && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50'>
          <div className='relative'>
            <YouTube videoId={trailerURL} opts={opts} />
            <button
              onClick={closeModal}
              className='absolute top-4 right-4 text-black bg-yellow-400 p-2 rounded cursor-pointer z-50'>
              Close Trailer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Row;