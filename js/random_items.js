"use strict";

function randomCoord() {
  let itemsWidth = items.clientWidth;
  let itemsHeight = items.clientHeight;
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
