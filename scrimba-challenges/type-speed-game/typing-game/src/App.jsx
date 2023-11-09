import { useState, useEffect } from 'react'

function App() {
  const [text, setText] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(5)
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

  
  useEffect(() => {
    if(isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    } else if(timeRemaining === 0) {
      setIsTimeRunning(false)
      setWordCount(countWords(text))
    }
  }, [timeRemaining, isTimeRunning])  

  return (
    <>
      <h1>How fast can you type?</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>time remaining: {timeRemaining}</h4>
      <button onClick={() => {setIsTimeRunning(true)}}>Start</button>
      <h1>word count: {wordCount}</h1>
    </>
  )
}

//() => console.log(countWords(wordCount))
export default App
