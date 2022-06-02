"use strict";
const playBtn = document.querySelector(".playBtn");
const icon = playBtn.querySelector("i");

const STOP = "stop";
const START = "start";

function onPlaySwitch() {
  if (playBtn.classList.contains(START)) {
    stopGame();
  } else if (playBtn.classList.contains(STOP)) {
    playGame();
  }
}

function playGame() {
  playSound(bgSound);
  playBtn.className = "playBtn start";
  icon.className = "fa-solid fa-pause";
}

function stopGame() {
  pauseSound(bgSound);
  playBtn.className = "playBtn stop";
  icon.className = "fa-solid fa-play";
}

playBtn.addEventListener("click", () => {
  onPlaySwitch();
});
