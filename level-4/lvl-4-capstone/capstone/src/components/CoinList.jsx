import { useContext, useState, useEffect } from "react";
import { Context } from "../Context";
import CoinInfo from "./coinInfo";

function CoinList() {
    const { getData, listOfCoins, getCoin, specificCoin, toggle, setToggle } = useContext(Context)

    useEffect(() => {
        getData()
    }, [])

    const coinClicked = (e)=> {
        const id = e.target.innerText.toLowerCase()
        getCoin(id)
        console.log(id)
        setToggle(!toggle)
    }

    const allCoins = listOfCoins?.length > 0 && listOfCoins.map(coin => {
        return (
            <div onClick={coinClicked} style={{ border: '1px solid white' }} >
                <h3>{coin.id}</h3>
                <h3>{coin.name}</h3>
                <h3>{coin.symbol}</h3>
            </div>
        )
    })

    console.log('coin list component', listOfCoins)

    return (
        <>
        {toggle ? <CoinInfo /> : <>{allCoins}</>}
            
        </>
    )
}

export default CoinList