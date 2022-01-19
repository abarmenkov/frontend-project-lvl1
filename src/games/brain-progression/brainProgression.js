import {
  varies, generateNumber, playGame, congratulate
} from '../gamesSettings.js';

varies.rules = 'What number is missing in the progression?';

varies.generateRound = function () {
  varies.question = generateArr(varies.maxStep, varies.maxNumber);
};

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

export default function startGame(rounds = 3, maxNumber = 10) {
  varies.roundsNumber = rounds;
  varies.maxNumber = maxNumber;
  if (playGame()) {
    congratulate();
  }
}
