function extractUniqueCharacters(strings) {
  // const splitChars = strings.flatMap(word => word.split(''))
  const splitChars = strings.join('').split('').filter(letter => letter.includes(!letter))
  console.log(splitChars)
  // const letters = splitChars.filter(letter => letter.length === 1)
  // return letters

  //AI assist //
  // return splitChars.filter((char,index, self)=> {
  //   return self.indexOf(char)
  // })
  
}

const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']