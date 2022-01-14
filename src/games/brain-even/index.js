/* eslint-disable sort-imports */
/* eslint-disable no-magic-numbers */
/* eslint-disable max-statements */
/* eslint-disable no-ternary */
import readlineSync from 'readline-sync';
// eslint-disable-next-line sort-imports
// eslint-disable-next-line import/extensions
import BrainEven from './brainEven.js';

const game = new BrainEven(2);

function getGuessResult(guessNumber, guess) {
  // eslint-disable-next-line max-len
  return (game.isEven(guessNumber) && guess === game.positiveAnswer) || (!game.isEven(guessNumber) && guess === game.negativeAnswer);
}

function guessCheck(guessNumber) {
  return game.isEven(guessNumber) ? game.positiveAnswer : game.negativeAnswer;
}

export default function startGame() {
  game.greetGamer();
  game.gameRules();
  while (game.roundNumber > 0) {
    const guessNumber = game.generateNumber();
    const guess = readlineSync.question(`Question:  ${guessNumber} `);
    console.log(`Your answer: ${guess}`);

    const result = getGuessResult(guessNumber, guess);
    const correctAnswer = guessCheck(guessNumber);

    if (result) {
      console.log('Correct!');
      // eslint-disable-next-line no-plusplus
      game.roundNumber--;
    } else if (!result) {
      // eslint-disable-next-line no-useless-concat
      console.log(`"${guess}" is wrong answer :(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${game.gamerName}!`);
      return;
    }

  }
  game.congratulate();

}