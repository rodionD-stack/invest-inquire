import React, { useState, useContext } from 'react';
import { HomeCurrencyTable } from './HomeCurrencyTable';
import { HomeStocksTable } from './HomeStocksTable';
import { StocksDiagram } from '../StocksPortfolio/StocksDiagram';
import { SelectStocksTable } from '../StocksComparison/SelectStocksTable';
import { StateContext } from '../../State/State';
import { HistoryStocksTable } from '../StocksComparison/HistoryStocksTable';


export const HomeStocks = () => {
    const {context, setContext} = useContext(StateContext);

    //Стэйт для выбранных акций
    const [selectStocks, setSelectStocks] = useState([]);

    //Добавление акций в таблицу
    const handleAddStocks = (e) => {
        const item = {...e};
        setSelectStocks([
            ...selectStocks,
            item
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

    //Изменение количества акций.
    const handleChangeCountStocks = (e, flag) => {
        const prevData = [
            ...selectStocks
        ];
        let newData;
        const sizeData = context.stocks.find(item => item.SECID === e.SECID).LOTSIZE;
        if(flag === 'add') {
            newData = prevData.filter(item => item.SECID === e.SECID ? item.LOTSIZE += sizeData : prevData)
        } else {
            newData = prevData.filter(item => item.SECID === e.SECID ? item.LOTSIZE > sizeData ? item.LOTSIZE -= sizeData : prevData : prevData)
        }
        
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
                <SelectStocksTable param={{selectStocks, handleDeleteStocks, handleChangeCountStocks}}/>
                <HistoryStocksTable param={{selectStocks}}/>
            </div>
            
        </div>

    )
}