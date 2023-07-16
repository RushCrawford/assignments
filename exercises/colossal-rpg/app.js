const readline = require('readline-sync');
let health = 200

function Items(name, property){
  this.name = name
  this.property = property
}

const superiorHealthPotion = new Items("Superior Health Potion +30 hp", 30)
const greaterHealthPotion = new Items("Greater Health Potion +20 hp", 20)
const healthPotion = new Items("Health Potion +10", 10)

let availableItems = [superiorHealthPotion, greaterHealthPotion, healthPotion]
let inventory = []


const name = readline.question('What is your name? ') 
console.log(`Welcome to the game ${name}. You are an explorer who has been given knowledge of a hidden treasure in the deepest part of a dangerous dungeon. The dungeon is located inside a cave at the base of a skull shaped hill. After making your way through a dark and creepy forest, you find yourself standing before the open maw of the skull shaped hill. You take a deep breath and enter the dark, dangerous cave.`)



function Enemy(name, weapon, number, health, damageDealt){
  this.name = name
  this.weapon = weapon
  this.number = number
  this.health = health
  this.damageDealt = damageDealt
}


const troll = new Enemy("Cave Troll", "Club", 1, 80, 10)
const giantSpider = new Enemy("Giant Spider", "Bite", 2, 40, 10)
const umberhulk = new Enemy("Umberhulk", "Bite", 3, 60, 10)
const skeleton = new Enemy("Animated Skeleton", "Rusty Sword", 4, 30, 5)
const hero = new Enemy(name, "sword", 0, health, 15)

let enemiesArray = [troll, giantSpider, umberhulk, skeleton]

function runOrFightPromt(enemyInFight) {
  const fightPrompt = readline.question("(r) to run away, (f) to fight   ")

  fightPrompt === "r" ? runAway(enemyInFight)
  :
  fightPrompt === "f" && youStrikeFirst(enemyInFight)
}


function fight(enemyInFight){
  if(enemyInFight === troll){
    console.log("Oh no! A Cave Troll has appeared!");
    runOrFightPromt(enemyInFight)
  } else if(enemyInFight === giantSpider){
    console.log("Oh no! A Giant Spider has appeared!");
    runOrFightPromt(enemyInFight)
  } else if(enemyInFight === umberhulk){
    console.log("Oh no! An Umberhulk has appeared!");
    runOrFightPromt(enemyInFight)
  } else{
    console.log("Oh no! An Animated Skeleton has appeared!");
    runOrFightPromt(enemyInFight)
  }
}


function encounter(){

  let randomlyGeneratedNumber = Math.floor(Math.random() * enemiesArray.length);
  randomlyGeneratedNumber === 0 ? fight(enemiesArray[randomlyGeneratedNumber])
  :
  randomlyGeneratedNumber === 1 ? fight(enemiesArray[randomlyGeneratedNumber])
  :
  randomlyGeneratedNumber === 2 ? fight(enemiesArray[randomlyGeneratedNumber])
  :
  randomlyGeneratedNumber === 3 ? fight(enemiesArray[randomlyGeneratedNumber]) 
  :
  console.log('Looks like the coast is clear for now, but proceed carefully.')
}

function walk(){
  const walkPrompt = readline.question("(w) to walk, (p) to check hp and inventory.  ")
  walkPrompt === "w" ? encounter()
  :
  walkPrompt === "p" && printStatus()
}

while(health > 0 && enemiesArray.length > 0){
  walk()

  if(enemiesArray.length === 0){
    readline.question(`Congradulations ${name}, you have cleared the dungeon of all dangers! You are rewarded a ridiculous amount of gold for your efforts.`)
  }
  }
  
function runAway(enemyInFight){
  let chanceOfrunAway = Math.floor(Math.random() * 2) +1;

  if(chanceOfrunAway === 1){
    readline.question("That was a close one!")
    walk()
  } else{
    readline.question("No escaping this time!")
    theyStrikeFirst(enemyInFight)
  }
}

function theyStrikeFirst(enemyInFight){

  while(hero.health > 0 && enemyInFight.health > 0){
    readline.question(`${enemyInFight.name} lashes out with their ${enemyInFight.weapon} damageDealts you.`)
    hero.health = hero.health - enemyInFight.damageDealt
    console.log(`You damageDealt ${enemyInFight.name}`)
    enemyInFight.health = enemyInFight.health - hero.damageDealt
    console.log(`${name} hp: ${hero.health}, ${enemyInFight.name} hp: ${enemyInFight.health}`)
    readline.question('Hit enter to continue.')
  }
  if(hero.health <= 0){
    console.log("game over")
  } 

  if(enemyInFight.health <= 0){
    //add stuff to inventory
    //whatever happens when you win
  let enemyIndex = enemiesArray.indexOf(enemyInFight)
  readline.question(`Congradulations ${name}, you defeated the ${enemyInFight.name}! No easy task that! Hit enter to continue.`)
  enemiesArray.splice(enemyIndex, 1)

    let randomlyGeneratedNumberForItem = Math.floor(Math.random() * availableItems.length);
    randomlyGeneratedNumberForItem === 0 ? fight(inventory[randomlyGeneratedNumberForItem])
    :
    randomlyGeneratedNumberForItem === 1 ? fight(inventory[randomlyGeneratedNumberForItem])
    :
    randomlyGeneratedNumberForItem === 2 && fight(inventory[randomlyGeneratedNumberForItem]) 

  
  readline.question(`Wow! It looks like ${enemyInFight} dropped ${itemFromEnemy}! It has been added to your inventory and is available for use.`)
  }

}


function youStrikeFirst(enemyInFight){

  while(hero.health > 0 && enemyInFight.health > 0){
    console.log(`You damageDealt ${enemyInFight.name}`)
    enemyInFight.health = enemyInFight.health - hero.damageDealt
    console.log(`${enemyInFight.name} damageDealts you back.`)
    hero.health = hero.health - enemyInFight.damageDealt
    console.log(`${name} hp: ${hero.health}, ${enemyInFight.name} hp: ${enemyInFight.health}`)
    readline.question('Hit enter to continue.')
  }
  if(hero.health <= 0){
    console.log("game over")
  } 

  if(enemyInFight.health <= 0){
    //add stuff to inventory
    //whatever happens when you win
  let enemyIndex = enemiesArray.indexOf(enemyInFight)
  readline.question(`Congradulations ${name}, you defeated the ${enemyInFight.name}! No easy task that! Hit enter to continue.`)
  enemiesArray.splice(enemyIndex, 1)
  }

}

function useInventory(){
  console.log(inventory)
  readline.question(`If desired, enter the number of inventory item you wish to use. `)

}


function printStatus(){
  readline.question(`${name}'s hp: ${health}`)
  readline.question(inventory)
  let accessInventory = readline.question(`Would you like to use an item in your inventory? (y) or (n) `)

  accessInventory === "y" && useInventory()

}





