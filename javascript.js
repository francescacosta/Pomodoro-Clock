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
  if (pomodoroTimer > 99) {
    return;
  }
  pomodoroTimer += 1;
}

var updatePomodoroTimer = function(value) {
  var pomodoroStr = pomodoroTimer.toString()

  if (pomodoroStr.length === 1) {
    pomodoroInput2.innerHTML = '0'
    pomodoroInput1.innerHTML = pomodoroStr
  } else if (pomodoroStr.length === 2) {
    pomodoroInput1.innerHTML = pomodoroStr[1]
    pomodoroInput2.innerHTML = pomodoroStr[0]
  }
}

upArrow.onclick = function() {
  increaseTimer();
  updatePomodoroTimer();
}

var decreaseTimer = function(value) {
  if (pomodoroTimer <= 0) {
    return;
  }
  pomodoroTimer -= 1;
}

downArrow.onclick = function() {
  decreaseTimer();
  updatePomodoroTimer();

}

// BREAK TIMER VARIABLES

var breakUpArrow = document.getElementsByClassName('break-arrow-up')[0];
var breakDownArrow = document.getElementsByClassName('break-arrow-down')[0];
var breakTimer = 0

var breakInput1 = document.getElementsByClassName('break-input-1')[0];
var breakInput2 = document.getElementsByClassName('break-input-2')[0];

// BREAK TIMER FUNCTIONS

var increaseBreakTimer = function(value) {
  if (breakTimer === 9) {
    return;
  }

  breakTimer += 1;
}

breakUpArrow.onclick = function() {
  increaseBreakTimer();
  breakInput1.innerHTML = breakTimer

}

var decreaseBreakTimer = function(value) {
  if (breakTimer === 0) {
    return;
  }
   breakTimer -= 1;

}

breakDownArrow.onclick = function() {
  decreaseBreakTimer();
  breakInput1.innerHTML = breakTimer

}
