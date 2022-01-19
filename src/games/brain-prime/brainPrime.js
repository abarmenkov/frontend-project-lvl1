
import readlineSync from 'readline-sync';
import {
  variables, greetGamer, generateNumber, getGuessResult, checkResult, congratulate, printAnswer,
} from '../gamesSettings.js';

function gameRules() {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function guessCheck(num) {
  return isPrime(num) ? variables.positiveAnswer : variables.negativeAnswer;
}

function gamerGuess() {
  variables.guess = readlineSync.question(`Question: ${variables.generatedNumber} `);
}

function getGuess(func) {
  variables.generatedNumber = generateNumber(variables.maxNumber);
  gamerGuess();
  printAnswer();
  variables.result = getGuessResult(func(variables.generatedNumber), variables.guess);
  variables.correctAnswer = guessCheck(variables.generatedNumber);
}

function playGame() {
  while (variables.roundsNumber > 0) {
    getGuess(isPrime);
    if (!checkResult(variables.result)) {
      return false;
    }
  }
  return true;
}

export default function startGame(rounds = 3, maxNumber = 100) {
  variables.roundsNumber = rounds;
  variables.maxNumber = maxNumber;
  greetGamer();
  gameRules();
  if (playGame()) {
    congratulate();
  }
}
