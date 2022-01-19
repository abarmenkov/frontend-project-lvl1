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
import {
  variables, greetGamer, generateNumber, checkResult, congratulate, printAnswer,
} from '../gamesSettings.js';

function generateSign(num) {
  const index = generateNumber(num);
  return variables.signList[index];
}

function sum(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function gameRules() {
  console.log('What is the result of the expression?');
}

function gamerGuess() {
  variables.guess = readlineSync.question(`Question: ${variables.generatedNumber} ${variables.generatedSign} ${variables.generatedSecondNumber} `);
}

function getResult(num1, num2, sign) {
  // eslint-disable-next-line no-nested-ternary
  return sign === '+' ? sum(num1, num2) : sign === '-' ? subtract(num1, num2) : multiply(num1, num2);
}

// eslint-disable-next-line max-params
function getGuessResult(correctAnswer, guess) {
  // eslint-disable-next-line max-len
  return correctAnswer === Number(guess);
}

function playGame() {
  while (variables.roundsNumber > 0) {
    variables.generatedNumber = generateNumber(variables.maxNumber);
    variables.generatedSecondNumber = generateNumber(variables.maxNumber);
    variables.generatedSign = generateSign(variables.signList.length - 1);
    gamerGuess();
    printAnswer();
    // eslint-disable-next-line max-len
    variables.correctAnswer = getResult(variables.generatedNumber, variables.generatedSecondNumber, variables.generatedSign);
    variables.result = getGuessResult(variables.correctAnswer, variables.guess);
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