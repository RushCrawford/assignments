const readline = require("readline-sync")
let num1 = readline.question("What is your first number? ")
let num2 = readline.question("What is your second number? ")
let operation = readline.question("Please enter operation; add, sub, mul, div. ")
let sum = parseInt(num1) + parseInt(num2);
let product = num1*num2;
let quotient = num1/num2;
let difference = num1-num2;

if (operation == "add") {
  console.log("The result is " + sum);
} else if (operation == "sub") {
  console.log("The result is " + difference);
} else if (operation == "mul") {
  console.log("The result is " + product);
} else if (operation == "div") {
  console.log("The result is " + quotient);
} else {
    console.log("Input not recognized. Try again.")
}