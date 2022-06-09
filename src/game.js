"use strict";
import * as sound from "./sound.js";
import { Field } from "./field.js";

export class GameBuilder {
  time(sec) {
    this.time = sec;
    return this;
  }
  count(num) {
    this.count = num;
    return this;
  }
  gameOn(on) {
    this.gameOn = on;
    return this;
  }
  builder() {
    this.game = new Game(
      this.time, //
      this.count, //
      this.gameOn
    );
  }
}

export class Game {
  constructor(time, count, gameOn) {
    this.time = time;
    this.count = count;
    this.gameOn = gameOn;

    this.gameStartSec = document.querySelector(".game-start");
    this.startBtn = document.querySelector(".startBtn");
    this.playBtn = document.querySelector(".playBtn");
    this.items = document.querySelector(".items");
    this.icon = this.playBtn.querySelector("i");

    this.startBtn.addEventListener("click", () => {
      this.gameStartSec.style.display = "none";
      this.onGameSwitch();
      this.field.innerItems();
      this.countCarrot();
    });

    this.playBtn.addEventListener("click", () => {
      this.onGameSwitch();
    });

    this.field = new Field(this.items, this.count, this.gameOn);
    this.field.setGameEnd(this.end);
    this.field.setCountCarrot(this.countCarrot);
  }

  onGameSwitch() {
    if (this.gameOn) {
      this.stop();
    } else {
      this.play();
    }
  }

  setTimer = setInterval(() => {
    if (this.gameOn && this.time >= 0) {
      this.timerGo();
    } else if (this.time < 0) {
      clearInterval(this.setTimer);
      this.end();
    }
  }, 1000);

  timerGo() {
    const timer = document.querySelector(".timer");
    const minute = String(Math.floor(this.time / 60)).padStart(2, "0");
    const second = String(this.time % 60).padStart(2, "0");
    timer.textContent = `${minute}:${second}`;
    this.time--;
  }

  countCarrot = () => {
    const count = document.querySelector(".carrot-count");
    const carrotCount = this.items.childElementCount - this.count;
    count.textContent = carrotCount;

    if (carrotCount === 0) {
      this.end();
      this.win();
    }
  };

  play() {
    sound.playBackground();
    this.playBtn.className = "playBtn start";
    this.icon.className = "fa-solid fa-pause";
    this.gameOn = true;
    this.field.gameOn = true;
  }

  stop() {
    sound.stopBackground();
    this.playBtn.className = "playBtn stop";
    this.icon.className = "fa-solid fa-play";
    this.gameOn = false;
    this.field.gameOn = false;
  }

  end = () => {
    const gameEndSec = document.querySelector(".game-end");
    const replayBtn = document.querySelector(".replayBtn");
    this.onGameSwitch();
    this.items.style.display = "none";
    gameEndSec.style.display = "flex";
    replayBtn.addEventListener("click", () => {
      window.location.reload();
    });
  };

  win() {
    sound.playWinSound();
    const endTitle = document.querySelector(".game-end h1");
    const endText = document.querySelector(".game-end p");
    const endImg = document.querySelector(".game-end img");

    endTitle.textContent = "You Win!!!";
    endText.textContent =
      "You Win! 당근 10개를 모두 찾았어요! 당신이 이겼습니다!!";
    endImg.setAttribute("src", "img/win.png");
  }
}
