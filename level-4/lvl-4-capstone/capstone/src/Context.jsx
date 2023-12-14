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
            // console.log(res.data.data.map(coin => coin.id))
            setListOfCoins(res.data.data)
            // console.log(listOfCoins)
       } catch(err) {console.log('err', err)}
       console.log('GET DATA firing')
       }

       async function getCoin (e) {
        try {
            const res = await axios.get(`https://api.coincap.io/v2/assets/${e}`)
            setSpecificCoin(res.data.data)
       } catch(err) {console.log('err', err)}
       console.log('GET COIN firing')
       }

       function onHome () {
        setListOfCoins([])
        setSpecificCoin([])
        setToggle(false)
        console.log('onHome - firing')
       }


    return (
        <Context.Provider value={{
            getData,
            listOfCoins,
            getCoin,
            specificCoin,
            toggle,
            setToggle,
            onHome,
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }