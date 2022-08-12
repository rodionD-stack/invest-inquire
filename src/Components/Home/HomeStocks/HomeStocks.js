import React from 'react';
import { HomeCurrencyTable } from './HomeCurrencyTable';
import { HomeStocksTable } from './HomeStocksTable';

export const HomeStocks = () => {
    return (
        <div>
            <HomeStocksTable/>
            <HomeCurrencyTable/>
        </div>

    )
}