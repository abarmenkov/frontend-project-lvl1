import generateNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const evenGame = () => {
  const randomNumber = generateNumber();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, correctAnswer];
};

export default () => {
  startGame(rule, evenGame);
};
