import React, { useContext } from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'
import { StateContext } from '../../State/State';

export const HomeStocksTable = () => {
    const {context, setContext} = useContext(StateContext);
    const {stocks} = context;
    return (
        <Table
            data={stocks ?? []}
            virtualized
            height={500}
            width={600}
        >
            <Column width={130} align="center" resizable>
                <HeaderCell>Тикет</HeaderCell>
                <Cell dataKey='SECID'/>
            </Column>
            <Column width={130} align="center" resizable>
                <HeaderCell>Наименование</HeaderCell>
                <Cell dataKey='SHORTNAME'/>
            </Column>
            <Column width={150} align="center" resizable>
                <HeaderCell>Лот (шт. акций)</HeaderCell>
                <Cell dataKey='LOTSIZE'/>
            </Column>
            <Column width={130} align="center" resizable>
                <HeaderCell>Цена (руб.)</HeaderCell>
                <Cell dataKey='PREVADMITTEDQUOTE'/>
            </Column>
        </Table>
    )
}