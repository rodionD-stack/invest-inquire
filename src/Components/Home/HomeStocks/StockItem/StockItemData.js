import React from 'react';
import { Typography } from '@mui/material';
import { StockItemDividTable } from './StockItemDividTable';

export const StockItemData = ({param}) => {
    const {dividState, stockItem} = param;

    return (
        <div>
            <StockItemDividTable param={{dividState}}/>
        </div>
    )
}