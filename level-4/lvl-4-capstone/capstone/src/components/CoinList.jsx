import { useContext, useEffect } from "react";
import {Link} from 'react-router-dom'
import { Context } from "../Context";
import CoinInfo from "./coinInfo";

function CoinList() {
    const { getData, listOfCoins, getCoin, specificCoin, toggle, setToggle } = useContext(Context)

    useEffect(() => {
        getData()
    }, [])

    const coinClicked = (e)=> {
        console.log(e.target)
        const id = e.target.innerHTML
        getCoin(id)
        console.log(id)
        setToggle(!toggle)
    }

    const allCoins = listOfCoins?.length > 0 && listOfCoins.map((coin, index) => {
        return (
            <div className="coin-list-wrapper" key={index}>
                <h3>{`Rank: ${coin.rank}`}</h3>
                <h3>{coin.name}</h3>
                <h3>{coin.symbol}</h3>
                <h3>{`$${coin.priceUsd}`}</h3>
                {/* <button onClick={()=>{coinClicked(coin.id)}} >see more</button> */}
                <button onClick={coinClicked}>{coin.id}</button>
            </div>
        )
    })

    console.log('coin list component', listOfCoins)

    return (
        <>
        <Link to='/'>
            home
          </Link>
        {toggle ? <CoinInfo /> : <>{allCoins}</>}            
        </>
    )
}

export default CoinList