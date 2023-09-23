import { useState } from 'react'
import DiceBox from './DiceBox.jsx';

// 1. Create a component called `<DiceBox />`
// 2. Write a method in  `<DiceBox />` that produces 5 random numbers between 1 and 6 and saves them in state.
// 3. Display the 5 random numbers in your `<DiceBox />` JSX.
// 4. Provide a button the user can click on that will redo step 2 and present the new numbers to the user.

function App() {
  const [numbers, setNumbers] = useState([null, null, null, null, null])

  function diceRoll() {
    let num1 = Math.floor(Math.random() * 6);
    let num2 = Math.floor(Math.random() * 6);
    let num3 = Math.floor(Math.random() * 6);
    let num4 = Math.floor(Math.random() * 6);
    let num5 = Math.floor(Math.random() * 6);

    setNumbers([num1, num2, num3, num4, num5])
  }
  
  return (
    <>
    <DiceBox numbers={numbers} />
    <button onClick={diceRoll}>Roll</button>
    </>
  )
}

export default App
