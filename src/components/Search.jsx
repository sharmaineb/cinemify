import React, { useState, useEffect } from 'react';
import axios from 'axios';
import requests from '../Requests';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

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

  useEffect(() => {
    if (query) {
      searchMovies();
    } else {
      setResults([]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative pt-3 flex items-center">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="search"
          className="block flex-grow p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>

      <div className="flex overflow-x-auto">
        {results.map((movie) => (
          <div key={movie.id} className="flex-shrink-0 mx-4">
            <p>{movie.title}</p>
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="mt-2"
              />
            )}
          </div>
        ))}
      </div>
    </form>
  );
};

export default Search;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import requests from '../Requests';

// const Search = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   const searchMovies = async () => {
//     try {
//       const response = await axios.get(
//         `${requests.requestSearch}&query=${encodeURIComponent(query)}`
//       );
//       console.log('API Response:', response.data);
//       setResults(response.data.results);
//     } catch (error) {
//       console.error('Error fetching search results:', error);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (query) {
//       searchMovies();
//     } else {
//       setResults([]);
//     }
//   };

//   useEffect(() => {
//     if (query) {
//       searchMovies();
//     } else {
//       setResults([]);
//     }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [query]);

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
//         Search
//       </label>
//       <div className="relative pt-3">
//         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//           <svg
//             className="w-4 h-4 text-gray-500 dark:text-gray-400"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 20 20"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//             />
//           </svg>
//         </div>
//         <input
//           type="search"
//           id="search"
//           className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//           placeholder="Search"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           required
//         />
//         <button
//           type="submit"
//           className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Search
//         </button>
//       </div>

//       <ul>
//         {results.map((movie) => (
//           <li key={movie.id}>
//             <p>{movie.title}</p>
//             {movie.poster_path && (
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.title}
//               />
//             )}
//           </li>
//         ))}
//       </ul>
//     </form>
//   );
// };

// export default Search;



