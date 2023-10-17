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

  const ProRight = () => {
    const tempColors = colors.slice(0, 3)
    const newColors = [...tempColors, 'blue']
    setColors(newColors)
  }

  const ProLeft = () => {
    const tempColors1 = colors.slice(0, 2)
    const tempColors2 = colors.slice(3, 4)
    const newColors = [...tempColors1, 'blue', ...tempColors2]
    setColors(newColors)
  }

  const TopLeft = () => {
    const indexZero = colors.slice(0, 1)
    const newColors = [...indexZero, 'pink', 'pink', 'pink']
    setColors(newColors)
  }
  
  const BottomLeft = () => {
    const indexTwo = colors.slice(2, 3)
    const newColors = ['gray', 'gray',...indexTwo, 'gray',]
    setColors(newColors)
  }

  const TopRight = () => {
    const indexOne = colors.slice(1, 2)
    const newColors = ['aqua', ...indexOne, 'aqua', 'aqua']
    setColors(newColors)
  }
  const BottomRight = () => {
    const indexThree = colors.slice(3, 4)
    const newColors = ['orange', 'orange', 'orange', ...indexThree]
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
          proLeft={ProLeft}
          proRight={ProRight}
          topLeft={TopLeft}
          topRight={TopRight}
          bottomRight={BottomRight}
          bottomLeft={BottomLeft}
        />
      </div>
    </>
  )
}

export default App
