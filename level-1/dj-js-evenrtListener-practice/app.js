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




square.addEventListener("mouseenter", mouseEnter)
square.addEventListener("mousedown", mouseDown)
square.addEventListener("mouseup", mouseUp)
square.addEventListener("dblclick", dblClick)
document.body.addEventListener("wheel", wheel)
document.addEventListener('keydown', (event) => {
  //  var name = event.key;
   // var code = event.code;
    if (event.code === "KeyR") {
        square.style.backgroundColor = "red"
    }   if (event.code === "KeyO") {
        square.style.backgroundColor = "orange"
    }   if (event.code === "KeyY") {
        square.style.backgroundColor = "yellow"
    }   if (event.code === "KeyG") {
        square.style.backgroundColor = "green"
    }   if (event.code === "KeyB") {
        square.style.backgroundColor = "blue"
    }   else {
      //alert(`Key pressed ${name} \n Key code Value: ${code}`);
    }
  }, false);
  