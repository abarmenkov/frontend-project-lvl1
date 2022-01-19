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
  generateRound: '',
};

export function greetGamer() {
  console.log('Welcome to the Brain Games!');
  varies.gamerName = readlineSync.question('May I have your name? ');
  console.log(`Hello,  ${varies.gamerName}!`);
}

export function gameRules() {
  console.log(varies.rules);
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

export function checkResult(correctAnswer, playerGuess) {
  return correctAnswer == playerGuess;
}

export function getGuess() {
  varies.generateRound();
  gamerGuess();
  printAnswer();
  varies.result = checkResult(varies.correctAnswer, varies.guess);
}

export function getAnswer(param) {
  return (param) ? varies.positiveAnswer : varies.negativeAnswer;
}

export function playGame() {
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
