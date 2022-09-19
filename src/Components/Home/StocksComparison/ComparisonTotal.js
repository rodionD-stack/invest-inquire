import { Card, CardContent, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { StateContext } from '../../State/State';
import { dateCreate, dateHistory } from '../Home';
import { summary } from '../HomeStocks/HomeStocks';
import { ComparisonBarDiagram } from './ComparisonBarDiagram';

export const ComparisonTotal = ({param}) => {
    const {context, setContext} = useContext(StateContext);
    const {selectStocks} = param;
    return (
        <Card>
            <CardContent className='comparisonCardContent'>
                <ComparisonBarDiagram param={{
                    selectS: summary(selectStocks, context.stocksHistory, 'selec'),
                    historyS: summary(selectStocks, context.stocksHistory, 'hist'),
                    selectD: dateCreate().slice(0,4),
                    historyD: dateHistory().slice(0,4)
                }}/>
                <Typography variant='h4'>
                    {selectStocks.length !== 0 ? `Доход за 5 лет составил:` + ' ' + summary(selectStocks, context.stocksHistory, 'sum') + 'р.': `Доход за 5 лет составил: 0.0р` }
                </Typography>
            </CardContent>
        </Card>
    )
}