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
  rules: '',
  signList: ['+',
    '-',
    '*'],
  splicedNumber: '',
  question: '',
};

function greetGamer() {
  console.log('Welcome to the Brain Games!');
  varies.gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello,  ${varies.gamerName}!`);
}

function gameRules() {
  console.log(varies.rules);
}

function gamerGuess() {
  varies.guess = readlineSync.question(`Question: ${varies.question} `);
}

function congratulate() {
  console.log(`Congratulations, ${varies.gamerName}!`);
}

function printCorrect() {
  console.log('Correct!');
}

function printTryAgain() {
  console.log(`Let's try again, ${varies.gamerName}!`);
}

function printWrongAnswer() {
  console.log(`"${varies.guess}" is wrong answer :(. Correct answer was "${varies.correctAnswer}".`);
}

function printAnswer() {
  console.log(`Your answer: ${varies.guess}`);
}

export function generateNumber(num) {
  return Math.round(Math.random() * num);
}

function checkResult(correctAnswer, playerGuess) {
  return String(correctAnswer) === String(playerGuess);
}

function getGuess() {
  varies.generateRound();
  gamerGuess();
  printAnswer();
  varies.result = checkResult(varies.correctAnswer, varies.guess);
}

export function getAnswer(param) {
  return (param) ? varies.positiveAnswer : varies.negativeAnswer;
}

function playGame() {
  greetGamer();
  gameRules();
  while (varies.roundsNumber > 0) {
    getGuess();
    if (varies.result) {
      printCorrect();
      varies.roundsNumber -= 1;
    } else {
      printWrongAnswer();
      printTryAgain();
      return false;
    }
  }
  congratulate();
  return true;
}

export function startGame(rounds = 3, maxNumber = 100) {
  varies.roundsNumber = rounds;
  varies.maxNumber = maxNumber;
  playGame();
}
