#!/usr/bin/env node

import startGame from '../src/games/index.js';
import gcdGame, { rule } from '../src/games/brain-gcd/brainGcd.js';

startGame(rule, gcdGame);
