import { useState } from 'react'
import { ColorPicker } from "react-gradient-color-picker";
import Gradient from './Gradient'
import Inputs from './Inputs'

// h1 for header
// div to hold all gradient elements className='app-container'
// 2 divs inside gradient-container
// one with gradient color box and text area containing gradint code
// one with header 'options', an 'add' button to add an input, 2 inputs for colors, one input for angle,

// initiate state array to track colors

function App() {
  const [color, setColor] = useState("#ff0000")



  return (
    <div className='app-container'>
      <h1 className='title'>CSS Gradient Code Generator</h1>
      <div className='component-container'>
        <Gradient color={color} setColor={setColor}/>
        <Inputs color={color} setColor={setColor}/>
        
      </div>
    </div>
  )
}

export default App
