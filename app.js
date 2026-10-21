import { SCENARIO } from "../data/scenario.js";
import { STORAGE_KEY, createInitialState, applyDecision, recordPrediction, exportState, validateImport } from "./engine.js";

const $ = (selector) => document.querySelector(selector);
const screen = $("#screen");
const status = $("#save-status");
const importFile = $("#import-file");
let state = loadState();
let pendingOpeningIndex = state.journey.openingIndex || 0;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return validateImport(JSON.parse(raw));
  } catch (error) {
    console.warn("No se pudo recuperar el guardado local:", error);
  }
  return createInitialState();
}
function persist() {
  state.updatedAt = new Date().toISOString();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    status.textContent = `Guardado en este navegador · ${new Date().toLocaleTimeString("es-AR", {hour:"2-digit",minute:"2-digit"})}`;
  } catch (error) {
    status.textContent = "No se pudo guardar: exportá una copia JSON";
  }
}
function updateState(next) { state = next; persist(); render(); }
function safeText(value) { return String(value ?? ""); }
function button(label, action, style = "button-primary") { return `<button type="button" class="button ${style}" data-action="${action}">${label}</button>`; }
function panel(content) { return `<article class="panel">${content}</article>`; }
function renderProgress() {
  const list = $("#progress-list");
  list.innerHTML = SCENARIO.blocks.map((block, index) => {
    const done = state.journey.completedRounds.includes(SCENARIO.rounds[index].id);
    const active = state.journey.roundIndex === index && !state.completion.finished;
    return `<li class="${done ? "done" : ""} ${active ? "active" : ""}">${index+1}. ${block.name}</li>`;
  }).join("");
}
function render() {
  renderProgress();
  if (state.journey.screen === "welcome") return renderWelcome();
  if (state.journey.screen === "opening") return renderOpening();
  if (state.journey.screen === "round") return renderRound();
  if (state.journey.screen === "final") return renderFinal();
  if (state.journey.screen === "canvas") return renderCanvas();
  if (state.journey.screen === "manual") return renderManual();
  renderWelcome();
}
function renderWelcome() {
  screen.innerHTML = panel(`
    <span class="kicker">Una invitación a la incubadora</span>
    <h1>Una idea no se convierte en negocio por arte de magia.</h1>
    <p class="lead">Te llegó un mensaje de Café Móvil. Durante nueve rondas vas a tomar decisiones, descubrir qué datos faltan y construir tu propio Canvas. No hay respuestas mágicas ni examen sorpresa: hay hipótesis que podés poner a prueba.</p>
    <div class="chat-window"><div class="chat-head"><span class="chat-avatar">CM</span><span>Café Móvil · WhatsApp</span></div><div class="chat-bubble">¡Hola! Somos Café Móvil. Queremos llevar café a oficinas del barrio, pero no queremos improvisar cada decisión. ¿Nos ayudás a ordenar la idea y probarla en pequeño?</div></div>
    <form id="start-form">
      <div class="two-col"><div class="field"><label for="participant">¿Cómo te llamás? (opcional)</label><input id="participant" maxlength="100" value="${escapeAttr(state.project.participantName)}" autocomplete="name"></div><div class="field"><label for="idea">Tu idea de negocio (podés dejarla para después)</label><input id="idea" maxlength="1000" value="${escapeAttr(state.project.idea)}" placeholder="¿Qué te gustaría ofrecer y a quién?"></div></div>
      <p class="small-note">Etapa 1: no se pide correo ni se envía información a un servidor. El progreso se guarda en este navegador.</p>
      <div class="button-row"><button class="button button-primary" type="submit">Responder y empezar</button>${button("Continuar partida guardada","continue","button-secondary")}${button("Abrir Canvas","canvas","button-quiet")}</div>
    </form>`);
}
function renderOpening() {
  const note = SCENARIO.openingNotes[pendingOpeningIndex];
  screen.innerHTML = panel(`<span class="kicker">Tres notas para entrar en calor · ${pendingOpeningIndex+1} de 3</span><h1>¿Dónde pegarías esta nota?</h1><p class="lead">${note.text}</p><p>Elegí el bloque del Canvas que mejor encaja. Es una partida de práctica: podés aprender de cada intento.</p><div class="choice-list">${SCENARIO.blocks.map(b => `<button type="button" class="choice-card" data-block-choice="${b.id}"><span class="choice-number">↗</span><span><strong>${b.name}</strong><small>${b.question}</small></span></button>`).join("")}</div><div id="opening-feedback"></div><div class="button-row">${button("Saltar la práctica","skip-opening","button-quiet")}</div>`);
}
function renderRound() {
  const index = state.journey.roundIndex;
  const round = SCENARIO.rounds[index];
  if (!round) return renderFinal();
  const block = SCENARIO.blocks.find(item => item.id === round.blockId);
  const phase = state.journey.phase;
  const predictionHistory = state.game.predictionHistory.find(item => item.roundId === round.id);
  const predictionView = phase === "prediction" ? `<span class="kicker">Ronda ${index+1} de 9 · antes de decidir</span><h1>${round.title}</h1><p class="lead">${round.scene}</p><div class="feedback"><strong>Pregunta de Nora</strong><br>${round.prediction.question}</div><div class="choice-list">${round.prediction.options.map((option, i) => `<button class="choice-card" type="button" data-prediction="${i}"><span class="choice-number">${String.fromCharCode(65+i)}</span><span>${option}</span></button>`).join("")}</div><p class="small-note">Primero registramos tu predicción. Después vas a ver una explicación y elegir qué hacer.</p>` : `<span class="kicker">Ronda ${index+1} de 9 · decisión</span><h1>${round.title}</h1><p class="lead">${round.scene}</p><div class="feedback"><strong>Nora te deja una pista</strong><br>${block.clue}<details><summary>Contame más</summary><p>${block.more}</p></details></div>${predictionHistory ? `<p class="notice">${predictionHistory.correct ? "¡Buena lectura!" : "La predicción no coincidió, y eso también sirve para aprender."} ${round.prediction.feedback}</p>` : ""}<h2>¿Qué harías ahora?</h2><div class="choice-list">${round.choices.map((choice, i) => `<button class="choice-card" type="button" data-decision="${i}"><span class="choice-number">${String.fromCharCode(65+i)}</span><span>${choice.text}</span></button>`).join("")}</div>`;
  screen.innerHTML = `${panel(`${predictionView}<hr class="rule"><div class="stat-grid">${stat("Confianza",state.game.trust)}${stat("Caja simulada",state.game.cash)}${stat("Aprendizaje",state.game.learning)}</div>`)}${panel(`<span class="kicker">Tu Canvas se escribe mientras jugás</span><h2>${block.name}</h2><p class="muted">La decisión puede proponer un primer borrador. Editalo: tu evidencia real vale más que una respuesta automática.</p><div class="field"><label for="canvas-answer">Tu nota para este bloque</label><textarea id="canvas-answer" maxlength="5000" data-canvas-field="answer" data-block="${block.id}">${escapeHtml(state.canvas[block.id].answer)}</textarea></div><div class="field"><label for="canvas-evidence">Evidencia o próxima prueba</label><textarea id="canvas-evidence" maxlength="2000" data-canvas-field="evidence" data-block="${block.id}">${escapeHtml(state.canvas[block.id].evidence)}</textarea></div><div class="button-row">${button("Ver mi Canvas","canvas","button-secondary")}${button("Modo manual · orden clásico","manual","button-quiet")}</div>`)}`;
}
function stat(label, value) { return `<div class="stat"><span>${label}</span><strong>${value}/100</strong><div class="meter"><span style="width:${value}%"></span></div></div>`; }
function renderFinal() {
  const route = state.completion.routeMedal || {name:"Recorrido en curso",index:0};
  const understanding = state.completion.comprehensionMedal || {name:"Sin medalla",correct:0,total:9};
  screen.innerHTML = panel(`<span class="kicker">Cierre de la primera vuelta</span><h1>El Canvas no es una promesa: es una hipótesis organizada.</h1><p class="lead">Terminaste las nueve decisiones de Café Móvil. Revisá qué anotaste, qué evidencia tenés y qué deberías probar en el mundo real.</p><div class="medal-grid"><div class="medal"><div class="symbol" aria-hidden="true">🏁</div><span class="pill">Medalla de recorrido</span><h2>${route.name}</h2><p>Índice narrativo: ${route.index}. Resume esta partida ficticia; no predice el éxito de un negocio.</p></div><div class="medal"><div class="symbol" aria-hidden="true">🧭</div><span class="pill">Medalla de comprensión</span><h2>${understanding.name}</h2><p>Predicciones correctas en el primer intento: ${understanding.correct} de ${understanding.total}. Es una señal de comprensión en este juego, no una certificación.</p></div></div><div class="button-row">${button("Revisar mi Canvas","canvas")}${button("Volver a jugar","restart","button-secondary")}${button("Exportar mi progreso JSON","export","button-quiet")}${button("Imprimir Canvas","print","button-quiet")}</div>`);
}
function renderCanvas() {
  screen.innerHTML = panel(`<span class="kicker">Tu Canvas vivo</span><h1>Una idea, nueve piezas conectadas.</h1><p class="lead">Completá cada bloque con tu propia formulación y anotá qué evidencia existe o falta. No hace falta que esté perfecto para que sea útil.</p><div class="canvas-grid">${SCENARIO.blocks.map(block => `<article class="canvas-card"><h3>${block.name}</h3><label for="answer-${block.id}">Tu nota</label><textarea id="answer-${block.id}" data-canvas-field="answer" data-block="${block.id}" maxlength="5000">${escapeHtml(state.canvas[block.id].answer)}</textarea><label for="evidence-${block.id}">Evidencia / prueba</label><textarea id="evidence-${block.id}" data-canvas-field="evidence" data-block="${block.id}" maxlength="2000">${escapeHtml(state.canvas[block.id].evidence)}</textarea></article>`).join("")}</div><div class="button-row">${button("Volver a la partida","resume")}${button("Exportar JSON","export","button-secondary")}${button("Imprimir / guardar como PDF","print","button-quiet")}</div><p class="small-note">La exportación incluye tus notas y el estado de la partida. Guardala en un lugar privado si contiene información sensible.</p>`);
}
function renderManual() {
  const manualBlocks = (SCENARIO.classicBlockOrder || SCENARIO.blocks.map(b => b.id)).map(id => SCENARIO.blocks.find(b => b.id === id));
  screen.innerHTML = panel(`<span class="kicker">Modo manual</span><h1>Orden clásico del Business Model Canvas</h1><p class="lead">Recorré los nueve bloques en el orden tradicional. Este modo de estudio no cambia la secuencia de decisiones de la historia.</p><div class="manual-lessons">${manualBlocks.map((b, i) => `<section class="canvas-card manual-lesson"><span class="pill">Bloque ${i+1} de 9</span><h2>${b.name}</h2><p><strong>${b.question}</strong></p><p>${b.lesson}</p><div class="feedback"><strong>Pista de Nora</strong><br>${b.clue}</div><details><summary>Contame más</summary><p>${b.more}</p></details><div class="field"><label for="manual-answer-${b.id}">Mi nota</label><textarea id="manual-answer-${b.id}" data-canvas-field="answer" data-block="${b.id}" maxlength="5000">${escapeHtml(state.canvas[b.id].answer)}</textarea></div><div class="field"><label for="manual-evidence-${b.id}">Evidencia / próxima prueba</label><textarea id="manual-evidence-${b.id}" data-canvas-field="evidence" data-block="${b.id}" maxlength="2000">${escapeHtml(state.canvas[b.id].evidence)}</textarea></div></section>`).join("")}</div><div class="button-row">${button("Volver a la ronda","resume")}${button("Abrir Canvas completo","canvas","button-secondary")}${button("Exportar JSON","export","button-quiet")}</div>`);
}
function escapeHtml(value) { return safeText(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;"); }
function escapeAttr(value) { return escapeHtml(value); }
function downloadJson() {
  const blob = new Blob([exportState(state)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a"); anchor.href = url; anchor.download = "mi-lienzo-maestro-progreso.json"; anchor.click(); URL.revokeObjectURL(url);
}
function startRound() { state.journey.screen = "round"; state.journey.phase = "prediction"; state.game.status = "playing"; persist(); render(); }

screen.addEventListener("submit", event => {
  if (event.target.id !== "start-form") return;
  event.preventDefault();
  state.project.participantName = $("#participant").value.trim().slice(0,100);
  state.project.idea = $("#idea").value.trim().slice(0,1000);
  state.journey.screen = "opening"; state.journey.openingIndex = 0; pendingOpeningIndex = 0; persist(); render();
});
screen.addEventListener("click", event => {
  const target = event.target.closest("button"); if (!target) return;
  if (target.dataset.prediction !== undefined) {
    const round = SCENARIO.rounds[state.journey.roundIndex];
    try { updateState(recordPrediction(state, round, Number(target.dataset.prediction))); } catch (error) { alert(error.message); }
  } else if (target.dataset.decision !== undefined) {
    const round = SCENARIO.rounds[state.journey.roundIndex];
    try {
      const choiceIndex = Number(target.dataset.decision);
      state = applyDecision(state, round, choiceIndex);
      persist();
      const outcome = state.game.lastOutcome;
      screen.innerHTML = panel(`<span class="kicker">Consecuencia de la ronda ${state.journey.roundIndex}</span><h1>${outcome.title}</h1><p class="lead">${outcome.explanation}</p><div class="feedback"><strong>Lo que elegiste</strong><br>${escapeHtml(outcome.choiceText)}<p>La consecuencia es una simulación simplificada. En un negocio real habría que medir resultados.</p></div><div class="stat-grid">${stat("Confianza",state.game.trust)}${stat("Caja simulada",state.game.cash)}${stat("Aprendizaje",state.game.learning)}</div><div class="button-row">${button("Continuar","next")}${button("Ver mi Canvas","canvas","button-secondary")}</div>`);
    } catch (error) { alert(error.message); }
  } else if (target.dataset.blockChoice) {
    const note = SCENARIO.openingNotes[pendingOpeningIndex];
    const feedback = $("#opening-feedback");
    const correct = target.dataset.blockChoice === note.answer;
    feedback.innerHTML = `<div class="feedback"><strong>${correct ? "¡Bien ubicada!" : "Vamos a mirar la pista"}</strong><p>${escapeHtml(note.explanation)}</p>${button(pendingOpeningIndex < 2 ? "Siguiente nota" : "Entrar a la incubadora", "next-opening")}</div>`;
    feedback.dataset.answered = "true"; feedback.dataset.correct = String(correct);
    [...screen.querySelectorAll("[data-block-choice]")].forEach(button => button.disabled = true);
  } else {
    switch (target.dataset.action) {
      case "continue": if (state.completion.finished) state.journey.screen="final"; else if (state.journey.screen === "welcome") state.journey.screen=state.journey.roundIndex ? "round":"opening"; render(); break;
      case "canvas": state.journey.screen="canvas"; persist(); render(); break;
      case "manual": state.journey.screen="manual"; persist(); render(); break;
      case "skip-opening": startRound(); break;
      case "next-opening": pendingOpeningIndex += 1; state.journey.openingIndex = pendingOpeningIndex; if (pendingOpeningIndex >= 3) startRound(); else { persist(); render(); } break;
      case "next": render(); break;
      case "resume": if (state.completion.finished) state.journey.screen="final"; else state.journey.screen="round"; persist(); render(); break;
      case "restart": state = createInitialState(state.project.participantName,state.project.idea); pendingOpeningIndex=0; persist(); render(); break;
      case "export": downloadJson(); break;
      case "print": window.print(); break;
    }
  }
});
screen.addEventListener("input", event => {
  const target = event.target;
  if (!target.dataset.canvasField || !target.dataset.block) return;
  const block = state.canvas[target.dataset.block];
  if (!block) return;
  block[target.dataset.canvasField] = target.value;
  block.reviewed = true;
  persist();
});
$("#export-top").addEventListener("click", downloadJson);
$("#import-top").addEventListener("click", () => importFile.click());
$("#import-file").addEventListener("change", async event => {
  const file = event.target.files?.[0]; if (!file) return;
  try {
    const parsed = validateImport(JSON.parse(await file.text()));
    state = parsed; persist(); render(); status.textContent = "Archivo importado y guardado localmente";
  } catch (error) { alert(`No se pudo importar el archivo: ${error.message}`); }
  event.target.value = "";
});
render();
