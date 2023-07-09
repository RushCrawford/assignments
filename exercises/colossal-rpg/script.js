function Enemy(name, attack, number, health){
    this.name = name
    this.attack = attack
    this.number = number
    this.health = health
  }
  
  Enemy.prototype.attack = function() {
    console.log(this.attack)
  }
  
  const troll = new Enemy("Cave Troll", "Club", 1, 30)
  const giantSpider = new Enemy("Giant Spider", "Bite", 2, 20)
  const umberhulk = new Enemy("Umberhulk", "Bite", 3, 25)
  const skeleton = new Enemy("Animated Skeleton", "Rusty Sword", 4, 15)

  console.log(troll.attack())
  