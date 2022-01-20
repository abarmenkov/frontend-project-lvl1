import generateNumber from '../getRandomNumber.js';

export const rule = 'What number is missing in the progression?';

export default function progressionGame(num = 10, length = 6) {
  const arr = [];
  let arrLength = generateNumber(num);
  if (arrLength < length) {
    arrLength = length;
  }
  const progressionStep = generateNumber(num) + 1;
  const firstNumber = generateNumber(num);
  const hideIndex = generateNumber(arrLength - 1);
  arr.push(firstNumber);
  for (let i = 1; i < arrLength; i += 1) {
    arr[i] = arr[i - 1] + progressionStep;
  }
  const correctAnswer = arr.splice(hideIndex, 1, '..').join();
  return [arr.join(' '), correctAnswer];
}
