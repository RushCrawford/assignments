import { Context } from '../Context'
import { useContext } from "react"

function CoinInfo(props) {
    const { specificCoin } = useContext(Context)
    const coin = specificCoin.data
    console.log(coin)

    return (
        <div>
            <div className='coin-info--h1-wrapper'>
                <h1>{coin.rank}</h1>
                <h1>{coin.symbol}</h1>
                <h1>{coin.name}</h1>
            </div>
            <h2>Price USD: ${coin.priceUsd}</h2>
            <div className='coin-info--h3-wrapper'>
                <div className='coin-info--h3-div'>
                    <h3 className='coin-info-h3'>Total Quantity of Asset Issued:</h3>
                    <h3 className='coin-info-h3'>{coin.maxSupply}</h3>
                </div>
                <div className='coin-info--h3-div'>
                    <h3 className='coin-info-h3'>Available Supply for Trading: </h3>
                    <h3 className='coin-info-h3'>{coin.supply}</h3>
                </div>
                <div className='coin-info--h3-div'>
                    <h3 className='coin-info-h3'>Market Cap in USD:</h3>
                    <h3 className='coin-info-h3'>{coin.marketCapUsd}</h3>
                </div>
                <div className='coin-info--h3-div'>
                    <h3 className='coin-info-h3'>Trading Volume Last 24hrs:</h3>
                    <h3 className='coin-info-h3'>${coin.volumeUsd24Hr}</h3>
                </div>
                <div className='coin-info--h3-div'>
                    <h3 className='coin-info-h3'>Change Percent Last 24hrs</h3>
                    <h3 className='coin-info-h3'>{coin.changePercent24Hr}</h3>
                </div>
                <div className='coin-info--h3-div'>
                    <h3 className='coin-info-h3'>Volume Weighted Average Price Last 24hrs:</h3>
                    <h3 className='coin-info-h3'>${coin.vwap24Hr}</h3>
                </div>
            </div>
        </div>
    )
}

export default CoinInfo