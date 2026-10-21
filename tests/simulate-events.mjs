import assert from 'node:assert/strict';
import { SCENARIO } from '../data/scenario.js';
import { createInitialState, applyDecision, recordPrediction } from '../js/engine.js';

// Simulación de estrés separada: evento sintético pequeño (-1, 0 o +1 por indicador)
// antes de cada ronda. No es el sistema de eventos de Tito; este se implementa en Etapa 3.
let seed = 20261020;
function random() { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; }
function perturb(state) {
  const next = structuredClone(state);
  for (const key of ['trust','cash','learning']) {
    const delta = Math.floor(random() * 3) - 1;
    next.game[key] = Math.max(0, Math.min(100, next.game[key] + delta));
  }
  return next;
}
const trials = 10000;
let unicorns = 0;
const strategyWins = [0,0,0];
for (let gameIndex = 0; gameIndex < trials; gameIndex++) {
  let state = createInitialState('Simulación', 'No es una idea real');
  const fixedChoice = gameIndex % 3;
  for (let roundIndex = 0; roundIndex < 9; roundIndex++) {
    state = perturb(state);
    state = recordPrediction(state, SCENARIO.rounds[roundIndex], SCENARIO.rounds[roundIndex].prediction.correct);
    const choice = gameIndex < 3 ? gameIndex : Math.floor(random() * 3);
    state = applyDecision(state, SCENARIO.rounds[roundIndex], gameIndex < 3 ? fixedChoice : choice);
  }
  if (state.completion.routeMedal.id === 'unicornio') unicorns++;
  if (gameIndex < 3 && state.completion.routeMedal.id === 'unicornio') strategyWins[gameIndex]++;
}
const percent = unicorns / trials * 100;
assert.ok(percent >= 3 && percent <= 5, `Frecuencia objetivo 3–5%, obtenida ${percent.toFixed(2)}%`);
assert.ok(strategyWins.every(value => value === 0), 'Las tres secuencias fijas de control no deben alcanzar el rango superior.');
console.log(`simulated_games=${trials}`);
console.log(`event_model=synthetic per-round indicator perturbation in [-1,0,+1]`);
console.log(`unicorn_games=${unicorns} unicorn_percent=${percent.toFixed(2)}%`);
console.log('fixed_strategy_control_wins=0/3');
console.log('checks=PASS');
