/* eslint-disable no-ternary */
/* eslint-disable no-magic-numbers */
/* eslint-disable func-names */
/* eslint-disable class-methods-use-this */
// eslint-disable-next-line import/extensions
import GamesSettings from "../gamesSettings.js";

export default class BrainEven extends GamesSettings {
  positiveAnswer = 'yes';

  negativeAnswer = 'no';

  gameRules = function() {
    console.log('Answer yes if the number is even, otherwise answer no.');
  };

  isEven = function(number) {
    return number % 2 === 0;
  };

  guessCheck = function (num) {
    return this.isEven(num) ? this.positiveAnswer : this.negativeAnswer;
  };

  getGuessResult = function (number, guess) {
    // eslint-disable-next-line max-len
    return (this.isEven(number) && guess === this.positiveAnswer) || (!this.isEven(number) && guess === this.negativeAnswer);
  };

  checkResult = function () {
    if (this.result) {
      this.printCorrect();
      // eslint-disable-next-line no-plusplus
      this.roundsNumber--;
    } else {
      // eslint-disable-next-line no-useless-concat
      this.printWrongAnswer();
      this.printTryAgain();
      return false;
    }
    return true;
  };

  playGame = function () {
    while (this.roundsNumber > 0) {
      this.generatedNumber = this.generateNumber();
      this.gamerGuess();
      this.printAnswer();
      this.result = this.getGuessResult(this.generatedNumber, this.guess);
      this.correctAnswer = this.guessCheck(this.generatedNumber);
      if (!this.checkResult(this.result)) {
        return false;
      }
    }
    return true;
  };
}