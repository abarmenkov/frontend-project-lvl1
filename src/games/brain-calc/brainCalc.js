import generateNumber from '../getRandomNumber.js';

export const rule = 'What is the result of the expression?';
const signList = ['+', '-', '*'];

function generateSign(num) {
  const index = generateNumber(num);
  return signList[index];
}

function sum(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function getAnswer(num1, num2, sign) {
  let answer = '';
  if (sign === '+') {
    answer = sum(num1, num2);
  } else if (sign === '-') {
    answer = subtract(num1, num2);
  } else {
    answer = multiply(num1, num2);
  }
  return answer;
}

export default function calcGame() {
  const randomNumber1 = generateNumber(10);
  const randomNumber2 = generateNumber(10);
  const randomSign = generateSign(signList.length - 1);
  const question = `${randomNumber1} ${randomSign} ${randomNumber2}`;
  const correctAnswer = getAnswer(randomNumber1, randomNumber2, randomSign);
  return [question, String(correctAnswer)];
}
