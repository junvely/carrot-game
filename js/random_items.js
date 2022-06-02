"use strict";

function randomCoord() {
  let itemsWidth = items.clientWidth - 80;
  let itemsHeight = items.clientHeight - 80;
  const item = items.querySelectorAll(".item");
  item.forEach((item) => {
    item.style.transform = `translate(${randomNumber(
      itemsWidth
    )}px,${randomNumber(itemsHeight)}px)`;
  });
}

function randomNumber(itemsRect) {
  return Math.floor(Math.random() * itemsRect);
}

window.addEventListener("resize", () => {
  randomCoord();
});
