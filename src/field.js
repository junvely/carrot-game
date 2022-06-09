"use strict";
import * as sound from "./sound.js";

export class Field {
  constructor(items, count, gameOn) {
    this.items = items;
    this.gameOn = gameOn;
    this.count = count;

    this.carrots = [];
    this.bugs = [];
    this.id = 0;

    items.addEventListener("click", this.onItemsClick);

    window.addEventListener("resize", () => {
      this.randomCoord();
    });
  }

  setGameEnd(end) {
    this.end = end;
  }

  setCountCarrot(countCarrot) {
    this.countCarrot = countCarrot;
  }

  arrPushItems() {
    this.carrots.length = 0;
    this.bugs.length = 0;
    for (let j = 0; j < this.count; j++) {
      this.carrots.push(`<li class="item carrot" data-id="${this.id}"></li>`);
      this.bugs.push(`<li class="item bug" data-id="${this.id}"></li>`);
      this.id++;
    }
  }

  innerItems() {
    this.arrPushItems();
    this.items.innerHTML = `${this.carrots.join("")}${this.bugs.join("")}`;
    this.randomCoord();
  }

  onItemsClick = (e) => {
    const target = e.target;
    const dataset = target.dataset;
    const id = dataset.id;
    const idTarget = document.querySelector(`.item[data-id="${id}"`);

    if (!this.gameOn) {
      return;
    } else if (target.matches(".carrot")) {
      sound.playCarrotSound();
      idTarget.remove();
      this.countCarrot();
    } else if (target.matches(".bug")) {
      sound.playBugSound();
      this.end();
    }
  };

  randomCoord() {
    let itemsWidth = this.items.clientWidth - 80;
    let itemsHeight = this.items.clientHeight - 80;
    const item = this.items.querySelectorAll(".item");
    item.forEach((item) => {
      item.style.transform = `translate(${this.randomNumber(
        itemsWidth
      )}px,${this.randomNumber(itemsHeight)}px)`;
    });
  }

  randomNumber(itemsRect) {
    return Math.floor(Math.random() * itemsRect);
  }
}
