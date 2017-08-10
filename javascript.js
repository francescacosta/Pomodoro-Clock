//Variables
var settingsButton = document.getElementsByClassName('settings-cog')[0];
var appScreen = document.getElementsByClassName('app-display')[0];
var settingsScreen = document.getElementsByClassName('settings-display')[0];
var backButton = document.getElementsByClassName('back-text')[0];
var timerCancelButton = document.getElementsByClassName('timer-cancel-button')[0];
var timer =  document.getElementsByClassName('countdown')[0];

settingsButton.onclick = function() {
  appScreen.style.display = "none";
  settingsScreen.style.display = "unset";
}

backButton.onclick = function() {
  appScreen.style.display = "unset";
  settingsScreen.style.display = "none";
}

timerCancelButton.onclick = function() {
  timer.innerHTML = "00:00";
}

// POMODORO TIMER
var upArrow = document.getElementsByClassName('pomodoro-arrow-up')[0];
var downArrow = document.getElementsByClassName('pomodoro-arrow-down')[0];
var pomodoroTimer = 0

var pomodoroInput1 = document.getElementsByClassName('pomodoro-input-1')[0];
var pomodoroInput2 = document.getElementsByClassName('pomodoro-input-2')[0];


var increaseTimer = function(value) {
   pomodoroTimer += 1;

   if (pomodoroTimer = 99) {
     return;
   };
}

upArrow.onclick = function() {
  increaseTimer();
  console.log(pomodoroTimer);
  pomodoroInput1.innerHTML = pomodoroTimer

}

var decreaseTimer = function(value) {
   pomodoroTimer -= 1;

   if (pomodoroTimer = 0) {
     return;
   };
}

downArrow.onclick = function() {
  decreaseTimer();
  console.log(pomodoroTimer);
  pomodoroInput1.innerHTML = pomodoroTimer

}

// BREAK TIMER

var breakUpArrow = document.getElementsByClassName('break-arrow-up')[0];
var breakDownArrow = document.getElementsByClassName('break-arrow-down')[0];
var breakTimer = 0

var breakInput1 = document.getElementsByClassName('break-input-1')[0];
var breakInput2 = document.getElementsByClassName('break-input-2')[0];

var increaseBreakTimer = function(value) {
   breakTimer += 1;

}

breakUpArrow.onclick = function() {
  increaseBreakTimer();
  breakInput1.innerHTML = breakTimer

}

var decreaseBreakTimer = function(value) {
   breakTimer -= 1;

}

breakDownArrow.onclick = function() {
  decreaseBreakTimer();
  breakInput1.innerHTML = breakTimer

}
