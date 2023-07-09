const readline = require('readline-sync');
let health = 100
let inventory = ["Health Potion +10hp", "Steel Short Sword"]

function printStatus(){
  console.log(health, inventory)
}

const name = readline.question('What is your name? ') 
console.log(`Welcome to the game ${name}. You are an explorer who has been given knowledge of a hidden treasure in the deepest part of a dangerous dungeon. The dungeon is located inside a cave at the base of a skull shaped hill. After making your way through a dark and creepy forest, you find yourself standing before the open maw of the skull shaped hill. You take a deep breath and enter the dark, dangerous cave.`)


function Enemy(name, attack, number, health){
  this.name = name
  this.attack = attack
  this.number = number
  this.health = health
}

const troll = new Enemy("Cave Troll", "Club", 1, 30)
const giantSpider = new Enemy("Giant Spider", "Bite", 2, 20)
const umberhulk = new Enemy("Umberhulk", "Bite", 3, 25)
const skeleton = new Enemy("Animated Skeleton", "Rusty Sword", 4, 15)

function encounter(){

  let encounterGenerator = Math.floor(Math.random() * 11) +1;
  encounterGenerator === 1 ? fight(troll)
  :
  encounterGenerator === 2 ? fight(giantSpider)
  :
  encounterGenerator === 3 ? fight(umberhulk)
  :
  encounterGenerator === 4 ? fight(skeleton) 
  :
  console.log('Looks like the coast is clear for now, but proceed carefully.')
}

function walk(){
  const walkPrompt = readline.question("(w) to walk, (p) to check status.  ")
  walkPrompt === "w" ? encounter()
  :
  walkPrompt === "p" && printStatus()
}

while(health > 0){
  walk()
  }
  
  function fPrompt() {
    const fightPrompt = readline.question("(r) to run away, (f) to fight")
  }

function fight(fightEnemy){
  fightEnemy.name === "Cave Troll" ? fightIntro = () => {console.log("Oh no! A Cave Troll has appeared!");fPrompt()}
  :
  fightEnemy.name === "Giant Spider" ? fightIntro = () => {console.log("Oh no! A Giant Spider has appeared!");fPrompt()}
  :
  fightEnemy.name === "Umberhulk" ? fightIntro = () => {console.log("Oh no! An Umberhulk has appeared!");fPrompt()}
  :  
  fightEnemy.name === "Animated Skeleton" ? fightIntro = () => {console.log("Oh no! An Animated Skeleton has appeared!");fPrompt()}
  :
  console.log()
}

 /*if (fightEnemy){
    if (fightEnemy?.name === 'Cave Troll'){
      console.log("Oh no! A Cave Troll has appeared!")
    }
  }
  hello = () => {return "Hello World!";}
  */

/*function chase(){
  let dash = Math.floor(Math.random() * 11) +1;
  //write in increased escape chance if smoke bomb is in inventory
  dash <= 5 ?? escape()
}

function escape(){
  console.log("That was a close one! Keep an eye on your health, too many encounters and you might fall asleep on the job!")
}*/




