/* eslint-disable max-len */
/* eslint-disable max-statements */
/* eslint-disable sort-imports */
/* eslint-disable import/extensions */
/* eslint-disable no-ternary */
/* eslint-disable no-magic-numbers */
/* eslint-disable func-names */
/* eslint-disable class-methods-use-this */
// eslint-disable-next-line import/extensions
import readlineSync from 'readline-sync';
import GamesSettings from "../gamesSettings.js";
import startGame from '../index.js';

class BrainGcd extends GamesSettings {

  gameRules() {
    console.log('Find the greatest common divisor of given numbers.');
  }

  gamerGuess = function () {
    this.guess = readlineSync.question(`Question: ${this.generatedNumber} ${this.generatedSecondNumber} `);
  };

  // eslint-disable-next-line id-length
  NOD = function (x, y) {
    if (y > x) return this.NOD(y, x);
    if (!y) return x;
    return this.NOD(y, x % y);
  };

  // eslint-disable-next-line max-params
  getGuessResult = function (num1, num2, guess) {

    return this.NOD(num1, num2) === Number(guess);
  };

  playGame = function () {
    while (this.roundsNumber > 0) {
      this.generatedNumber = this.generateNumber(this.maxNumber);
      this.generatedSecondNumber = this.generateNumber(this.maxNumber);
      this.gamerGuess();
      this.printAnswer();
      // eslint-disable-next-line max-len
      this.result = this.getGuessResult(this.generatedNumber, this.generatedSecondNumber, this.guess);
      this.correctAnswer = this.NOD(this.generatedNumber, this.generatedSecondNumber);
      if (!this.checkResult(this.result)) {
        return false;
      }
    }
    return true;
  };
}

export default function init(roundsNumber, num) {
  const game = new BrainGcd(roundsNumber, num);
  startGame(game);
}