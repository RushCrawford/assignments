function App() {
  //Write a function called filterAnagrams that filters an array of words to find and return an array containing only the words that are anagrams of a given target word.

    function filterAnagrams(arr, target) {
      const splitTarget = target.split('').sort().join('')
      console.log(splitTarget)
      return arr.filter(word => {
        const splitWords = word.split('').sort().join('');
        if (splitWords === splitTarget) {
          return true
        }
        // for (const char of splitTarget) {
        //   if (!splitWords.includes(char)) return false;
        // }
    
        // return true;
      })
    }
    
    const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world', 'listens'];
    const target = 'enlist';
    
    const anagrams = filterAnagrams(words, target);
    console.log(anagrams); // Output: ['listen', 'silent']

  //Write a function called sortByMultipleCriteria that takes an array of objects representing people, each with a name (string) and age (number) property. The function should return a new array with the people sorted first by age in ascending order, and then by name in alphabetical order.

    function sortByMultipleCriteria(people) {
      return (
      people.sort((a,b)=> {
      if (a.age !== b.age) {
        return a.age - b.age
      } else {
        if (a.name < b.name) {
          return -1
        }
      }}
      )
    )}
    
    const people = [
    { name: 'Alice', age: 30 },
    { name: 'Zlice', age: 25 },
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

    function calculateTotal(arr){
      let totalPrice = 0
      arr.map(product => {
        let currPrice = product.price * product.quantity
        totalPrice  += currPrice
    })
    return totalPrice
    }

    const products = [{
      name: "apple", price: 1.5, quantity: 3
    },
  {
    name: "banana", price: 0.75, quantity: 5
  },
{
  name: "orange", price: 1.25, quantity: 2
}]

console.log(calculateTotal(products))

  return (
    <></>
  )
}

export default App
