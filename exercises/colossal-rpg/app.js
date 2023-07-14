const readline = require('readline-sync');
let health = 100
let inventory = ["Health Potion +10hp", "Steel Short Sword"]

function printStatus(){
  console.log(health, inventory)
}

const name = readline.question('What is your name? ') 
console.log(`Welcome to the game ${name}. You are an explorer who has been given knowledge of a hidden treasure in the deepest part of a dangerous dungeon. The dungeon is located inside a cave at the base of a skull shaped hill. After making your way through a dark and creepy forest, you find yourself standing before the open maw of the skull shaped hill. You take a deep breath and enter the dark, dangerous cave.`)


function Enemy(name, weapon, number, health, attack){
  this.name = name
  this.weapon = weapon
  this.number = number
  this.health = health
  this.attack = attack
}

Enemy.prototype.attack = function() {
  console.log(this.attack)
}

const troll = new Enemy("Cave Troll", "Club", 1, 80, 10)
const giantSpider = new Enemy("Giant Spider", "Bite", 2, 40, 10)
const umberhulk = new Enemy("Umberhulk", "Bite", 3, 60, 10)
const skeleton = new Enemy("Animated Skeleton", "Rusty Sword", 4, 30, 5)
const hero = new Enemy(name, "sword", 0, health, 15)

let enemiesArr = [troll, giantSpider, umberhulk, skeleton]

function fPrompt(fightEnemy) {
  const fightPrompt = readline.question("(r) to run away, (f) to fight   ")

  fightPrompt === "r" ? escape(fightEnemy)
  :
  fightPrompt === "f" && fightToTheDeath(fightEnemy)
}


function fight(fightEnemy){
 // console.log(fightEnemy)
  if(fightEnemy === troll){
    console.log("Oh no! A Cave Troll has appeared!");
    fPrompt(fightEnemy)
  } else if(fightEnemy === giantSpider){
    console.log("Oh no! A Giant Spider has appeared!");
    fPrompt(fightEnemy)
  } else if(fightEnemy === umberhulk){
    console.log("Oh no! An Umberhulk has appeared!");
    fPrompt(fightEnemy)
  } else{
    console.log("Oh no! An Animated Skeleton has appeared!");
    fPrompt(fightEnemy)
  }
}


function encounter(){

  let enemyNumber = Math.floor(Math.random() * 4) +1;
  enemyNumber === 1 ? fight(troll)
  :
  enemyNumber === 2 ? fight(giantSpider)
  :
  enemyNumber === 3 ? fight(umberhulk)
  :
  enemyNumber === 4 ? fight(skeleton) 
  :
  console.log('Looks like the coast is clear for now, but proceed carefully.')
}

function walk(){
  const walkPrompt = readline.question("(w) to walk, (p) to check status.  ")
  walkPrompt === "w" ? encounter()
  :
  walkPrompt === "p" && printStatus()
}

while(health > 0 && enemiesArr.length > 0){
  walk()
  }
  
function escape(fightEnemy){
  let chanceOfEscape = Math.floor(Math.random() * 2) +1;

  if(chanceOfEscape === 1){
    console.log("That was a close one!")
    walk()
  } else{
    console.log("No escaping this time!")
    fightToTheDeath(fightEnemy)
  }
}


function fightToTheDeath(fightEnemy){
  //health name Enemy
  //let winner = whoWon()
  //console.log(fightEnemy.attack)

  while(hero.health > 0 && fightEnemy.health > 0){
    //where fight sequence happens
    console.log(`You attack ${fightEnemy.name}`)
    fightEnemy.health = fightEnemy.health - hero.attack
    console.log(`${fightEnemy.name} attacks you back.`)
    hero.health = hero.health - fightEnemy.attack
    console.log(`${name} hp: ${hero.health}, ${fightEnemy.name} hp: ${fightEnemy.health}`)
    readline.question('Hit enter to strike again.')
  }

  if(hero.health <= 0){
    console.log("game over")
  } 

  if(fightEnemy.health <= 0){
    //add stuff to inventory
    //whatever happens when you win
    //remove enemy from array
  }

}
//key in pause




