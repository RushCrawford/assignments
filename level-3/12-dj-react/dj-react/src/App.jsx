import { useState } from 'react'
import squaresArray from "./squaresArray"
import Squares from './Squares'

function App() {
  const [colors, setColors] = useState(["white", "white", "white", "white"]) //do i need it 4 times?

  const squareElements = squaresArray.map(square => (<Squares color={colors}/>))


  return (
    <main className='square-container'>
    {squareElements}
    </main>
  )
}

export default App
