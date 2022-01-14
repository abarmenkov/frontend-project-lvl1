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
}