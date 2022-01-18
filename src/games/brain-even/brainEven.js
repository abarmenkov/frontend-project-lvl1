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

  gameRules = function() {
    console.log('Answer yes if the number is even, otherwise answer no.');
  };

  isEven = function(num) {
    return num % 2 === 0;
  };

  guessCheck = function (num) {
    return this.isEven(num) ? this.positiveAnswer : this.negativeAnswer;
  };

  gamerGuess = function () {
    this.guess = readlineSync.question(`Question:  ${this.generatedNumber} `);
  };

  playGame = function () {
    while (this.roundsNumber > 0) {
      this.generatedNumber = this.generateNumber(this.maxNumber);
      this.gamerGuess();
      this.printAnswer();
      this.result = this.getGuessResult(this.isEven(this.generatedNumber), this.guess);
      this.correctAnswer = this.guessCheck(this.generatedNumber);
      if (!this.checkResult(this.result)) {
        return false;
      }
    }
    return true;
  };
}

export default function init(roundsNumber, maxNumber) {
  const game = new BrainEven(roundsNumber, maxNumber);
  startGame(game);
}