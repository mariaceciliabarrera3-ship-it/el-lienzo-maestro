// Reglas del juego. No toca la pantalla.
export const SCHEMA=6,KEY="lienzo.v6",CHARS=["nora","teo","aurelio"];
export function rng(seed){let a=seed>>>0;return()=>{a=(a+0x6D2B79F5)|0;let t=Math.imul(a^(a>>>15),1|a);t=(t+Math.imul(t^(t>>>7),61|t))^t;return((t^(t>>>14))>>>0)/4294967296}}
const hash=s=>{let h=2166136261;for(const c of s){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0};
const shuffle=(a,r)=>{a=[...a];for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
export const newState=(seed=Date.now())=>({schemaVersion:SCHEMA,player:{name:"",started:false},
 progress:{round:1,index:0,attempt:1,seed:seed>>>0,finished:false,streak:0,attemptsByRound:{1:1,2:0,3:0}},
 wardrobe:0,history:[],unfairReports:[],timestamps:{startedAt:new Date().toISOString()},preferences:{sound:false},reservedPhase2:{}});
export const roundQuestions=(C,round)=>{const o=C.rooms.map(r=>r.id);return C.questions.filter(q=>q.round===round).sort((a,b)=>o.indexOf(a.roomId)-o.indexOf(b.roomId))};
const layout=(q,seed,att)=>{const r=rng(seed^hash(q.id)^Math.imul(att,7919));return{o:shuffle(q.options.map(x=>x.conceptId),r),c:shuffle(CHARS,r)}};
export function present(C,s){const{round,index,seed,attempt}=s.progress,q=roundQuestions(C,round)[index];if(!q)return null;
 let l=layout(q,seed,attempt);if(attempt>1){const p=layout(q,seed,attempt-1);if(l.o+""===p.o+""&&l.c+""===p.c+"")l=layout(q,seed+1,attempt)}
 return{q,options:l.o.map((id,i)=>({...q.options.find(x=>x.conceptId===id),char:l.c[i]}))}}
export function answer(C,s0,conceptId,char){const s=structuredClone(s0),p=s.progress,qs=roundQuestions(C,p.round),q=qs[p.index],ok=conceptId===q.correct,now=new Date().toISOString();
 s.timestamps.firstAnswerAt??=now;s.history.push({attempt:p.attempt,round:p.round,roomId:q.roomId,questionId:q.id,conceptId,char,ok,at:now});
 const out={ok,q,roundPassed:false,finished:false,lostTo:null};
 if(ok){p.streak++;p.index++;if(p.index>=qs.length){out.roundPassed=true;if(p.round>=3){p.finished=out.finished=true;s.timestamps.finishedAt=now}else{p.round++;p.index=0;p.attemptsByRound[p.round]++}}}
 else{p.streak=0;p.round=Math.max(1,p.round-1);p.index=0;p.attempt++;p.attemptsByRound[p.round]++;out.lostTo=p.round}
 s.wardrobe=p.finished?3:p.round-1;return{state:s,...out}}
export const exportState=s=>JSON.stringify({...s,exportedAt:new Date().toISOString()},null,1);
export function validate(o){const bad=m=>{throw new Error(m)},p=o?.progress||{};
 if(o?.schemaVersion!==SCHEMA)bad("El archivo es de otra versión del juego");if(![1,2,3].includes(p.round))bad("Ronda inválida");
 if(!Number.isInteger(p.index)||p.index<0||p.index>9)bad("Pregunta inválida");if(!Array.isArray(o.history)||o.history.length>5000)bad("Historial inválido");
 if(!Array.isArray(o.unfairReports)||o.unfairReports.length>500)bad("Avisos inválidos");if(typeof o.player?.name!=="string"||o.player.name.length>100)bad("Nombre inválido");return o}
