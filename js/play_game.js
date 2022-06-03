"use strict";
const playBtn = document.querySelector(".playBtn");
const icon = playBtn.querySelector("i");

const STOP = "stop";
const START = "start";

function onPlaySwitch() {
  if (gameOn) {
    stopGame();
  } else {
    playGame();
  }
}

function playGame() {
  playSound(bgSound);
  playBtn.className = "playBtn start";
  icon.className = "fa-solid fa-pause";
  gameOn = !gameOn;
}

function stopGame() {
  pauseSound(bgSound);
  playBtn.className = "playBtn stop";
  icon.className = "fa-solid fa-play";
  gameOn = !gameOn;
}

playBtn.addEventListener("click", () => {
  onPlaySwitch();
});
