import { useContext, useState } from "react"
import { Context } from "../Context"
import { useNavigate } from "react-router-dom"

function WatchList() {
    const { userState: { watching }, removeFromWatchlist, listOfCoins, getCoin, specificCoin } = useContext(Context)
    const [ toggle, setToggle ] = useState(false)
    const navigate = useNavigate()

    const back = ()=> {
        setToggle(prev => !prev)
    }

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

    const watchedCoins = watching.map((coin, index) => {
        const priceUsd = Number.parseFloat(coin.priceUsd);
        const price = priceUsd.toFixed(2)
        const id = coin._id
        const coinId = coin.coin
        console.log(coinId)

        const handleDelete = () => {
            console.log(id)
            removeFromWatchlist(id)
        }
        const showDetails = ()=> {
            console.log(coinId)
            getCoin(coinId)
            setToggle(prev => !prev)
        }

        

        const dateString = coin.datePosted;

        // Parse the date string into a Date object
        const date = new Date(dateString);

        // Define a custom format string
        const formatString = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            // hour: '2-digit',
            // minute: '2-digit',
            // hour12: true, // Use 12-hour clock format
            // timeZone: 'UTC' // Include time zone
        };
        // Format the date using the custom format
        const formattedDate = date.toLocaleString('en-US', formatString);


        
        return (
            <div className="watch-coin-wrapper" key={index}>
                <div className="coin-list--rank-symbol">
                    <h1 className="watch-coin--name" onClick={showDetails}>{`${coin.coin}`}</h1>
                    <div>
                    <h3>{formattedDate}</h3>
                    <button onClick={handleDelete}>Remove</button>
                    </div>
                </div>
            </div>
        )
    })
    console.log(coin)


    return (
        <div>
            {!toggle ? 
            <div>
            {watchedCoins}
            </div>
            :
            <div className='coin-info-wrapper'>
            <div className='coin-info--h1-wrapper'>
                <h1>{`#${coin.rank}`}</h1>
                <h1>{coin.symbol}</h1>
            </div>
            <button onClick={back}>Back</button>
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
            }
        </div>
    )
}

export default WatchList