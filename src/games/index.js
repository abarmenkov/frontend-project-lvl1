/* eslint-disable spaced-comment */
/* eslint-disable sort-imports */
/* eslint-disable no-magic-numbers */
/* eslint-disable max-statements */
/* eslint-disable no-ternary */
//import readlineSync from 'readline-sync';
// eslint-disable-next-line sort-imports
// eslint-disable-next-line import/extensions

export default function startGame(game) {
  game.greetGamer();
  game.gameRules();
  if (game.playGame()) {
    game.congratulate();
  }
}