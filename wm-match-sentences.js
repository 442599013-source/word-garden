/* V64.39: five real course sentences. Only words belonging to the current five sentences enter this panel. */
(()=>{'use strict';
const stage=document.querySelector('#match-game .match-stage');if(!stage)return;
const normalize=w=>String(w||'').normalize('NFKC').toLowerCase().replace(/[’‘]/g,"'").replace(/\./g,'').replace(/^[^\p{L}0-9]+|[^\p{L}0-9]+$/gu,'');
let engine,rows=[],current=0,completed=new Set(),replay=()=>{},revision=0,vocabulary=null,abbreviations=[];
const panel=document.createElement('section');panel.id='match-sentences';panel.className='sentence-box';panel.setAttribute('aria-label','Five sentences');
panel.innerHTML='<header class="sentence-header"><span>Sentence</span><button type="button" class="sentence-sound" aria-label="Play full English sentence"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4V5Z"/><path d="M15 8a6 6 0 0 1 0 8M18 5a10 10 0 0 1 0 14"/></svg></button></header><div class="sentence-english"></div><div class="sentence-chinese" tabindex="0" aria-label="Chinese sentence; scroll horizontally to read"></div><nav class="sentence-nav" aria-label="Sentence selection"><button type="button" data-step="-1" aria-label="Previous sentence">‹</button><span aria-live="polite"></span><button type="button" data-step="1" aria-label="Next sentence">›</button></nav><span class="sentence-status sr-only" role="status"></span>';
stage.append(panel);
const english=panel.querySelector('.sentence-english'),chinese=panel.querySelector('.sentence-chinese'),counter=panel.querySelector('.sentence-nav span');
function words(row){return String(row.en||row.answer||'').split(/\s+/).filter(Boolean).flatMap(chunk=>{const whole=normalize(chunk);if(vocabulary?.has(whole))return [{text:chunk,key:whole}];const abbreviation=abbreviations.find(k=>whole.startsWith(k+"'")||whole.startsWith(k+'-'));if(abbreviation){const dash=chunk.indexOf('-'),suffix=normalize(chunk.slice(dash+1));if(dash>=0&&vocabulary?.has(suffix))return [{text:chunk.slice(0,dash+1),key:abbreviation},{text:chunk.slice(dash+1),key:suffix}];return [{text:chunk,key:abbreviation}]}const matches=[...chunk.matchAll(/\p{L}+(?:[-'’]\p{L}+)*/gu)];if(!matches.length)return [{text:chunk,key:''}];return matches.map((m,i)=>{const key=normalize(m[0]);return {text:(i===0?chunk.slice(0,m.index):'')+chunk.slice(m.index,matches[i+1]?.index??chunk.length),key:!vocabulary||vocabulary.has(key)?key:''}})})}
function remember(){if(engine)engine.s.sentenceView={version:6439,index:current,filled:[...completed]}}
function render(highlight=''){
 english.replaceChildren();const row=rows[current];panel.hidden=!row;if(!row)return;
 for(const {text:word,key} of words(row)){const filled=completed.has(key)||!key;const slot=document.createElement('span');slot.className='sentence-slot '+(filled?'filled':'blank')+(key===highlight?' landed':'');slot.dataset.word=key;slot.textContent=filled?word:'＿';slot.setAttribute('aria-label',filled?word:'Unfilled word');if(!filled)slot.style.minWidth=Math.max(13,Math.min(40,key.length*4+5))+'px';english.append(slot)}
 chinese.textContent=row.cn||row.chinese||row.translation||'';chinese.scrollLeft=0;counter.textContent=(current+1)+' / '+rows.length;remember();requestAnimationFrame(position);
}
panel.querySelectorAll('[data-step]').forEach(b=>b.onclick=()=>{if(!rows.length)return;current=(current+Number(b.dataset.step)+rows.length)%rows.length;render();window.dispatchEvent(new CustomEvent('wm-match-sentence-selection'))});
panel.querySelector('.sentence-sound').onclick=()=>{const row=rows[current];if(row)replay(String(row.en||row.answer||''))};
function init(game,speak){revision++;engine=game;replay=speak||(()=>{});rows=(game.plan.lessons||[]).slice(0,5);abbreviations=(game.plan.sourceWordIds||[]).filter(id=>id.startsWith('abbr:')).map(id=>normalize(game.data.words[id]?.en||id));vocabulary=game.plan.sourceWordIds?new Set(game.plan.sourceWordIds.map(id=>normalize(game.data.words[id]?.en||id))):null;const saved=game.s.sentenceView;completed=new Set([...(saved?.version===6439?saved.filled||[]:[]),...(game.s.done||[]).filter(id=>!game.plan.sourceWordIds||game.plan.sourceWordIds.includes(id)).map(id=>game.data.words[id]?.en||id)].map(normalize).filter(w=>w&&(!vocabulary||vocabulary.has(w))));current=Math.max(0,Math.min(rows.length-1,Number(saved?.index)||0));render();}
async function match(result,rects){
 const game=engine,epoch=revision;if(!game)return;
 const en=result.previous.find(t=>result.ids.includes(t.id)&&t.lang==='en');
 if(!en||(game.plan.sourceWordIds&&!game.plan.sourceWordIds.includes(en.word)))return;
 const key=normalize(game.data.words[en.word]?.en||en.word),indices=rows.map((r,i)=>words(r).some(w=>w.key===key)?i:-1).filter(i=>i>=0);
 if(!key||!indices.length)return;
 current=indices.includes(current)?current:indices[0];completed.add(key);render(key);
 const slot=[...english.children].find(n=>n.dataset.word===key),source=rects.find(r=>r.lang==='en');
 const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
 if(slot&&source&&!reduced&&slot.animate){const target=slot.getBoundingClientRect(),base=stage.getBoundingClientRect(),ghost=document.createElement('span');ghost.className='sentence-flying-word';ghost.textContent=game.data.words[en.word]?.en||en.word;const scale=base.width/(stage.clientWidth||base.width)||1;Object.assign(ghost.style,{left:(source.left-base.left)/scale+'px',top:(source.top-base.top)/scale+'px',width:source.width/scale+'px',height:source.height/scale+'px'});stage.append(ghost);try{await ghost.animate([{transform:'translate(0,0) scale(1)',opacity:1},{transform:`translate(${(target.left-source.left)/scale}px,${(target.top-source.top)/scale}px) scale(.45)`,opacity:0}],{duration:480,easing:'cubic-bezier(.2,.7,.3,1)'}).finished}catch{}finally{ghost.remove()}}
 if(epoch===revision)panel.querySelector('.sentence-status').textContent='Matched: '+(game.data.words[en.word]?.en||en.word);
}
function set(n,key,value){if(n.style.getPropertyValue(key)!==value)n.style.setProperty(key,value,'important')}
function position(){
 const actor=stage.querySelector('.game-companions .slot-0 img'),egg=stage.querySelector('#v49-game-egg'),batch=stage.querySelector('#shuffle');if(!actor||!egg||!batch)return;
 const sr=stage.getBoundingClientRect(),ar=actor.getBoundingClientRect(),width=stage.clientWidth||sr.width,scale=sr.width/width||1;if(!ar.height||!width)return;
 // Original artwork bounds, measured inside its unchanged image canvas.
 const jack=actor.dataset.jackAngel==='1';let feet;
 if(jack)feet=(ar.top-sr.top+ar.height*709/724)/scale;
 else {const ratio=(actor.naturalWidth&&actor.naturalHeight)?actor.naturalWidth/actor.naturalHeight:900/1080;const h=Math.min(ar.height,ar.width/ratio);feet=(ar.top-sr.top+(ar.height-h)/2+h*948/1080)/scale}
 const size=width*.125;set(egg,'left',width*.14+'px');set(egg,'right','auto');set(egg,'width',size+'px');set(egg,'height',size+'px');set(egg,'top',feet-size*176/210+'px');
 set(batch,'left',width*.04+'px');set(batch,'right','auto');set(batch,'top',feet+5+'px');
 const panelBottom=(panel.getBoundingClientRect().bottom-sr.top)/scale,batchBottom=feet+5+Math.max(22,width*.055);const extra=Math.max(0,Math.max(panelBottom,batchBottom)-(stage.clientHeight||sr.height/scale));const main=document.getElementById('match-game');set(main,'padding-bottom',extra+12+'px');
}
let queued=false;function schedule(){if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;position()})}
if(window.ResizeObserver){const observer=new ResizeObserver(schedule);observer.observe(stage);observer.observe(panel)}
new MutationObserver(schedule).observe(stage,{childList:true,subtree:true});stage.addEventListener('load',schedule,true);window.addEventListener('resize',schedule);window.addEventListener('wm-companions-change',schedule);window.addEventListener('wm-match-round-start',schedule);
window.WMMatchSentences={init,match};
})();

