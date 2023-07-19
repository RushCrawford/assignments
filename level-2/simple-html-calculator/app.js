let calculatorForm = document['calculator-form'] //get calculator form
 let h1ToDisplayAnswers = document.getElementById("h1-to-display-answers") // create a place to display answers
 let addButton = calculatorForm["add-button"] // create a button to add values
 let subtractButton = calculatorForm["subtract-button"] // create a button to add values
 let multiplyButton = calculatorForm["multiply-button"] // create a button to add values

 const inputBox1 = document.getElementById("input-box-1")//Get input boxes from html
 const inputBox2 = document.getElementById("input-box-2")//Get input boxes from html
 const inputBox3 = document.getElementById("input-box-3")//Get input boxes from html
 const inputBox4 = document.getElementById("input-box-4")//Get input boxes from html
 const inputBox5 = document.getElementById("input-box-5")//Get input boxes from html
 const inputBox6 = document.getElementById("input-box-6")//Get input boxes from html
 
 addButton.addEventListener('click', function(event){
    event.preventDefault()
    const num1 = inputBox1.value
    const num2 = inputBox2.value
    const sum = Number(num1) + Number(num2)
    h1ToDisplayAnswers.textContent = sum
    inputBox1.value = ""
    inputBox2.value = ""
})
subtractButton.addEventListener('click', function(event){
    event.preventDefault()
    const num3 = inputBox3.value
    const num4 = inputBox4.value
    const difference = Number(num3) - Number(num4)
    h1ToDisplayAnswers.textContent = difference
    inputBox3.value = ""
    inputBox4.value = ""
})
multiplyButton.addEventListener('click', function(event){
    event.preventDefault()
    const num5 = inputBox5.value
    const num6 = inputBox6.value
    const difference = Number(num5) * Number(num6)
    h1ToDisplayAnswers.textContent = difference
    inputBox5.value = ""
    inputBox6.value = ""
})
