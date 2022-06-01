"use strict";

const carrotSound = new Audio("sound/carrot_pull.mp3");
const bugSound = new Audio("sound/bug_pull.mp3");

items.addEventListener("click", (e) => {
  const dataset = e.target.dataset;
  const id = dataset.id;
  const type = dataset.type;
  const idTarget = document.querySelector(`.item[data-id="${id}"`);

  if (playBtn.classList.contains(STOP)) {
    return;
  } else if (id && type === "carrot") {
    carrotSound.play();
    idTarget.remove();
    countCarrot();
  } else if (id && type === "bug") {
    bugSound.play();
    endGame();
  }
});
