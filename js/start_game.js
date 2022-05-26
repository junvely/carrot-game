"use strict";
const startBtn = document.querySelector(".startBtn");
const playBtn = document.querySelector(".playBtn");
const icon = playBtn.querySelector("i");

const alertSound = new Audio("sound/alert.wav");

let setTimer = setInterval(() => {
  if (playBtn.classList.contains(START) && i >= 0) {
    go();
    console.log(i);
  } else if (i < 0) {
    alertSound.play();
    clearInterval(setTimer);
    endGame();
  }
}, 1000);

let i = 10;
function go() {
  const timer = document.querySelector(".timer");
  timer.textContent = `00:${i}`;
  i--;
}

function onGameStart() {
  const gameStartSec = document.querySelector(".game-start");
  gameStartSec.style.display = "none";
  onPlaySwitch();
  innerItems();
  countCarrot();
}

function countCarrot() {
  const count = document.querySelector(".carrot-count");
  const carrotCount = items.childElementCount - 10;
  count.textContent = carrotCount;

  if (carrotCount === 0) {
    endGame();
    gameWin();
  }
}

startBtn.addEventListener("click", () => {
  onGameStart();
});
