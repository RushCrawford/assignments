import CoinList from './components/CoinList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import CoinInfo from './components/CoinInfo'
import { useContext } from 'react'
import { Context } from './Context'
import Auth from './components/Auth'
import Navbar from './components/Navbar'
import WatchList from './components/WatchList'

function App() {
  const { userState: {token} } = useContext(Context)

  return (
    <>
      <Router>
      {token && <Navbar />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coin-list' element={token ? <CoinList /> : <Auth />} />
          <Route path='/coin-info' element={token ? <CoinInfo /> : <Auth />} />
          <Route path='/watching' element={token ? <WatchList /> : <Auth /> } />
      </Routes>
      </Router>
    </>
  )
}

export default App
