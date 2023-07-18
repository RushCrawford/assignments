const readline = require('readline-sync');
let health = 100

function Items(name){
  this.name = name
}

const superiorHealthPotion = new Items("Superior Health Potion +50 hp")
const greaterHealthPotion = new Items("Greater Health Potion +25 hp")
const healthPotion = new Items("Health Potion +15")

let inventory = [greaterHealthPotion]

const name = readline.question('What is your name? ') 
console.log('')
console.log(`Welcome to the game ${name}. You are an explorer who has been given knowledge of a hidden treasure in the deepest part of a dangerous dungeon. The dungeon is located inside a cave at the base of a skull shaped hill. After making your way through a dark and creepy forest, you find yourself standing before the open maw of the skull shaped hill. You take a deep breath and enter the dark, dangerous cave.`)
console.log('')

function Enemy(name, weapon, health, damageDealt){
  this.name = name
  this.weapon = weapon
  this.health = health
  this.damageDealt = damageDealt
}

const troll = new Enemy("Cave Troll", "Club", 80, 10)
const giantSpider = new Enemy("Giant Spider", "Bite", 40, 10)
const umberhulk = new Enemy("Umberhulk", "Bite", 60, 10)
const skeleton = new Enemy("Animated Skeleton", "Rusty Sword", 30, 5)
const hero = new Enemy(name, "sword", health, 15)

let enemiesArray = [troll, giantSpider, umberhulk, skeleton]

function runOrFightPromt(enemyInFight) {
  const fightPrompt = readline.question("(r) to run away, (f) to fight   ")
  console.log('')

  fightPrompt === "r" ? runAway(enemyInFight)
  :
  fightPrompt === "f" && youStrikeFirst(enemyInFight)
}

function fight(enemyInFight){
  if(enemyInFight === troll){
    console.log("Oh no! A Cave Troll has appeared!");
    console.log('')
    runOrFightPromt(enemyInFight)
  } else if(enemyInFight === giantSpider){
    console.log("Oh no! A Giant Spider has appeared!");
    console.log('')
    runOrFightPromt(enemyInFight)
  } else if(enemyInFight === umberhulk){
    console.log("Oh no! An Umberhulk has appeared!");
    console.log('')
    runOrFightPromt(enemyInFight)
  } else{
    console.log("Oh no! An Animated Skeleton has appeared!");
    console.log('')
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
  console.log('')
  walkPrompt === "w" ? encounter()
  :
  walkPrompt === "p" && printStatus()
}

while(hero.health > 0){
  walk()

  if(enemiesArray.length === 0){
    console.log('')
    readline.question(`Congradulations ${name}, you have cleared the dungeon of all dangers! You are rewarded a ridiculous amount of gold for your efforts.`)
    console.log('')
    break
  }
  }
  
function runAway(enemyInFight){
  let chanceOfrunAway = Math.floor(Math.random() * 2) +1;

  if(chanceOfrunAway === 1){
    readline.question("That was a close one!")
    console.log('')
    walk()
  } else{
    readline.question("No escaping this time!")
    console.log('')
    theyStrikeFirst(enemyInFight)
  }
}

function theyStrikeFirst(enemyInFight){
  while(hero.health > 0 && enemyInFight.health > 0){
    readline.question(`The ${enemyInFight.name} lashes out with their ${enemyInFight.weapon} hitting you for some damage.`)
    hero.health = hero.health - enemyInFight.damageDealt
    console.log('')
    readline.question(`You slash the ${enemyInFight.name} with your sword!`)
    enemyInFight.health = enemyInFight.health - hero.damageDealt
    console.log('')
    console.log(`${name} hp: ${hero.health}, ${enemyInFight.name} hp: ${enemyInFight.health}`)
    console.log('')
    readline.question('Hit enter to continue.')
    console.log('')
  }

  if(hero.health <= 0){
    console.log("game over")
    gameOver()
  } 

  if(enemyInFight.health <= 0){
    //add stuff to inventory
    //whatever happens when you win
  let enemyIndex = enemiesArray.indexOf(enemyInFight)
  readline.question(`Congradulations ${name}, you defeated the ${enemyInFight.name}! No easy task that! Hit enter to continue.`)
  console.log('')
  enemiesArray.splice(enemyIndex, 1)

   let randomlyGeneratedNumberForItem = Math.floor(Math.random() * 10);
    if(randomlyGeneratedNumberForItem < 4){
      inventory.push(healthPotion)
      readline.question(`Wow! It looks like they dropped a ${healthPotion.name}! It has been added to your inventory and is available for use.`)
      console.log('')
    } else if(randomlyGeneratedNumberForItem === 4){
      inventory.push(greaterHealthPotion)
      readline.question(`Wow! It looks like they dropped a ${greaterHealthPotion.name}! It has been added to your inventory and is available for use.`)
      console.log('')
    } else if(randomlyGeneratedNumberForItem === 5){
      inventory.push(superiorHealthPotion)
      readline.question(`Wow! It looks like they dropped a ${superiorHealthPotion.name}! It has been added to your inventory and is available for use.`)
      console.log('')
    } else{
      readline.question(`Looks like this guy travelled light.`)
      console.log('')
    }
  }

}

function youStrikeFirst(enemyInFight){

  while(hero.health > 0 && enemyInFight.health > 0){
    console.log(`You slash the ${enemyInFight.name} with your sword!`)
    console.log('')
    enemyInFight.health = enemyInFight.health - hero.damageDealt
    console.log(`The ${enemyInFight.name} hits you back with it's ${enemyInFight.weapon}.`)
    console.log('')
    hero.health = hero.health - enemyInFight.damageDealt
    console.log(`${name} hp: ${hero.health}, ${enemyInFight.name} hp: ${enemyInFight.health}`)
    console.log('')
    readline.question('Hit enter to continue.')
    console.log('')
  }
    if(hero.health <= 0){
      console.log("game over")
      gameOver()
    } 

    if(enemyInFight.health <= 0){
      //add stuff to inventory
      //whatever happens when you win
    let enemyIndex = enemiesArray.indexOf(enemyInFight)
    enemiesArray.splice(enemyIndex, 1)

  readline.question(`Congradulations ${name}, you defeated the ${enemyInFight.name}! No easy task that! Hit enter to continue.`)
  let randomlyGeneratedNumberForItem = Math.floor(Math.random() * 10);
    if(randomlyGeneratedNumberForItem < 4){
      inventory.push(healthPotion.name)
      console.log('')
      readline.question(`Wow! It looks like they dropped a ${healthPotion.name}! It has been added to your inventory and is available for use.`)
    } else if(randomlyGeneratedNumberForItem === 4){
      inventory.push(greaterHealthPotion.name)
      console.log('')
      readline.question(`Wow! It looks like they dropped a ${greaterHealthPotion.name}! It has been added to your inventory and is available for use.`)
    } else if(randomlyGeneratedNumberForItem === 5){
      inventory.push(superiorHealthPotion.name)
      console.log('')
      readline.question(`Wow! It looks like they dropped a ${superiorHealthPotion.name}! It has been added to your inventory and is available for use.`)
    } else{
      console.log('')
      readline.question(`Looks like this guy travelled light.`)
      console.log('')
    }
  }
}

function useInventory(){
  console.log('')
  console.log(inventory)
  console.log('')
  useItem = readline.question(`If desired, enter the first three letters of inventory item you wish to use. `)
  console.log('')

    if(useItem === 'hea'){
      hero.health = hero.health + 15
      console.log('')
      readline.question(`${name}'s hp: ${hero.health}`)
      potionIndex = inventory.indexOf(healthPotion)
      inventory.splice(potionIndex, 1)
      console.log('')
      console.log(inventory)
    } else if(useItem === 'gre'){
      hero.health = hero.health + 25
      console.log('')
      readline.question(`${name}'s hp: ${hero.health}`)
      potionIndex = inventory.indexOf(greaterHealthPotion)
      inventory.splice(potionIndex, 1)
      console.log('')
      console.log(inventory)
    } else if(useItem === 'sup'){
      hero.health = hero.health + 50
      console.log('')
      readline.question(`${name}'s hp: ${hero.health}`)
      potionIndex = inventory.indexOf(superiorHealthPotion)
      inventory.splice(potionIndex, 1)
      console.log('')
      console.log(inventory)
    } else {}
}

function printStatus(){
  console.log(`${name}'s hp: ${hero.health}`)
  console.dir(inventory)
  console.log('')
  let accessInventory = readline.question(`Would you like to use an item in your inventory? (y) or (n) `)
  console.log('')

  accessInventory === "y" && useInventory()

}

function gameOver(){
  console.log(`Better luck next time ${name}.`)
}



//when you pull up inventory have it display the name of the items in it
//make win condition that ends code


