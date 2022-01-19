import {
  varies, generateNumber, guessCheck, playGame, congratulate,
} from '../gamesSettings.js';

varies.rules = 'Answer yes if the number is even, otherwise answer no.';

function isEven(num) {
  return num % 2 === 0;
}

varies.generateRound = function () {
  varies.generatedNumber = generateNumber(varies.maxNumber);
  varies.question = varies.generatedNumber;
  varies.correctAnswer = guessCheck(isEven(varies.generatedNumber));
};

export default function startGame(rounds = 3, maxNumber = 100) {
  varies.roundsNumber = rounds;
  varies.maxNumber = maxNumber;
  if (playGame()) {
    congratulate();
  }
}
