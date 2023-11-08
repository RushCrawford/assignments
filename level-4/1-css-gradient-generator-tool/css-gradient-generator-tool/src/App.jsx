import { useState } from 'react'
import Gradient from './Gradient'
import Inputs from './Inputs'

// h1 for header
// div to hold all gradient elements className='app-container'
// 2 divs inside gradient-container
// one with gradient color box and text area containing gradint code
// one with header 'options', an 'add' button to add an input, 2 inputs for colors, one input for angle,

// initiate state array to track colors

function App() {
  const [color1, setColor1] = useState('#ff0000')
  const [color2, setColor2] = useState('#ff0000')
  const [angle, setAngle] = useState(50)

  const handleAngleChange = (e) => {
    const { name, value} = e.target

    setAngle(prevAngle => ({
      ...prevAngle,
      [name]: value
    }))
  }

  const increase = () => {setAngle(angle + 1)}
  const decrease = () => {setAngle(angle - 1)}

  return (
    <div className='app-container'>
      <h1 className='title'>CSS Gradient Code Generator</h1>
      <div className='component-container'>
        <Gradient 
        color1={color1} 
        color2={color2} 
        angle={angle}
        />
        <Inputs 
        color1={color1} 
        color2={color2} 
        setColor1={setColor1}
        setColor2={setColor2}
        angle={angle} 
        handleAngleChange={handleAngleChange}
        increase={increase}
        decrease={decrease}
        />
      </div>
    </div>
  )
}

export default App
