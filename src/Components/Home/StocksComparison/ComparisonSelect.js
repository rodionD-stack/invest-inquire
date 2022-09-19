import { Card, CardContent, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { StateContext } from '../../State/State';
import { dateCreate } from '../Home';
import { summary } from '../HomeStocks/HomeStocks';
import { SelectStocksTable } from './SelectStocksTable';

export const ComparisonSelect = ({param}) => {
    const {context, setContext} = useContext(StateContext);

    const {selectStocks, handleDeleteStocks, handleChangeCountStocks} = param;
    return (
        <Card>
            <CardContent className='comparisonCardContent'>
                <SelectStocksTable param={{selectStocks, handleDeleteStocks, handleChangeCountStocks}}/>
                <Typography variant='h4'>
                    {selectStocks.length !== 0 ?`Портфель в ${dateCreate().slice(0,4)}г:` + ' ' + summary(selectStocks, context.stocksHistory, 'selec') + 'р.': `Стоимость портфеля в ${dateCreate().slice(0,4)}г: 0.0р` }
                </Typography>
            </CardContent>
        </Card>
    )
}