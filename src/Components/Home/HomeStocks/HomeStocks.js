import React, { useState, useContext } from 'react';
import { HomeCurrencyTable } from './HomeCurrencyTable';
import { HomeStocksTable } from './HomeStocksTable';
import { StocksDiagram } from '../StocksPortfolio/StocksDiagram';
import { SelectStocksTable } from '../StocksComparison/SelectStocksTable';
import { StateContext } from '../../State/State';
import { HistoryStocksTable } from '../StocksComparison/HistoryStocksTable';
import { Typography } from '@mui/material';
import { dateCreate, dateHistory } from '../Home';


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

    const summary = (selec, hist, tag) => {
        const sumS = (selec.reduce((total, item) => total + (item.LOTSIZE * item.PREVADMITTEDQUOTE), 0)).toFixed(2);
        const sumH = (selec.reduce((total, item) => total + (item.LOTSIZE * hist.find(e => e.id === item.SECID).value), 0)).toFixed(2)
        return tag === 'hist' ? sumH : tag === 'selec' ? sumS : total(sumS, sumH)
    }
    const total = (totalS, totalH) => {
        return totalS - totalH
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
            <div style={{display: 'flex', flexDirection: 'row', gap: '20px'}}>
                <SelectStocksTable param={{selectStocks, handleDeleteStocks, handleChangeCountStocks}}/>
                <HistoryStocksTable param={{selectStocks}}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '50px'}}>
                <div style={{display: 'flex', flexDirection: 'row', gap: '300px'}}>
                    <Typography variant='h4'>
                        {selectStocks.length !== 0 ?`Портфель в ${dateCreate().slice(0,4)}г:` + ' ' + summary(selectStocks, context.stocksHistory, 'selec') + 'р.': `Стоимость портфеля в ${dateCreate().slice(0,4)}г: 0.0р` }
                    </Typography>
                    <Typography variant='h4'>
                        {selectStocks.length !== 0 ? `Портфель в ${dateHistory().slice(0,4)}г:` + ' ' + summary(selectStocks, context.stocksHistory, 'hist') + 'р.': `Стоимость портфеля в ${dateHistory().slice(0,4)}г: 0.0р` }
                    </Typography>
                </div>
                <Typography variant='h4'>
                    {selectStocks.length !== 0 ? `Доход за 5 лет составил:` + ' ' + summary(selectStocks, context.stocksHistory, 'sum') + 'р.': `Доход за 5 лет составил: 0.0р` }
                </Typography>
            </div>
            
        </div>

    )
}