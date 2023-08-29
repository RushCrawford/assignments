//Challenge 1: Sort Array with Preserved Index for -1 Values

let numbers = [-1, 150, 190, 170, -1, -1, 160, 180];

// Identify and remove the -1s
const preservedIndexes = [];
const sortedNumbers = numbers.filter((num, index) => {
  if (num === -1) {
    preservedIndexes.push(index);
    return false;
  }
  return true;
});

// Sort the remaining numbers
sortedNumbers.sort((a, b) => a - b);

// Insert the -1s back into their original index
preservedIndexes.forEach((index, i) => {
  sortedNumbers.splice(index, 0, -1);
});

console.log(sortedNumbers);
