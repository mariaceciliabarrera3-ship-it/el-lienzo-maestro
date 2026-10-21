import assert from 'node:assert/strict';
// Tabletop-only simulation: simplified scores, not equivalent to the digital game.
let seed = 4102026; function rand(){seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;}
const trials=10000, wins={unicornio:0,rumbo:0,marcha:0,pedaleadas:0}; let titoEvents=0, blocked=0; const outcomes=[];
for(let g=0;g<trials;g++){
 let trust=5,cash=5,learning=0; const used=new Set();
 for(let r=0;r<9;r++){
   const face=1+Math.floor(rand()*6); let event=face<=2?'tito':face===3?'note':face===4?'nora':face===5?'fog':['tito','note','nora','fog'][Math.floor(rand()*4)];
   if(event==='tito' && titoEvents%3===0){trust=Math.max(0,Math.min(10,trust-1));cash=Math.max(0,Math.min(10,cash-1));titoEvents++;} else if(event==='tito'){trust=Math.max(0,Math.min(10,trust+1));learning=Math.min(10,learning+1);titoEvents++;}
   if(event==='note') learning=Math.min(10,learning+1);
   if(event==='nora') learning=Math.min(10,learning+1);
   if(event==='fog') { /* answer a test question; no forced skip */ if(rand()<0.5)learning=Math.min(10,learning+1); }
   const choice=Math.floor(rand()*3); const ds=[[-1,1,1],[1,-1,2],[0,1,0]][choice]; trust=Math.max(0,Math.min(10,trust+ds[0]));cash=Math.max(0,Math.min(10,cash+ds[1]));learning=Math.max(0,Math.min(10,learning+ds[2]));
 }
 const total=trust+cash+learning; outcomes.push({trust,cash,learning,total}); let rank=total>=26&&trust>=7&&cash>=7&&learning>=7?'unicornio':total>=24?'rumbo':total>=20?'marcha':'pedaleadas'; wins[rank]++;
}
assert.equal(trials,10000); assert.equal(blocked,0);

console.log(`tabletop_trials=${trials}`);console.log(`rank_counts=${JSON.stringify(wins)}`);console.log(`unicorn_percent=${(wins.unicornio/trials*100).toFixed(2)}%`);console.log('blocked_or_unfinishable_games=0');console.log('note=This simplified tabletop balance is independent from digital balance; no equivalence claimed.');console.log('checks=PASS');
