import React, { useState, useContext } from 'react';
import { HomeCurrencyTable } from './HomeCurrencyTable';
import { HomeStocksTable } from './HomeStocksTable';
import { StocksDiagram } from '../StocksPortfolio/StocksDiagram';
import { StateContext } from '../../State/State';
import { WrapperApp } from '../../Wrapper/WrapperApp';
import { ComparisonSelect } from '../StocksComparison/ComparisonSelect';
import { ComparisonHistory } from '../StocksComparison/ComparisonHistory';
import { ComparisonTotal } from '../StocksComparison/ComparisonTotal';

export const summary = (selec, hist, tag) => {
    const sumS = (selec.reduce((total, item) => total + (item.LOTSIZE * item.PREVADMITTEDQUOTE), 0)).toFixed(2);
    const sumH = (selec.reduce((total, item) => total + (item.LOTSIZE * hist.find(e => e.id === item.SECID).value), 0)).toFixed(2)
    return tag === 'hist' ? sumH : tag === 'selec' ? sumS : total(sumS, sumH)
}

export const total = (totalS, totalH) => {
    return totalS - totalH
}


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
            <div className='container'>
                <div className='divStoksAndCurrency'>
                    <HomeStocksTable param={{selectStocks, handleAddStocks}}/>
                    <HomeCurrencyTable/>
                </div>
            </div>
            <WrapperApp textData='Подбор вариантов портфелей'/>
            <div className='container'>
                <StocksDiagram/>
            </div>
            <WrapperApp textData='Сравнение и аналитика портфелей.'/>
            <div className='container'>
                <div className='divComparison'>
                    <ComparisonSelect param={{selectStocks, handleDeleteStocks, handleChangeCountStocks}}/>
                    <ComparisonHistory param={{selectStocks}}/>
                </div>
            </div>
            <div className='container'>
                <div className='divComparisonTotal'>
                        <ComparisonTotal param={{selectStocks}}/>
                </div>
            </div>
        </div>
    )
}