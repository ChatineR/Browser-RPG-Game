
function getCharacterName() {
  let name = document.getElementById('characterName');
  let greetPlayer = document.getElementById('writePlayerName');
  let chosenClassString;

  if (document.getElementById('thorianKnight').checked == true) {
    chosenClassString = "Thorian Knight";
  }

  if (document.getElementById('prismWalker').checked == true) {
    chosenClassString = "Prism Walker";
  }

  if (document.getElementById('boneGuard').checked == true) {
    chosenClassString = "Bone Guard";
  }

  if (name.value == false) {
    greetPlayer.innerHTML = "Please enter your character's name.";
  } else if(name.value != " ") {
    greetPlayer.innerHTML = "Ah, so your name is " + name.value + ", and your chosen <br> class is a " + chosenClassString;
    name.value.color = "gold";
  }
}
