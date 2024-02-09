// Write a function called extractInitials that takes an array of full names and returns a new array containing only the initials of each name.

function extractInitials(names) {
  const splitNames = names.map(name => name.split(/\s+/).map(word => word[0])) // use .split to chop after space, map again to pull out first letter
  const initials = splitNames.map(letter => letter.join('')) // initials together
  return initials
};


const fullNames = ['John Doe', 'Alice Johnson', 'Bob Smith'];
const initialsArray = extractInitials(fullNames);
console.log(initialsArray); // Output: ['JD', 'AJ', 'BS']


// Write a function called filterByProperty that takes an array of objects and a property name as input. The function should return a new array containing only the objects that have a specific value for the given property.

function filterByProperty(objects, propertyName, propertyValue) {
  return objects.filter(object => object[propertyName] === propertyValue) // filter thru array of objects and only return the object if its property name is equal to the given property value
}

const people = [
  { name: 'Alice', age: 30, country: 'USA' },
  { name: 'Bob', age: 25, country: 'Canada' },
  { name: 'Charlie', age: 35, country: 'USA' },
  { name: 'David', age: 28, country: 'Australia' },
];

const filteredByCountry = filterByProperty(people, 'country', 'USA');
console.log(filteredByCountry);

// Write a function called createTable(rows, columns) that takes two parameters: rows (number of rows) and columns (number of columns). The function should generate a table represented as an array of arrays, where each inner array represents a row and contains the row's data. Each cell in the table should contain the product of its row index and column index.

function createTable(rows, columns) {
  // var to hold table
  // nested for loops
  let newTable = []
  for(let i = 0; i < rows; i++) {
    const row = []
    for(let j = 0; j < columns; i++) {
      row.push(i*j)
    }
    newTable.push(row)
  }
  return newTable
}

// function createTable(rows, columns) {
//   const table = [];

//   for (let i = 0; i < rows; i++) {
//     const row = [];
//     for (let j = 0; j < columns; j++) {
//       row.push(i * j);
//     }
//     table.push(row);
//   }

//   return table;
// }

// Test the function with different values
const table1 = createTable(3, 4);
console.log(table1);

/* Expected Outcome:
[
  [0, 0, 0, 0],
  [0, 1, 2, 3],
  [0, 2, 4, 6]
]
 */

const table2 = createTable(5, 5);
console.log(table2);