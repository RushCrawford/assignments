let form = document["form"]
let inputBox1 = document.getElementById('goombas')
let inputBox2 = document.getElementById('bob-ombs')
let inputBox3 = document.getElementById('cheep-cheeps')
let hiDisplay = document.getElementById('total-owed')

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const num1 = inputBox1.value * 5
    const num2 = inputBox2.value * 7
    const num3 = inputBox3.value * 11
    const goombas = inputBox1.value 
    const bomOmbs = inputBox2.value 
    const cheepCheeps = inputBox3.value 
    const sum = Number(num1) + Number(num2) + Number(num3)
    console.log(sum)
    hiDisplay.textContent = `Mario has smashed a total of ${goombas} Goombas, ${bomOmbs} Bom-Ombs and ${cheepCheeps} Cheep-Cheeps. Earning a total of ${sum} coins!`
    inputBox1.value = ''
    inputBox2.value = ''
    inputBox3.value = ''
})

