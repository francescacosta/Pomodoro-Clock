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

var increaseTimer = function(value) {
   pomodoroTimer += 1;
}

upArrow.onclick = function() {
  increaseTimer();
  console.log(pomodoroTimer);
}
