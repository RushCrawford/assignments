import { Context } from '../Context'
import { useContext } from "react"

function CoinInfo(props) {
    const { specificCoin } = useContext(Context)
    const coin = specificCoin.data
    // const { coinList } = useContext(Context)
    // const { id, rank, symbol, name, supply, maxSupply, marketCapUsd, volumeUsd24Hr, priceUsd, changePercent24Hr, vwap24Hr, explorer } = props
    // const [allCoinData, setAllCoinData] = useState({
    //     id: '',
    //     rank: '',
    //     symbol: '',
    //     name: '',
    //     supply: '',
    //     maxSupply: '',
    //     marketCapUsd: '',
    //     volumeUsd24Hr: '',
    //     priceUsd: '',
    //     changePercent24Hr: '',
    //     vwap24Hr: '',
    //     explorer: '',
    // })
console.log(coin.name)

    return (
        <>
        <h1>{coin.name}</h1>
        </>
    )
}

export default CoinInfo