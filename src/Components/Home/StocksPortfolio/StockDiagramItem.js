import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend)

const options = {
    plugins: {
        tooltip: {
            callbacks: {
                label: (value) => {
                    console.log(value)
                    return value.label + ':' + ' ' + value.formattedValue + '%'
                }
            }
        },
    },
}

export const StockDiagramItem = ({param}) => {
    return (
        <div style={{width: '300px'}}>
            <Doughnut options={options} data={param}/>
        </div>
        
    )
}