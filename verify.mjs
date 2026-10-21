import assert from 'node:assert/strict';
import { SCENARIO } from '../data/scenario.js';
import { createInitialState, applyDecision, recordPrediction, getRouteRank, validateImport, exportState } from '../js/engine.js';

function play(sequence) {
  let state = createInitialState('Prueba', 'Idea');
  for (let i = 0; i < 9; i++) {
    state = recordPrediction(state, SCENARIO.rounds[i], SCENARIO.rounds[i].prediction.correct);
    state = applyDecision(state, SCENARIO.rounds[i], sequence[i]);
  }
  return state;
}
let count = 0, unicorns = 0, minIndex = Infinity, maxIndex = -Infinity;
const fixedStrategies = [[0,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1],[2,2,2,2,2,2,2,2,2]];
for (let encoded = 0; encoded < 3 ** 9; encoded++) {
  let n = encoded; const sequence = [];
  for (let i = 0; i < 9; i++) { sequence.push(n % 3); n = Math.floor(n / 3); }
  const state = play(sequence);
  assert.equal(state.journey.roundIndex, 9);
  assert.equal(state.game.decisionHistory.length, 9);
  for (const value of [state.game.trust, state.game.cash, state.game.learning]) assert.ok(value >= 0 && value <= 100);
  const rank = state.completion.routeMedal;
  minIndex = Math.min(minIndex, rank.index); maxIndex = Math.max(maxIndex, rank.index);
  if (rank.id === 'unicornio') unicorns++;
  count++;
}
assert.equal(count, 19683, 'Deben evaluarse todas las secuencias de tres opciones por nueve rondas.');
assert.equal(new Set(SCENARIO.rounds.map(r => r.blockId)).size, 9, 'Cada ronda debe cubrir un bloque único.');
assert.deepEqual(SCENARIO.rounds.map(r=>r.id), [1,2,3,4,5,6,7,8,9]);
assert.ok(SCENARIO.rounds.every(r=>r.choices.every(c=>typeof c.consequence==='string' && c.consequence.length>20)), 'Las 27 decisiones deben tener consecuencia específica en datos.');
const allConsequences = SCENARIO.rounds.flatMap(r=>r.choices.map(c=>c.consequence)); assert.equal(new Set(allConsequences).size,27,'Las 27 consecuencias deben ser específicas y no repetidas.');
assert.deepEqual(SCENARIO.blocks.map(b=>b.id), SCENARIO.validation.blockOrder, 'Los datos de bloques y rondas deben compartir el orden canónico.');
assert.equal(SCENARIO.board.segments.length,9); assert.ok(SCENARIO.board.segments.every(seg=>seg.spaceCount===5));
assert.ok(SCENARIO.rounds.every(r=>r.characters?.donSupuesto?.advice && r.characters?.nora?.celebrate), 'Cada ronda debe incluir diálogos de personajes.');
assert.equal(SCENARIO.decks.tito.length, 12);
assert.ok(new Set(SCENARIO.rounds.map(r=>r.prediction.correct)).size >= 3, 'La posición correcta debe variar entre las tres opciones.');
assert.ok(unicorns > 0, 'El rango superior debe ser alcanzable.');
const fixed = fixedStrategies.map(play);
assert.ok(fixed.every(s => s.completion.routeMedal.id !== 'unicornio'), 'Ninguna de las tres estrategias de opción fija probadas debe ganar automáticamente.');
const sample = play([1,0,1,1,1,1,1,1,1]);
assert.equal(validateImport(JSON.parse(exportState(sample))).journey.roundIndex, 9, 'Exportación e importación deben conservar el estado.');
assert.throws(() => validateImport({schemaVersion:99}), /formato compatible/);
const badBoard = structuredClone(sample); badBoard.board.position = 99; assert.throws(() => validateImport(badBoard), /tablero/);
const badDeck = structuredClone(sample); badDeck.board.drawnTito = ['tito-1','tito-1']; assert.throws(() => validateImport(badDeck), /mazo de Tito/);
const old = structuredClone(sample); old.schemaVersion = 4; delete old.board; const migrated = validateImport(old); assert.equal(migrated.schemaVersion,5); assert.equal(migrated.board.position,0);
console.log(`sequences=${count}`);
console.log(`route_index_min=${minIndex} route_index_max=${maxIndex}`);
console.log(`unicorn_paths=${unicorns} unicorn_percent=${(unicorns/count*100).toFixed(2)}%`);
console.log(`fixed_strategy_ranks=${fixed.map(s=>s.completion.routeMedal.name).join(' | ')}`);
console.log('checks=PASS');
