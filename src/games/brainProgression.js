import generateNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const rule = 'What number is missing in the progression?';

const generateProgression = (firstNumber, progressionStep, progressionLength) => {
  const arr = [firstNumber];
  for (let i = 0; i < progressionLength; i += 1) {
    arr.push(arr[i] + progressionStep);
  }
  return arr;
};

const progressionGame = () => {
  const progressionLength = generateNumber(6, 10);
  const progressionStep = generateNumber(1, 10);
  const firstNumber = generateNumber(1, 10);
  const hideIndex = generateNumber(0, progressionLength - 1);
  const progression = generateProgression(firstNumber, progressionStep, progressionLength);
  const correctAnswer = String(progression[hideIndex]);
  progression[hideIndex] = '..';
  return [progression.join(' '), correctAnswer];
};

export default () => {
  startGame(rule, progressionGame);
};
