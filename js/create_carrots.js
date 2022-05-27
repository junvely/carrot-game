"use strict";

const items = document.querySelector(".items");
const carrots = [];
const bugs = [];
const count = 10;
let id = 0;

function arrPushItems() {
  for (let j = 0; j < count; j++) {
    carrots.push(
      `<li class="item carrot" data-id="${id}" data-type="carrot"></li>`
    );
    bugs.push(`<li class="item bug" data-id="${id}" data-type="bug"></li>`);
    id++;
  }
}

function innerItems() {
  arrPushItems();
  items.innerHTML = `${carrots.join("")}${bugs.join("")}`;
  randomCoord();
}
