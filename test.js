var isSelected;

function getCharacterName() {
  let name = document.getElementById('characterName');
  let greetPlayer = document.getElementById('writePlayerName');

  greetPlayer.innerHTML = "Hello, " + name.value + "!";
}

function highlightClassBorder() {
  isSelected = true;
  document.getElementById("firstClassDiv").style.borderColor = "green";
  document.getElementById("firstClassDiv").style.color = "gold";
}
