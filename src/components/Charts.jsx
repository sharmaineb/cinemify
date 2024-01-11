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

    // cleanup
    return () => {
      if (moviesWatchedChart) {
        moviesWatchedChart.destroy();
      }
    };
  }, []); // run this effect only once when the component is executed.

  return (
    <div className="flex flex-col items-center justify-center mr-auto ml-auto">
      <h1 className="pt-7 mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-indigo-500 from-emerald-600">
          My Movie Stats:
        </span>
      </h1>
      <div className="flex flex-row justify-between w-full lg:w-3/4 p-4 text-center">
        <div className="w-full lg:w-65 p-4">
          <h2 className="mb-4 text-lg font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-3xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Total Movies Watched
            </span>
          </h2>
          <canvas id="moviesWatchedChart" width="450" height="400"></canvas>
        </div>
      </div>
    </div>
  );
};

export default Charts;


