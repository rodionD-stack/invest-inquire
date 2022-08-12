import { useCallback, useEffect, useState } from "react"
import { initialContext, StateContext } from '../State/State';
import { HomeStocks } from "./HomeStocks/HomeStocks";
export const Home = () => {

    const [context, setContext] = useState(initialContext)

    const dateCreate = () => {
        return new Date().toLocaleDateString().split('.').reverse().join('-')
    }

    const loadData = useCallback(async () => {
        const stockResponse = await fetch(`https://iss.moex.com/iss/engines/stock/markets/shares/boards/TQBR/securities.json?iss.dp=comma&iss.meta=off&iss.only=securities&securities.columns=SECID,SHORTNAME,LOTSIZE,SECNAME,LATNAME,PREVADMITTEDQUOTE&date=${dateCreate()}`);
        const currencyResponse = await fetch(`https://iss.moex.com//iss/statistics/engines/currency/markets/selt/rates.json?iss.meta=off&date=${dateCreate()}`);

        const stockJson = await stockResponse.json()
        const currencyJson = await currencyResponse.json()

        if(stockJson && currencyJson) {
            let arrStock = [];
            let arrCurrency = [];

            stockJson.securities.data.map(item => {
                arrStock.push({
                    SECID: item[0],
                    SHORTNAME: item[1],
                    LOTSIZE: item[2],
                    SECNAME: item[3],
                    LATNAME: item[4],
                    PREVADMITTEDQUOTE: item[5]
                })
            })

            currencyJson.wap_rates.data.map(item => {
                arrCurrency.push({
                    tradedate: item[0],
                    shortname: item[3],
                    price: item[4]
                })
            })

            setContext({
                ...context,
                stocks: arrStock,
                currency: arrCurrency
            })
        }

    }, [setContext])

    useEffect(() => {
        loadData()
    }, [])

    return (
        <StateContext.Provider value={{context, setContext}}>
            <HomeStocks/>
        </StateContext.Provider>
        
    )
}