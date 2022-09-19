import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";

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
        <div className='divStockDiagramItem'>
            <Doughnut options={options} data={data}/>
            <div>
                <p className='textStockDiagramItem'>{text}</p>
            </div>
        </div>
        
    )
}