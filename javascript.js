// General Variables
var settingsButton = document.getElementsByClassName('settings-cog')[0];
var appScreen = document.getElementsByClassName('app-display')[0];
var settingsScreen = document.getElementsByClassName('settings-display')[0];
var backButton = document.getElementsByClassName('back-text')[0];
var timerCancelButton = document.getElementsByClassName('timer-cancel-button')[0];
var timerView =  document.getElementsByClassName('countdown')[0];
var startButton = document.getElementsByClassName('start')[0];

settingsButton.onclick = function() {
  appScreen.style.display = "none";
  settingsScreen.style.display = "unset";
}

backButton.onclick = function() {
  appScreen.style.display = "unset";
  settingsScreen.style.display = "none";
}

timerCancelButton.onclick = function() {
  clearInterval(refreshIntervalId);
  timerView.innerHTML = "00:00";
}

startButton.onclick = function() {
  var seconds = 60 * pomodoroTimer;

  startTimer(seconds);
}


// POMODORO TIMER VARIABLES
var upArrow = document.getElementsByClassName('pomodoro-arrow-up')[0];
var downArrow = document.getElementsByClassName('pomodoro-arrow-down')[0];
var pomodoroTimer = 24

var pomodoroInput1 = document.getElementsByClassName('pomodoro-input-1')[0];
var pomodoroInput2 = document.getElementsByClassName('pomodoro-input-2')[0];

// POMODORO TIMER FUNCTIONS
var increaseTimer = function() {
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
var breakTimer = 4

var breakInput1 = document.getElementsByClassName('break-input-1')[0];
var breakInput2 = document.getElementsByClassName('break-input-2')[0];

// BREAK TIMER FUNCTIONS

var increaseBreakTimer = function(value) {
  if (breakTimer > 99) {
    return;
  }

  breakTimer += 1;
}

var updateBreakTimer = function(value) {
  var breakStr = breakTimer.toString()

  if (breakStr.length === 1) {
    breakInput2.innerHTML = '0'
    breakInput1.innerHTML = breakStr
  } else if (breakStr.length === 2) {
    breakInput1.innerHTML = breakStr[1]
    breakInput2.innerHTML = breakStr[0]
  }
}

breakUpArrow.onclick = function() {
  increaseBreakTimer();
  updateBreakTimer();
}

var decreaseBreakTimer = function(value) {
  if (breakTimer <= 0) {
    return;
  }
   breakTimer -= 1;

}

breakDownArrow.onclick = function() {
  decreaseBreakTimer();
  updateBreakTimer();
}

//COUNTDOWN VARIABLES
var refreshIntervalId = ""

// COUNTDOWN TIMER
function startTimer(duration) {
    var timer = duration;
    var minutes = 0;
    var seconds = 0;

    var calculateTimer = function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerView.innerHTML = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }

    calculateTimer();
    refreshIntervalId = setInterval(calculateTimer, 1000);
}

// ONLOAD FUNCTIONS
increaseTimer();
updatePomodoroTimer();
increaseBreakTimer();
updateBreakTimer();
