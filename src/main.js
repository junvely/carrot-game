"use strict";
import { GameBuilder } from "./game.js";

const game = new GameBuilder()
  .time(10) //
  .count(10) //
  .gameOn(false)
  .builder();
