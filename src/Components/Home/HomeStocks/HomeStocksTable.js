import React, { useCallback, useContext, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'
import { StateContext } from '../../State/State';
import { AppModal } from '../AppModal';
import { StockItemData } from './StockItem/StockItemData';

export const HomeStocksTable = ({param}) => {
    const {context, setContext} = useContext(StateContext);
    const {stocks} = context;

    const {selectStocks, handleAddStocks} = param;

    //Стейт информации о дивидентах.
    const [dividState, setDividState] = useState([]);
    //Стейт информации о акции.
    const [stockItem, setStockItem] = useState({});

    //Стейт модального окна акции.
    const [open, setOpen] = React.useState(false);
    //Открыть окно.
    const handleClickOpen = () => {
      setOpen(true);
    };
    //Закрыть окно
    const handleClose = () => {
      setOpen(false);
    };

    const loadDivforStock = useCallback(async (data) => {
        const response = await fetch(`https://iss.moex.com/iss/securities/${data}/dividends.json?iss.meta=off`);
        const json = await response.json();
        let dividArr = [];
        if(json) {
             json.dividends.data.map(item => {
                dividArr.push({
                    secid: item[0],
                    isin: item[1],
                    registryclosedate: item[2],
                    value: item[3],
                    currencyid: item[4]
                })
            })

            setDividState(dividArr)
        }
    }, [])

    const handleRowClick = (e) => {
        loadDivforStock(e.SECID)
        setStockItem(e)
        setOpen(true)
    }

    return (
        <Card>
            <CardContent>
                <div className='tableParam'>
                    <Typography variant='h3'> Акции</Typography>
                    <Table
                        data={stocks ?? []}
                        virtualized
                        height={500}
                        width={600}
                        onRowClick={handleRowClick}
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
                    <AppModal param={{
                        title: 'Данные актива',
                        item: stockItem,
                        show: open, 
                        onClose: handleClose,
                        addTo: handleAddStocks,
                        selectArr: selectStocks,
                        component: <StockItemData param={{dividState, stockItem}}/>
                        }}/>
                </div>
            </CardContent>
        </Card>
        
        
    )
}