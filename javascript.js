//Variables
var settingsButton = document.getElementsByClassName('settings-cog');
var appScreen = document.getElementsByClassName('app');
var settingsScreen = document.getElementsByClassName('app-settings');

settingsButton.onclick = function() {
  appScreen.style.display = "none";
  settingsScreen.style.display = "unset";

}
