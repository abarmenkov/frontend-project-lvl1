import generateNumber from '../getRandomNumber.js';

export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

export default function primeGame() {
  const randomNumber = generateNumber(30);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const question = `Question: ${randomNumber}`;
  return [question, correctAnswer];
}
