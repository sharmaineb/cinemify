import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const Charts = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['Comedy', 'Horror', 'Drama', 'Sci-Fi'],
      datasets: [
        {
          label: 'Total Movies Watched',
          data: [300, 50, 100, 80],
          backgroundColor: [
            'rgb(230, 230, 250)', 
            'rgb(135, 206, 250)', 
            'rgb(255, 236, 179)', 
            'rgb(255, 182, 193)', 
          ],
          hoverOffset: 4,
        },
      ],
    };

    const config = {
      type: 'doughnut',
      data: data,
    };

    const ctx = chartRef.current.getContext('2d');

    let myChart = Chart.getChart(ctx);
    if (myChart) {
      myChart.destroy();
    }

    myChart = new Chart(ctx, config);

    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []); 

  return (
    <div style={{ width: '400px', height: '450px' }}>
      <h1 className='text-center pt-7 pb-3 text-transparent bg-clip-text bg-gradient-to-r to-indigo-500 from-emerald-600'>Total Movies Watched By Genre</h1>
      {/* Use the ref to set the canvas element */}
      <canvas id="myChart" ref={chartRef}></canvas>
    </div>
  );
};

export default Charts;





