import React, { useEffect } from 'react';
import { Chart } from 'chart.js/auto';

const Charts = () => {
  useEffect(() => {
    // total movies watched data - genres
    const moviesWatchedData = {
      labels: ['Comedy', 'Horror', 'Drama', 'Action'],
      datasets: [
        {
          label: 'Total Movies Watched',
          data: [300, 50, 100, 45],
          backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)', 'rgb(150, 91, 174)'],
          hoverOffset: 4,
        },
      ],
    };

    // total movies watched config
    const moviesWatchedConfig = {
      type: 'doughnut',
      data: moviesWatchedData,
    };

    // total movies watched  canvas element
    const moviesWatchedCtx = document.getElementById('moviesWatchedChart');

    // destroy existing chart instance if it exists
    let moviesWatchedChart = Chart.getChart(moviesWatchedCtx);
    if (moviesWatchedChart) {
      moviesWatchedChart.destroy();
    }

    // create total movies watched chart 
    moviesWatchedChart = new Chart(moviesWatchedCtx, moviesWatchedConfig);

    // ratings distribution data
    const ratingsDistributionData = {
      labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
      datasets: [
        {
          label: 'Ratings Distribution',
          data: [20, 50, 100, 150, 80],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
          ],
        },
      ],
    };

    // ratings distribution config
    const ratingsDistributionConfig = {
      type: 'bar',
      data: ratingsDistributionData,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    // ratings distribution canvas element
    const ratingsDistributionCtx = document.getElementById('ratingsDistributionChart');

    // destroy existing chart instance if it exists
    let ratingsDistributionChart = Chart.getChart(ratingsDistributionCtx);
    if (ratingsDistributionChart) {
      ratingsDistributionChart.destroy();
    }

    // create ratings distribution chart
    ratingsDistributionChart = new Chart(ratingsDistributionCtx, ratingsDistributionConfig);

    // cleanup
    return () => {
      if (moviesWatchedChart) {
        moviesWatchedChart.destroy();
      }
      if (ratingsDistributionChart) {
        ratingsDistributionChart.destroy();
      }
    };
  }, []); // run this effect only once when the component is executed.

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="pt-3 mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          My Movie Stats:
        </span>
      </h1>
      <div className="w-full lg:w-1/2 p-4">
      <h2 class="mb-4 text-lg font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Total Movies Watched</span> Genres:</h2>
        {/* <h2>Total Movies Watched</h2> */}
        <canvas id="moviesWatchedChart"></canvas>
      </div>
      <div className="w-full lg:w-1/2 p-4">
      <h2 class="mb-4 text-lg font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Ratings</span> Distributions:</h2>
        {/* <h2>Ratings Distribution Chart</h2> */}
        <canvas id="ratingsDistributionChart"></canvas>
      </div>
    </div>
  );
};

export default Charts;




