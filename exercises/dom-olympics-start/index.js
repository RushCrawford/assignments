var header = document.getElementById("header")
//header.style.height = "100px"
header.textContent = "JavaScript Made This!!"
header.style.textAlign = "center"
header.style.fontSize = "30px"

var newOl = document.createElement("ol");
var newP = document.createElement("p");

newP.textContent = "Rush Crawford Wrote this JavaScript"
newP.style.textAlign = "center"


document.body.prepend(newOl)
newOl.prepend(header)
newOl.append(newP)



var messageL = document.getElementsByClassName("message left")
var messageR = document.getElementsByClassName("message right")

messageL[0].textContent = "I have something AWESOME to talk to you about!"
messageL[1].textContent = "I have planned a vacation!"
messageR[0].textContent = "Okay let's hear it!"
messageR[1].textContent = "Where are you taking me?!"
console.log(messageL[0])

function clrText(){
    messageL[0].textContent = ""
    messageL[1].textContent = ""
    messageR[0].textContent = ""
    messageR[1].textContent = ""
     
}
var clrBttn = document.getElementById("clear-button")
clrBttn.addEventListener("click", clrText)


