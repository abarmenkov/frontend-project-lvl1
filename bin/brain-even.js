#!/usr/bin/env node

import startGame from '../src/games/index.js';
import evenGame, { rule } from '../src/games/brain-even/brainEven.js';

startGame(rule, evenGame);
