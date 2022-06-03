"use strict";

function onItemsRemove(e) {
  const target = e.target;
  const dataset = target.dataset;
  const id = dataset.id;
  const idTarget = document.querySelector(`.item[data-id="${id}"`);

  if (!gameOn) {
    return;
  } else if (target.matches(".carrot")) {
    playSound(carrotSound);
    idTarget.remove();
    countCarrot();
  } else if (target.matches(".bug")) {
    playSound(bugSound);
    endGame();
  }
}

items.addEventListener("click", onItemsRemove);
