import readlineSync from 'readline-sync';
import {
  varies, greetGamer, generateNumber, getGuessResult, checkResult, congratulate, printAnswer,
} from '../gamesSettings.js';

function gameRules() {
  console.log('Answer yes if the number is even, otherwise answer no.');
}

function isEven(num) {
  return num % 2 === 0;
}

function guessCheck(num) {
  return isEven(num) ? varies.positiveAnswer : varies.negativeAnswer;
}

function gamerGuess() {
  varies.guess = readlineSync.question(`Question: ${varies.generatedNumber} `);
}

function getGuess(func) {
  varies.generatedNumber = generateNumber(varies.maxNumber);
  gamerGuess();
  printAnswer();
  varies.result = getGuessResult(func(varies.generatedNumber), varies.guess);
  varies.correctAnswer = guessCheck(varies.generatedNumber);
}

export function playGame() {
  while (varies.roundsNumber > 0) {
    getGuess(isEven);
    if (!checkResult(varies.result)) {
      return false;
    }
  }
  return true;
}

export default function startGame(rounds = 3, maxNumber = 100) {
  varies.roundsNumber = rounds;
  varies.maxNumber = maxNumber;
  greetGamer();
  gameRules();
  if (playGame()) {
    congratulate();
  }
}
