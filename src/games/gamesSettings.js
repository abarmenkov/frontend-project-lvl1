import readlineSync from 'readline-sync';

export const varies = {
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
  question: '',
};

export function greetGamer() {
  console.log('Welcome to the Brain Games!');
  varies.gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello,  ${varies.gamerName}!`);
}

export function gamerGuess() {
  varies.guess = readlineSync.question(`Question: ${varies.question} `);
}

export function congratulate() {
  console.log(`Congratulations, ${varies.gamerName}!`);
}

export function printCorrect() {
  console.log('Correct!');
}

export function printTryAgain() {
  console.log(`Let's try again, ${varies.gamerName}!`);
}

export function printWrongAnswer() {
  console.log(`"${varies.guess}" is wrong answer :(. Correct answer was "${varies.correctAnswer}".`);
}

export function printAnswer() {
  console.log(`Your answer: ${varies.guess}`);
}

export function generateNumber(num) {
  return Math.round(Math.random() * num);
}

export function getGuessResult(checkedNum, playerGuess) {
  return (checkedNum && playerGuess === varies.positiveAnswer) || (!checkedNum && playerGuess === varies.negativeAnswer);
}

export function checkResult() {
  if (varies.result) {
    printCorrect();
    varies.roundsNumber -= 1;
  } else {
    printWrongAnswer();
    printTryAgain();
    return false;
  }
  return true;
}
