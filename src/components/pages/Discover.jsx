import React, { useState, useEffect } from 'react';
import Main from '../Main';
import { searchMovies } from '../../api/MovieApi';

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [displayResults, setDisplayResults] = useState(false);

  const handleSearch = async () => {
    if (searchTerm.trim() === '') {
      setDisplayResults(false);
      return;
    }

    try {
      const results = await searchMovies(searchTerm);
      setSearchResults(results);
      setDisplayResults(true);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  return (
    <div>
      <Main />
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {displayResults && (
        <div>
          <h2>Search Results for "{searchTerm}"</h2>
          <ul>
            {searchResults.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Discover;


