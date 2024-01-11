import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';

const TopMoviesChart = () => {
  const [topMovies, setTopMovies] = useState([]);
  const chartRef = React.createRef();

  const createBarChart = () => {
    const movieTitles = topMovies.map((movie) => movie.title);
    const movieRatings = topMovies.map((movie) => movie.vote_average);

    const ctx = chartRef.current.getContext('2d');

    if (Chart.getChart(ctx)) {
      Chart.getChart(ctx).destroy();
    }

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: movieTitles,
        datasets: [
          {
            label: 'Rating',
            data: movieRatings,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
          },
          y: {
            beginAtZero: true,
            max: 10,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
          },
        },
        plugins: {
          legend: {
            labels: {
              color: 'white',
            },
          },
        },
      },
    });
  };

  useEffect(() => {
    const apiKey = process.env.REACT_APP_TMDB_API_KEY;
    const tmdbEndpoint = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

    const fetchTopMovies = async () => {
      try {
        const response = await axios.get(tmdbEndpoint);
        setTopMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchTopMovies();
  }, []); // Fetch top movies only on mount

  useEffect(() => {
    if (topMovies.length > 0) {
      createBarChart();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topMovies]); 

  return (
    <div className="max-w-screen-md mx-auto mt-8 bg-black p-4 rounded-md">
      <h1 className="text-2xl font-bold text-white mb-4 text-center">Top Rated Movies</h1>
      <canvas ref={chartRef} id="topMoviesChart" width="800" height="400"></canvas>
    </div>
  );
};

export default TopMoviesChart;

