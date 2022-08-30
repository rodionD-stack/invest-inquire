import { useCallback, useEffect, useState } from "react"
import { initialContext, StateContext } from '../State/State';
import { HomeStocks } from "./HomeStocks/HomeStocks";
export const Home = () => {

    const [context, setContext] = useState(initialContext)

    const dateCreate = () => {
        return new Date().toLocaleDateString().split('.').reverse().join('-')
    }

    const dateHistory = () => {
        let d = new Date();
        d = d.setFullYear(d.getFullYear() - 5);
        return new Date(d).toLocaleDateString().split('.').reverse().join('-')
    }

    const loadData = useCallback(async () => {
        const stockResponse = await fetch(`https://iss.moex.com/iss/engines/stock/markets/shares/boards/TQBR/securities.json?iss.dp=comma&iss.meta=off&iss.only=securities&securities.columns=SECID,SHORTNAME,LOTSIZE,SECNAME,LATNAME,PREVADMITTEDQUOTE&date=${dateCreate()}`);
        const currencyResponse = await fetch(`https://iss.moex.com//iss/statistics/engines/currency/markets/selt/rates.json?iss.meta=off`);
        const stocksHistoryResponse = await fetch(`https://iss.moex.com/iss/history/engines/stock/markets/shares/boards/TQBR/securities.json?iss.dp=comma&iss.meta=off&iss.only=securities&date=${dateHistory()}`);

        const stockJson = await stockResponse.json();
        const currencyJson = await currencyResponse.json();
        const stockHistoryJson = await stocksHistoryResponse.json();

        if(stockJson && currencyJson && stockHistoryJson) {
            let arrStock = [];
            let arrCurrency = [];
            let arrHistory = [];

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

            stockHistoryJson.history.data.map(item => {
                arrHistory.push({
                    id: item[3],
                    name: item[2],
                    value: item[14],
                    lotsize: null
                })
            })

            setContext({
                ...context,
                stocks: arrStock,
                currency: arrCurrency,
                stocksHistory: arrHistory
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