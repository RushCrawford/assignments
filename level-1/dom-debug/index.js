const colors = ["red", "blue", "green"]

document.getElementById("add").addEventListener("click", function(e){
    console.log("button clicked")
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
})

function createDropDown(colors){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors; i++){
        const option = createElement("option") 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }
    dropDown.addEventListener("change", function(e){
        e.target.parent.backgroundColor = e.target.value
    })
    return dropDown
}

function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input")
    subItem.textContent = subItemValue
    const dropDown = createDropDown(colors)
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}


