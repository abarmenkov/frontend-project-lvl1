#!/usr/bin/env node

import startGame from '../src/games/index.js';
import calcGame, { rule } from '../src/games/brain-calc/brainCalc.js';

startGame(rule, calcGame);
