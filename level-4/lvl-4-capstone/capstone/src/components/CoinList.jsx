import { useContext, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Context } from "../Context";
import CoinInfo from "./coinInfo";

function CoinList() {
    const { getData, listOfCoins, getCoin, onHome, toggle, setToggle } = useContext(Context)

    useEffect(() => {
        getData()
    }, [])

    const coinClicked = (e)=> {
        const id = e.target.innerHTML
        getCoin(id)
        setToggle(!toggle)
    }

    
    const allCoins = listOfCoins?.length > 0 && listOfCoins.map((coin, index) => {
        const priceUsd = Number.parseFloat(coin.priceUsd);
        const price = priceUsd.toFixed(2)
        return (
            <div className="coin-list-wrapper" key={index}>
                <div className="coin-list--rank-symbol">
                <h1>{`# ${coin.rank}`}</h1>
                <h1>{coin.symbol}</h1>
                </div>
                <h1 className="coin-list--name">{coin.name}</h1>
                <h2>{`$${price}`}</h2>
                <button onClick={coinClicked}>{coin.id}</button>
            </div>
        )
    })

    return (
        <>
        {toggle ? <CoinInfo /> : 
        
        <div className="coin-list-page">
            <Link to='/' onClick={onHome}>
                home
            </Link>{allCoins}
          </div>}            
        </>
    )
}

export default CoinList