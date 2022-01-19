import {
  varies, generateNumber, startGame,
} from '../gamesSettings.js';

varies.rules = 'What number is missing in the progression?';

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
  varies.correctAnswer = Number(arr.splice(getHideIndex(arrLength), 1, '..').join());
  return arr.join(' ');
}

varies.generateRound = function () {
  varies.question = generateArr(varies.maxStep, varies.maxNumber);
};

export default startGame
