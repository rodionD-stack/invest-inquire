import React from 'react';
import { HomeCurrencyTable } from './HomeCurrencyTable';
import { HomeStocksTable } from './HomeStocksTable';
import { StocksDiagram } from '../StocksPortfolio/StocksDiagram';

export const HomeStocks = () => {
    return (
        <div className='homeStocks'>
            <div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
                <HomeStocksTable/>
                <HomeCurrencyTable/>
            </div>
            <div>
                <StocksDiagram/>
            </div>
            
        </div>

    )
}