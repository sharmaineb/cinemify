const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchApi = async (endpoint, params = {}) => {
  const url = new URL(`${BASE_URL}${endpoint}`);
  url.searchParams.append('api_key', API_KEY);

  Object.keys(params).forEach((key) => {
    url.searchParams.append(key, params[key]);
  });

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching API:', error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const results = await fetchApi('/search/movie', { query });
    return results.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};
