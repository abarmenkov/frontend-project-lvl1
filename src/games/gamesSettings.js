/* eslint-disable no-trailing-spaces */
/* eslint-disable class-methods-use-this */
/* eslint-disable func-names */
/* eslint-disable no-magic-numbers */
import readlineSync from 'readline-sync';

export default class GamesSettings {
  constructor(roundsNumber = 3, maxNumber = 100) {
    this.roundsNumber = roundsNumber;
    this.maxNumber = maxNumber;
  }

  gamerName;

  correctAnswer;

  generatedNumber;

  guess;

  result;

  greetGamer = function () {
    console.log('Welcome to the Brain Games!');
    this.gamerName = readlineSync.question('May I have your name? ');
    console.log(`Hello,  ${this.gamerName}!`);
  };

  generateNumber = function () {
    return Math.ceil(Math.random() * this.maxNumber);
  };

  gamerGuess = function () {
    this.guess = readlineSync.question(`Question:  ${this.generatedNumber} `);
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