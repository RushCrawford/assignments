import { useState } from 'react'


function App() {
  //Write a function called filterAnagrams that filters an array of words to find and return an array containing only the words that are anagrams of a given target word.

    // function filterAnagrams(arr, target) {
    //   const splitTarget = target.split('')

    //   return arr.filter(word => {
    //     const splitWords = word.split('');
        
    //     for (const char of splitTarget) {
    //       if (!splitWords.includes(char)) return false;
    //     }
    
    //     return true;
    //   })
    // }
    
    // const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
    // const target = 'enlist';
    
    // const anagrams = filterAnagrams(words, target);
    // console.log(anagrams); // Output: ['listen', 'silent']

  //Write a function called sortByMultipleCriteria that takes an array of objects representing people, each with a name (string) and age (number) property. The function should return a new array with the people sorted first by age in ascending order, and then by name in alphabetical order.

    function sortByMultipleCriteria(people) {
      return (
      people.sort((a,b)=> 
      a.age - b.age
      )
    )}
    
    const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 25 },
    ];
    
    const sortedPeople = sortByMultipleCriteria(people);
    console.log(sortedPeople);
    
    // Expected outcome: [
    //  { name: 'Bob', age: 25 },
    //  { name: 'David', age: 25 },
    //  { name: 'Alice', age: 30 },
    //  { name: 'Charlie', age: 35 }
    // ]

  return (
    <>

    </>
  )
}

export default App
