import {
  varies, generateNumber, guessCheck, playGame, congratulate
} from '../gamesSettings.js';

varies.rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

varies.generateRound = function () {
  varies.generatedNumber = generateNumber(varies.maxNumber);
  varies.question = varies.generatedNumber;
  varies.correctAnswer = guessCheck(isPrime(varies.generatedNumber));
};

function isPrime(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

export default function startGame(rounds = 3, maxNumber = 100) {
  varies.roundsNumber = rounds;
  varies.maxNumber = maxNumber;
  if (playGame()) {
    congratulate();
  }
}
