import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [color, setColor] = useState(0)

  useEffect(() => {
    axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(res => {
        setColor(res.data.colors[0].hex)
      })
  }, [])


  return (
    <div className='div' style={{ backgroundColor: `#${color}` }}>
      <h1>Random Color Component</h1>
    </div>
  )
}

export default App
