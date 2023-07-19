let paper = document.calculatorForm //get calculator form
// const form = document.querySelector("#form")
//console.log(paper)// show value of paper variable

//  let answer = paper["answer"]
// // console.log(answer)
 let addButton = paper["addButton"] // create a button to add values
 //console.log(addButton)// Show button value

 //let addOne = paper["addOne"].value
//let addTwo = paper["addTwo"].value

const inputBox1 = document.getElementById("inputBox1")//Get input boxes from html
const inputBox2 = document.getElementById("inputBox2")//Get input boxes from html
//console.log(inputBox1, inputBox2)

paper.addEventListener('click', function(event){
event.preventDefault()

const num1 = inputBox1.value
const num2 = inputBox2.value
console.log(num1, num2)

    const sum = Number(num1) + Number(num2)
    console.log(sum)
    // answer.value = sum.value
    //console.log(sum)

    // form.addOne.value = ""
    // form.addTwo.value = ""

})

// define vars

// addition function
// const add = () => {
//     //return inputOne + inputTwo
// }

//getElementById("form") 