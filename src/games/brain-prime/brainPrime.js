/* eslint-disable no-plusplus */
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

class BrainPrime extends GamesSettings {

  gameRules() {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  }

  isPrime = function(num) {
    // eslint-disable-next-line id-length
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  };

  guessCheck = function (num) {
    return this.isPrime(num) ? this.positiveAnswer : this.negativeAnswer;
  };

  gamerGuess = function () {
    this.guess = readlineSync.question(`Question: ${this.generatedNumber} `);
  };

  playGame = function () {
    while (this.roundsNumber > 0) {
      this.getGuess(this.isPrime);
      if (!this.checkResult(this.result)) {
        return false;
      }
    }
    return true;
  };
}

export default function init(roundsNumber, maxNumber) {
  const game = new BrainPrime(roundsNumber, maxNumber);
  startGame(game);
}