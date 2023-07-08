const readline = require('readline-sync');
let health = 100
let inventory = ["Health Potion", "Steel Short Sword"]

function printStatus(){
  console.log(health, inventory)
}

const name = readline.question('What is your name? ') 
console.log(`Welcome to the game ${name}. You are an explorer who has been given knowledge of a hidden treasure in the deepest part of a dangerous dungeon. The dungeon is located inside a cave at the base of a skull shaped hill. After making your way through a dark and creepy forest, you find yourself standing before the open maw of the skull shaped hill. You take a deep breath and enter the dark, dangerous cave.`)

while(health > 0){
walk()
}

function walk(){
  const walkPrompt = readline.question("(w) to walk, (p) to check status.  ")
  walkPrompt === "w" ? encounter()
  :
  walkPrompt === "p" ?? printStatus()
}



function Enemy(name, attack, number, health){
  this.name = name
  this.attack = attack
  this.number = number
  this.health = health
}

const troll = new Enemy("Cave Troll", "Club", 1)
const giantSpider = new Enemy("Giant Spider", "Jaws of Death", 2)
const umberhulk = new Enemy("Umberhulk", "Sudden Snap", 3)
const skeleton = new Enemy("Animated Skeleton", "Icky Sticky Stuff", 4)




function encounter(){
  //having trouble getting the math.random funciton to the pull enemies.
  let encounterGenerator = Math.floor(Math.random() * 11) +1;
  encounterGenerator === 1 ? console.log(troll.name)
  :
  encounterGenerator === 2 ? console.log(giantSpider.name)
  :
  encounterGenerator === 3 ? console.log(umberhulk.name)
  :
  encounterGenerator === 4 ? console.log(skeleton.name)
  :
  console.log('Looks like the coast is clear for now, but proceed carefully.')
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
  console.log("That was a close one! Keep an eye on your health, too many encounters and you might fall asleep on the job!")
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

