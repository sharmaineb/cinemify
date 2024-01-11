// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import YouTube from 'react-youtube';
import requests from '../Requests';

const Movie = ({ movie }) => {
  const { user } = UserAuth();
  const [like, setLike] = useState(false);
  const [trailerURL, setTrailerURL] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const movieID = doc(db, 'users', `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.poster_path,
        }),
      });
    } else {
      alert('Please log in to save a movie!');
    }
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

  const handleClick = async () => {
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
    <div className='w-[200px] md:w-[240px] inline-block cursor-pointer relative p-2 mr-3'>
      <img
        className='w-full h-[300px] block rounded-lg mb-2 object-cover'
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
          {movie.title}
        </p>
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className='absolute top-4 left-4 text-white' />
          ) : (
            <FaRegHeart className='absolute top-4 left-4 text-white' />
          )}
        </p>
        <button onClick={handleClick} className='absolute bottom-4 left-4 text-white bg-blue-500 p-2 rounded cursor-pointer z-50'>
          Watch Trailer
        </button>
      </div>
      {isModalOpen && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50'>
          <div className='relative'>
            <YouTube videoId={trailerURL} opts={opts} />
            <button onClick={closeModal} className='absolute top-4 right-4 text-black bg-yellow-400 p-2 rounded cursor-pointer z-50'>
              Close Trailer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const { user } = UserAuth();

  const searchMovies = async () => {
    try {
      const response = await axios.get(
        `${requests.requestSearch}&query=${encodeURIComponent(query)}`
      );
      console.log('API Response:', response.data);
      setResults(response.data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (query) {
      searchMovies();
    } else {
      setResults([]);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor='search' className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
        Search
      </label>
      <div className='relative pt-3'>
        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
          <svg
            className='w-4 h-4 text-gray-500 dark:text-gray-400'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 20 20'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
            />
          </svg>
        </div>
        <input
          type='search'
          id='search'
          className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Search'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <button
          type='submit'
          className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
        >
          Search
        </button>
      </div>

      <div className='flex overflow-x-auto'>
        {results.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </form>
  );
};

export default Search;




