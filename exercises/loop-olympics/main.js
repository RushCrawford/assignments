//PRELIMS

/*for (var i = 0; i < 10; i++) {
    console.log(i)
}*/

/*for (var i = 9; i >= 0; i--) {
    console.log(i)
}*/

/*const fruit = ["banana", "orange", "apple", "kiwi"]

for (var i = 0; i < fruit.length; i++) {
    console.log(fruit[i])
}*/

//BRONZE

/*let numArray = []
for (var i = 0; i < 10; i++) {
    numArray.push(i)
    console.log(numArray)
}*/

/*for (var i = 0; i <= 100; i++) {
    if (i % 2 === 0)
    console.log(i)
}*/

/*const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for (var i = 0; i < fruit.length; i += 2) {
    console.log(fruit[i])
}*/

//SILVER

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

  //1
  /*for (var i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name)
  }*/

  //2
  /*let names = []
  let occupations = []
  for (var i = 0; i < peopleArray.length; i++) {
    names.push(peopleArray[i].name)
    occupations.push(peopleArray[i].occupation)
  }
  console.log(names, occupations)*/

//3
  let names = []
  let occupations = []
  for (var i = 0; i < peopleArray.length; i++) {
    names.push(peopleArray[i].name)
    occupations.push(peopleArray[i].occupation)
  }
  console.log(names, occupations)

  
