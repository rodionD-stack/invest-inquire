import { Button } from '@mui/material';
import React from 'react';

import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'

export const CustomCell = ({rowData, dataKey, onClick, ...props}) => {
    if(dataKey === 'date') {
        return (
            <Cell {...props}>
                {new Date().toLocaleDateString().split('.').reverse().join('-')}
            </Cell>
        )
    } else {
        return (
            <Cell {...props}>
                <Button onClick={() => onClick(rowData.SECID)} variant='contained'>Удалить</Button>
            </Cell>
        )
    }

}

export const SelectStocksTable = ({param}) => {
    const {selectStocks, handleDeleteStocks} = param;
    console.log(selectStocks)
    return (
        <Table
            data={selectStocks}
            virtualized
            height={300}
            width={700}
        >
            <Column width={110} align="center" resizable>
                <HeaderCell>Тикет</HeaderCell>
                <Cell dataKey='SECID'/>
            </Column>
            <Column width={110} align="center" resizable>
                <HeaderCell>Наименование</HeaderCell>
                <Cell dataKey='SHORTNAME'/>
            </Column>
            <Column width={110} align="center" resizable>
                <HeaderCell>Лот</HeaderCell>
                <Cell dataKey='LOTSIZE'/>
            </Column>
            <Column width={110} align="center" resizable>
                <HeaderCell>Стоимость</HeaderCell>
                <Cell dataKey='PREVADMITTEDQUOTE'/>
            </Column>
            <Column width={110} align="center" resizable>
                <HeaderCell>Дата</HeaderCell>
                <CustomCell dataKey='date'/>
            </Column>
            <Column width={130} align="center" resizable>
                <HeaderCell>Контроллер</HeaderCell>
                <CustomCell 
                    dataKey='control'
                    onClick={handleDeleteStocks}
                />
            </Column>
        </Table>
    )
}