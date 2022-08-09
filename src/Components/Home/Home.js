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
        const stockJson = await stockResponse.json();

        let arr = [];
        {stockJson && stockJson.securities.data.map(item => {
                arr.push({
                    SECID: item[0],
                    SHORTNAME: item[1],
                    LOTSIZE: item[2],
                    SECNAME: item[3],
                    LATNAME: item[4],
                    PREVADMITTEDQUOTE: item[5]
                })
                return setContext({
                    ...context,
                    stocks : arr
                })
            }   
        )}
    }, [setContext])

    useEffect(() => {
        loadData()
    }, [])

    return (
        // <div>
        //     <ul>
        //         {context.stocks.map(item => <li key={item.SECID}>{'Тикет:'+ ' ' + item.SECID + ' ' + 'Короткое название:' + ' ' + item.SHORTNAME + ' ' + 'Объем лота:' + ' ' + item.LOTSIZE + ' ' + 'Полное название:' + ' ' + item.SECNAME + ' ' + 'Стоимость:' + ' ' + item.PREVADMITTEDQUOTE}</li>)}
        //     </ul>
        // </div>
        <StateContext.Provider value={{context, setContext}}>
            <HomeStocks/>
        </StateContext.Provider>
        
    )
}