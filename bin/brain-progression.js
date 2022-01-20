#!/usr/bin/env node

import startGame from '../src/games/index.js';
import progressionGame, { rule } from '../src/games/brain-progression/brainProgression.js';

startGame(rule, progressionGame);
