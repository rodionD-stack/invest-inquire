import React, { useState } from 'react';
import { HomeCurrencyTable } from './HomeCurrencyTable';
import { HomeStocksTable } from './HomeStocksTable';
import { StocksDiagram } from '../StocksPortfolio/StocksDiagram';
import { SelectStocksTable } from '../StocksComparison/SelectStocksTable';
import { FormControlUnstyledContext } from '@mui/base';

export const HomeStocks = () => {
    //Стэйт для выбранных акций
    const [selectStocks, setSelectStocks] = useState([]);

    //Добавление акций в таблицу
    const handleAddStocks = (e) => {
            setSelectStocks([
                ...selectStocks,
                e
            ])
    }

    //Удаление акций из таблицы.
    const handleDeleteStocks = (e) => {
        const prevData = [
            ...selectStocks
        ];
        
        const newData = prevData.length !== 0 ? prevData.filter(item => item.SECID !== e) : prevData;
        setSelectStocks(newData)
    }
    
    return (
        <div className='homeStocks'>
            <div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
                <HomeStocksTable param={{selectStocks, handleAddStocks}}/>
                <HomeCurrencyTable/>
            </div>
            <div>
                <StocksDiagram/>
            </div>
            <div>
                <SelectStocksTable param={{selectStocks, handleDeleteStocks}}/>
            </div>
            
        </div>

    )
}