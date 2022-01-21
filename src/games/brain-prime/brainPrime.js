import generateNumber from '../getRandomNumber.js';

export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const primeGame = () => {
  const randomNumber = generateNumber();
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const question = `Question: ${randomNumber}`;
  return [question, correctAnswer];
};

export default primeGame;
