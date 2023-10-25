import { useState, useEffect } from 'react'

function App() {
  const [color, setColor] = useState(0)

  useEffect(function() {
    console.log("Effect ran")
    fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
        .then(res => res.json())
        .then(data => setColor(data))
        console.log(data)
}, [color])


  return (
    <>
     <h1>Colors</h1>
    </>
  )
}

export default App
