import{CONTENT as C}from"../data/content.js";
import{KEY,newState,present,answer,validate,exportState,roundQuestions}from"./engine.js";
const $=q=>document.querySelector(q),scr=$("#screen"),NM=Object.fromEntries(C.characters.map(c=>[c.id,c.name]));
const esc=t=>String(t).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
let s=load(),view=s.player.started?"question":"welcome",last=null,help=false;
function load(){try{const r=localStorage.getItem(KEY);if(r)return validate(JSON.parse(r))}catch(e){}return newState()}
function save(){try{localStorage.setItem(KEY,JSON.stringify(s));$("#status").textContent="Guardado en este navegador"}catch(e){$("#status").textContent="No se pudo guardar: exportá una copia"}}
// Sonido generado en el navegador (apagado hasta que la persona lo activa)
let ac=null,dr=null,on=false;const A=()=>ac??=new(window.AudioContext||window.webkitAudioContext)();
function beep(f,d,t="sine",g=.15){if(!on)return;const a=A(),o=a.createOscillator(),v=a.createGain();o.type=t;o.frequency.value=f;v.gain.setValueAtTime(g,a.currentTime);v.gain.exponentialRampToValueAtTime(.001,a.currentTime+d);o.connect(v).connect(a.destination);o.start();o.stop(a.currentTime+d)}
const gong=()=>{beep(98,2,"sine",.35);beep(147,1.6,"triangle",.2)},ding=()=>{beep(660,.25);beep(880,.3)};
function drone(n){if(!on||s.progress.finished){if(dr){dr.o.stop();dr=null}return}const a=A();if(!dr){const o=a.createOscillator(),v=a.createGain(),f=a.createBiquadFilter();o.type="sawtooth";o.frequency.value=55;f.frequency.value=180;v.gain.value=0;o.connect(f).connect(v).connect(a.destination);o.start();dr={o,v}}dr.v.gain.setTargetAtTime(Math.min(.02+n*.012,.08),a.currentTime,.4)}
const fog=()=>{if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;scr.classList.remove("fog");void scr.offsetWidth;scr.classList.add("fog")};
const strip=()=>{const p=present(C,s);return`<ol class="rooms" aria-label="Salas de la empresa">${C.rooms.map(r=>`<li class="room lvl${s.wardrobe}${p&&r.id===p.q.roomId?" now":""}">${esc(r.name)}</li>`).join("")}</ol>`};
const boy=`<svg class="boy" viewBox="0 0 60 60" role="img" aria-label="Un muchacho se agarra la cabeza"><circle cx="30" cy="30" r="22" fill="#f4d3a1" stroke="#333" stroke-width="2"/><path d="M20 26l6 3M40 26l-6 3M22 40q8-8 16 0" fill="none" stroke="#333" stroke-width="2"/><path d="M20 33v10M40 33v10" stroke="#4aa3ff" stroke-width="3"/></svg>`;
function draw(){const pr=s.progress;if(pr.finished&&view==="question")view="final";let h="";
 if(view==="welcome")h=`<h1>Tu empresa está vacía</h1><p class="lead">Nueve salas esperan su cartel y su pintura. Contestá bien todas las preguntas de una ronda para renovarlas. Un error y la ronda se pierde.</p><label>¿Cómo te llamás? (opcional)<input id="nm" maxlength="100" value="${esc(s.player.name)}"></label><div class="row"><button class="btn" data-act="start">Empezar</button><button class="btn alt" data-act="import">Importar partida</button></div>`;
 else if(view==="question"){const p=present(C,s),room=C.rooms.find(r=>r.id===p.q.roomId);
  h=`${strip()}<p class="kick">Ronda ${pr.round} de 3 · ${esc(room.name)} · pregunta ${pr.index+1} de ${roundQuestions(C,pr.round).length}</p>${room.intro&&(pr.round===1||help)?`<div class="card nora"><b>Nora:</b> ${esc(room.intro)}</div>`:""}<h1>${esc(p.q.prompt)}</h1>${p.options.map(o=>`<button class="opt" data-act="pick" data-c="${o.conceptId}" data-ch="${o.char}"><b>${NM[o.char]} dice:</b> ${esc(o.text)}</button>`).join("")}<div class="row">${pr.round>1?`<button class="mini" data-act="help">Ayuda de Nora</button>`:""}</div>`}
 else if(view==="reveal"){const q=last.q,ch=q.options.find(o=>o.conceptId===last.chosen),right=q.options.find(o=>o.conceptId===q.correct),v=q.voices[last.char][last.ok?"ok":"ko"];
  h=`${strip()}<div class="card ${last.ok?"good":"bad"}">${last.ok?"":boy}<h1>${last.ok?"¡Correcto!":"Perdiste la ronda"}</h1>${last.ok?"":`<p>Volvés a la ronda ${last.lostTo}. Las salas lo muestran.</p><p><b>Elegiste:</b> ${esc(ch.text)}. ${esc(ch.whyNot||"")}</p><p><b>Era:</b> ${esc(right.text)}</p>`}<p>${esc(q.explanation)}</p><p><b>${NM[last.char]}:</b> «${esc(v)}»</p>${last.roundPassed&&!last.finished?"<p><b>¡Ronda aprobada! Las salas se renovaron.</b></p>":""}</div><div class="row"><button class="btn" data-act="next">Seguir</button>${last.ok||last.reported?"":`<button class="mini" data-act="unfair">Esta pregunta me pareció injusta</button>`}</div>${last.reported?"<p>Gracias, quedó anotado.</p>":""}`}
 else h=`${strip()}<h1>¡Tus tres rondas están aprobadas${s.player.name?", "+esc(s.player.name):""}!</h1><p class="lead">Las salas quedaron con su pintura y su cartel. Exportá tu partida para guardarla.</p><div class="row"><button class="btn" data-act="export">Exportar partida</button><button class="btn alt" data-act="again">Jugar de nuevo</button></div>`;
 scr.innerHTML=h}
function dl(){const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([exportState(s)],{type:"application/json"}));a.download="lienzo-partida.json";a.click()}
scr.addEventListener("click",e=>{const b=e.target.closest("[data-act]");if(!b)return;const a=b.dataset.act;
 if(a==="start"){s.player.name=$("#nm").value.slice(0,100);s.player.started=true;view="question";drone(0)}
 else if(a==="pick"){const r=answer(C,s,b.dataset.c,b.dataset.ch);s=r.state;last={...r,chosen:b.dataset.c,char:b.dataset.ch};view="reveal";r.ok?ding():gong();drone(s.progress.streak)}
 else if(a==="next"){view=s.progress.finished?"final":"question";help=false}
 else if(a==="help")help=!help;
 else if(a==="unfair"){s.unfairReports.push({questionId:last.q.id,at:new Date().toISOString()});last.reported=true}
 else if(a==="import"){$("#file").click();return}else if(a==="export"){dl();return}
 else if(a==="again"){s=newState();s.player.started=true;view="question"}
 save();fog();draw()});
$("#exp").addEventListener("click",dl);
$("#snd").addEventListener("click",e=>{on=!on;e.target.textContent="Sonido: "+(on?"encendido":"apagado");e.target.setAttribute("aria-pressed",on);if(on)ding();drone(s.progress.streak)});
$("#file").addEventListener("change",async e=>{const f=e.target.files[0];if(!f)return;try{s=validate(JSON.parse(await f.text()));s.player.started=true;view="question";save();draw()}catch(x){alert("No se pudo importar: "+x.message)}e.target.value=""});
draw();
