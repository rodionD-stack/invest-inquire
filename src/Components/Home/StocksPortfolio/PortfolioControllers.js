import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export const PortfolioControllers = ({param}) => {
    const {view, handleChange} = param;
    return (
        <ToggleButtonGroup
            orientation="vertical"
            value={view}
            exclusive
            onChange={handleChange}
        >
            <ToggleButton value="stocksH" aria-label="list">
                Акции роста
            </ToggleButton>
            <ToggleButton value="stocksD" aria-label="module">
                Дивидендные аристократы
            </ToggleButton>
            <ToggleButton value="stocksM" aria-label="quilt">
                Умеренный портфель
            </ToggleButton>
            <ToggleButton value="stocksO" aria-label="quilt">
                Счастливая пенсия
            </ToggleButton>
        </ToggleButtonGroup>
    )
}