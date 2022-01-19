import readlineSync from 'readline-sync';
import {
  varies, gamerGuess, gameRules, greetGamer, generateNumber, getGuessResult, checkResult, congratulate, printAnswer,
} from '../gamesSettings.js';

varies.rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

function guessCheck(num) {
  return isPrime(num) ? varies.positiveAnswer : varies.negativeAnswer;
}

function getGuess(func) {
  varies.generatedNumber = generateNumber(varies.maxNumber);
  varies.question = varies.generatedNumber;
  gamerGuess();
  printAnswer();
  varies.result = getGuessResult(func(varies.generatedNumber), varies.guess);
  varies.correctAnswer = guessCheck(varies.generatedNumber);
}

function playGame() {
  while (varies.roundsNumber > 0) {
    getGuess(isPrime);
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
