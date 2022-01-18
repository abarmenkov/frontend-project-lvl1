/* eslint-disable max-params */
/* eslint-disable id-length */
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

class BrainProgression extends GamesSettings {
  constructor (roundsNumber, maxNumber = 30, maxStep = 10, length = 5) {
    super(roundsNumber);
    this.maxNumber = maxNumber;
    this.length = length;
    this.maxStep = maxStep;
  }

  generatedArray;

  splicedNumber;

  gameRules = function() {
    console.log('What number is missing in the progression?');
  };

  // num -диапазон шага до какого числа, +1 -чтобы шаг не был равен 0
  getProgressionStep = function(num) {
    return this.generateNumber(num) + 1;
  };

  generateArrNumbers = function(step, num) {
    const arr = [];
    let arrLength = this.generateNumber(num);
    if (arrLength < this.length) {
      arrLength = this.length;
    }
    const progressionStep = this.getProgressionStep(step);
    const firstNumber = this.generateNumber(num);
    arr.push(firstNumber);
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < arrLength; i++) {
      arr[i] = arr[i - 1] + progressionStep;
    }
    this.splicedNumber = Number(arr.splice(this.getHideIndex(arrLength), 1, '..').join());
    return arr.join(' ');
  };

  getHideIndex = function (length) {
    return this.generateNumber(length - 1);
  };

  gamerGuess = function () {
    this.guess = readlineSync.question(`Question:  ${this.generateArrNumbers(this.maxStep, this.maxNumber)} `);
  };

  // eslint-disable-next-line max-params
  getGuessResult = function (guess) {

    return this.splicedNumber === Number(guess);
  };

  playGame = function () {
    while (this.roundsNumber > 0) {
      this.gamerGuess();
      this.printAnswer();
      // eslint-disable-next-line max-len
      this.result = this.getGuessResult(this.guess);
      this.correctAnswer = this.splicedNumber;
      if (!this.checkResult(this.result)) {
        return false;
      }
    }
    return true;
  };
}

export default function init(roundsNumber, num) {
  const game = new BrainProgression(roundsNumber, num);
  startGame(game);
}