"use strict";

items.addEventListener("click", (e) => {
  const dataset = e.target.dataset;
  const id = dataset.id;
  const type = dataset.type;
  const idTarget = document.querySelector(`.item[data-id="${id}"`);

  if (playBtn.classList.contains(STOP)) {
    return;
  } else if (id && type === "carrot") {
    playSound(carrotSound);
    idTarget.remove();
    countCarrot();
  } else if (id && type === "bug") {
    playSound(bugSound);
    endGame();
  }
});
