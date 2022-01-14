/* eslint-disable func-names */
/* eslint-disable no-magic-numbers */
import readlineSync from 'readline-sync';

export default class GamesSettings {
  constructor(roundNumber = 3, maxNumber = 100) {
    this.roundNumber = roundNumber;
    this.maxNumber = maxNumber;
  }

  gamerName;

  greetGamer = function () {
    console.log('Welcome to the Brain Games!');
    this.gamerName = readlineSync.question('May I have your name? ');
    console.log(`Hello,  ${this.gamerName}!`);
  };

  generateNumber = function () {
    return Math.floor(Math.random() * this.maxNumber);
  };

  congratulate = function () {
    console.log(`Congratulations, ${this.gamerName}!`);
  };
}