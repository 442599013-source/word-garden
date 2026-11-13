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
const sections=[['Advance','v57-level'],['Practice','v57-score'],['Ability','v57-ability']];
stats.replaceChildren();const refs=sections.map(([label,cls])=>{const column=document.createElement('div');column.className='v57-stat '+cls;const title=document.createElement('b');title.textContent=label;const value=document.createElement('strong');value.className='v57-value';const track=document.createElement('div');track.className='v57-progress';const fill=document.createElement('div');fill.className='v57-progress-fill';track.append(fill);column.append(title,value,track);stats.append(column);return{value,fill};});
function update(){const lv=Math.max(0,Math.min(600,Number(window.WM42?.completed?.())||0));let score=0;try{score=Number(JSON.parse(localStorage.getItem(window.WMMatchProgressKey?.()||'wm-wordmatch-v35')||'{}').total||0)/10;}catch{}if(!Number.isFinite(score))score=0;
const index=tier(lv,score),rating=index<0?'Not Rated':names[index];const set=(i,s,p)=>{refs[i].value.textContent=s;refs[i].fill.style.width=Math.max(0,Math.min(100,p))+'%';};
set(0,'Level '+lv,lv/600*100);refs[0].fill.dataset.started=String(lv>0);set(1,score.toFixed(1),score/7500*100);set(2,rating,(index+1)/7*100);refs[2].value.classList.toggle('v57-long',rating.length>11);}
for(const evt of ['pageshow','storage','wm-companions-change'])window.addEventListener(evt,update);document.addEventListener('visibilitychange',()=>{if(!document.hidden)update();});update();
// V58: use the existing Microsoft Azure TTS service, never browser speechSynthesis.
const title=stage.querySelector('.journey-title');
const audio=document.createElement('audio');
audio.id='home-microsoft-welcome-audio';audio.preload='none';audio.playsInline=true;audio.hidden=true;stage.append(audio);
const voice=window.WMMicrosoftVoice?new window.WMMicrosoftVoice(audio):null;
let playing=false,finished=false,started=false,epoch=0,btn=null,launchTimer=null;
const muteKey='wm-home-welcome-muted-v6426';let enabled=true;try{enabled=localStorage.getItem(muteKey)!=='1'}catch{}
function paintVoice(){if(!btn)return;btn.setAttribute('aria-pressed',String(enabled));btn.setAttribute('aria-label',enabled?'Turn welcome audio off':'Turn welcome audio on');btn.classList.toggle('is-muted',!enabled);const slash=btn.querySelector('.v6426-mute-slash');if(slash)slash.style.display=enabled?'none':'';audio.muted=!enabled;}

function cancel(){epoch++;playing=false;try{voice?.stop();}catch{}paintVoice();}
async function speakWelcome(force=false){
 if(!voice||!enabled)return;
 if(force){finished=false;cancel();}
 else if(started||playing||finished)return;
 if(playing)return;
 started=true;playing=true;const token=++epoch;
 paintVoice();
 try{
  for(const [en,zh] of pairs){
   if(token!==epoch)break;
   await voice.play(en,'en-GB',.88);
   if(token!==epoch)break;
   await voice.play(zh,'zh-CN',.94);
  }
  if(token===epoch)finished=true;
 }catch(err){
  // Safari/WebKit may block audible autoplay without a trusted gesture.
  // Do NOT replace Microsoft's voice with low-quality browser TTS.
  if(token===epoch){started=false;stage.dataset.welcomeAudioBlocked='true';}
 }finally{if(token===epoch){playing=false;paintVoice();}}
}
if(title){
 btn=document.createElement('button');btn.type='button';btn.className='v57-voice-button';
 btn.setAttribute('aria-label','Play Microsoft welcome / 播放微软欢迎语');btn.setAttribute('aria-pressed','false');
 btn.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15 9a5 5 0 0 1 0 6M18 6a9 9 0 0 1 0 12"/></svg>';
 const slash=document.createElementNS('http://www.w3.org/2000/svg','path');slash.setAttribute('d','M3 3L21 21');slash.classList.add('v6426-mute-slash');btn.querySelector('svg').append(slash);
 btn.onclick=e=>{e.stopPropagation();enabled=!enabled;try{localStorage.setItem(muteKey,enabled?'0':'1')}catch{}if(!enabled){clearTimeout(launchTimer);delete stage.dataset.welcomeAudioBlocked;cancel();}else{paintVoice();void speakWelcome(true);}};(stage.querySelector('.v48-world')||stage).append(btn);paintVoice();placeVoice();
}
function placeVoice(){if(!btn)return;const hero=stage.querySelector('#home-companions .slot-0'),world=stage.querySelector('.v48-world')||stage;if(!hero)return;const r=hero.getBoundingClientRect(),w=world.getBoundingClientRect();if(!w.width||!w.height)return;const x=Math.max(w.width*.08,Math.min(w.width*.86,r.left-w.left+r.width*.74)),y=Math.max(0,Math.min(w.height*.78,r.top-w.top+r.height*.27));btn.style.setProperty('left',(x/w.width*100)+'%','important');btn.style.setProperty('top',(y/w.height*100)+'%','important');btn.style.setProperty('right','auto','important')}
let placeFrame;function scheduleVoice(){cancelAnimationFrame(placeFrame);placeFrame=requestAnimationFrame(placeVoice)}for(const name of ['resize','pageshow','wm-companions-change'])window.addEventListener(name,scheduleVoice);const host=stage.querySelector('#home-companions');if(host){new MutationObserver(scheduleVoice).observe(host,{childList:true,subtree:true});if(window.ResizeObserver)new ResizeObserver(scheduleVoice).observe(host)}
function onHomeReady(){
 if(!enabled)return;
 if(intro&&!intro.hidden)return;
 if(stage.dataset.tab&&stage.dataset.tab!=='home')return;
 if(!document.getElementById('home-view')||document.getElementById('home-view').hidden)return;
 clearTimeout(launchTimer);
 launchTimer=setTimeout(()=>{if(!intro||intro.hidden)void speakWelcome();},120);
}
if(intro){new MutationObserver(onHomeReady).observe(intro,{attributes:true,attributeFilter:['hidden']});}
// A delayed check also covers direct entry when there is no intro to play.
window.addEventListener('load',()=>setTimeout(onHomeReady,600));
// If autoplay was blocked, the first ordinary user gesture can unlock Microsoft audio.
// Keep the loudspeaker as a dedicated manual replay control too.
document.addEventListener('pointerdown',event=>{
 if(!enabled||!stage.dataset.welcomeAudioBlocked||intro&&!intro.hidden||finished||playing||event.target.closest('.v57-voice-button'))return;
 delete stage.dataset.welcomeAudioBlocked;
 void speakWelcome();
},{capture:true});
window.addEventListener('pagehide',cancel);
document.addEventListener('visibilitychange',()=>{if(document.hidden)cancel();});
})();
