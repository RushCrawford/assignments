// 1) Make an array of numbers that are doubles of the first array
    // let numbersArray = [2, 5, 100]
    // let doubleNumbers = numbersArray.map(nums => nums * 2)
    // console.log(doubleNumbers); // [4, 10, 200]

// 2) Take an array of numbers and make them strings
    // let stringNumbers = numbersArray.map(nums => nums.toString())
    // console.log(stringNumbers)

//3) Capitalize the first letter of each name and make the rest of the characters lowercase
    // let names = ["john", "JACOB", "jinGleHeimer", "schmidt"]
    // let capitalizeNames = names.map(name => {
    //     const a = name.charAt(0).toUpperCase(); 
    //     const b = name.slice(1).toLocaleLowerCase(); 
    //     return a + b
    // })
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
    // let matrixEligibility = people.map(person => {
    //     const canGoToMatrix = person.age > 17 ? ' can go to the Matrix.' : ' is too young.' 
    //     return `${person.name}${canGoToMatrix}`
    // }) 
    // console.log(matrixEligibility)

// 6) Make an array of the names in h1s, and the ages in h2s
    // const readyToPutInDOM = people.map(person => {return `<h1>${person.name}<h1><h2>${person.age}<h2>`})
    // console.log(readyToPutInDOM)