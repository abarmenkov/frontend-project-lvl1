import generateNumber from '../getRandomNumber.js';

export const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => {
  if (y > x) return getGcd(y, x);
  if (!y) return x;
  return getGcd(y, x % y);
};

const gcdGame = () => {
  const randomNumber1 = generateNumber();
  const randomNumber2 = generateNumber();
  const correctAnswer = getGcd(randomNumber1, randomNumber2);
  const question = `${randomNumber1} ${randomNumber2}`;
  return [question, String(correctAnswer)];
};

export default gcdGame;
