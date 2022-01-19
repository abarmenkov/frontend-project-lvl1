import {
  varies, generateNumber, playGame, congratulate
} from '../gamesSettings.js';

varies.rules = 'Find the greatest common divisor of given numbers.';

varies.generateRound = function () {
  varies.generatedNumber = generateNumber(varies.maxNumber);
  varies.generatedSecondNumber = generateNumber(varies.maxNumber);
  varies.question = `${varies.generatedNumber} ${varies.generatedSecondNumber}`;
  varies.correctAnswer = NOD(varies.generatedNumber, varies.generatedSecondNumber);
};

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}

export default function startGame(rounds = 3, maxNumber = 100) {
  varies.roundsNumber = rounds;
  varies.maxNumber = maxNumber;
  if (playGame()) {
    congratulate();
  }
}
