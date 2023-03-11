var square = document.getElementById("square")

function mouseEnter() {
    square.style.backgroundColor = "blue"
}
function mouseDown(){
    square.style.backgroundColor = "red"
}
function mouseUp(){
    square.style.backgroundColor = "yellow"
}
function dblClick(){
    square.style.backgroundColor = "green"
}
function wheel(){
    document.body.style.backgroundColor = "orange"
}
function keyPress(){
    square.style.backgroundColor = "red"
}


square.addEventListener("mouseEnter", mouseEnter)
square.addEventListener("mouseDown", mouseDown)
square.addEventListener("mouseUp", mouseUp)
square.addEventListener("dblClick", dblClick)
square.addEventListener("wheel", wheel)
square.addEventListener("keyPress", keyPress)