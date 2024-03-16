import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requests from '../Requests';
import YouTube from 'react-youtube';

const Main = () => {
  const [movie, setMovie] = useState(null);
  const [trailerURL, setTrailerURL] = useState('');

  useEffect(() => {
    const fetchRandomMovie = async () => {
      try {
        const response = await axios.get(requests.requestPopular);
        const randomMovie = response.data.results[Math.floor(Math.random() * response.data.results.length)];
        setMovie(randomMovie);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRandomMovie();
  }, []); // empty dependency array to fetch the random movie only once on component mount

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  const openTrailer = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );

      if (response.data.results.length > 0) {
        setTrailerURL(response.data.results[0]?.key);
      } else {
        console.log('No trailers available for this movie');
      }
    } catch (error) {
      console.error('Error fetching trailers:', error);
    }
  };

  const closeTrailer = () => {
    setTrailerURL('');
  };

  return (
    <div className='w-full h-[550px] text-white'>
      {movie && (
        <div className='w-full h-full'>
          <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
          <img
            className='w-full h-full object-cover'
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.title}
          />
          <div className='absolute w-full top-[20%] p-4 md:p-8'>
            <h1 className='text-3xl md:text-5xl font-bold'>{movie.title}</h1>
            <div className='my-4'>
              <button onClick={openTrailer} className='border bg-yellow-500 text-black border-gray-300 py-2 px-5'>
                Watch Trailer
              </button>
              {/* <button className='border text-white border-gray-300 py-2 px-5 ml-4'>Add To List</button> */}
            </div>
            <p className='text-gray-400 text-sm'>Released: {movie.release_date}</p>
            <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
              {truncateString(movie.overview, 170)}
            </p>
          </div>
          {/* Trailer Player */}
          {trailerURL && (
            <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50'>
              <div className='relative'>
                <YouTube videoId={trailerURL} opts={{ height: '600px', width: '750px', playerVars: { autoplay: 1 } }} />
                <button
                  onClick={closeTrailer}
                  className='absolute top-4 right-4 text-black bg-yellow-400 p-2 rounded cursor-pointer z-50'>
                  Close Trailer
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Main;