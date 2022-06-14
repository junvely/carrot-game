"use strict";
import * as sound from "./sound.js";

const CARROT_SIZE = 80;

export class Field {
  constructor(items, count, gameOn) {
    this.items = items;
    this.gameOn = gameOn;
    this.count = count;

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

  _addItems(itemType) {
    for (let j = 0; j < this.count; j++) {
      const item = document.createElement("li");
      item.setAttribute("class", itemType);
      item.setAttribute("data-id", this.id);
      this.items.appendChild(item);
      this.id++;
    }
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
    let itemsWidth = this.items.clientWidth - CARROT_SIZE;
    let itemsHeight = this.items.clientHeight - CARROT_SIZE;
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
