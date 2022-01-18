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

  generatedSign

  guess

  result

  positiveAnswer = 'yes'

  negativeAnswer = 'no'

  greetGamer() {
    console.log('Welcome to the Brain Games!');
    this.gamerName = readlineSync.question('May I have your name? ');
    console.log(`Hello,  ${this.gamerName}!`);
  }

  generateNumber(num) {
    return Math.round(Math.random() * num);
  }

  getGuess(func) {
    this.generatedNumber = this.generateNumber(this.maxNumber);
    this.gamerGuess();
    this.printAnswer();
    this.result = this.getGuessResult(func(this.generatedNumber), this.guess);
    this.correctAnswer = this.guessCheck(this.generatedNumber);
  }

  getGuessResult(checkedNum, guess) {
    // eslint-disable-next-line max-len
    return (checkedNum && guess === this.positiveAnswer) || (!checkedNum && guess === this.negativeAnswer);
  }
  
  checkResult() {
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
  }

  congratulate() {
    console.log(`Congratulations, ${this.gamerName}!`);
  }

  printCorrect() {
    console.log('Correct!');
  }
  
  printTryAgain() {
    console.log(`Let's try again, ${this.gamerName}!`);
  }

  printWrongAnswer() {
    console.log(`"${this.guess}" is wrong answer :(. Correct answer was "${this.correctAnswer}".`);
  }

  printAnswer() {
    console.log(`Your answer: ${this.guess}`);
  }
}