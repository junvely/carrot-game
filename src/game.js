"use strict";
import * as sound from "./sound.js";
import { Field } from "./field.js";

const HIDDEN = "hidden";

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

    this.gameAlert = document.querySelector(".alert");
    this.startBtn = document.querySelector(".startBtn");
    this.playBtn = document.querySelector(".playBtn");
    this.items = document.querySelector(".items");
    this.icon = this.playBtn.querySelector("i");

    this.setTimer;

    this.startBtn.addEventListener("click", () => {
      this.gameAlert.classList.add(HIDDEN);
      this.items.classList.remove(HIDDEN);
      this.timer();
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

  timer() {
    this.time = 10;
    this.setTimer = setInterval(() => {
      if (this.gameOn && this.time >= 0) {
        this.timerGo();
      } else if (this.time < 0) {
        clearInterval(this.setTimer);
        this.end();
      }
    }, 1000);
  }

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
      this.end("win");
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

  end = (reason) => {
    this.onGameSwitch();
    this.items.classList.add(HIDDEN);
    this.gameAlert.classList.remove(HIDDEN);
    this.startBtn.textContent = "Replay";
    if (reason === "win") {
      this.alert(
        "You Win!!!", //
        "You Win! 당근 10개를 모두 찾았어요! 당신이 이겼습니다!!", //
        "img/win.png"
      );
    } else {
      this.alert(
        "Game over! You lose!", //
        "다시 한번 도전해 보시겠어요??", //
        "img/bug.png"
      );
    }
    clearInterval(this.setTimer);
  };

  alert(title, text, img) {
    const alertTitle = document.querySelector(".alert h1");
    const alertText = document.querySelector(".alert p");
    const alertImg = document.querySelector(".alert img");
    sound.playWinSound();
    alertTitle.textContent = title;
    alertText.textContent = text;
    alertImg.setAttribute("src", img);
  }
}
