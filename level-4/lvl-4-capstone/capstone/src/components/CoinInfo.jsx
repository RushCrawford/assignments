import { Context } from '../Context'
import { useContext } from "react"
import { Link } from 'react-router-dom'

function CoinInfo() {
    const { userState: {errMsg},specificCoin, back, addToWatchlist } = useContext(Context)
    const coin = specificCoin

    const priceUsd = Number.parseFloat(coin.priceUsd);
    const price = priceUsd.toFixed(2)
    const maxSupply = Number.parseFloat(coin.maxSupply);
    const max = maxSupply.toFixed(2)
    const sup = Number.parseFloat(coin.supply);
    const supply = sup.toFixed(2)
    const marketCapUsd = Number.parseFloat(coin.marketCapUsd);
    const marketCap = marketCapUsd.toFixed(2)
    const changePercent24Hr = Number.parseFloat(coin.changePercent24Hr);
    const changePercent = changePercent24Hr.toFixed(2)
    const vwap24Hr = Number.parseFloat(coin.vwap24Hr);
    const vwap = vwap24Hr.toFixed(2)
    const volumeUsd24Hr = Number.parseFloat(coin.volumeUsd24Hr);
    const volume = volumeUsd24Hr.toFixed(2)

    

    return (
        <div className='coin-info-wrapper'>
            <Link to='/coin-list' onClick={back}>
            back
          </Link>
            <div className='coin-info--h1-wrapper'>
                <h1>{`#${coin.rank}`}</h1>
                <h1>{coin.symbol}</h1>
                <button onClick={()=>{addToWatchlist(coin.id)}} >Watch</button>
            </div>
                <p>{errMsg}</p>
            <div className='coin-info--name-wrapper'>
                <h1>{coin.name}</h1>
                <h2>Price USD: ${price}</h2>
            </div>
            <div className='coin-info--h3-wrapper'>
                <div className='coin-info--h3-div'>
                    <h5 className='coin-info-h3'>Total Quantity of Asset Issued:</h5>
                    <h3 className='coin-info-h3'>{max}</h3>
                </div>
                <div className='coin-info--h3-div'>
                    <h5 className='coin-info-h3'>Available Supply for Trading: </h5>
                    <h3 className='coin-info-h3'>{supply}</h3>
                </div>
                <div className='coin-info--h3-div'>
                    <h5 className='coin-info-h3'>Market Cap in USD:</h5>
                    <h3 className='coin-info-h3'>${marketCap}</h3>
                </div>
                <div className='coin-info--h3-div'>
                    <h5 className='coin-info-h3'>Trading Volume Last 24hrs:</h5>
                    <h3 className='coin-info-h3'>${volume}</h3>
                </div>
                <div className='coin-info--h3-div'>
                    <h5 className='coin-info-h3'>Change Percent Last 24hrs</h5>
                    <h3 className='coin-info-h3'>{changePercent}%</h3>
                </div>
                <div className='coin-info--h3-div'>
                    <h5 className='coin-info-h3'>Volume Weighted Average Price Last 24hrs:</h5>
                    <h3 className='coin-info-h3'>${vwap}</h3> 
                 </div>
            </div>
        </div>
    )
}

export default CoinInfo