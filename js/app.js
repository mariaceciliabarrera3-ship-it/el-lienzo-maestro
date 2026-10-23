import { CONTENT as C, LOAD_ERRORS } from "../data/index.js";
import { KEY, newState, present, answer, validate, exportState, roundQuestions } from "./engine.js";

const $ = q => document.querySelector(q);
const scr = $("#screen");
const NM = Object.fromEntries(C.characters.map(c => [c.id, c.name]));
const esc = t => String(t).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

let s = load(), view = s.player.started ? "question" : "welcome", last = null, help = false;

function load() {
  try {
    const r = localStorage.getItem(KEY);
    if (r) return validate(JSON.parse(r));
  } catch (e) {}
  return newState();
}

function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
    $("#status").textContent = "Guardado en este navegador";
  } catch (e) {
    $("#status").textContent = "No se pudo guardar: exportá una copia";
  }
}

// ============================================
// SONIDO MEJORADO: gong real, campana, drone cálido
// ============================================
let ac = null, dr = null, on = false;

const A = () => {
  ac ??= new (window.AudioContext || window.webkitAudioContext)();
  if (ac.state === "suspended") ac.resume();
  return ac;
};

// Tono con envolvente y filtro
function tone(freq, dur, type = "sine", vol = 0.15, attack = 0.01, decay = dur) {
  if (!on) return;
  const a = A();
  const osc = a.createOscillator();
  const gain = a.createGain();
  const filter = a.createBiquadFilter();
  
  osc.type = type;
  osc.frequency.value = freq;
  filter.type = "lowpass";
  filter.frequency.value = 2000;
  
  gain.gain.setValueAtTime(0, a.currentTime);
  gain.gain.linearRampToValueAtTime(vol, a.currentTime + attack);
  gain.gain.exponentialRampToValueAtTime(0.001, a.currentTime + decay);
  
  osc.connect(filter);
  filter.connect(gain);
  gain.connect(a.destination);
  osc.start();
  osc.stop(a.currentTime + dur);
}

// GONG REAL: múltiples armónicos con decay exponencial
const gong = () => {
  if (!on) return;
  const a = A();
  const freqs = [
    { f: 110, vol: 0.3, dur: 2.5 },
    { f: 220, vol: 0.25, dur: 2.2 },
    { f: 330, vol: 0.2, dur: 1.8 },
    { f: 440, vol: 0.15, dur: 1.5 },
    { f: 660, vol: 0.1, dur: 1.2 }
  ];
  freqs.forEach(({ f, vol, dur }) => {
    const osc = a.createOscillator();
    const gain = a.createGain();
    osc.type = "sine";
    osc.frequency.value = f;
    gain.gain.setValueAtTime(vol, a.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, a.currentTime + dur);
    osc.connect(gain);
    gain.connect(a.destination);
    osc.start();
    osc.stop(a.currentTime + dur);
  });
};

// DING DE CAMPANA: dos notas consonantes con reverberación
const ding = () => {
  if (!on) return;
  tone(660, 0.4, "sine", 0.2, 0.005, 0.4);
  setTimeout(() => tone(880, 0.5, "sine", 0.15, 0.005, 0.5), 50);
  setTimeout(() => tone(1320, 0.3, "sine", 0.08, 0.005, 0.3), 100);
};

// FANFARRIA DE RONDA APROBADA: arpegio ascendente
const fanfare = () => {
  if (!on) return;
  const notes = [523, 659, 784, 1047]; // Do, Mi, Sol, Do alto
  notes.forEach((freq, i) => {
    setTimeout(() => tone(freq, 0.3, "triangle", 0.18, 0.01, 0.3), i * 120);
  });
};

// ERROR: acorde menor con caída dramática
const error = () => {
  if (!on) return;
  tone(220, 0.8, "sawtooth", 0.2, 0.01, 0.8);
  setTimeout(() => tone(185, 0.9, "sawtooth", 0.15, 0.01, 0.9), 100);
};

// DRONE AMBIENTAL: pad cálido que sube con la racha
function drone(n) {
  if (!on || s.progress.finished) {
    if (dr) {
      dr.osc.stop();
      dr = null;
    }
    return;
  }
  const a = A();
  if (!dr) {
    const osc = a.createOscillator();
    const gain = a.createGain();
    const filter = a.createBiquadFilter();
    osc.type = "sawtooth";
    osc.frequency.value = 110;
    filter.type = "lowpass";
    filter.frequency.value = 400;
    gain.gain.value = 0;
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(a.destination);
    osc.start();
    dr = { osc, gain, filter };
  }
  const vol = Math.min(0.03 + n * 0.015, 0.12);
  const cutoff = 400 + n * 150;
  dr.gain.gain.setTargetAtTime(vol, a.currentTime, 0.4);
  dr.filter.frequency.setTargetAtTime(cutoff, a.currentTime, 0.4);
}

// ============================================
// ANIMACIONES Y TRANSICIONES
// ============================================
const fog = () => {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  scr.classList.remove("fog");
  void scr.offsetWidth;
  scr.classList.add("fog");
};

// Animación de "arreglo" cuando las salas suben de nivel
const repair = () => {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll(".room").forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("repairing");
      setTimeout(() => el.classList.remove("repairing"), 800);
    }, i * 80);
  });
};

// ============================================
// AVATARES MEJORADOS: más detalle y expresividad
// ============================================
const boy = `<svg class="boy" viewBox="0 0 60 60" role="img" aria-label="Un muchacho se agarra la cabeza">
  <circle cx="30" cy="30" r="22" fill="#f4d3a1" stroke="#333" stroke-width="2"/>
  <path d="M20 26l6 3M40 26l-6 3" stroke="#333" stroke-width="2" fill="none"/>
  <path d="M22 40q8-8 16 0" stroke="#333" stroke-width="2" fill="none"/>
  <path d="M20 33v10M40 33v10" stroke="#4aa3ff" stroke-width="3" fill="none"/>
  <circle cx="25" cy="28" r="1.5" fill="#333"/>
  <circle cx="35" cy="28" r="1.5" fill="#333"/>
</svg>`;

const AV = {
  nora: { body: "#1f7a8c", hair: "#5b3a29", skin: "#f2cfa6" },
  teo: { body: "#6b7a8f", hair: "#2b2b2b", skin: "#f2cfa6" },
  aurelio: { body: "#6a1b4d", hair: "#cfcfcf", skin: "#f2cfa6" }
};

function avatar(id, l = 0, cheer = false) {
  const { body, hair, skin } = AV[id];
  
  // Accesorios base por personaje
  const baseAcc = {
    nora: `<circle cx="25" cy="25" r="4.5" fill="none" stroke="#222" stroke-width="1.5"/>
           <circle cx="35" cy="25" r="4.5" fill="none" stroke="#222" stroke-width="1.5"/>
           <path d="M20 25h10M30 25h10" stroke="#222" stroke-width="1"/>`,
    teo: `<rect x="12" y="42" width="36" height="12" rx="2" fill="#c8a165" stroke="#333" stroke-width="1"/>
          <path d="M21 42v12M30 42v12M39 42v12" stroke="#333" stroke-width="1"/>
          <circle cx="18" cy="48" r="1.5" fill="#333"/>
          <circle cx="27" cy="48" r="1.5" fill="#333"/>
          <circle cx="36" cy="48" r="1.5" fill="#333"/>`,
    aurelio: `<rect x="19" y="2" width="22" height="13" fill="#222"/>
              <rect x="13" y="14" width="34" height="3" fill="#222"/>
              <circle cx="35" cy="25" r="4.5" fill="none" stroke="#b8860b" stroke-width="1.5"/>
              <line x1="39" y1="25" x2="45" y2="22" stroke="#b8860b" stroke-width="1"/>`
  }[id];
  
  // Accesorios de progreso (ropa que mejora)
  const progressAcc = [
    "", // nivel 0: sin accesorios
    `<path d="M30 40l-3 8 3 4 3-4z" fill="#b3261e"/>`, // nivel 1: corbata
    `<rect x="40" y="48" width="7" height="5" fill="#fff" stroke="#333" stroke-width="1"/>
     <circle cx="43.5" cy="50.5" r="1" fill="#333"/>`, // nivel 2: reloj
    `<path d="M30 54l3 3-3 3-3-3z" fill="#e0a526"/>
     <circle cx="30" cy="57" r="1.5" fill="#fff"/>` // nivel 3: medalla dorada
  ][Math.min(l, 3)];
  
  // Expresión facial según estado
  const face = cheer
    ? `<path d="M26 32q4 3 8 0" stroke="#333" stroke-width="1.4" fill="none"/>` // sonrisa
    : `<path d="M26 33h8" stroke="#333" stroke-width="1.4" fill="none"/>`; // neutro
  
  // Brazo levantado si celebra
  const arm = cheer
    ? `<path d="M47 56q9-8 6-22" fill="none" stroke="${body}" stroke-width="6" stroke-linecap="round"/>
       <rect x="50" y="24" width="7" height="11" rx="3" fill="${skin}" stroke="#333" stroke-width="1"/>`
    : "";
  
  return `<svg class="av" viewBox="0 0 60 60" role="img" aria-label="${NM[id]}">
    <path d="M6 60q24-26 48 0z" fill="${body}"/>
    <circle cx="30" cy="25" r="13" fill="${skin}" stroke="#333" stroke-width="1.5"/>
    <path d="M17 21q13-16 26 0" fill="${hair}"/>
    <circle cx="25" cy="25" r="1.4" fill="#333"/>
    <circle cx="35" cy="25" r="1.4" fill="#333"/>
    ${face}
    ${baseAcc}
    ${progressAcc}
    ${arm}
  </svg>`;
}

// ============================================
// SALAS EVOLUTIVAS: chiches y transiciones
// ============================================
const WALL = ["#cfc8b6", "#dfe8ee", "#9fd0c4", "#7fc4a8"];

// Decoración genérica (fallback si la sala no tiene decor propio)
const GEN = [
  `<rect x="6" y="30" width="6" height="10" fill="#8b6b4a"/>
   <circle cx="9" cy="27" r="6" fill="#4f9d69"/>`,
  `<rect x="40" y="26" width="12" height="9" fill="#fff" stroke="#17212b" stroke-width="1.5"/>
   <path d="M42 33l3-4 3 3 2-2" stroke="#4f9d69" fill="none" stroke-width="1.5"/>`,
  `<rect x="18" y="42" width="24" height="5" rx="2" fill="#b3261e" opacity=".8"/>`
];

const deco = (l, d) => (d || GEN).slice(0, l).join(" ");

const roomSvg = (l, w, d) => `<svg viewBox="0 0 60 50" aria-hidden="true">
  <rect width="60" height="50" fill="${(w || WALL)[l]}"/>
  ${l === 0 ? `<path d="M5 45l12-6M40 38l14 8" stroke="#b9ad92" stroke-width="3" opacity="0.6"/>
               <path d="M10 10l8 5M45 15l-6 8" stroke="#b9ad92" stroke-width="2" opacity="0.4"/>` : ""}
  <rect y="40" width="60" height="10" fill="${l > 1 ? "#8b6b4a" : "#a89b86"}"/>
  ${deco(l, d)}
  ${l > 2 ? `<path d="M30 27l2.5 5 5.5.8-4 3.9 1 5.5-5-2.6-5 2.6 1-5.5-4-3.9 5.5-.8z" fill="#e0a526"/>` : ""}
</svg>`;

const strip = () => {
  const p = present(C, s);
  return `<ol class="rooms" aria-label="Salas de la empresa">
    ${C.rooms.map(r => `
      <li class="room lvl${s.wardrobe}${p && r.id === p.q.roomId ? " now" : ""}">
        <div class="wall">
          ${roomSvg(s.wardrobe, r.wall, r.decor)}
          <span class="plate">${esc(r.name)}</span>
        </div>
      </li>
    `).join("")}
  </ol>`;
};

const pop = () => {
  const n = present(C, s);
  const room = n ? C.rooms.find(r => r.id === n.q.roomId) : null;
  return `<div class="pop">
    ${avatar(last.char, s.wardrobe, true)}
    <div>
      <b>¡${last.finished ? "Todas las rondas aprobadas" : last.roundPassed ? "Ronda aprobada" : "Tal cual"}!</b><br>
      ${NM[last.char]} tenía la respuesta.
      ${room && !last.roundPassed ? ` Se abre la puerta de la sala ${esc(room.name)}.` : ""}
    </div>
  </div>`;
};

// ============================================
// RENDERIZADO DE PANTALLAS
// ============================================
function draw() {
  const pr = s.progress;
  if (pr.finished && view === "question") view = "final";
  let h = "";
  
  if (view === "welcome") {
    h = `<h1>Tu empresa está vacía</h1>
         <p class="lead">Nueve salas esperan su cartel y su pintura. Contestá bien todas las preguntas de una ronda para renovarlas. Un error y la ronda se pierde.</p>
         <div class="chars">
           ${C.characters.map(c => `<div>${avatar(c.id, 0)}<br>${esc(c.name)}</div>`).join("")}
         </div>
         <label>¿Cómo te llamás? (opcional)
           <input id="nm" maxlength="100" value="${esc(s.player.name)}">
         </label>
         <div class="row">
           <button class="btn" data-act="start">Empezar con sonido</button>
           <button class="btn alt" data-act="import">Importar partida</button>
         </div>`;
  } else if (view === "question") {
    const p = present(C, s);
    const room = C.rooms.find(r => r.id === p.q.roomId);
    h = `${strip()}
         <p class="kick">Ronda ${pr.round} de 3 · ${esc(room.name)} · pregunta ${pr.index + 1} de ${roundQuestions(C, pr.round).length}</p>
         ${room.intro && (pr.round === 1 || help) ? `
           <div class="card nora bubble">
             ${avatar("nora", s.wardrobe)}
             <span><b>Nora:</b> ${esc(room.intro)}</span>
           </div>
         ` : ""}
         <h1>${esc(p.q.prompt)}</h1>
         ${p.options.map(o => `
           <button class="opt" data-act="pick" data-c="${o.conceptId}" data-ch="${o.char}">
             ${avatar(o.char, s.wardrobe)}
             <span><b>${NM[o.char]} dice:</b> ${esc(o.text)}</span>
           </button>
         `).join("")}`;
  } else if (view === "reveal") {
    const q = last.q;
    const ch = q.options.find(o => o.conceptId === last.chosen);
    const right = q.options.find(o => o.conceptId === q.correct);
    const v = q.voices[last.char][last.ok ? "ok" : "ko"];
    
    h = `${strip()}
         ${last.ok ? pop() : ""}
         <div class="card ${last.ok ? "good" : "bad"}">
           ${last.ok ? "" : boy}
           <h1>${last.ok ? "¡Correcto!" : "Perdiste la ronda"}</h1>
           ${last.ok ? "" : `
             <p>Volvés a la ronda ${last.lostTo}. Las salas lo muestran.</p>
             <p><b>Elegiste:</b> ${esc(ch.text)}. ${esc(ch.whyNot || "")}</p>
             <p><b>Era:</b> ${esc(right.text)}</p>
           `}
           <p>${esc(q.explanation)}</p>
           <div class="bubble">
             ${avatar(last.char, s.wardrobe)}
             <span><b>${NM[last.char]}:</b> «${esc(v)}»</span>
           </div>
           ${last.roundPassed && !last.finished ? "<p><b>¡Ronda aprobada! Las salas se renovaron.</b></p>" : ""}
         </div>
         <div class="row">
           <button class="btn" data-act="next">Seguir</button>
           ${last.ok || last.reported ? "" : `<button class="mini" data-act="unfair">Esta pregunta me pareció injusta</button>`}
         </div>
         ${last.reported ? "<p>Gracias, quedó anotado.</p>" : ""}`;
  } else {
    h = `${strip()}
         <h1>¡Tus tres rondas están aprobadas${s.player.name ? ", " + esc(s.player.name) : ""}!</h1>
         <p class="lead">Las salas quedaron con su pintura y su cartel. Exportá tu partida para guardarla.</p>
         <div class="row">
           <button class="btn" data-act="export">Exportar partida</button>
           <button class="btn alt" data-act="again">Jugar de nuevo</button>
         </div>`;
  }
  
  scr.innerHTML = (LOAD_ERRORS.length ? `<div class="card bad"><b>Error en el contenido de:</b> ${esc(LOAD_ERRORS.join(" · "))}</div>` : "") + h;
}

function dl() {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([exportState(s)], { type: "application/json" }));
  a.download = "lienzo-partida.json";
  a.click();
}

// ============================================
// EVENTOS
// ============================================
scr.addEventListener("click", e => {
  const b = e.target.closest("[data-act]");
  if (!b) return;
  const a = b.dataset.act;
  
  if (a === "start") {
    s.player.name = $("#nm").value.slice(0, 100);
    s.player.started = true;
    view = "question";
    on = true;
    $("#snd").textContent = "Sonido: encendido";
    $("#snd").setAttribute("aria-pressed", true);
    drone(0);
  } else if (a === "pick") {
    const r = answer(C, s, b.dataset.c, b.dataset.ch);
    s = r.state;
    last = { ...r, chosen: b.dataset.c, char: b.dataset.ch };
    view = "reveal";
    
    if (r.ok) {
      ding();
      if (r.roundPassed) {
        setTimeout(fanfare, 250);
        setTimeout(repair, 400);
      }
    } else {
      error();
    }
    drone(s.progress.streak);
  } else if (a === "next") {
    view = s.progress.finished ? "final" : "question";
    help = false;
  } else if (a === "help") {
    help = !help;
  } else if (a === "unfair") {
    s.unfairReports.push({ questionId: last.q.id, at: new Date().toISOString() });
    last.reported = true;
  } else if (a === "import") {
    $("#file").click();
    return;
  } else if (a === "export") {
    dl();
    return;
  } else if (a === "again") {
    s = newState();
    s.player.started = true;
    view = "question";
  }
  
  save();
  fog();
  draw();
});

$("#exp").addEventListener("click", dl);

$("#snd").addEventListener("click", e => {
  on = !on;
  e.target.textContent = "Sonido: " + (on ? "encendido" : "apagado");
  e.target.setAttribute("aria-pressed", on);
  if (on) ding();
  drone(s.progress.streak);
});

$("#file").addEventListener("change", async e => {
  const f = e.target.files[0];
  if (!f) return;
  try {
    s = validate(JSON.parse(await f.text()));
    s.player.started = true;
    view = "question";
    save();
    draw();
  } catch (x) {
    alert("No se pudo importar: " + x.message);
  }
  e.target.value = "";
});

draw();
