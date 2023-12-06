import { useContext } from "react";
import { Context } from './Context'

function CoinInfo () {
    const { coinList } = useContext(Context)

    const coinTile = coinList.map(coin => {
        return (
            <CoinTile 
            id={coin.id}
            rank={coin.rank}
            symbol={coin.symbol}
            name={coin.name}
            supply={coin.supply}
            maxSupply={coin.maxSupply}
            marketCapUsd={coin.marketCapUsd}
            volumeUsd24Hr={coin.volumeUsd24Hr}
            priceUsd={coin.priceUsd}
            changePercent24Hr={coin.changePercent24Hr}
            vwap24Hr={coin.vwap24Hr}
            explorer={coin.explorer}
            />
        )
    })
    console.log(coinTile)
    return (
        <>
            {coinTile}
        </>
    )
}

export default CoinInfo