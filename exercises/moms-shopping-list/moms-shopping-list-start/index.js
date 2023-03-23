let form = document.addItem

form.addEventListener("submit", function(event){
    event.preventDefault()

    let name = form.title.value
    form.title.value = ""

let list = document.getElementById("list")

let div = document.createElement("div")
let edit = document.createElement("button")
let x = document.createElement("button")

div.textContent = name
edit.textContent = "edit"
x.textContent = "X"
document.getElementById("list").append(div, edit, x)

x.addEventListener("click", function(){
    console.log("Works")
})
})

