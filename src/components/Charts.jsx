import React, { useEffect } from 'react';
import { Chart } from 'chart.js/auto';

const Charts = () => {
  useEffect(() => {
    const data = {
      labels: ['Comedy', 'Horror', 'Drama'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
          hoverOffset: 4,
        },
      ],
    };

    // config 
    const config = {
      type: 'doughnut',
      data: data,
    };

    // canvas element
    const ctx = document.getElementById('myChart');

    // destroy existing chart instance if it exists
    let myChart = Chart.getChart(ctx);
    if (myChart) {
      myChart.destroy();
    }

    // create the doughnut chart
    myChart = new Chart(ctx, config);

    // cleanup function to destroy the chart on component unmount
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []); // run this effect only once when the component is executed.

  return (
    <div style={{ width: '300px', height: '350px' }}>
      <h2>Doughnut Chart</h2>
      <canvas id="myChart"></canvas>
    </div>
  );
};

export default Charts;



