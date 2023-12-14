import CoinList from './components/CoinList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import CoinInfo from './components/coinInfo'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coin-list' element={<CoinList />} />
          <Route path='/coin-info' element={<CoinInfo />} />
      </Routes>
      </Router>
    </>
  )
}

export default App
