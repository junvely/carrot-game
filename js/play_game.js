"use strict";

const STOP = "stop";
const START = "start";

const playSound = new Audio("sound/bg.mp3");

function onPlaySwitch() {
  if (playBtn.classList.contains(START)) {
    stopGame();
  } else if (playBtn.classList.contains(STOP)) {
    playGame();
  }
}

function playGame() {
  playSound.play();
  playBtn.className = "playBtn start"; // className? setAttribute?
  icon.className = "fa-solid fa-pause";
}

function stopGame() {
  playSound.pause();
  playBtn.className = "playBtn stop";
  icon.className = "fa-solid fa-play";
}

playBtn.addEventListener("click", () => {
  onPlaySwitch();
});
