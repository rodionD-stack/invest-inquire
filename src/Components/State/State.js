import React from 'react'
export const initialContext = {
    stocks: [],
    divid: [],
    currency: []
}

export const StateContext = React.createContext(initialContext)