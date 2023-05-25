const readline = require('readline-sync');
let hp = 100
let inventory = []

const name = readline.question('What is your name? ')
console.log(`Welcome to the game ${name}. You are a mouse. Your goal is to get to the cheese at the center of the maze. There are cats, snakes and moustraps to avoid.`)

const walk = function w(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function startOver (){
  const sentence = "(Enter w to walk.)"
  const action = readline.question(sentence)

      action === "walk" ? walk (console.log(walk),startOver())
      :
      action === "dresser" ? (console.log("You go to the dress and search the drawers, finding them all empty. You tip it over in frustration and on the bottom you find 'III' drawn in blood."), startOver())
      :
      action === "hole" ? (console.log("You walk to the hole and stick you hand inside, something inside snarls and bites your hand off! You bleed out on the floor and die. :("))
      :
      action === "rug" ? (console.log(`You step back and flip over the rug, there is "V" drawn on the floor in blood.` ), startOver())
      :
      action === "chest" ? (console.log(`You walk to the chest and inspect it. The top is stuck shut but with some effort it pops open. On the bottom of the chest there is "I" drawn in blood.`), startOver())
      :
      action === "keypad" ? (console.log("It looks like it requires a three digit pin, you'll need to put them in in the correct order."), keyFunc())
      :
      console.log("Please enter valid answer.")
      
}



  /*function w(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }*/

