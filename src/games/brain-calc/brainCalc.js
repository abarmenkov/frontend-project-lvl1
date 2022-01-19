import {
  varies, generateNumber, playGame,
} from '../gamesSettings.js';

varies.rules = 'What is the result of the expression?';

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

function getAnswer(num1, num2, sign) {
  if (sign === '+') {
    varies.correctAnswer = sum(num1, num2);
  } else if (sign === '-') {
    varies.correctAnswer = subtract(num1, num2);
  } else {
    varies.correctAnswer = multiply(num1, num2);
  }
}

varies.generateRound = function () {
  varies.generatedNumber = generateNumber(varies.maxNumber);
  varies.generatedSecondNumber = generateNumber(varies.maxNumber);
  varies.generatedSign = generateSign(varies.signList.length - 1);
  varies.question = `${varies.generatedNumber} ${varies.generatedSign} ${varies.generatedSecondNumber}`;
  getAnswer(varies.generatedNumber, varies.generatedSecondNumber, varies.generatedSign);
};

export default function startGame(rounds = 3, maxNumber = 100) {
  varies.roundsNumber = rounds;
  varies.maxNumber = maxNumber;
  playGame();
}
