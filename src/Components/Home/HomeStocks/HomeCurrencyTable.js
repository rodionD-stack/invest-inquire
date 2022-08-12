import React, { useContext } from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'
import { StateContext } from '../../State/State';

export const HomeCurrencyTable = () => {
    const {context, setContext} = useContext(StateContext)
    const {currency} = context
    return (
        <Table
            data={currency ?? []}
            virtualized
            height={200}
            width={400}
        >
            <Column width={130} align="center" resizable>
                <HeaderCell>Тикет</HeaderCell>
                <Cell dataKey='shortname'/>
            </Column>
            <Column width={130} align="center" resizable>
                <HeaderCell>Цена</HeaderCell>
                <Cell dataKey='price'/>
            </Column>
            <Column width={150} align="center" resizable>
                <HeaderCell>Дата</HeaderCell>
                <Cell dataKey='tradedate'/>
            </Column>
        </Table>
    )
}