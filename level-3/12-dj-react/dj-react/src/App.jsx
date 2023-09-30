import { useState } from 'react'
import squaresArray from "./squaresArray"
import Squares from './Squares'
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
      }
    })
  }

  const Party = () => {
    setColors( prevColor.map(color => {
      if(prevColor.id > 2){
        return 'purple'
      } else if(indexOf(color) > 2) {
        return color
      }
  }))
    //  const purpleSquares = colors.filter((color) => color )
    
    //   setColors((prevColors) => ({
    //     colors: [...prevColors.colors.slice(0,2),'purple', 'purple']
    //   }));
    // };
    
      // setColors((prevColors) => prevColors.map((value, index) => (index < 2 ? 'purple' : value)));
  }

  const squareElements = squaresArray.map(square => (<Squares key={square.id} colors={colors} />))


  return (
    <>
      <main className='square-container'>
        {squareElements}
      </main>
      <div className='buttons-container'>
        <Buttons 
        smallTime={SmallTime} 
        party={Party}
        />
      </div>
    </>
  )
}

export default App
