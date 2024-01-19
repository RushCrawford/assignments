function sortByProperty(objects, propertyName) {

  // if (propertyName === 'age') { //CHECKS TO SEE WHAT CRITERIA TO SORT BY
  //   return objects.sort((a,b)=>  
  //     a[propertyName] - b[propertyName] //SORTS NUMERICALLY, LOW TO HIGH
  //   )
  // } else {
  //   return objects.sort((a,b)=>  
  //   a[propertyName].localeCompare(b[propertyName]) //SORTS ALPHABETICALLY
  // )}
  return objects.slice()
}

const people = [
  { name: 'Waluigi', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 28 },
];

const sortedByAge = sortByProperty(people, 'name');
console.log(sortedByAge);


function generateTable(num){
  for (let i = 1; i < 11; i++) {
    console.log(`${num} * ${i} = ${num * i}`)
  }
}


generateTable(3)

// 1 * 3 = 3
// 2 * 3 = 6