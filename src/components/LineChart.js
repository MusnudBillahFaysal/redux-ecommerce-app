// LineChart.js
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

// Replace the data with your own values
const recentOrderData = [11, 19, 5, 6, 2, 3];
const pendingPaymentData = [48, 52, 66, 58, 8, 50];

const data = {
  labels,
  datasets: [
    {
      label: 'Total Revenue',
      //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      data: recentOrderData,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Price Movement',
      //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      data: pendingPaymentData,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function LineChart() {
  return <Line options={options} data={data} />;
}

export default LineChart;
