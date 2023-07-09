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
  