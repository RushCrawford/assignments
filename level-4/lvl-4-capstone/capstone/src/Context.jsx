import { createContext, useEffect, useState } from "react";
import axios from 'axios'

const Context = createContext()

function ContextProvider (props) {
    const [listOfCoins, setListOfCoins] = useState([])
    const [specificCoin, setSpecificCoin] = useState([])
    const [toggle, setToggle] = useState(false)


       async function getData () {
        try {
            const res = await axios.get(`https://api.coincap.io/v2/assets`)
            console.log(res.data.data.map(coin => coin.id))
            setListOfCoins(res.data.data)
            console.log(listOfCoins)
       } catch(err) {console.log('err', err)}
       console.log('firing')
       }

       async function getCoin (e) {
        try {
            const res = await axios.get(`https://api.coincap.io/v2/assets/${e}`)
            setSpecificCoin(res.data)
       } catch(err) {console.log('err', err)}
       console.log('firing')
       }

    


    return (
        <Context.Provider value={{
            getData,
            listOfCoins,
            getCoin,
            specificCoin,
            toggle,
            setToggle,
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }