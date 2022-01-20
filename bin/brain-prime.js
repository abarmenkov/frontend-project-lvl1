#!/usr/bin/env node

import startGame from '../src/games/index.js';
import primeGame, { rule } from '../src/games/brain-prime/brainPrime.js';

startGame(rule, primeGame);
