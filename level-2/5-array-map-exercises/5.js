// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
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

    let matrixEligibility = people.map(person => {
        const canGoToMatrix = person.age > 17 ? ' can go to the Matrix.' : ' is too young.' 
        return `${person.name}${canGoToMatrix}`
    }) 
    console.log(matrixEligibility)
