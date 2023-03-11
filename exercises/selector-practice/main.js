var game = document.querySelectorAll("ol.game > li")

console.log(Array.from(game))


var words = document.getElementById("words").textContent
document.getElementById("head").textContent = words

document.body.style.backgroundColor = "indigo"

var newLi = document.createElement("li")
newLi.textContent = "This is fun!"
game.appendChild(newLi)

var newP = document.createElement("p")
newP.textContent = "The point of this game is to WIN!!!"
newP.style.color = "white"
newP.style.align = "center"
newP.style.fontSize = "50px"

body.append(newP)
