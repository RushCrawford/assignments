import { Link } from 'react-router-dom'

function Home() {

    return (
        <div className="home--wrapper">
            <h1 className="home--title">Crypto Info</h1>
            <div className='home--p-wrapper'>
                <p className='home--p' >
                    Cryptocurrency, sometimes called crypto-currency or crypto, is any form of currency that exists digitally or virtually and uses cryptography to secure transactions. Cryptocurrencies don't have a central issuing or regulating authority, instead using a decentralized system to record transactions and issue new units.
                </p>
                <p className='home--p' >
                    On the following page you will find a list of the top 100 coins ranked in ascending order. They are ranked by market cap, whereas the highest market cap receives the rank of 1.
                </p>
            </div>
            <button className='home--button'><Link to='/coin-list' className='link'>
                Enter
            </Link></button>
        </div>
    )
}

export default Home