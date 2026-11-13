/* V64 additive skills and classroom. Does not replace V63.10 Jack animation. */
(()=>{'use strict';
const C=window.WMCompanions,KEY='wm-companions-v39',EGG='magic_egg',MIN=2600;
const get=(k,f={})=>{try{return JSON.parse(localStorage.getItem(k)||'null')||f}catch{return f}};
const set=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}};
// New Cal has its own ID. blond_angel is the older Sunny and is never overwritten.
const CAL='cal_angel',SUNNY='blond_angel',PRIMARY=[CAL,'jack_angel'];
function setupCal(){if(!C)return;
 const sunny=C.catalog.find(c=>c.id===SUNNY);if(sunny)sunny.name='Sunny Angel';
 if(!C.catalog.some(c=>c.id===CAL))C.catalog.push({id:CAL,name:'Cal Angel',kind:'baby'});
 const frames=['v64-cal-01.png','v64-cal-02.png','v64-cal-03.png','v64-cal-04.png','v64-cal-05.png','v64-cal-06.png'];
 if(C.__v64Cal)return;C.__v64Cal=true;
 const original=C.setImage.bind(C),timers=new WeakMap();
 C.setImage=function(img,id,action='idle'){
  if(id!==CAL)return original(img,id,action);
  clearInterval(timers.get(img));img.style.background='';img.style.backgroundImage='';
  img.style.backgroundPosition='';img.style.backgroundSize='';img.style.visibility='visible';
  img.src=frames[0];img.alt='Cal Angel';
  if(action==='idle'){
   img.style.animation='v648AngelFloat 4.1s ease-in-out infinite';
   // Home + Match idle: slow hover, one gentle wing motion, occasional blink.
   // Never use turning, wand-pointing or talking frames during idle.
   let tick=0;const timer=setInterval(()=>{
    if(!img.isConnected){clearInterval(timer);return}
    if(img.dataset.v64Talking==='1')return;
    tick=(tick+1)%22;
    img.src=frames[tick===7?1:0];
   },900);timers.set(img,timer);
  }else if(action==='cheer_fist'||action==='thumbs_up'){
   img.src=frames[4];setTimeout(()=>{if(img.isConnected&&img.dataset.v64Talking!=='1')img.src=frames[0]},3000);
  }else if(action==='hint')img.src=frames[3];
  else if(action==='talk'){img.src=frames[5];}

 };
 for(const host of ['home-companions']){const node=document.getElementById(host);if(node)C.mount(node)}
 const gameHost=document.querySelector('#match-game .game-companions');if(gameHost)C.mount(gameHost);
}
function setupSlotRules(){if(!C)return;
 const sunny=C.catalog.find(c=>c.id===SUNNY);if(sunny)sunny.name='Sunny Angel';
 const initial=get(KEY,{});let slots=Array.isArray(initial.slots)?initial.slots.slice(0,2):[];
 if(!localStorage.getItem('wm-v644-slot-migrated')){
  // If old Cal/Sunny occupied the first position, do not silently turn it into the new Cal.
  // Move it to slot two when free; otherwise preserve the existing second selection.
  if(!PRIMARY.includes(slots[0])){const prior=slots[0];slots[0]='jack_angel';if(!slots[1])slots[1]=EGG;}
  if(slots[0]===slots[1]||slots[1]!==EGG)slots[1]=EGG;
  initial.slots=slots;C.save(initial);localStorage.setItem('wm-v644-slot-migrated','1');
 }
 // Custom character picker has independent slot lists. The original picker can't enforce slot-specific lists.
 const entry=document.getElementById('characters-button');if(!entry||entry.dataset.v643Selector)return;
 entry.dataset.v643Selector='1';
 let activeSlot=0;
 const css=document.createElement('style');css.textContent=`
 .v643-picker[hidden]{display:none!important}.v643-picker{position:fixed;inset:0;z-index:10005;display:grid;place-items:center;background:#1b1334b8;padding:14px}
 .v643-pane{width:min(96vw,440px);max-height:82dvh;overflow:auto;box-sizing:border-box;border:2px solid var(--v62-edge,#d9a7e9);border-radius:22px;background:#fff9f0;padding:18px;color:#635077}
 .v643-pane h2{margin:0 0 12px;text-align:center;font-size:20px}.v643-tabs{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:10px 0}
 .v643-pane button{border:1.5px solid var(--v62-edge,#d9a7e9);border-radius:12px;background:#fff8;padding:9px;color:#654577;cursor:pointer}
 .v643-tabs button[aria-selected=true]{background:var(--v62-edge,#d9a7e9);color:#fff}
 .v643-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.v643-list button{display:flex;flex-direction:column;gap:5px;align-items:center;min-height:118px}
 .v643-list img{height:100px;width:100%;object-fit:contain}.v643-list span{font-size:12px}.v643-list [aria-pressed=true]{outline:2px solid var(--v62-deep,#8a61ac)} .v643-list [disabled]{opacity:.55;filter:grayscale(.3);cursor:not-allowed}.v643-list .v643-locked{font-size:16px}
 .v643-close{margin:12px auto 0;display:block;width:100%}`;
 document.head.append(css);
 const overlay=document.createElement('div');overlay.className='v643-picker';overlay.hidden=true;
 overlay.innerHTML='<div class="v643-pane" role="dialog" aria-modal="true" aria-label="Choose companions"><h2>My Companions · 选择伙伴</h2><div class="v643-tabs"><button type="button" data-slot="0">First · 第一位</button><button type="button" data-slot="1">Second · 第二位</button></div><div class="v643-list"></div><button type="button" class="v643-close">Done · 完成</button></div>';
 document.body.append(overlay);
 const list=overlay.querySelector('.v643-list');
 function render(){const s=C.read();overlay.querySelectorAll('[data-slot]').forEach(b=>b.setAttribute('aria-selected',String(Number(b.dataset.slot)===activeSlot)));
  list.replaceChildren();
  const choices=activeSlot===0?C.catalog.filter(c=>PRIMARY.includes(c.id)):
   [C.catalog.find(c=>c.id===EGG),...C.catalog.filter(c=>!PRIMARY.includes(c.id)&&c.id!==EGG)].filter(Boolean);
  choices.forEach(item=>{const b=document.createElement('button');b.type='button';b.setAttribute('aria-pressed',String(s.slots[activeSlot]===item.id));
   const img=document.createElement('img');C.setImage(img,item.id);img.alt=item.name;
   const caption=document.createElement('span');caption.textContent=item.name;b.append(img,caption);if(activeSlot===1&&item.id!==EGG){b.disabled=true;b.setAttribute('aria-label',item.name+' locked');const lock=document.createElement('span');lock.className='v643-locked';lock.textContent='🔒 Locked';b.append(lock)}
   b.onclick=()=>{const next=C.read();if(next.slots.includes(item.id)&&next.slots[activeSlot]!==item.id)return;
    next.slots[activeSlot]=item.id;C.save(next);render();};list.append(b)});
 }
 overlay.querySelectorAll('[data-slot]').forEach(b=>b.onclick=()=>{activeSlot=Number(b.dataset.slot);render()});
 const close=()=>{overlay.hidden=true};overlay.querySelector('.v643-close').onclick=close;
 overlay.onclick=e=>{if(e.target===overlay)close()};
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!overlay.hidden)close()});
 entry.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();activeSlot=0;overlay.hidden=false;render()},true);
}
function setupEgg(){if(!C)return;if(!C.catalog.some(c=>c.id===EGG))C.catalog.push({id:EGG,name:'Magic Golden Egg',kind:'pet'});if(!C.__v64Egg){const prior=C.setImage.bind(C);C.setImage=function(img,id,action){if(id===EGG){img.src='v49-magic-golden-egg.gif';img.style.background='';img.style.visibility='visible';return}return prior(img,id,action)};C.__v64Egg=true;}
 const saved=get(KEY,{}),slots=Array.isArray(saved.slots)?saved.slots:[];
 // Add the first unlocked second-slot egg without overwriting the user's selected first angel.
 if(localStorage.getItem('wm-v64-egg-initialized')!=='1'){const first=PRIMARY.includes(slots[0])?slots[0]:'jack_angel';saved.slots=[first,EGG];C.save(saved);try{localStorage.setItem('wm-v64-egg-initialized','1')}catch{}}
}
const icons={home:'⌂',growth:'♧',class:'▦',me:'♙'};
function homeNav(){const nav=document.querySelector('#home-stage .bottom-nav');if(!nav||nav.dataset.v64)return;nav.dataset.v64='1';const third=nav.children[2];if(!third)return;third.dataset.tab='class';third.removeAttribute('aria-current');third.setAttribute('aria-label','Class 课堂');const en=third.querySelector('.v48-nav-en'),zh=third.querySelector('.v48-nav-zh');if(en)en.textContent='Class';if(zh)zh.textContent='课堂';
 // v47 handler intercepts this button on capture. Intercept earlier, and navigate only this control.
 nav.addEventListener('click',e=>{if(e.target.closest('[data-tab="class"]')){e.stopImmediatePropagation();e.preventDefault();location.href='sentence-game.html'}},true);
}
// Independent, non-clipped magic overlay. Each skill remains fully visible > 2s.
let effectTail=0;
function fx(label,actor){
 const stage=document.querySelector('#match-game .match-stage,#classroom-stage');if(!stage)return;
 const start=Math.max(Date.now(),effectTail),delay=start-Date.now();effectTail=start+3000;
 setTimeout(()=>{
  if(!stage.isConnected)return;
  const root=document.createElement('div');root.className='v648-skill-overlay';root.setAttribute('aria-live','polite');
  const title=document.createElement('div');title.className='v648-skill-title';title.textContent=label;
  const halo=document.createElement('div');halo.className='v648-skill-halo';
  const particles=document.createElement('div');particles.className='v648-skill-particles';
  for(let i=0;i<12;i++){const star=document.createElement('i');star.style.setProperty('--n',i);star.style.left=(50+(i-6)*3)+'%';star.style.top=(48+(i-6)*1.4)+'%';particles.append(star)}
  root.append(title,halo,particles);stage.append(root);
  if(actor?.isConnected)actor.classList.add('v648-casting');
  setTimeout(()=>{root.remove();actor?.classList.remove('v648-casting')},2850);
 },delay);
}
window.WM64Skill={show:fx};
const primary=()=>document.querySelector('#match-game .game-companions .slot-0');
function updateWords(count){let data=get('wm-v64-learning',{count:0,lastBlessed:0});data.count=Math.max(Number(data.count)||0,count);set('wm-v64-learning',data);}
function currentCount(){const progress=get(window.WMMatchProgressKey?.()||'wm-wordmatch-v35',{}),rounds=progress.rounds||{};const total=Object.values(rounds).reduce((n,r)=>n+(Number.isSafeInteger(r?.pairs)?r.pairs:0),0);return Math.max(total,Number(get('wm-v64-learning',{}).count)||0)}
function matchSkills(){const Engine=window.WMMatchEngine;if(!Engine||Engine.prototype.__v64Skills)return;const p=Engine.prototype;p.__v64Skills=true;
 const oldQueue=p.queueReview;p.queueReview=function(word){const ans=oldQueue.call(this,word);if(!this.data.courseId&&this.data.words[word]){this.s.v64Reviews??={};this.s.v64Reviews[word]=(Number(this.s.v64Reviews[word])||0)+1}return ans};
 const oldHint=p.useHint;p.useHint=function(){const ids=oldHint.call(this);this._v64AutoAwaken=!ids.length;if(ids.length)fx('Light of Wisdom',primary());return ids};
 // One Guardian Halo per level entry with carried review words; never per tile.
 const guardianSeen=new WeakSet();
 function guardianStart(){const round=window.WMGuardianRound,engine=round?.engine;if(!engine||guardianSeen.has(engine)||engine.s.finished||!engine.s.incomingReviews?.length)return;guardianSeen.add(engine);fx('Guardian Halo',primary());}
 window.addEventListener('wm-match-round-start',guardianStart);guardianStart();
 const oldSelect=p.select;p.select=function(id){const res=oldSelect.call(this,id);if(res.kind==='match'){
  updateWords(currentCount()+1);
  if([10,20,30].includes(Number(res.combo)))fx('Golden Radiance',primary());

 }return res};
 const oldBatch=p.newBatch;p.newBatch=function(){const auto=!!this._v64AutoAwaken;this._v64AutoAwaken=false;const tiles=oldBatch.call(this);fx('Magic Awakening',auto?primary():document.querySelector('#match-game .game-companions .slot-1'));return tiles};
}
function eggInGame(){const stage=document.querySelector('#match-game .match-stage');if(!stage)return;const update=()=>{const egg=stage.querySelector('.game-companions .slot-1[data-character="'+EGG+'"]');if(!egg||egg.dataset.v64Click)return;egg.dataset.v64Click='1';egg.setAttribute('role','button');egg.setAttribute('tabindex','0');egg.setAttribute('aria-label','Magic Awakening — New Batch');const trigger=()=>document.getElementById('shuffle')?.click();egg.addEventListener('click',trigger);egg.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();trigger()}})};update();window.addEventListener('wm-companions-change',update);}
function suppressOldCheer(){const host=document.getElementById('effects');if(!host)return;const css=document.createElement('style');css.textContent='#match-game:has(.game-companions .slot-0[data-character="cal_angel"]) .combo-cheer{visibility:hidden!important}';document.head.append(css);}
function classroom(){
 const stage=document.getElementById('classroom-stage');if(!stage||stage.dataset.v646Original==='1')return;
 const $=id=>document.getElementById(id),actor=$('v64-class-angel');
 const units=window.WMMainLessons?.units||window.WM_GAME_UNITS||[];
 // Keep the original 129 units and ten-step lesson ordering, never re-sort the raw rows.
 const lessons=units.flatMap((unit,level)=>unit.lessons.map((lesson,step)=>({
  ...lesson,unitIndex:level,stepIndex:step,
  '输入标准答案':lesson.answer||lesson.en,
  '顶部展示英文':lesson.displayEn||lesson.en,
  '中文含义_完整原句':lesson.cn||lesson.fullTranslation||'',
  '本题知识点':lesson.knowledge||lesson.stage||'',
  '语法或词汇解释':lesson.grammar||'',
  '教学关卡序号':level+1,'小题':step+1
 })));
 const originalProgressKey=window.WMCourse?.key?.('wm-sentences-v9-progress')||'wm-sentences-v9-progress';
 const originalCacheKey=window.WMCourse?.key?.('wm-journey-game-progress-v21')||'wm-journey-game-progress-v21';
 const completedWordCount=()=>{const h=get('word-match-home-preview-v1',{});return Math.max(Number(h.wordsEliminated)||0,Array.isArray(h.learnedWords)?new Set(h.learnedWords).size:0)};
 const progressKey='wm-v64-classroom-progress';let progress=get(progressKey,{index:0,completed:[]});if(!localStorage.getItem(progressKey)){const old=get(originalProgressKey,{});if(Number.isInteger(old.level)){progress.index=old.level*10+(old.targetIndex||0)}}let at=Math.min(Math.max(0,Number(progress.index)||0),Math.max(0,lessons.length-1)),speechToken=0,recognition=null,playing=false;
 const colorMap={forest:['#d9a7e9','#8a61ac','#fff5fb'],coast:['#8bd8e7','#427ca4','#f1fbff'],blossom:['#eda6ce','#9a609f','#fff3f7']};
 function actors(){const state=C?.read?.()||{scene:'forest-stairs',slots:['jack_angel',EGG]},scene=state.scene||'forest-stairs';stage.style.backgroundImage=`url('v39-scene-${scene}.webp')`;const theme=scene.startsWith('coast')?'coast':scene.startsWith('city')?'blossom':'forest';const colors=colorMap[theme];['edge','deep','light'].forEach((k,i)=>stage.style.setProperty('--v62-'+k,colors[i]));
  const first=PRIMARY.includes(state.slots[0])?state.slots[0]:'jack_angel',second=state.slots[1]||EGG;
  const a=document.createElement('img');C.setImage(a,first);a.alt='Angel';actor.dataset.character=first;actor.replaceChildren(a);const b=$('v64-class-pet'),img=document.createElement('img');C.setImage(img,second);img.alt='Companion';b.replaceChildren(img);}
 actors();window.addEventListener('wm-companions-change',actors);window.addEventListener('storage',e=>{if(e.key===KEY)actors()});
 $('v64-learned-count').textContent=completedWordCount();
 let mouthTimer=null;
 function mouth(engaged){
  const image=actor.querySelector('img');if(!image||actor.dataset.character!==CAL)return;
  clearInterval(mouthTimer);mouthTimer=null;
  image.dataset.v64Talking=engaged?'1':'0';
  if(!engaged){image.src='v64-cal-01.png';return}
  let open=false;
  mouthTimer=setInterval(()=>{if(!image.isConnected){clearInterval(mouthTimer);return}open=!open;image.src=open?'v64-cal-06.png':'v64-cal-01.png'},980);
 }
 const status=text=>{$('v64-class-note').textContent=text};
 const clean=t=>String(t||'').toLowerCase().replace(/[’‘]/g,"'").replace(/[^a-z0-9' ]/g,' ').replace(/\s+/g,' ').trim();
 const current=()=>lessons[at];
 function stopVoice(){microsoftPlayer?.stop();speechToken++;try{window.speechSynthesis?.cancel()}catch{}mouth(false);actor.classList.remove('v64-talking');playing=false;}
 function stopMic(){try{recognition?.abort()}catch{}recognition=null;actor.classList.remove('v64-listening')}
 let microsoftPlayer=null;
 async function say(text,lang='en-GB',token=speechToken){if(token!==speechToken)return false;try{if(!window.WMMicrosoftVoice){status('Microsoft audio unavailable. Tap to retry.');return false}microsoftPlayer??=new WMMicrosoftVoice(new Audio());await microsoftPlayer.play(text,lang,.9,()=>{if(token===speechToken){actor.classList.add('v64-talking');mouth(true)}});mouth(false);actor.classList.remove('v64-talking');return token===speechToken}catch{mouth(false);actor.classList.remove('v64-talking');status('Microsoft audio unavailable. Tap to retry.');return false}}

 function setPractice(){if(!current())return;$('v64-practice').hidden=false;$('v64-lesson-step').textContent='Practice';status('Please Read Aloud or Type · 请跟读或输入');playing=false;}
 async function flow(){stopMic();stopVoice();const row=current();if(!row)return;const token=speechToken;playing=true;$('v64-practice').hidden=true;$('v64-class-input').value='';$('v64-lesson-index').textContent='Step '+row['小题']+' / 10';$('v64-class-level').textContent='Level '+row['教学关卡序号'];$('v64-focus-en').textContent=row.w||'Word';$('v64-focus-zh').textContent=row.zh||'';$('v64-lesson-step').textContent='Listen';$('v64-class-sentence').textContent=row['顶部展示英文'];$('v64-class-translation').textContent=row['中文含义_完整原句']||'';$('v64-grammar-topic').textContent=row['本题知识点']||'';$('v64-grammar-text').textContent=row['语法或词汇解释']||'';
   status('Listening to the sentence...');await say(row['输入标准答案'],'en-GB',token);if(token!==speechToken)return;
   $('v64-lesson-step').textContent='Grammar';status('Listening to grammar...');await say((row['本题知识点']||'语法讲解')+'。'+(row['语法或词汇解释']||''),'zh-CN',token);if(token!==speechToken)return;setPractice();}
 function passed(){if(!current())return;stopMic();status('Completed! · 已完成');const completed=new Set(Array.isArray(progress.completed)?progress.completed:[]);completed.add(at);progress.completed=[...completed];progress.index=at;set(progressKey,progress);
  // Mirror success into the existing Level Up Journey course records (without discarding other levels).
  const levelIndex=Math.floor(at/10),stepIndex=at%10,cache=get(originalCacheKey,{}),prior=get(originalProgressKey,{});
  const before=cache[levelIndex]||((prior.level===levelIndex)?prior:{});
  const doneSteps=new Set(Array.isArray(before.completed)?before.completed:[]);doneSteps.add(stepIndex);
  const updated={...before,courseRevision:29,level:levelIndex,completed:[...doneSteps],targetIndex:Math.min(9,stepIndex+1),phase:'repeat'};
  cache[levelIndex]=updated;set(originalCacheKey,cache);
  if(!Number.isInteger(prior.level)||levelIndex>=prior.level)set(originalProgressKey,updated);
$('v64-lesson-step').textContent='Completed';$('v64-learned-count').textContent=completedWordCount();if(completed.size%10===0){fx('Golden Radiance',actor);void say('You have learned another ten words!','en-GB',speechToken)}setTimeout(()=>{if(at<lessons.length-1){at++;progress.index=at;set(progressKey,progress);flow()}},2600)}
 function check(text){const expected=clean(current()?.['输入标准答案']);const actual=clean(text);if(expected&&actual===expected){passed();return true}status('Please try again, or type the sentence. · 请重试或输入');return false}
 $('v64-class-speak').onclick=()=>{if(!current())return;stopMic();stopVoice();const token=speechToken;$('v64-lesson-step').textContent='Replay';status('Replaying sentence...');void say(current()['输入标准答案'],'en-GB',token).then(()=>{if(token===speechToken){$('v64-lesson-step').textContent='Practice';$('v64-practice').hidden=false;status('Please Read Aloud or Type · 请跟读或输入')}})};
 $('v64-class-submit').onclick=()=>check($('v64-class-input').value);
 $('v64-class-input').addEventListener('keydown',e=>{if(e.key==='Enter')check(e.currentTarget.value)});
 $('v64-class-mic').onclick=()=>{if(!current())return;const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR){status('Microphone recognition unavailable. Please type instead.');$('v64-class-input').focus();return}stopVoice();stopMic();let rec;try{rec=new SR();rec.lang='en-GB';rec.interimResults=false;rec.maxAlternatives=3;recognition=rec;rec.onstart=()=>{actor.classList.add('v64-listening');status('Listening...')};rec.onresult=e=>{const options=[...e.results[0]].map(x=>x.transcript);if(options.some(check))return;status('Not recognised. Try again or type. · 请重试或输入')};rec.onerror=()=>{status('Microphone unavailable. You can type instead. · 可以直接输入');actor.classList.remove('v64-listening')};rec.onend=()=>{actor.classList.remove('v64-listening');if(recognition===rec)recognition=null};rec.start()}catch{status('Microphone busy. Please type instead.');$('v64-class-input').focus()}};
 $('v64-lesson-prev').onclick=()=>{at=Math.max(0,at-1);progress.index=at;set(progressKey,progress);flow()};$('v64-lesson-next').onclick=()=>{at=Math.min(lessons.length-1,at+1);progress.index=at;set(progressKey,progress);flow()};
 $('v64-class-pet').onclick=()=>{status('Magic Awakening is available in Magic Match.');};$('v64-focus').onclick=()=>{const row=current();if(row){stopVoice();const token=speechToken;void say((row.w||'')+' '+(row.zh||''),'zh-CN',token)}};
 window.addEventListener('pagehide',()=>{stopVoice();stopMic();clearInterval(mouthTimer)});
 if(lessons.length)flow();else status('Lesson data could not be loaded. Please refresh.');
}
// Use the ACTUAL Jack sprite-sheet cell ratio, not Cal's guessed ratio.
// Jack asset remains untouched: this changes only the display box geometry.
function preserveJackRatio(){
 const sprite=new Image();sprite.onload=()=>{
  if(sprite.naturalWidth>0&&sprite.naturalHeight>0){
   const w=sprite.naturalWidth/4,h=sprite.naturalHeight/2;
   document.documentElement.style.setProperty('--v648-jack-aspect',w+' / '+h);
  }
 };sprite.src='jack-angel-frames.png?v=63.7';
}
function fixUpperHang(){const stage=document.querySelector('#match-game .match-stage');if(!stage)return;const branch=stage.querySelector('.v50-branch');if(branch)branch.style.setProperty('top','15.35%','important');for(const sel of ['.level-button','.score-label','.combo-label']){const n=stage.querySelector(sel);if(n)n.style.setProperty('top','19.55%','important')}}
function init(){preserveJackRatio();fixUpperHang();setupCal();setupEgg();setupSlotRules();homeNav();matchSkills();eggInGame();suppressOldCheer();classroom()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
