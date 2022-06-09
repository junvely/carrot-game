"use strict";

const bgSound = new Audio("sound/bg.mp3");
const carrotSound = new Audio("sound/carrot_pull.mp3");
const bugSound = new Audio("sound/bug_pull.mp3");
const winSound = new Audio("sound/game_win.mp3");
const alertSound = new Audio("sound/alert.wav");

export function playBackground() {
  playSound(bgSound);
}
export function playCarrotSound() {
  playSound(carrotSound);
}
export function playBugSound() {
  playSound(bugSound);
}
export function playWinSound() {
  playSound(winSound);
}
export function playAlertSound() {
  playSound(alertSound);
}
export function stopBackground() {
  pauseSound(bgSound);
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function pauseSound(sound) {
  sound.pause();
}
