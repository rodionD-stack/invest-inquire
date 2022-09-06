import React, { useContext, useState } from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'
import { StateContext } from '../../State/State';
import { CustomCell } from './SelectStocksTable';

export const HistoryStocksTable = ({param}) => {
    //Контекст
    const {context, setContext} = useContext(StateContext);

    const {selectStocks} = param;

    const [history, setHistory] = useState( [] || context.stocksHistory.map(item => item.SECID === selectStocks.find(item => item).SECID))

    console.log(history)

    return (
        <div>
            <Table
                data={[]}
                virtualized
                height={300}
                width={600}
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
                    <HeaderCell>Лот (шт. акций)</HeaderCell>
                    <Cell dataKey='LOTSIZE'/>
                </Column>
                <Column width={110} align="center" resizable>
                    <HeaderCell>Цена (руб.)</HeaderCell>
                    <Cell dataKey='PREVADMITTEDQUOTE'/>
                </Column>
                <Column width={110} align="center" resizable>
                    <HeaderCell>Дата</HeaderCell>
                    <CustomCell dataKey='date'/>
                </Column>
            </Table>
        </div>
    )
}