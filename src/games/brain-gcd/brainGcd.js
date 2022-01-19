import readlineSync from 'readline-sync';
import {
  varies, greetGamer, generateNumber, checkResult, congratulate, printAnswer,
} from '../gamesSettings.js';

function gameRules() {
  console.log('Find the greatest common divisor of given numbers.');
}

function gamerGuess() {
  varies.guess = readlineSync.question(`Question: ${varies.generatedNumber} ${varies.generatedSecondNumber} `);
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
  while (varies.roundsNumber > 0) {
    varies.generatedNumber = generateNumber(varies.maxNumber);
    varies.generatedSecondNumber = generateNumber(varies.maxNumber);
    gamerGuess();
    printAnswer();
    varies.correctAnswer = NOD(varies.generatedNumber, varies.generatedSecondNumber);
    varies.result = getGuessResult(varies.correctAnswer, varies.guess);
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
