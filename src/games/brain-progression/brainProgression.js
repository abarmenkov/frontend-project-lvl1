import readlineSync from 'readline-sync';
import {
  varies, greetGamer, generateNumber, checkResult, congratulate, printAnswer,
} from '../gamesSettings.js';

function gameRules() {
  console.log('What number is missing in the progression?');
}

function getProgressionStep(num) {
  return generateNumber(num) + 1;
}

function getHideIndex(length) {
  return generateNumber(length - 1);
}

function generateArr(step, num) {
  const arr = [];
  let arrLength = generateNumber(num);
  if (arrLength < varies.length) {
    arrLength = varies.length;
  }
  const progressionStep = getProgressionStep(step);
  const firstNumber = generateNumber(num);
  arr.push(firstNumber);
  for (let i = 1; i < arrLength; i += 1) {
    arr[i] = arr[i - 1] + progressionStep;
  }
  varies.splicedNumber = Number(arr.splice(getHideIndex(arrLength), 1, '..').join());
  return arr.join(' ');
}

function gamerGuess() {
  varies.guess = readlineSync.question(`Question: ${generateArr(varies.maxStep, varies.maxNumber)} `);
}

function getGuessResult(guess) {
  return varies.splicedNumber === Number(guess);
}

function playGame() {
  while (varies.roundsNumber > 0) {
    gamerGuess();
    printAnswer();
    varies.result = getGuessResult(varies.guess);
    varies.correctAnswer = varies.splicedNumber;
    if (!checkResult(varies.result)) {
      return false;
    }
  }
  return true;
}

export default function startGame(rounds = 3, maxNumber = 10) {
  varies.roundsNumber = rounds;
  varies.maxNumber = maxNumber;
  greetGamer();
  gameRules();
  if (playGame()) {
    congratulate();
  }
}
