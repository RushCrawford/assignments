/*const readline = require('readline-sync');
let hp = 50
let inventory = []

const name = readline.question('What is your name? ')
console.log(`Welcome to the game ${name}. You are a mouse. Your goal is to get to the cheese at the center of the maze. There are enemies to avoid so beware!`)*/

function Enemy(name, attack, health, tracker){
  this.name = name
  this.attack = attack
  this.heatlh = health
  this.tracker = tracker
}
const cat = new Enemy("Tom Cat", "Claws of Death", 50, 1)
const snake = new Enemy("Jake the Snake", "Jaws of Death", 50, 2)
const mousetrap = new Enemy("Cheese Wedge", "Sudden Snap", 50, 3)

let enemies = [cat, snake, mousetrap]
let d3 = Math.floor(Math.random() * 4) +1;
let d20 = Math.floor(Math.random() * 21) +1;

for(var i = 0; i < enemies.length; i++){
  cat.tracker === d3.valueOf ?? console.log("battle time")
}

console.log(d3)
/*function startOver (){
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

startOver()*/

  /*function w(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }*/

  //write a while loop that while the player health is greater than zero the game keeps going
  //make a function that when the health drops to zero the game is over
  //use constructor functions to build an array of classes for heros or for the enemies

