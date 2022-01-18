/* eslint-disable no-extra-semi */
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

export class BrainCalc extends GamesSettings {

  generateSign(num) {
    const index = this.generateNumber(num);
    return this.signList[index];
  }

  sum(num1, num2) {
    return num1 + num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  gameRules() {
    console.log('What is the result of the expression?');
  }

  gamerGuess() {
    this.guess = readlineSync.question(`Question: ${this.generatedNumber} ${this.generatedSign} ${this.generatedSecondNumber} `);
  }

  getResult(num1, num2, sign) {
    // eslint-disable-next-line no-nested-ternary
    return sign === '+' ? this.sum(num1, num2) : sign === '-' ? this.subtract(num1, num2) : this.multiply(num1, num2);
  }

  // eslint-disable-next-line max-params
  getGuessResult(correctAnswer, guess) {
    // eslint-disable-next-line max-len
    return correctAnswer === Number(guess);
  }

  playGame() {
    while (this.roundsNumber > 0) {
      this.generatedNumber = this.generateNumber(this.maxNumber);
      this.generatedSecondNumber = this.generateNumber(this.maxNumber);
      this.generatedSign = this.generateSign(this.signList.length - 1);
      this.gamerGuess();
      this.printAnswer();
      // eslint-disable-next-line max-len
      this.correctAnswer = this.getResult(this.generatedNumber, this.generatedSecondNumber, this.generatedSign);
      this.result = this.getGuessResult(this.correctAnswer, this.guess);
      if (!this.checkResult(this.result)) {
        return false;
      }
    }
    return true;
  }
}

export default function init(roundsNumber, num) {
  const game = new BrainCalc(roundsNumber, num);
  startGame(game);
}