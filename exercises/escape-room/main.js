const readline = require("readline-sync");
const name = readline.question("Jigsaw: What is your name? ");
console.log(`Jigsaw: Welcome ${name}, you will be trapped in this room until you can find your way out. May the ODDs INCREASE in your favor.`)
console.log("You look around the room to find it bare, except for blood on the walls and floor and five points of interest. The door with a keypad, a dresser with three drawers, a fist-sized hole in the wall, an ornate chest, and a large area rug.")
function keyFunc (){
    let keypad = readline.question("Enter your three digit key")
    keypad === "123" ? console.log("Jigsaw: Well well well, looks like you win this time")
    :
    startOver()
    }
    
function startOver (){
    const sentence = "What would you like to do? (door, keypad, dresser, hole, chest, rug)"
    const action = readline.question(sentence)

        action === "door" ? console.log("You walk over to the door and try the handle, it's locked. It appears to need a three digit key to open.") 
         && startOver()
        :
        action === "dresser" ? console.log("You go to the dress and search the drawers, finding them all empty. You tip it over in frustration and on the bottom you find 'III' drawn in blood.") 
         && startOver()
         :
         console.log("Please enter valid answer.")
        /*:
        action === "hole" ? console.log("You walk to the hole and stick you hand inside, something inside snarls and bites your hand off! You bleed out on the floor and die. :(")
        :
        action === "rug" ? console.log(`You step back and flip over the rug, there is "V" drawn on the floor in blood.` )
        && startOver()
        :
        action === "chest" ? console.log(`You walk to the chest and inspect it. The top is stuck shut but with some effort it pops open. On the bottom of the chest there is "I" drawn in blood.`)
        && startOver()
        :
        action === "keypad" ? console.log("It looks like it requires a three digit pin, you'll need to put them in in the correct order.")
        && keyFunc()*/
}
startOver()