var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

// 1. Returns a list of everyone older than 18, which is !!! use filter to grab all older than 18s
// 2. sorted alphabetically by last name, and where !!! use sort to alphabetize
// 3. each name and age is embedded in a string that looks like an HTML `<li>` element. !!! map to create new array

const peopleArray18 = peopleArray.filter(person => person.age > 18)
const sortedPeopleArray18 = peopleArray18.sort((a,b)=> {const nameA = a.lastName; const nameB = b.lastName
    if(nameA > nameB){
        return 1
    } else if (nameA < nameB){
        return -1
    } else {return 0}
})
const finalPeopleArray = sortedPeopleArray18.map(person => {return `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`})

console.log(finalPeopleArray)