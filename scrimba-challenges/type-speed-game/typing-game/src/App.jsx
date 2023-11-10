import { useState, useEffect } from 'react'

function App() {
  const STARTING_TIME = 3

  const [text, setText] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  const handleChange = (e) => {
    const {value} = e.target

    setText(value)
  }

  function countWords(text) {
    const wordsArray = text.trim().split(/\s+/);
    return wordsArray.filter(word => word !== '').length;
  }

  const startGame = () => {
    setIsTimeRunning(true)
    setText('')
    setTimeRemaining(STARTING_TIME)
    setWordCount(0)
  }
  
  const endGame = () => {
    setIsTimeRunning(false)
    setWordCount(countWords(text))
  }
  
  useEffect(() => {
    if(isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    } else if(timeRemaining === 0) {
      endGame()
    }
  }, [timeRemaining, isTimeRunning])  

  return (
    <>
      <h1>How fast can you type?</h1>
      <textarea 
      onChange={handleChange} 
      value={text} 
      disabled={!isTimeRunning}
      />
      <h4>time remaining: {timeRemaining} sec</h4>
      <button onClick={startGame} disabled={isTimeRunning}>Start</button>
      <h1>word count: {wordCount}</h1>
    </>
  )
}

export default App
