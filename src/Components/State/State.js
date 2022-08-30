import React from 'react'
export const initialContext = {
    stocks: [],
    divid: [],
    currency: [],
    stocksHistory: []
}

export const StateContext = React.createContext(initialContext)