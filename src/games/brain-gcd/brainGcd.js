
import readlineSync from 'readline-sync';
import {
  variables, greetGamer, generateNumber, checkResult, congratulate, printAnswer,
} from '../gamesSettings.js';

function gameRules() {
  console.log('Find the greatest common divisor of given numbers.');
}

function gamerGuess() {
  variables.guess = readlineSync.question(`Question: ${variables.generatedNumber} ${variables.generatedSecondNumber} `);
}

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}

function getGuessResult(correctAnswer, guess) {
  return correctAnswer === Number(guess);
}

function playGame() {
  while (variables.roundsNumber > 0) {
    variables.generatedNumber = generateNumber(variables.maxNumber);
    variables.generatedSecondNumber = generateNumber(variables.maxNumber);
    gamerGuess();
    printAnswer();
    variables.correctAnswer = NOD(variables.generatedNumber, variables.generatedSecondNumber);
    variables.result = getGuessResult(variables.correctAnswer, variables.guess);
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
