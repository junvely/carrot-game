"use strict";

function itemsWidth() {
  let itemsWidth = items.clientWidth;
  return itemsWidth;
}

function itemsHeight() {
  let itemsHeight = items.clientHeight;
  return itemsHeight;
}

function randomX() {
  let x = Math.floor(Math.random() * itemsWidth());
  return x;
}

function randomY() {
  let y = Math.floor(Math.random() * itemsHeight());
  return y;
}

function itemRandomCoord() {
  const item = document.querySelectorAll(".item");
  item.forEach((item) => {
    item.style.transform = `translate(${randomX()}px,${randomY()}px)`;
  });
}

window.addEventListener("resize", () => {
  itemRandomCoord();
});
