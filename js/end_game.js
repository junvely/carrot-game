"use strict";

function endGame() {
  const gameEndSec = document.querySelector(".game-end");
  const replayBtn = document.querySelector(".replayBtn");
  pauseSound(bgSound);
  onPlaySwitch();
  items.style.display = "none";
  gameEndSec.style.display = "flex";
  replayBtn.addEventListener("click", () => {
    window.location.reload();
  });
}

function gameWin() {
  playSound(winSound);
  const endTitle = document.querySelector(".game-end h1");
  const endText = document.querySelector(".game-end p");
  const endImg = document.querySelector(".game-end img");

  endTitle.textContent = "You Win!!!";
  endText.textContent =
    "You Win! 당근 10개를 모두 찾았어요! 당신이 이겼습니다!!";
  endImg.setAttribute("src", "img/win.png");
}
