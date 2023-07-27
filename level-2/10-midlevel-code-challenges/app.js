// // let numbers = [34, 56, 3, 17, 45, 23, 4, 18]
//  let result = numbers.sort((a,b) => a - b)
// // console.log(result)

// let strings = ['dog', 'legos', 'usa']
// //let result = strings.map(string => string.toUpperCase())
// console.log(result)

// function convertToUpper(string){
//     return string.map(string => string.toUpperCase())
// }

// console.log(convertToUpper(strings))

function filterEvenNumbers(numbers) {
  return  numbers.filter(num => num % 2 === 0)
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers);

// filter 

