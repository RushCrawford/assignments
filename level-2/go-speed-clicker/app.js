let h1Display = document.getElementById("h1-display")
let countDownDisplay = document.getElementById("h1-display-2")
let clickCounter = 0
let timer = 10 // stop clicks when timer reaches zero

let countDownFunc = function(){
    let stopClick = timer--;
    countDownDisplay.textContent = timer
 }

let intervalTimer = setInterval(countDownFunc, 1000)

function endTimer(){
    clearInterval(intervalTimer)
    countDownDisplay.textContent = 'Time is up!!!'
 }

 setTimeout(endTimer,  11000)
//  while(stopClick > 0){
    document.addEventListener("click", () => {
        clickCounter++, 
        h1Display.textContent = clickCounter
})

//let clicks = localStorage.setItem("clicks", h1Display.textContent)

