const readline = require('readline-sync');
let stamina = 100
let inventory = ["Smoke Bomb", "Oil Packet"]
const name = readline.question('What is your name? ')
console.log(`Welcome to the game ${name}. You are a mouse. Your goal is to get to the cheese kept in the kitchen. There are several items that you will need to collect in order to achieve this goal. This house is full of dangers so beware!`)
function stats(){
  console.log( stamina, inventory)
}
while(stamina > 0){
  walk()
}
function Enemy(name, attack, number){
  this.name = name
  this.attack = attack
  this.number = number
}
function Trap(name, attack, number){
  this.name = name
  this.attack = attack
  this.number = number
}

const cat = new Enemy("Tom Cat", "Claws of Death", 1)
const snake = new Enemy("Jake the Snake", "Jaws of Death", 2)
const snapTrap = new Trap("Mousetrap", "Sudden Snap", 3)
const stickyTrap = new Trap("Tar Pit", "Icky Sticky Stuff", 4)


function encounter(){
  //having trouble getting the math.random funciton to the pull enemies.
  let encounterGenerator = Math.floor(Math.random() * 11) +1;
  encounterGenerator === 1 ? fight()
  :
  encounterGenerator === 2 ? snake
  :
  encounterGenerator === 3 ? snapTrap
  :
  encounterGenerator === 4 ? stickyTrap
  :
  console.log('Looks like the coast is clear for now, but proceed carefully.')
}

function walk(){
  const walkPrompt = readline.question("(w) to walk, (p) to check status")
  walkPrompt === "w" ? encounter()
  :
  walkPrompt === "p" ?? stats()
}

function fight(){
  //need to put in message about what has appeared and then give options of what to do
  const fightPrompt = readline.question("(r) to run away, (s) to sneak by, (h) to hide")
  fightPrompt === "r" ?? chase()
  
}

function chase(){
  let dash = Math.floor(Math.random() * 11) +1;
  //write in increased escape chance if smoke bomb is in inventory
  dash <= 5 ?? escape()
}

function escape(){
  console.log("That was a close one! Keep an eye on your stamina, too many encounters and you might fall asleep on the job!")
}




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

