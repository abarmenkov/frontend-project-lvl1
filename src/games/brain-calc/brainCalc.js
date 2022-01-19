import readlineSync from 'readline-sync';
import {
  varies, gamerGuess, greetGamer, generateNumber, checkResult, congratulate, printAnswer,
} from '../gamesSettings.js';

function generateSign(num) {
  const index = generateNumber(num);
  return varies.signList[index];
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

function getResult(num1, num2, sign) {
  if (sign === '+') {
    return sum(num1, num2);
  } else if (sign === '-') {
    return subtract(num1, num2);
  } else {
    return multiply(num1, num2);
  }
}

function getGuessResult(correctAnswer, guess) {
  return correctAnswer === Number(guess);
}

function playGame() {
  while (varies.roundsNumber > 0) {
    varies.generatedNumber = generateNumber(varies.maxNumber);
    varies.generatedSecondNumber = generateNumber(varies.maxNumber);
    varies.generatedSign = generateSign(varies.signList.length - 1);
    varies.question = `${varies.generatedNumber} ${varies.generatedSign} ${varies.generatedSecondNumber}`;
    gamerGuess();
    printAnswer();
    varies.correctAnswer = getResult(varies.generatedNumber, varies.generatedSecondNumber, varies.generatedSign);
    varies.result = getGuessResult(varies.correctAnswer, varies.guess);
    if (!checkResult(varies.result)) {
      return false;
    }
  }
  return true;
}

export default function startGame(rounds = 3, maxNumber = 100) {
  varies.roundsNumber = rounds;
  varies.maxNumber = maxNumber;
  greetGamer();
  gameRules();
  if (playGame()) {
    congratulate();
  }
}
