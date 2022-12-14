import { IconButton } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'

export const CustomCell = ({rowData, dataKey, onDelete, onChangeCount, ...props}) => {
    if(dataKey === 'date') {
        return (
            <Cell {...props}>
                {new Date().toLocaleDateString().split('.').reverse().join('-')}
            </Cell>
        )
    } else {
        return (
            <Cell {...props}>
                <IconButton onClick={() => onDelete(rowData.SECID)}>
                    <DeleteIcon/>
                </IconButton>
                <IconButton>
                    <ArrowUpwardIcon onClick={() => onChangeCount(rowData, 'add')}/>
                </IconButton>
                <IconButton>
                    <ArrowDownwardIcon onClick={() => onChangeCount(rowData, 'minus')}/>
                </IconButton>
            </Cell>
        )
    }

}

export const SelectStocksTable = ({param}) => {
    const {selectStocks, handleDeleteStocks, handleChangeCountStocks} = param;

    return (
        <div>
        <Table
            data={selectStocks}
            virtualized
            height={300}
            width={600}
        >
            <Column width={60} align="center" resizable>
                <HeaderCell>Тикет</HeaderCell>
                <Cell dataKey='SECID'/>
            </Column>
            <Column width={110} align="center" resizable>
                <HeaderCell>Наименование</HeaderCell>
                <Cell dataKey='SHORTNAME'/>
            </Column>
            <Column width={80} align="center" resizable>
                <HeaderCell>Лот (шт. акций)</HeaderCell>
                <Cell dataKey='LOTSIZE'/>
            </Column>
            <Column width={80} align="center" resizable>
                <HeaderCell>Цена (руб.)</HeaderCell>
                <Cell dataKey='PREVADMITTEDQUOTE'/>
            </Column>
            <Column width={100} align="center" resizable>
                <HeaderCell>Дата</HeaderCell>
                <CustomCell dataKey='date'/>
            </Column>
            <Column width={160} align="center" resizable>
                <HeaderCell>Удалить/Изменить</HeaderCell>
                <CustomCell 
                    dataKey='control'
                    onDelete={handleDeleteStocks}
                    onChangeCount={handleChangeCountStocks}
                />
            </Column>
        </Table>
        </div>
    )
}