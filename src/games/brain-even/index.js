/* eslint-disable spaced-comment */
/* eslint-disable sort-imports */
/* eslint-disable no-magic-numbers */
/* eslint-disable max-statements */
/* eslint-disable no-ternary */
//import readlineSync from 'readline-sync';
// eslint-disable-next-line sort-imports
// eslint-disable-next-line import/extensions
import BrainEven from './brainEven.js';

export default function startGame() {
  const game = new BrainEven();
  game.greetGamer();
  game.gameRules();
  if (game.playGame()) {
    game.congratulate();
  }
}