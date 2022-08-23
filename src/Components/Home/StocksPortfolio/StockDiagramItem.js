import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";
import { Typography } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend)
//Блок опций для настройки диаграммы.
const options = {
    plugins: {
        tooltip: {
            callbacks: {
                label: (value) => {
                    return value.label + ':' + ' ' + value.formattedValue + '%'
                }
            }
        },
    },
}

export const StockDiagramItem = ({param}) => {
    const {data, text} = param;
    return (
        <div style={{width: '400px', display: 'flex', flexDirection: 'column', gap: '30px', justifyContent: 'center'}}>
            <Doughnut options={options} data={data}/>
            <Typography variant='h6'>{text}</Typography>
        </div>
        
    )
}