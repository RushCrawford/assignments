const readline = require("readline-sync");
let hp = 100
let inventory = []

const name = readline.question("What is your name? ")
console.log(`Welcome, ${name}, to the mighty jungle of Russan. Your task is to collect the golden idol from the cused temple in the middle of this jungle. Good luck, you will need it.`)
console.log('The hot humid air sticks to you as the loud sounds from the creatures from within the jungle can be heard. Before you is a dense wall of folage that leads into the jungle. (Enter w to walk.')

function w() {
    Math.floor(Math.random() * 11);
}

console.log(w)


