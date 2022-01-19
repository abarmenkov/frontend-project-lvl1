import {
  varies, generateNumber, getAnswer, startGame
} from '../gamesSettings.js';

varies.rules = 'Answer yes if the number is even, otherwise answer no.';

function isEven(num) {
  return num % 2 === 0;
}

varies.generateRound = function() {
  varies.generatedNumber = generateNumber(varies.maxNumber);
  varies.question = varies.generatedNumber;
  varies.correctAnswer = getAnswer(isEven(varies.generatedNumber));
};

export default startGame;
