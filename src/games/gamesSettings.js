/* eslint-disable no-ternary */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable class-methods-use-this */
/* eslint-disable func-names */
/* eslint-disable no-magic-numbers */
import readlineSync from 'readline-sync';

export const variables = {
  correctAnswer: '',
  gamerName: '',
  generatedArray: [],
  generatedNumber: '',
  generatedSecondNumber: '',
  generatedSign: '',
  guess: '',
  length: 6,
  maxStep: 10,
  negativeAnswer: 'no',
  positiveAnswer: 'yes',
  result: '',
  signList: ['+',
    '-',
    '*'],
  splicedNumber: '',
}

export function greetGamer() {
  console.log('Welcome to the Brain Games!');
  variables.gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello,  ${variables.gamerName}!`);
}

export function congratulate() {
  console.log(`Congratulations, ${variables.gamerName}!`);
}

export function printCorrect() {
  console.log('Correct!');
}
  
export function printTryAgain() {
  console.log(`Let's try again, ${variables.gamerName}!`);
}

export function printWrongAnswer() {
  console.log(`"${variables.guess}" is wrong answer :(. Correct answer was "${variables.correctAnswer}".`);
}

export function printAnswer() {
  console.log(`Your answer: ${variables.guess}`);
}

export function generateNumber(num) {
  return Math.round(Math.random() * num);
}

export function getGuessResult(checkedNum, playerGuess) {
  // eslint-disable-next-line max-len
  return (checkedNum && playerGuess === variables.positiveAnswer) || (!checkedNum && playerGuess === variables.negativeAnswer);
}

export function checkResult() {
  if (variables.result) {
    printCorrect();
    // eslint-disable-next-line no-plusplus
    variables.roundsNumber--;
  } else {
    // eslint-disable-next-line no-useless-concat
    printWrongAnswer();
    printTryAgain();
    return false;
  }
  return true;
}