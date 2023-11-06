import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [color, setColor] = useState(0)

  const colorChange = () => {
    axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(res => {
        setColor(res.data.colors[0].hex)
      })

  }
  useEffect(() => {
    colorChange()
  }, [])


  return (
    <div className='div' style={{ backgroundColor: `#${color}` }}>
      <h1>Random Color Component</h1>
      <button onClick={colorChange}>change</button>
    </div>
  )
}

export default App
