
import readlineSync from 'readline-sync';
import {
  variables, greetGamer, generateNumber, checkResult, congratulate, printAnswer,
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

function generateArrNumbers(step, num) {
  const arr = [];
  let arrLength = generateNumber(num);
  if (arrLength < variables.length) {
    arrLength = variables.length;
  }
  const progressionStep = getProgressionStep(step);
  const firstNumber = generateNumber(num);
  arr.push(firstNumber);
  for (let i = 1; i < arrLength; i++) {
    arr[i] = arr[i - 1] + progressionStep;
  }
  variables.splicedNumber = Number(arr.splice(getHideIndex(arrLength), 1, '..').join());
  return arr.join(' ');
}

function gamerGuess() {
  variables.guess = readlineSync.question(`Question: ${generateArrNumbers(variables.maxStep, variables.maxNumber)} `);
}

function getGuessResult(guess) {
  return variables.splicedNumber === Number(guess);
}

function playGame() {
  while (variables.roundsNumber > 0) {
    gamerGuess();
    printAnswer();
    variables.result = getGuessResult(variables.guess);
    variables.correctAnswer = variables.splicedNumber;
    if (!checkResult(variables.result)) {
      return false;
    }
  }
  return true;
}

export default function startGame(rounds = 3, maxNumber = 10) {
  variables.roundsNumber = rounds;
  variables.maxNumber = maxNumber;
  greetGamer();
  gameRules();
  if (playGame()) {
    congratulate();
  }
}
