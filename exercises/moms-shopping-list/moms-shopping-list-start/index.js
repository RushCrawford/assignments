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
/*x.style.width = "50px"
edit.style.width = "50px"
x.style.marginLeft = "370px"
edit.style.marginLeft = "370px"
x.style.marginBottom = "25px"*/
edit.textContent = "edit"
div.textContent = name
x.textContent = "X"
edit.setAttribute("id", "edit"+index)
div.setAttribute("id", "div"+index)
let newLi = document.createElement("li")
div.append(edit, x)

document.getElementById("list").append(div)

x.addEventListener("click", function(){
    div.remove(div)
    edit.remove(edit)
    x.remove(x)
})
edit.addEventListener("click", function(){
   let newInput = document.createElement("input")
   newInput.textContent = "new name"
   const id = "div"+cur
   const divA = document.getElementById(id)
   console.log(divA)
   divA.append(newInput)
   /*let editButton = document.createElement("button")
   editButton.textContent = "Submit"
   divA.append(editButton)*/
   let saveButon = edit.textContent = "Save"

})

index++
})

