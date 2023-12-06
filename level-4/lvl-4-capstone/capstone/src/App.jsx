import { useState } from 'react'
import { ContextProvider } from './Context'
import CoinInfo from './components/coinInfo'

function App() {

  return (
    <>
    <ContextProvider>
      <CoinInfo />
      <div></div>
    </ContextProvider>
    </>
  )
}

export default App
