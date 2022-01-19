/* eslint-disable sort-imports */
/* eslint-disable import/extensions */
/* eslint-disable no-ternary */
/* eslint-disable no-magic-numbers */
/* eslint-disable func-names */
/* eslint-disable class-methods-use-this */
// eslint-disable-next-line import/extensions
import readlineSync from 'readline-sync';
import {
  variables, greetGamer, generateNumber, getGuessResult, checkResult, congratulate, printAnswer,
} from '../gamesSettings.js';

function gameRules() {
  console.log('Answer yes if the number is even, otherwise answer no.');
}

function isEven(num) {
  return num % 2 === 0;
}

function guessCheck(num) {
  return isEven(num) ? variables.positiveAnswer : variables.negativeAnswer;
}

function gamerGuess() {
  variables.guess = readlineSync.question(`Question: ${variables.generatedNumber} `);
}

function getGuess(func) {
  variables.generatedNumber = generateNumber(variables.maxNumber);
  gamerGuess();
  printAnswer();
  variables.result = getGuessResult(func(variables.generatedNumber), variables.guess);
  variables.correctAnswer = guessCheck(variables.generatedNumber);
}

export function playGame() {
  while (variables.roundsNumber > 0) {
    getGuess(isEven);
    if (!checkResult(variables.result)) {
      return false;
    }
  }
  return true;
}

export default function startGame(rounds = 3, maxNumber = 100) {
  variables.roundsNumber = rounds;
  variables.maxNumber = maxNumber;
  greetGamer();
  gameRules();
  if (playGame()) {
    congratulate();
  }
}