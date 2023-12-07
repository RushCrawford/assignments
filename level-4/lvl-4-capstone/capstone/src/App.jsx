import CoinList from './components/CoinList'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import { Context } from './Context'
import { useContext } from 'react'

function App() {

  return (
    <>
      <Router>
        <footer>
          <Link to='/coin-list' className='link'>
            View Coins
          </Link>
        </footer>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coin-list' element={<CoinList />} />
      </Routes>
      </Router>
    </>
  )
}

export default App
