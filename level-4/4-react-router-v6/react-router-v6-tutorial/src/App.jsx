import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Checkout from './Components/Checkout'
import Products from './Components/Products'


function App() {

  return (
    <Router>

      <nav style={{ margin: 10 }} >
        <Link to='/' style={{ padding: 5 }}>
          Home
        </Link>
        <Link to='/About' style={{ padding: 5 }}>
          About
        </Link>
        <Link to='/Checkout' style={{ padding: 5 }}>
          Checkout
        </Link>
        <Link to='/Products' style={{ padding: 5 }}>
          Products
        </Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='/Products' element={<Products />} />
      </Routes>
    </Router>
  )
}

export default App
