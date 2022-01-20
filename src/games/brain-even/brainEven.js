import generateNumber from '../getRandomNumber.js';

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(num) {
  return num % 2 === 0;
}

export default function evenGame() {
  const randomNumber = generateNumber();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
}
