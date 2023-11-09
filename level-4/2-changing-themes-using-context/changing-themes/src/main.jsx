import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {themeContext} from './themeContext.jsx'
import { themeContextProvider } from './themeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <themeContextProvider>
    <App />
  </themeContextProvider>,
)
