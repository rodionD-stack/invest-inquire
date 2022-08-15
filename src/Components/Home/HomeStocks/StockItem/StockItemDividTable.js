import React from 'react';
import { Typography } from '@mui/material';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'

const emptyData = [
    {
        registryclosedate: 'Данные отсутствуют',
        value: 'Данные отсутствуют',
        currencyid: 'Данные отсутствуют',
    }
]

export const StockItemDividTable = ({param}) => {
    const {dividState} = param;
    return (
        <div>
            <Typography sx={{marginBottom: '10px'}} variant='h5'>Дивиденды</Typography>
            <Table
                data={dividState.length !== 0 ? dividState : emptyData}
                height={200}
                width={550}
                virtualized
            >
                <Column width={180} align="center" resizable>
                    <HeaderCell>Дата</HeaderCell>
                    <Cell dataKey='registryclosedate'/>
                </Column>
                <Column width={180} align="center" resizable>
                    <HeaderCell>Сумма на 1 акцию</HeaderCell>
                    <Cell dataKey='value'/>
                </Column>
                <Column width={180} align="center" resizable>
                    <HeaderCell>Валюта</HeaderCell>
                    <Cell dataKey='currencyid'/>
                </Column>
            </Table>
        </div>
    )
}