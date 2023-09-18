// BarChart.js
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top', // Remove the 'as const' part
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
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
      label: 'Recent order',
      data: recentOrderData,
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 70 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Pending payment',
      data: pendingPaymentData,
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 70 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function BarChart() {
  return <Bar options={options} data={data} />;
}

export default BarChart;
