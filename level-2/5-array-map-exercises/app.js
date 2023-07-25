// 1) Make an array of numbers that are doubles of the first array
    // let numbersArray = [2, 5, 100]
    // let doubleNumbers = numbersArray.map(nums => nums * 2)
    // console.log(doubleNumbers); // [4, 10, 200]

// 2) Take an array of numbers and make them strings
    // let stringNumbers = numbersArray.map(nums => nums.toString())
    // console.log(stringNumbers)

//3) Capitalize the first letter of each name and make the rest of the characters lowercase
// let names = ["john", "JACOB", "jinGleHeimer", "schmidt"]
// // let capitalizeNames = names.map(name => {name.toLowerCase(); /* name.charAt(0).toUpperCase(); */
// //    })
// let capitalizeNames = names.map(function (name){
//     name.toLowerCase()
// })
// // const capitalized =
// //   name.charAt(0).toUpperCase()
// //   + name.slice(1) name.slice(1)

// console.log(capitalizeNames); 

// 4) Make an array of strings of the names

let people = [
{
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
// let namesOnly = people.map(person => person.name) 
//   console.log(namesOnly);

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix

let namesOnly = people.map(person => {
    if (person.age >= 18){
        `${person.name} is old enough to go to the Matrix`
    } else {`${person.name} is too young`}
}) 

console.log(namesOnly)
// person.age >= 18 ? `${person.name} is old enough to go to the Matrix`
// :
// person.age < 18 && `${person.name} is too young`
