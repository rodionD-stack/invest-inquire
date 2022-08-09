import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { StateContext } from '../../State/State';

export const HomeStocksItem = () => {
    
const {context, setContext} = useContext(StateContext);
const {stocks} = context;
   
    return (
        <List>
            {stocks.map(item => {
                return (<ListItem
                    key={item.SECID}
                >
                    <ListItemButton>
                        <ListItemText primary={`Тикет: ${item.SECID}`}/>
                        <ListItemText primary={`Короткое название: ${item.SHORTNAME}`}/>
                        <ListItemText primary={`Стоимость: ${item.PREVADMITTEDQUOTE}р.`}/>
                    </ListItemButton>

                </ListItem>)
            })}
        </List>
    )
}