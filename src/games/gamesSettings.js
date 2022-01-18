/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable class-methods-use-this */
/* eslint-disable func-names */
/* eslint-disable no-magic-numbers */
import readlineSync from 'readline-sync';

export default class GamesSettings {
  // eslint-disable-next-line array-element-newline
  constructor(roundsNumber = 3, maxNumber = 100, signList = ['+', '-', '*']) {
    this.roundsNumber = roundsNumber;
    this.maxNumber = maxNumber;
    this.signList = signList;
  }

  gamerName

  correctAnswer

  generatedNumber

  generatedSecondNumber

  guess

  result

  positiveAnswer = 'yes';

  negativeAnswer = 'no';

  greetGamer = function () {
    console.log('Welcome to the Brain Games!');
    this.gamerName = readlineSync.question('May I have your name? ');
    console.log(`Hello,  ${this.gamerName}!`);
  };

  generateNumber = function (num) {
    return Math.round(Math.random() * num);
  };

  getGuess = function (func) {
    this.generatedNumber = this.generateNumber(this.maxNumber);
    this.gamerGuess();
    this.printAnswer();
    this.result = this.getGuessResult(func(this.generatedNumber), this.guess);
    this.correctAnswer = this.guessCheck(this.generatedNumber);
  };

  getGuessResult = function (checkedNum, guess) {
    // eslint-disable-next-line max-len
    return (checkedNum && guess === this.positiveAnswer) || (!checkedNum && guess === this.negativeAnswer);
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

  congratulate = function () {
    console.log(`Congratulations, ${this.gamerName}!`);
  };

  printCorrect = function () {
    console.log('Correct!');
  };
  
  printTryAgain = function () {
    console.log(`Let's try again, ${this.gamerName}!`);
  };

  printWrongAnswer = function () {
    console.log(`"${this.guess}" is wrong answer :(. Correct answer was "${this.correctAnswer}".`);
  };

  printAnswer = function () {
    console.log(`Your answer: ${this.guess}`);
  };
}