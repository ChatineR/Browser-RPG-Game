
var isSelected;

function getCharacterName() {
  let name = document.getElementById('characterName');
  let greetPlayer = document.getElementById('writePlayerName');

  greetPlayer.innerHTML = "Hello, " + name.value + "!";
}

function highlightThorianKnighBorder() {
  let thorianKnightBorder = document.getElementById('thorianKnight').style.borderColor;

  if (thorianKnightBorder == "black") {
    document.getElementById('thorianKnight').style.borderColor = "green";
    isSelected = true;
  } else {
    document.getElementById('thorianKnight').style.borderColor = "black";
    isSelected = false;
  }
  console.log("Thorian Knight: " + isSelected);
}

function highlightprismWalkerBorder() {
  let prismWalkerBorder = document.getElementById('prismWalker').style.borderColor;

  if (prismWalkerBorder == "black") {
    document.getElementById('prismWalker').style.borderColor = "green";
    isSelected = true;
  } else {
    document.getElementById('prismWalker').style.borderColor = "black";
    isSelected = false;
  }
  console.log("Prism Walker: " + isSelected);
}

function highlightBoneGuardBorder() {
  let boneGuardBorder = document.getElementById('boneGuard').style.borderColor;

  if (boneGuardBorder == "black") {
    document.getElementById('boneGuard').style.borderColor = "green";
    isSelected = true;
  } else {
    document.getElementById('boneGuard').style.borderColor = "black";
    isSelected = false;
  }
  console.log("Bone Guard: " + isSelected);
}

if (isSelected = true) {

}
