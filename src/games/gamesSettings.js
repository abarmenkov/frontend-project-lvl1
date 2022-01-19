
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
  return (checkedNum && playerGuess === variables.positiveAnswer) || (!checkedNum && playerGuess === variables.negativeAnswer);
}

export function checkResult() {
  if (variables.result) {
    printCorrect();
    variables.roundsNumber--;
  } else {
    printWrongAnswer();
    printTryAgain();
    return false;
  }
  return true;
}
