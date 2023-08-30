import { useState } from 'react'
import Header from './components/Header'
// import BlogList from './components/BlogList'
// import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      {/* <BlogList /> */}
      {/* <Footer /> */}
    </>
  )
}

 
