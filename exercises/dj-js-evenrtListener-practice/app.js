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
    square.style.backgroundColor = "orange"
}
function keyPress(){
    if (key == "r") {
        square.style.backgroundColor = "red"
    }
}


square.addEventListener("mouseenter", mouseEnter)
square.addEventListener("mousedown", mouseDown)
square.addEventListener("mouseup", mouseUp)
square.addEventListener("dblclick", dblClick)
document.body.addEventListener("wheel", wheel)
square.addEventListener("keydown", keyPress)