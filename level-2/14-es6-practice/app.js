// # 1 `let` and `const`**

// Replace all the `var`s with `let` and `const`. Alter the code however necessary to make sure this continues to work (so the pet's name **isn't** `"John"`, but instead `"spot"` is returned). You only need to delete `var` and insert `let` and `const`

    // const name = "John"
    // const age = 101

    // function runForLoop(pets) {
    //     const petObjects = []
    //     for (let i = 0; i < pets.length; i++) {
    //         const pet = { type: pets[i] }
    //         let name;
    //         if (pets[i] === "cat") {
    //             name = "fluffy"
    //         } else {
    //             name = "spot"
    //         }
    //         console.log("pet name: ", name)
    //         pet.name = name
    //         petObjects.push(pet)
    //     }
    //     console.log("man name: ", name)
    //     return petObjects
    // }

    // runForLoop(["cat", "dog"])

// ** ES6 Arrow Functions **

//     ** Task 1 **
// Re-write this `.map()` using an arrow function:

// const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }

    // const carrots = ["bright orange", "ripe", "rotten"]

    // const mapVegetables = arr => {return arr.map((carrot) => {return ({ type: "carrot", name: carrot })})}

    // console.log(mapVegetables(carrots))


//      ** Task 2 **

// Re-write this `.filter()` ’s callback function using an arrow function:

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

    // function filterForFriendly(arr) {
    //     return arr.filter(function(person) {
    //         return person.friendly
    //     })
    // }

        // const filterForFriendly = arr => {return arr.filter((person) => {return person.friendly})}
        // const friendlys = filterForFriendly(people)
        // console.log(friendlys)

//       ** Task 3 **

// Re-write the following functions to be arrow functions:
// function doMathSum(a, b) {
//     return a + b
// }

    // const doMathSum = (a,b) => {return a + b}

// var produceProduct = function(a, b) {
//     return a * b
// }

    // const produceProduct = (a,b) => {return a * b}

    // console.log(produceProduct(34,823))


//  **Task 4**

// Write a `printString` function that takes `firstName`, `lastName`, and `age` as parameters and returns a string like the following:

    // const printString = (a,b,c) => {let firstName = a; let lastName = b; let age = c; return `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`}
    // console.log(printString('Trayson', 'Kelii', 30))

//  **Task 5**

// Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.
const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
    // const filterForDogs = (arr) => {return arr.filter((animal) =>  { return animal.type === "dog" ? true : false})};

    // // const myFunc = (param) => {param.filter(() => {})}
    // console.log(filterForDogs(animals))


// Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:

    // const printString = (name,location) => { return `Hi ${name}!

    // Welcome to ${location}.

    // I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`}
    // console.log(printString('Anthony','Maui'))