let h1Display = document.getElementById("h1-display");
let countDownDisplay = document.getElementById("h1-display-2");
let clickCounter = 0;
let timer = 10; // stop clicks when timer reaches zero
let isTimerEnded = false; // Flag to check if the timer has ended
document.addEventListener("click", () => {
  if (!isTimerEnded) { // Only allow clicks if the timer has not ended
    clickCounter++;
    h1Display.textContent = clickCounter;
    localStorage.setItem("clicks", clickCounter);
  }
});
let countDownFunc = function() {
  timer--;
  countDownDisplay.textContent = timer;
};
let intervalTimer = setInterval(() => {
  countDownFunc();
  if (timer === 0) {
    clearInterval(intervalTimer);
    isTimerEnded = true;
    countDownDisplay.textContent = "Time is up!!!";
  }
}, 1000);
setTimeout(() => {
  clearInterval(intervalTimer);
  isTimerEnded = true;
  countDownDisplay.textContent = "Time is up!!!";
}, 11000);