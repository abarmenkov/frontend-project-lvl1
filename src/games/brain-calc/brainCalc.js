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

class BrainCalc extends GamesSettings {

  generatedSign;

  generateSign = function() {
    return this.signList[Math.round(Math.random() * (this.signList.length - 1))];
  };

  sum = function(num1, num2) {
    return num1 + num2;
  };

  multiply = function(num1, num2) {
    return num1 * num2;
  };

  subtract = function(num1, num2) {
    return num1 - num2;
  };

  gameRules = function() {
    console.log('What is the result of the expression?');
  };

  gamerGuess = function () {
    this.guess = readlineSync.question(`Question:  ${this.generatedNumber} ${this.generatedSign} ${this.generatedSecondNumber} `);
  };

  getResult = function (num1, num2, sign) {
    // eslint-disable-next-line no-nested-ternary
    return sign === '+' ? this.sum(num1, num2) : sign === '-' ? this.subtract(num1, num2) : this.multiply(num1, num2);
  };

  // eslint-disable-next-line max-params
  getGuessResult = function (num1, num2, sign, guess) {
    // eslint-disable-next-line max-len
    return this.getResult(num1, num2, sign) === Number(guess);
  };

  checkResult = function () {
    if (this.result) {
      this.printCorrect();
      // eslint-disable-next-line no-plusplus
      this.roundsNumber--;
    } else {
      // eslint-disable-next-line no-useless-concat
      this.printWrongAnswer();
      this.printTryAgain();
      return false;
    }
    return true;
  };

  playGame = function () {
    while (this.roundsNumber > 0) {
      this.generatedNumber = this.generateNumber();
      this.generatedSecondNumber = this.generateNumber();
      this.generatedSign = this.generateSign();
      this.gamerGuess();
      this.printAnswer();
      // eslint-disable-next-line max-len
      this.result = this.getGuessResult(this.generatedNumber, this.generatedSecondNumber, this.generatedSign, this.guess);
      this.correctAnswer = this.getResult(this.generatedNumber, this.generatedSecondNumber, this.generatedSign);
      if (!this.checkResult(this.result)) {
        return false;
      }
    }
    return true;
  };
}

export default function init(roundsNumber, num) {
  const game = new BrainCalc(roundsNumber, num);
  startGame(game);
}