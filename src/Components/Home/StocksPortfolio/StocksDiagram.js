import React, { useState } from 'react';
import { PortfolioControllers } from './PortfolioControllers';
import { portfolioDataArr } from './PortfolioData';
import { StockDiagramItem } from './StockDiagramItem';

export const StocksDiagram = () => {
    //Стейт контроллеров переключения диаграммы
    const [view, setView] = useState('stocksH');

    //Обработка параметров переключения.
    const handleChange = (e, newAligment) => {
        if(newAligment !== null) {
            setView(newAligment)
        }
    }
    console.log()
    return (
        <div style={{display: 'flex', gap: '100px'}}>
            <PortfolioControllers param={{view, handleChange}}/>
            <StockDiagramItem param={portfolioDataArr.find(item => item.id === view)}/>
        </div>
    )
}