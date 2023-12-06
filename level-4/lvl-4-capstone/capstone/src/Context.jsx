import { createContext, useEffect, useState } from "react";
import axios from 'axios'

const Context = createContext()

function ContextProvider (props) {
    const [coinList, setCoinList] = useState({
        id: '',
        rank: '',
        symbol: '',
        name: '',
        supply: '',
        maxSupply: '',
        marketCapUsd: '',
        volumeUsd24Hr: '',
        priceUsd: '',
        changePercent24Hr: '',
        vwap24Hr: '',
        explorer: '',
    })

    useEffect(()=> {
        axios.get(`https://api.coincap.io/v2/assets`)
            .then(res => setCoinList(res.data.data))
            .catch(err => console.log('err', err))
    },[])
console.log(coinList)


    return (
        <Context.Provider value={{
            coinList
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }