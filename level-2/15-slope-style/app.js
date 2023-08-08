// to help this function return an array of animals, no matter how many animals are passed to it:

    //     function collectAnimals(...animals) {
    //         console.log(animals)
    //     }
    // collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")

    // Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:

        // function combineFruit(fruit, sweets, vegetables){
        //     let result = {fruit, sweets, vegetables}
        //     console.log(result)
        // }
        
        // combineFruit(["apple", "pear"],
        //              ["cake", "pie"],
        //              ["carrot"])
    
//Use destructuring to use the property names as variables. Destructure the object in the parameter:

    // function parseSentence({location,duration}){
    //     return `We're going to have a good time in ${location} for ${duration}`
    //     }
    
    // const sentence = parseSentence({
    //     location: "Burly Idaho",
    //     duration: "2 weeks"
    //     });

    // console.log(sentence)

//Use array destructuring to make this code ES6:

    // function returnFirst([...items]){
    //     const [firstItem] = items;
    //     return firstItem
    // }
    // const arr = returnFirst([10,2,3,4,5,6,7])
    // console.log(arr)

// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

    // const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

    // function returnFavorites(arr){
    //     const [firstFav, secondFav, thirdFav] = arr
    //     return `My top three favorite activities are ${firstFav}, ${secondFav} and ${thirdFav}.`
    // }

    // const result = returnFavorites(favoriteActivities)
    // console.log(result)


//Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

    // function combineAnimals(...arrays) {
    //     return [].concat(...arrays)
    // }

    // const realAnimals = ["dog", "cat", "mouse"];
    // const magicalAnimals = ["jackolope"];
    // const mysteriousAnimals = ["platypus"];

    // const result = combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);
    // console.log(result)
    // // ["dog", "cat", "mouse", "jackolope", "platypus"]


//Try to make the following function more ES6y:
    // const product = (...nums) => {var numbers = [...nums];return numbers.reduce((acc, num) => {return acc * num;}, 1)}

    // const result = product(2,2,2,2,2)
    // console.log(result)


//Make the following function more ES6y. Use at least both the rest and spread operators:
    // const unshift = (...array) => {return [].concat(...array);}
    // console.log(unshift([1,2,3],'a','b','c','d','e'))


//Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:
function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        const [firstName,lastName] = names
        // console.log(name)
        // your code
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]