import { createContext, useState } from "react";
import axios from 'axios'

const Context = createContext()

function ContextProvider (props) {
    const [listOfCoins, setListOfCoins] = useState([])
    const [specificCoin, setSpecificCoin] = useState([])
    const [toggle, setToggle] = useState(false)


       async function getData () {
        try {
            const res = await axios.get(`https://api.coincap.io/v2/assets`)      
            setListOfCoins(res.data.data) 
        } catch(err) {console.log('err', err)}
    }
    
    async function getCoin (e) {
        try {
            const res = await axios.get(`https://api.coincap.io/v2/assets/${e}`)
            console.log(res.data.data)
            setSpecificCoin(res.data.data)
       } catch(err) {console.log('err', err)}
       }

       function onHome () {
        setListOfCoins([])
        setSpecificCoin([])
        setToggle(false)
       }

       function back () {
        setToggle(false)
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
            back,
        }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }