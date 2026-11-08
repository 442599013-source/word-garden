/* V57 — display-only homepage upgrade. Keep legacy runtime and navigation intact. */
(()=>{'use strict';
const stage=document.getElementById('home-stage'),stats=stage?.querySelector('.v48-stats'),intro=document.getElementById('intro');if(!stage||!stats)return;
const pairs=[
 ['Welcome to Word Match!','欢迎来到《单词消消乐》！'],
 ['Begin your magical English learning adventure!','开启你的魔法英语学习之旅！'],
 ['Here, every new word you learn helps your little angel grow.','在这里，每学会一个新单词，你的小天使就会慢慢成长。'],
 ['Match English and Chinese words to earn points.','通过中英文单词配对，积累积分。'],
 ['Unlock adorable pets and explore new stages of learning.','解锁可爱的宠物，探索一个又一个新的学习阶段。'],
 ['The more you learn, the stronger your little angel becomes!','你学得越多，你的小天使就会变得越强大！'],
 ['Are you ready?','准备好了吗？'],
 ['Let our magical adventure begin!','让我们的魔法之旅开始吧！']
];
const names=['Poor','Weak','Basic','Good','Excellent','Amazing','Exceptional'];
function tier(lv,score){if(lv<=0)return -1;const r=score/(lv*10);return r<.6?0:r<1?1:Math.abs(r-1)<1e-9?2:r<1.2?3:r<1.5?4:r<1.8?5:6;}
// Existing V49 sync() still writes these IDs. Preserve them offscreen, not in the visible card.
const legacy=document.createElement('div');legacy.hidden=true;legacy.style.display='none';
for(const id of ['v48-level-en','v48-level-zh','v48-score','v48-ability']){const old=document.getElementById(id);if(old){old.remove();legacy.append(old);}else{const n=document.createElement('span');n.id=id;legacy.append(n);}}
stage.append(legacy);
const sections=[['Angel Baby','v57-level'],['Baby Score','v57-score'],['Ability','v57-ability']];
stats.replaceChildren();const refs=sections.map(([label,cls])=>{const column=document.createElement('div');column.className='v57-stat '+cls;const title=document.createElement('b');title.textContent=label;const value=document.createElement('strong');value.className='v57-value';const track=document.createElement('div');track.className='v57-progress';const fill=document.createElement('div');fill.className='v57-progress-fill';track.append(fill);column.append(title,value,track);stats.append(column);return{value,fill};});
function update(){const lv=Math.max(0,Math.min(600,Number(window.WM42?.completed?.())||0));let score=0;try{score=Number(JSON.parse(localStorage.getItem('wm-wordmatch-v35')||'{}').total||0)/10;}catch{}if(!Number.isFinite(score))score=0;
const index=tier(lv,score),rating=index<0?'Not Rated':names[index];const set=(i,s,p)=>{refs[i].value.textContent=s;refs[i].fill.style.width=Math.max(0,Math.min(100,p))+'%';};
set(0,'Level '+lv,lv/600*100);refs[0].fill.dataset.started=String(lv>0);set(1,score.toFixed(1),score/7500*100);set(2,rating,(index+1)/7*100);refs[2].value.classList.toggle('v57-long',rating.length>11);}
for(const evt of ['pageshow','storage','wm-companions-change'])window.addEventListener(evt,update);document.addEventListener('visibilitychange',()=>{if(!document.hidden)update();});update();
const title=stage.querySelector('.journey-title');let playing=false,epoch=0,btn;
function cancel(){epoch++;playing=false;try{window.speechSynthesis?.cancel();}catch{}btn?.setAttribute('aria-pressed','false');}
function say(text,lang,t){return new Promise(resolve=>{if(t!==epoch||!('speechSynthesis' in window))return resolve();const utterance=new SpeechSynthesisUtterance(text);utterance.lang=lang;utterance.rate=lang==='en-GB'?.88:.94;let done=false;const complete=()=>{if(!done){done=true;resolve();}};utterance.onend=complete;utterance.onerror=complete;try{speechSynthesis.speak(utterance);}catch{complete();}});}
async function speakWelcome(){if(playing){cancel();return;}if(!('speechSynthesis' in window))return;cancel();const token=epoch;playing=true;btn?.setAttribute('aria-pressed','true');for(const [en,zh]of pairs){if(token!==epoch)break;await say(en,'en-GB',token);if(token!==epoch)break;await say(zh,'zh-CN',token);}if(token===epoch){playing=false;btn?.setAttribute('aria-pressed','false');}}
if(title){btn=document.createElement('button');btn.type='button';btn.className='v57-voice-button';btn.setAttribute('aria-label','Replay welcome / 重播欢迎语');btn.setAttribute('aria-pressed','false');btn.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15 9a5 5 0 0 1 0 6M18 6a9 9 0 0 1 0 12"/></svg>';btn.onclick=(event)=>{event.stopPropagation();speakWelcome();};title.append(btn);}
let autoStarted=false;stage.addEventListener('pointerdown',event=>{if(autoStarted||intro&&!intro.hidden||event.target.closest('button,a,nav,dialog'))return;autoStarted=true;speakWelcome();},{capture:true});window.addEventListener('pagehide',cancel);document.addEventListener('visibilitychange',()=>{if(document.hidden)cancel();});
})();
