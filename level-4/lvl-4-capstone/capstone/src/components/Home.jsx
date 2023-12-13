import {Link} from 'react-router-dom'

function Home () {

    return (
        <div className="home--wrapper">
            <h1 className="home--title">Crypto Info</h1>
            <p className='home--p' >
            Cryptocurrency, sometimes called crypto-currency or crypto, is any form of currency that exists digitally or virtually and uses cryptography to secure transactions. Cryptocurrencies don't have a central issuing or regulating authority, instead using a decentralized system to record transactions and issue new units.
            </p>
            <button ><Link to='/coin-list' className='link'>
            View Coins
          </Link></button>
        </div>
    )
}

export default Home