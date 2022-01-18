/* eslint-disable sort-imports */
/* eslint-disable import/extensions */
/* eslint-disable no-ternary */
/* eslint-disable no-magic-numbers */
/* eslint-disable func-names */
/* eslint-disable class-methods-use-this */
// eslint-disable-next-line import/extensions
import readlineSync from 'readline-sync';
import GamesSettings from "../gamesSettings.js";
import startGame from "../index.js";

class BrainEven extends GamesSettings {

  gameRules() {
    console.log('Answer yes if the number is even, otherwise answer no.');
  }

  isEven(num) {
    return num % 2 === 0;
  }

  guessCheck(num) {
    return this.isEven(num) ? this.positiveAnswer : this.negativeAnswer;
  }

  gamerGuess() {
    this.guess = readlineSync.question(`Question: ${this.generatedNumber} `);
  }

  playGame() {
    while (this.roundsNumber > 0) {
      this.getGuess(this.isEven);
      if (!this.checkResult(this.result)) {
        return false;
      }
    }
    return true;
  }
}

export default function init(roundsNumber, maxNumber) {
  const game = new BrainEven(roundsNumber, maxNumber);
  startGame(game);
}