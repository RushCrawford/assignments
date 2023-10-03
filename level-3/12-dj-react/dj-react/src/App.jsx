import { useState } from 'react'
import Square from './Square'
import Buttons from './Buttons'

function App() {
  const [colors, setColors] = useState(["white", "white", "white", "white"])

  const SmallTime = () => {
    setColors(prevColor => {
      console.log(prevColor[0])

      if (prevColor[0] === 'white') {
        return ['black', 'black', 'black', 'black']
      } else if (prevColor[0] === 'black') {
        return ['white', 'white', 'white', 'white']
      } else {
        return ['black', 'yellow', 'green', 'black']
      }
    })
  }

  const Party = () => {
      const tempColors = colors.slice(2, 4)
      const newColors = ["purple", "purple", ...tempColors]
      setColors(newColors)
  }

  const BottomRight = () => {
    const tempColors = colors.slice(0, 3)
    const newColors = [...tempColors, 'blue']
    setColors(newColors)
  }

  const BottomLeft = () => {
    const tempColors1 = colors.slice(0, 2)
    const tempColors2 = colors.slice(3, 4)
    const newColors = [...tempColors1, 'blue', ...tempColors2]
    setColors(newColors)
  }

  const squareElements = colors.map(color => (
    <Square
      color={color}
    />
  ))

  return (
    <>
      <main className='square-container'>
        {squareElements}
      </main>
      <div className='buttons-container'>
        <Buttons
          smallTime={SmallTime}
          party={Party}
          bottomRight={BottomRight}
          bottomLeft={BottomLeft}
        />
      </div>
    </>
  )
}

export default App
