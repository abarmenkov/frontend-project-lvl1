import generateNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const rule = 'What number is missing in the progression?';

const generateProgression = (firstNumber, progressionStep, arrLength) => {
  const arr = [];
  arr.push(firstNumber);
  for (let i = 1; i < arrLength; i += 1) {
    arr[i] = arr[i - 1] + progressionStep;
  }
  return arr;
};

const progressionGame = (length = 6) => {
  let arrLength = generateNumber(length, 10);
  if (arrLength < length) {
    arrLength = length;
  }
  const progressionStep = generateNumber(1, 10);
  const firstNumber = generateNumber(1, 10);
  const hideIndex = generateNumber(0, arrLength - 1);
  const progression = generateProgression(firstNumber, progressionStep, arrLength);
  const correctAnswer = progression.splice(hideIndex, 1, '..').join();
  return [progression.join(' '), correctAnswer];
};

export default () => {
  startGame(rule, progressionGame);
};
