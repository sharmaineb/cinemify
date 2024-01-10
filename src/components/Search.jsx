import React, { useState, useEffect } from 'react';
import axios from 'axios';
import requests from '../Requests';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
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
  
    if (query) {
      searchMovies();
    } else {
      setResults([]);
    }
  }, [query]);
  

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
      />
      <ul>
        {results.map((movie) => (
          <li key={movie.id}>
            <p>{movie.title}</p>
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;


