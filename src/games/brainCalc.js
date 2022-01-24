import generateNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const rule = 'What is the result of the expression?';
const signList = ['+', '-', '*'];

const generateSign = () => {
  const index = generateNumber(0, signList.length - 1);
  return signList[index];
};

const getAnswer = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default: throw new Error(`${sign} is not found`);
  }
};

const calcGame = () => {
  const randomNumber1 = generateNumber(1, 10);
  const randomNumber2 = generateNumber(1, 10);
  const randomSign = generateSign();
  const question = `${randomNumber1} ${randomSign} ${randomNumber2}`;
  const correctAnswer = getAnswer(randomNumber1, randomNumber2, randomSign);
  return [question, String(correctAnswer)];
};

export default () => {
  startGame(rule, calcGame);
};
