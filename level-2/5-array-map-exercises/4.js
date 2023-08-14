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
        let namesOnly = people.map(person => person.name) 
          console.log(namesOnly);
    