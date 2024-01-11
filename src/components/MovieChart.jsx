import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MovieChart = ({ likedMovies }) => {
  const chartContainer = useRef(null);

  useEffect(() => {
    if (likedMovies && likedMovies.length > 0) {
      const genreCounts = likedMovies.reduce((acc, movie) => {
        // Make sure the movie has genres property and it's an array
        const movieGenres = movie.genres || [];

        movieGenres.forEach((genre) => {
          acc[genre] = (acc[genre] || 0) + 1;
        });
        return acc;
      }, {});

      const chartData = {
        labels: Object.keys(genreCounts),
        datasets: [
          {
            data: Object.values(genreCounts),
            backgroundColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(255, 206, 86, 0.7)',
              'rgba(75, 192, 192, 0.7)',
              'rgba(153, 102, 255, 0.7)',
              'rgba(255, 159, 64, 0.7)',
            ],
          },
        ],
      };

      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
      };

      const ctx = chartContainer.current.getContext('2d');
      new Chart(ctx, {
        type: 'doughnut',
        data: chartData,
        options: chartOptions,
      });
    }
  }, [likedMovies]);

  return (
    <div>
      <canvas ref={chartContainer} id='likedGenresChart' width='400' height='400'></canvas>
    </div>
  );
};

export default MovieChart;



// import React, { useEffect } from 'react';
// import { Chart } from 'chart.js/auto';

// const MovieChart = ({ likedMovies, fetchReviews }) => {
//   useEffect(() => {
//     console.log('Liked Movies:', likedMovies);

//     if (!likedMovies || likedMovies.length === 0) {
//       console.log('No liked movies data.');
//       return;
//     }

//     const fetchAndDisplayReviews = async () => {
//       const reviewsPromises = likedMovies.map(async (movie) => {
//         const reviews = await fetchReviews(movie.id);
//         return {
//           movieId: movie.id,
//           reviewsCount: reviews.length,
//         };
//       });

//       const reviewsData = await Promise.all(reviewsPromises);

//       // Reviews Count Chart Data
//       const reviewsCountData = {
//         labels: reviewsData.map((item) => item.movieId),
//         datasets: [
//           {
//             label: 'Reviews Count',
//             data: reviewsData.map((item) => item.reviewsCount),
//             backgroundColor: [
//               'rgba(255, 99, 132, 0.7)',
//               'rgba(54, 162, 235, 0.7)',
//               'rgba(255, 205, 86, 0.7)',
//               'rgba(75, 192, 192, 0.7)',
//               'rgba(153, 102, 255, 0.7)',
//             ],
//             hoverOffset: 4,
//           },
//         ],
//       };

//       // Reviews Count Chart Config
//       const reviewsCountConfig = {
//         type: 'doughnut',
//         data: reviewsCountData,
//       };

//       // Reviews Count Chart
//       const reviewsCountCtx = document.getElementById('reviewsCountChart');
//       let reviewsCountChart = Chart.getChart(reviewsCountCtx);
//       if (reviewsCountChart) {
//         reviewsCountChart.destroy();
//       }
//       reviewsCountChart = new Chart(reviewsCountCtx, reviewsCountConfig);

//       // ... rest of the code for other charts
//     };

//     fetchAndDisplayReviews();

//   }, [likedMovies, fetchReviews]);

//   return (
//     <div className="flex flex-col items-center justify-center mr-auto ml-auto">
//       <h1 className="pt-7 mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
//         <span className="text-transparent bg-clip-text bg-gradient-to-r to-indigo-500 from-emerald-600">
//           My Movie Stats:
//         </span>
//       </h1>
//       <div className="flex flex-row justify-between w-full lg:w-3/4 p-4 text-center">
//         <div className="w-full lg:w-65 p-4">
//           <h2 className="mb-4 text-lg font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-3xl">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
//               Reviews Count
//             </span>
//           </h2>
//           <canvas id="reviewsCountChart" width="450" height="400"></canvas>
//         </div>
//         <div className="w-full lg:w-65 p-4">
//           <h2 className="mb-4 pt-4 text-lg font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-3xl">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
//               Ratings Distribution
//             </span>
//           </h2>
//           <canvas id="ratingsDistributionChart" width="450" height="400"></canvas>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieChart;




