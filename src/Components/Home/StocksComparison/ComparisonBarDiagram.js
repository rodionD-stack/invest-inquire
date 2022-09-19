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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    }
  },
};

const labels = ['Изменения стоимости портфеля за 5 лет.'];

export const ComparisonBarDiagram = ({param}) => {
    const {selectS, historyS, selectD, historyD} = param;
    
    const data = {
        labels,
        datasets: [
          {
            label: selectD,
            data: [selectS],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: historyD,
            data: [historyS],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };

  return ( 
    <Bar options={options} data={data} />
    );
}
