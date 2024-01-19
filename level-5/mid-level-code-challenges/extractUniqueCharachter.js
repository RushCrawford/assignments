function extractUniqueCharacters(strings) {
  const splitChars = strings.join('').split('') //SPLITS STRINGS INTO SINGLE CHARACTER STRINGS
  const result = []

  for (var i = 0; i < splitChars.length; i++) {
    if (!result.includes(splitChars[i])) { //LOOP OVER ARRAY AND CONTINUE IF CHARACTER IS 
      result.push(splitChars[i]) //ADDS UNIQUE CHARACTERS TO THE ARRAY
    } 
  }
  return result
}

const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']