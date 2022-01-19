import {
  varies, generateNumber, getAnswer, playGame,
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

varies.generateRound = function () {
  varies.generatedNumber = generateNumber(varies.maxNumber);
  varies.question = varies.generatedNumber;
  varies.correctAnswer = getAnswer(isPrime(varies.generatedNumber));
};

export default function startGame(rounds = 3, maxNumber = 100) {
  varies.roundsNumber = rounds;
  varies.maxNumber = maxNumber;
  playGame();
}
