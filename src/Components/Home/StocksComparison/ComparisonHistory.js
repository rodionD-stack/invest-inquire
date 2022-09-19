import { Card, CardContent, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { StateContext } from '../../State/State';
import { dateHistory } from '../Home';
import { summary } from '../HomeStocks/HomeStocks';
import { HistoryStocksTable } from './HistoryStocksTable';

export const ComparisonHistory = ({param}) => {
    const {context, setContext} = useContext(StateContext);
    const {selectStocks} = param;
    return (
        <Card>
            <CardContent className='comparisonCardContent'>
                <HistoryStocksTable param={{selectStocks}}/>
                <Typography variant='h4'>
                    {selectStocks.length !== 0 ? `Портфель в ${dateHistory().slice(0,4)}г:` + ' ' + summary(selectStocks, context.stocksHistory, 'hist') + 'р.': `Стоимость портфеля в ${dateHistory().slice(0,4)}г: 0.0р` }
                </Typography>
            </CardContent>
        </Card>
    )
}