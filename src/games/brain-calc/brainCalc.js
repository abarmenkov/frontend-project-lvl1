import generateNumber from '../getRandomNumber.js';

export const rule = 'What is the result of the expression?';
const signList = ['+', '-', '*'];

const generateSign = (num) => {
  const index = generateNumber(num);
  return signList[index];
};

const sum = (num1, num2) => num1 + num2;

const multiply = (num1, num2) => num1 * num2;

const subtract = (num1, num2) => num1 - num2;

const getAnswer = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return sum(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    default:
      throw new Error(`operation ${sign} is not supported`);
  }
};

const calcGame = () => {
  const randomNumber1 = generateNumber(10);
  const randomNumber2 = generateNumber(10);
  const randomSign = generateSign(signList.length - 1);
  const question = `${randomNumber1} ${randomSign} ${randomNumber2}`;
  const correctAnswer = getAnswer(randomNumber1, randomNumber2, randomSign);
  return [question, String(correctAnswer)];
};

export default calcGame;
