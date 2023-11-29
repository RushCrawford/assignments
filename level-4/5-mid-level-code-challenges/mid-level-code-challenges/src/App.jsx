import { useState } from 'react'

//Write a function called filterAnagrams that filters an array of words to find and return an array containing only the words that are anagrams of a given target word.

function App() {
  const [count, setCount] = useState(0)

  function filterAnagrams(arr, target) {
    arr.filter(word => word == target)
  }
  
  const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
  const target = 'enlist';
  
  const anagrams = filterAnagrams(words, target);
  console.log(anagrams); // Output: ['listen', 'silent']

  return (
    <>

    </>
  )
}

export default App
