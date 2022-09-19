import { Typography } from '@mui/material';
import React from 'react';

export const WrapperApp = ({textData}) => {
    return (
        <div style={{
            backgroundColor: '#C9ECFF', 
            display: 'flex', 
            alignItems: 'center', 
            height: '100px', 
            width: '100%'}}>
            <Typography style={{color: '#1E2172', marginLeft: '10px'}} variant='h4'>{textData}</Typography>
        </div>
    )
}