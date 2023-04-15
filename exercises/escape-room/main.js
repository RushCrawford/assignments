const readline = require("readline-sync");
const name = readline.question("Jigsaw: What is your name? ");
console.log("Jigsaw: Welcome " + name + ", you will be trapped in this room until you can find your way out. May the ODDs INCREASE in your favor.")
console.log("You look around the room to find it bare, except for blood on the walls and floor and five points of interest. The door with a keypad, a dresser with three drawers, a fist-sized hole in the wall, an ornate chest, and a large area rug.")
const action = readline.question("What would you like to do? (door, keypad, dresser, hole, chest, rug)")

if (action == "door") {
    console.log("You walk over to the door and try the handle, it's locked. It appears to need a four digit key to open.")
    //readline.question("What would you like to do? (door, keypad, dresser, hole, chest, rug)")
    console.log(action)
} else if (action == "dresser") {
    console.log("You go to the dress and search the drawers, finding them all empty. You tip it over in frustration and on the bottom you find 'III' drawn in blood.")
    readline.question("What would you like to do? (door, keypad, dresser, hole, chest, rug)")
} else {console.log(action)}
