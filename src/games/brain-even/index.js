/* eslint-disable no-magic-numbers */
/* eslint-disable max-statements */
/* eslint-disable no-ternary */
import readlineSync from 'readline-sync';

const positiveAnswer = 'yes';
const negativeAnswer = 'no';

function isEven(number) {
  // eslint-disable-next-line no-magic-numbers
  return number % 2 === 0;
}

function getGuessResult(guessNumber, guess) {
  // eslint-disable-next-line max-len
  return (isEven(guessNumber) && guess === positiveAnswer) || (!isEven(guessNumber) && guess === negativeAnswer);
}

function greetGamer() {
  console.log('Welcome to the Brain Games!');
  const gamerName = readlineSync.question('May I have your name?');
  console.log('Hello, ' + gamerName + '!');
  return gamerName;
}

function gameRules() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

function guessCheck(guessNumber) {
  return isEven(guessNumber) ? positiveAnswer : negativeAnswer;
}

export default function startGame(rounds = 3) {
  let attemptsCount = rounds;
  const gamerName = greetGamer();
  gameRules();
  while (attemptsCount > 0) {
    const guessNumber = Math.floor(Math.random() * 100);
    const guess = readlineSync.question('Question: ' + guessNumber);
    console.log('Your answer: ' + guess);

    const result = getGuessResult(guessNumber, guess);
    const correctAnswer = guessCheck(guessNumber);

    if (result) {
      console.log('Correct!');
      // eslint-disable-next-line no-plusplus
      attemptsCount--;
    } else if (!result) {
      // eslint-disable-next-line no-useless-concat
      console.log('"' + guess + '" is wrong answer ;(. Correct answer was ' + '"' + correctAnswer + '".');
      console.log("Let's try again, " + gamerName + "!");
      return;
    }

  }
  console.log('Congratulations, ' + gamerName + '!');

}