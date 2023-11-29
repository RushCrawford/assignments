import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import axios from 'axios'
import Home from './Components/Home'
import About from './Components/About'
import Checkout from './Components/Checkout'
import Products from './Components/Products'
import ProductDetails from './Components/ProductDetails'


function App() {
  const [productList, setProductList] = useState([])
  const [shoppingCart, setShoppingCart] = useState([])

  useEffect(() => {
    axios.get(`https://api.vschool.io/rush/todo`)
      .then((res)=>{setProductList(res.data)})
      .catch((err)=>{console.log('error', err)})
  } ,[])

  const addToCart = ()=> {   
    //i think i need to make a get request for the product id and spread that item into setShoppingCart
    setShoppingCart(prev => ({
      ...prev,
      ...shoppingCart
    }))
  }
  
  return (
    <Router>

      <nav style={{ margin: 10 }} >
        <Link to='/' style={{ padding: 5 }}>
          Home
        </Link>
        <Link to='/About' style={{ padding: 5 }}>
          About
        </Link>
        <Link to='/Products' style={{ padding: 5 }}>
          Products
        </Link>
        <Link to='/Checkout' style={{ padding: 5 }}>
          Cart
        </Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Products' element={<Products productList={productList} />} />
        <Route path='/Checkout' element={<Checkout />} />
        <Route 
        path='/Products/:productId' 
        element={
          <ProductDetails productList={productList} />} 
        />
      </Routes>
    </Router>
  )
}

export default App
