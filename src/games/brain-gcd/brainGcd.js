import generateNumber from '../getRandomNumber.js';

export const rule = 'Find the greatest common divisor of given numbers.';

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}

export default function gcdGame() {
  const randomNumber1 = generateNumber();
  const randomNumber2 = generateNumber();
  const correctAnswer = NOD(randomNumber1, randomNumber2);
  const question = `${randomNumber1} ${randomNumber2}`;
  return [question, String(correctAnswer)];
}
