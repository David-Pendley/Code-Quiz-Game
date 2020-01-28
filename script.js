var secondsLeft = 10;
var timerDiv = document.querySelector(".timer");
console.log(secondsLeft);
console.log(timerDiv);
timerDiv.textContent = secondsLeft + "s";
var intervalId = setInterval(function() {
  secondsLeft--;
  timerDiv.textContent = secondsLeft + "s";
  if (secondsLeft === 0) {
    clearInterval(intervalId);
  }
}, 1000);
