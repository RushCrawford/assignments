// 6) Make an array of the names in h1s, and the ages in h2s
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

    const readyToPutInDOM = people.map(person => {return `<h1>${person.name}<h1><h2>${person.age}<h2>`})
    console.log(readyToPutInDOM)