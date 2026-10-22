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
const strip=()=>{const p=present(C,s);return`<ol class="rooms" aria-label="Salas de la empresa">${C.rooms.map(r=>`<li class="room lvl${s.wardrobe}${p&&r.id===p.q.roomId?" now":""}">${roomSvg(s.wardrobe)}<span>${esc(r.name)}</span></li>`).join("")}</ol>`};
const boy=`<svg class="boy" viewBox="0 0 60 60" role="img" aria-label="Un muchacho se agarra la cabeza"><circle cx="30" cy="30" r="22" fill="#f4d3a1" stroke="#333" stroke-width="2"/><path d="M20 26l6 3M40 26l-6 3M22 40q8-8 16 0" fill="none" stroke="#333" stroke-width="2"/><path d="M20 33v10M40 33v10" stroke="#4aa3ff" stroke-width="3"/></svg>`;
const AV={nora:["#1f7a8c","#5b3a29"],teo:["#6b7a8f","#2b2b2b"],aurelio:["#6a1b4d","#cfcfcf"]};
function avatar(id,l=0){const[c,h]=AV[id],acc={
nora:'<circle cx="25" cy="25" r="4.5" fill="none" stroke="#222" stroke-width="1.5"/><circle cx="35" cy="25" r="4.5" fill="none" stroke="#222" stroke-width="1.5"/>',
teo:'<rect x="12" y="42" width="36" height="12" rx="2" fill="#c8a165" stroke="#333"/><path d="M21 42v12M30 42v12M39 42v12" stroke="#333"/>',
aurelio:'<rect x="19" y="2" width="22" height="13" fill="#222"/><rect x="13" y="14" width="34" height="3" fill="#222"/><circle cx="35" cy="25" r="4.5" fill="none" stroke="#b8860b" stroke-width="1.5"/>'}[id];
return`<svg class="av" viewBox="0 0 60 60" role="img" aria-label="${NM[id]}"><path d="M6 60q24-26 48 0z" fill="${c}"/><circle cx="30" cy="25" r="13" fill="#f2cfa6" stroke="#333" stroke-width="1.5"/><path d="M17 21q13-16 26 0" fill="${h}"/><circle cx="25" cy="25" r="1.4"/><circle cx="35" cy="25" r="1.4"/><path d="M26 32q4 3 8 0" fill="none" stroke="#333" stroke-width="1.4"/>${acc}${l>0?'<path d="M30 40l-3 8 3 4 3-4z" fill="#b3261e"/>':""}${l>1?'<rect x="40" y="48" width="7" height="5" fill="#fff" stroke="#333"/>':""}${l>2?'<path d="M30 54l3 3-3 3-3-3z" fill="#e0a526"/>':""}</svg>`}
const WALL=["#cfc8b6","#dfe8ee","#9fd0c4","#7fc4a8"];
const roomSvg=l=>`<svg viewBox="0 0 60 50" aria-hidden="true"><rect width="60" height="50" fill="${WALL[l]}"/>${l===0?'<path d="M5 45l12-6M40 38l14 8" stroke="#b9ad92" stroke-width="3"/>':""}<rect y="40" width="60" height="10" fill="${l>1?"#8b6b4a":"#a89b86"}"/>${l===0?'<rect x="14" y="8" width="32" height="12" fill="#f3efe0" stroke="#888" stroke-dasharray="3 2" transform="rotate(-4 30 14)"/>':`<rect x="12" y="7" width="36" height="14" rx="2" fill="${l>2?"#e0a526":"#fff"}" stroke="#17212b" stroke-width="2"/>`}${l>2?'<path d="M30 27l2.5 5 5.5.8-4 3.9 1 5.5-5-2.6-5 2.6 1-5.5-4-3.9 5.5-.8z" fill="#e0a526"/>':""}</svg>`;
function draw(){const pr=s.progress;if(pr.finished&&view==="question")view="final";let h="";
 if(view==="welcome")h=`<h1>Tu empresa está vacía</h1><p class="lead">Nueve salas esperan su cartel y su pintura. Contestá bien todas las preguntas de una ronda para renovarlas. Un error y la ronda se pierde.</p><div class="chars">${C.characters.map(c=>`<div>${avatar(c.id,0)}<br>${esc(c.name)}</div>`).join("")}</div><label>¿Cómo te llamás? (opcional)<input id="nm" maxlength="100" value="${esc(s.player.name)}"></label><div class="row"><button class="btn" data-act="start">Empezar</button><button class="btn alt" data-act="import">Importar partida</button></div>`;
 else if(view==="question"){const p=present(C,s),room=C.rooms.find(r=>r.id===p.q.roomId);
  h=`${strip()}<p class="kick">Ronda ${pr.round} de 3 · ${esc(room.name)} · pregunta ${pr.index+1} de ${roundQuestions(C,pr.round).length}</p>${room.intro&&(pr.round===1||help)?`<div class="card nora bubble">${avatar("nora",s.wardrobe)}<span><b>Nora:</b> ${esc(room.intro)}</span></div>`:""}<h1>${esc(p.q.prompt)}</h1>${p.options.map(o=>`<button class="opt" data-act="pick" data-c="${o.conceptId}" data-ch="${o.char}">${avatar(o.char,s.wardrobe)}<span><b>${NM[o.char]} dice:</b> ${esc(o.text)}</span></button>`).join("")}`}
 else if(view==="reveal"){const q=last.q,ch=q.options.find(o=>o.conceptId===last.chosen),right=q.options.find(o=>o.conceptId===q.correct),v=q.voices[last.char][last.ok?"ok":"ko"];
  h=`${strip()}<div class="card ${last.ok?"good":"bad"}">${last.ok?"":boy}<h1>${last.ok?"¡Correcto!":"Perdiste la ronda"}</h1>${last.ok?"":`<p>Volvés a la ronda ${last.lostTo}. Las salas lo muestran.</p><p><b>Elegiste:</b> ${esc(ch.text)}. ${esc(ch.whyNot||"")}</p><p><b>Era:</b> ${esc(right.text)}</p>`}<p>${esc(q.explanation)}</p><div class="bubble">${avatar(last.char,s.wardrobe)}<span><b>${NM[last.char]}:</b> «${esc(v)}»</span></div>${last.roundPassed&&!last.finished?"<p><b>¡Ronda aprobada! Las salas se renovaron.</b></p>":""}</div><div class="row"><button class="btn" data-act="next">Seguir</button>${last.ok||last.reported?"":`<button class="mini" data-act="unfair">Esta pregunta me pareció injusta</button>`}</div>${last.reported?"<p>Gracias, quedó anotado.</p>":""}`}
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
