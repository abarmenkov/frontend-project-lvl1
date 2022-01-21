import generateNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const rule = 'What number is missing in the progression?';

const generateProgression = (firstNumber, progressionStep, arrLength) => {
  const arr = [firstNumber];
  for (let i = 0; i < arrLength; i += 1) {
    arr.push(arr[i] + progressionStep);
  }
  return arr;
};

const progressionGame = () => {
  const arrLength = generateNumber(6, 10);
  const progressionStep = generateNumber(1, 10);
  const firstNumber = generateNumber(1, 10);
  const hideIndex = generateNumber(0, arrLength - 1);
  const progression = generateProgression(firstNumber, progressionStep, arrLength);
  const correctAnswer = String(progression[hideIndex]);
  progression[hideIndex] = '..';
  return [progression.join(' '), correctAnswer];
};

export default () => {
  startGame(rule, progressionGame);
};
