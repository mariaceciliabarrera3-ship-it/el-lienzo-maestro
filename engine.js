export const STORAGE_KEY = "lienzoMaestro.state.v4";
export const RANK_THRESHOLDS = Object.freeze({ index: 52, trust: 52, cash: 44, learning: 34 });

export function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, Math.round(value)));
}

export function createInitialState(participantName = "", idea = "") {
  return {
    schemaVersion: 5,
    appVersion: "4.1.0-stage1",
    project: { name: "Café Móvil", participantName: participantName.trim().slice(0, 100), idea: idea.trim().slice(0, 1000) },
    journey: { screen: "welcome", roundIndex: 0, openingIndex: 0, phase: "prediction", completedRounds: [] },
    board: { position: 0, lap: 0, dieSeed: 20261020, drawnTito: [], usedNoraCards: [], donSupuesto: { adviceSeen: [], resistedCount: 0, fellForShortcutCount: 0 } },
    canvas: Object.fromEntries(["segments","value","channels","relationships","revenue","resources","activities","partners","costs"].map(id => [id, { answer: "", evidence: "", reviewed: false }])),
    game: { status: "notStarted", trust: 50, cash: 50, learning: 0, decisionHistory: [], predictionHistory: [], costeoHecho: false, capacidadMedida: false, lastOutcome: null },
    completion: { routeMedal: null, comprehensionMedal: null, finished: false },
    preferences: { soundEnabled: false, reducedMotion: false },
    updatedAt: new Date().toISOString()
  };
}

export function applyDecision(state, round, choiceIndex) {
  if (!Number.isInteger(choiceIndex) || choiceIndex < 0 || choiceIndex > 2) throw new Error("La decisión debe ser una opción válida.");
  const next = structuredClone(state);
  const roundIndex = next.journey.roundIndex;
  if (roundIndex >= 9) throw new Error("La partida ya terminó.");
  const choice = round.choices[choiceIndex];
  let [dT, dC, dA] = choice.delta;
  const T = next.game.trust, C = next.game.cash;
  // Los modificadores usan el estado al comienzo de la ronda.
  if (C < 25 && dC < 0) dC -= 2;
  else if (C > 70 && dC > 0) dC += 1;
  if (T < 25 && dT > 0) dT += 2;
  else if (T > 70 && dT < 0) dT -= 2;
  let consequenceOverride = null;
  if (choice.penaltyIf && next.game[choice.penaltyIf.flag] === choice.penaltyIf.is) {
    const penalty = choice.penaltyIf.delta || [0,0,0];
    dT += penalty[0] || 0; dC += penalty[1] || 0; dA += penalty[2] || 0;
    consequenceOverride = choice.penaltyIf.reason || null;
  }
  next.game.trust = clamp(T + dT);
  next.game.cash = clamp(C + dC);
  next.game.learning = clamp(next.game.learning + dA);
  next.game.decisionHistory.push({ roundId: round.id, choiceIndex, choiceId: `${round.id}-${choiceIndex}`, deltaApplied: [dT,dC,dA] });
  for (const [flag, value] of Object.entries(choice.sets || {})) {
    if (Object.hasOwn(next.game, flag)) next.game[flag] = value;
  }
  next.game.lastOutcome = { title: round.title, choiceText: choice.text, explanation: consequenceOverride || choice.consequence || "Consecuencia pendiente de redactar en los datos del escenario." };
  const blockId = round.blockId;
  const currentCanvas = next.canvas[blockId];
  if (!currentCanvas.answer) currentCanvas.answer = choice.note;
  if (!currentCanvas.evidence) currentCanvas.evidence = choice.evidence;
  currentCanvas.reviewed = true;
  next.journey.completedRounds.push(round.id);
  next.journey.roundIndex += 1;
  next.journey.phase = next.journey.roundIndex >= 9 ? "final" : "prediction";
  next.journey.screen = next.journey.roundIndex >= 9 ? "final" : "round";
  next.game.status = next.journey.roundIndex >= 9 ? "finished" : "playing";
  next.updatedAt = new Date().toISOString();
  if (next.journey.roundIndex >= 9) {
    const index = Math.floor(0.4 * next.game.trust + 0.35 * next.game.cash + 0.25 * next.game.learning + 0.5);
    next.completion.routeMedal = getRouteRank(index, next.game);
    next.completion.comprehensionMedal = getComprehensionRank(next.game.predictionHistory);
    next.completion.finished = true;
  }
  return next;
}

export function recordPrediction(state, round, selectedIndex) {
  const next = structuredClone(state);
  if (next.journey.phase !== "prediction") throw new Error("La predicción de esta ronda ya fue registrada.");
  if (!Number.isInteger(selectedIndex) || selectedIndex < 0 || selectedIndex >= round.prediction.options.length) throw new Error("Elegí una predicción válida.");
  next.game.predictionHistory.push({ roundId: round.id, selectedIndex, correct: selectedIndex === round.prediction.correct });
  next.journey.phase = "decision";
  next.updatedAt = new Date().toISOString();
  return next;
}

export function getRouteRank(index, game) {
  const t = RANK_THRESHOLDS;
  if (index >= t.index && game.trust >= t.trust && game.cash >= t.cash && game.learning >= t.learning) return { id: "unicornio", name: "Unicornio del Barrio", index };
  if (index >= 46) return { id: "rumbo", name: "Rumbo claro", index };
  if (index >= 38) return { id: "marcha", name: "En marcha", index };
  return { id: "pedaleadas", name: "Primeras pedaleadas", index };
}

export function getComprehensionRank(history) {
  const correct = history.filter(item => item.correct).length;
  if (correct >= 8) return { id: "brujula", name: "Brújula atenta", correct, total: 9 };
  if (correct >= 5) return { id: "observadora", name: "Mirada observadora", correct, total: 9 };
  return { id: "exploradora", name: "Exploradora de preguntas", correct, total: 9 };
}

export function exportState(state) {
  return JSON.stringify({ ...state, exportedAt: new Date().toISOString() }, null, 2);
}

export function validateImport(value) {
  if (!value || typeof value !== "object" || ![4,5].includes(value.schemaVersion) || !value.canvas || !value.game || !value.journey) throw new Error("El archivo no tiene el formato compatible de La Incubadora v4/v5.");
  if (value.schemaVersion === 4) {
    value = structuredClone(value); value.schemaVersion = 5; value.appVersion = "4.1.0-stage1";
    value.board = { position: 0, lap: 0, dieSeed: 20261020, drawnTito: [], usedNoraCards: [], donSupuesto: { adviceSeen: [], resistedCount: 0, fellForShortcutCount: 0 } };
  }
  if (!value.board || !Number.isInteger(value.board.position) || value.board.position < 0 || value.board.position > 44 || !Number.isInteger(value.board.lap) || value.board.lap < 0 || value.board.lap > 1000 || !Number.isInteger(value.board.dieSeed) || value.board.dieSeed < 0 || value.board.dieSeed > 4294967295) throw new Error("El estado de tablero excede los límites válidos.");
  if (!Array.isArray(value.board.drawnTito) || value.board.drawnTito.length > 12 || new Set(value.board.drawnTito).size !== value.board.drawnTito.length || value.board.drawnTito.some(id => typeof id !== "string" || !/^tito-([1-9]|1[0-2])$/.test(id))) throw new Error("El mazo de Tito guardado no es válido.");
  if (!Array.isArray(value.board.usedNoraCards) || value.board.usedNoraCards.length > 100 || new Set(value.board.usedNoraCards).size !== value.board.usedNoraCards.length || value.board.usedNoraCards.some(id => typeof id !== "string" || id.length > 80)) throw new Error("Las cartas de Nora guardadas no son válidas.");
  const ds = value.board.donSupuesto;
  if (!ds || !Array.isArray(ds.adviceSeen) || ds.adviceSeen.length > 9 || ds.adviceSeen.some(id => !Number.isInteger(id) || id < 1 || id > 9) || !Number.isInteger(ds.resistedCount) || ds.resistedCount < 0 || ds.resistedCount > 9 || !Number.isInteger(ds.fellForShortcutCount) || ds.fellForShortcutCount < 0 || ds.fellForShortcutCount > 9) throw new Error("El estado de Don Supuesto no es válido.");
  if (value.game.decisionHistory.length > 9 || value.game.predictionHistory.length > 9) throw new Error("El historial excede las nueve rondas permitidas.");
  for (const block of Object.values(value.canvas)) {
    if (!block || typeof block.answer !== "string" || typeof block.evidence !== "string") throw new Error("El Canvas del archivo no es válido.");
    if (block.answer.length > 5000 || block.evidence.length > 2000) throw new Error("El archivo supera los límites de texto permitidos.");
  }
  if (!Number.isInteger(value.journey.roundIndex) || value.journey.roundIndex < 0 || value.journey.roundIndex > 9) throw new Error("La ronda del archivo no es válida.");
  return structuredClone(value);
}
