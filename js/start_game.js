"use strict";
const gameStartSec = document.querySelector(".game-start");
const startBtn = document.querySelector(".startBtn");
const timer = document.querySelector(".timer");

let time = 10;

let setTimer = setInterval(() => {
  if (playBtn.classList.contains(START) && time >= 0) {
    timerGo();
  } else if (time < 0) {
    playSound(alertSound);
    clearInterval(setTimer);
    endGame();
  }
}, 1000);

function timerGo() {
  const minute = String(Math.floor(time / 60)).padStart(2, "0");
  const second = String(time % 60).padStart(2, "0");
  timer.textContent = `${minute}:${second}`;
  time--;
}

function onGameStart() {
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
