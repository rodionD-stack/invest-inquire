import React, { useContext, useState } from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'
import { StateContext } from '../../State/State';

const HistoryCustomCell = ({rowData, dataKey, contextD, ...props}) => {
    if(dataKey === 'date') {
        return (
            <Cell {...props}>
                {contextD.find(item => item.id === rowData.SECID).date}
            </Cell>
        )
    } else if(dataKey === 'PREVADMITTEDQUOTE') {
        return (
            <Cell {...props}>
                {contextD.find(item => item.id === rowData.SECID).value}
            </Cell>
        )
    }
}

export const HistoryStocksTable = ({param}) => {
    //Контекст
    const {context, setContext} = useContext(StateContext);

    const {selectStocks} = param;

    return (
        <div>
            <Table
                data={selectStocks}
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
                    <HistoryCustomCell 
                        dataKey='PREVADMITTEDQUOTE'
                        contextD={context.stocksHistory}
                    />
                </Column>
                <Column width={110} align="center" resizable>
                    <HeaderCell>Дата</HeaderCell>
                    <HistoryCustomCell 
                        dataKey='date'
                        contextD={context.stocksHistory}
                    />
                </Column>
            </Table>
        </div>
    )
}