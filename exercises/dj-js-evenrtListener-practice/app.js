var square = document.getElementById("square")

function squareHover() {
    console.log("It works!")
}

function squareDblclick(){
    document.square.style.backgroundColor = "red"
}

square.addEventListener("click", squareDblclick)