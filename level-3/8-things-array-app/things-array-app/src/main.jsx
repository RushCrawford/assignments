import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function App() {

const [thingsArray, setThingsArray] = useState(['Thing 1', 'Thing 2']) 

  function addItem() {
      setThingsArray(prev => [...prev, `Thing ${prev.length + 1}`])
  }
  
const thingsElements = thingsArray.map(thing => <p>{thing}</p>)
  
  return (
      <div>
          <button onClick={addItem}>Add Item</button>
          {thingsElements}
      </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>,
)
