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
  const hero = new Enemy("name", "sword", 0, "health", 15)
  

let enemiesArr = [troll, giantSpider, umberhulk, skeleton]

let enemyIndex = enemiesArr.indexOf(troll)
delete enemiesArr[enemyIndex]
console.log(enemiesArr)





// function Enemy(name, attack, number, health){
//     this.name = name
//     this.attack = attack
//     this.number = number
//     this.health = health
//   }
  
//   Enemy.prototype.attack = function() {
//     console.log(this.attack)
//   }
  
//   const troll = new Enemy("Cave Troll", "Club", 1, 30)
//   const giantSpider = new Enemy("Giant Spider", "Bite", 2, 20)
//   const umberhulk = new Enemy("Umberhulk", "Bite", 3, 25)
//   const skeleton = new Enemy("Animated Skeleton", "Rusty Sword", 4, 15)

//   console.log(troll.attack())
  