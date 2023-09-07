import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import Inputs from './components/Inputs.jsx'
import index from "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Inputs />
  </React.StrictMode>,
)
