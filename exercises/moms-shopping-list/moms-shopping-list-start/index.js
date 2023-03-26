let form = document.addItem
let index = 0

form.addEventListener("submit", function(event){
    event.preventDefault()
    let name = form.title.value
    form.title.value = "";

let div = document.createElement("div")
let edit = document.createElement("button")
let x = document.createElement("button")
let cur = index
edit.textContent = "edit"
div.textContent = name
x.textContent = "X"
edit.setAttribute("id", "edit"+index)
div.setAttribute("id", "div"+index)
//let newLi = document.createElement("li")
div.append(edit, x)

document.getElementById("list").append(div)

x.addEventListener("click", function(){
    div.remove(div)
    edit.remove(edit)
    x.remove(x)
})
edit.addEventListener("click", function(){
   let newInput = document.createElement("input")
   newInput.value = ""
   const id = "div"+cur
   const divA = document.getElementById(id)
   console.log(divA)
   divA.append(newInput)
   let changeButton = document.createElement("button")
   changeButton.textContent = "Change"
   divA.append(changeButton)
   changeButton.addEventListener("click", function(){

    edit.textContent = "edit"
    div.textContent = newInput.value
        x.textContent = "X"
    edit.setAttribute("id", "edit"+index)
    div.setAttribute("id", "div"+index)
    div.append(edit, x)

})

})

index++
})

