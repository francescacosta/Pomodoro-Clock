//Variables
var settingsButton = document.getElementsByClassName('settings-cog')[0];
var appScreen = document.getElementsByClassName('app')[0];
var settingsScreen = document.getElementsByClassName('app-settings')[0];
var backButton = document.getElementsByClassName('back-text')[0];

settingsButton.onclick = function() {
  appScreen.style.display = "none";
  settingsScreen.style.display = "unset";
}

backButton.onclick = function() {
  appScreen.style.display = "unset";
  settingsScreen.style.display = "none";
}
