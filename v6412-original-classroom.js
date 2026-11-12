/* V64.12: Small, non-destructive adapter for the ORIGINAL sentence-game.html.
   Keeps WordMatchComponents, wm-game-app, 129 sentences, original grading & keyboard.
   Only changes classroom presentation and the order of its teaching phase. */
(()=>{'use strict';
const STORAGE='wm-companions-v39',prefix='v41-stairs-';
const sceneFamily=()=>{let scene='forest-stairs';try{scene=window.WMCompanions?.read?.().scene||JSON.parse(localStorage.getItem(STORAGE)||'{}').scene||scene}catch{}return scene.startsWith('city')?'blossom':scene.startsWith('coast')?'coast':'forest'};
let currentTheme='';
function theme(){const el=document.querySelector('#root .wm-game');if(!el)return;const family=sceneFamily();if(family===currentTheme&&el.dataset.v6412Background)return;currentTheme=family;
 const file=prefix+family+'.png';const colors={forest:['#d7a0df','#8b5db0','#fdf0fb'],coast:['#8bd8e7','#478ca8','#effaff'],blossom:['#edaccc','#ad75a4','#fff2f5']}[family];
 document.documentElement.style.setProperty('--v6412-bg',`url("${file}")`);
 ['edge','deep','light'].forEach((k,i)=>document.documentElement.style.setProperty('--v6412-'+k,colors[i]));
 el.dataset.v6412Background=file;el.style.setProperty('background-image',`url("${file}")`,'important');el.style.setProperty('background-size','100% 100%','important');el.style.setProperty('background-position','center top','important');el.style.setProperty('background-repeat','no-repeat','important');
 // The ORIGINAL .wm-game (not .wm-screen!) is the painted background layer.
 const check=new Image();check.onerror=()=>{el.dataset.v6412BackgroundError=file;};check.onload=()=>{delete el.dataset.v6412BackgroundError};check.src=file;
}
const icon={home:'<path d="M6 17L20 5l14 12v17H6Z"/><path d="M15 34V23h10v11"/><path d="M20 14c-3-4-8 0-4 4l4 4 4-4c4-4-1-8-4-4Z"/>',growth:'<path d="M20 35V18"/><path d="M20 22C10 22 7 17 8 9c8-1 13 3 12 13Z"/><path d="M20 20c0-9 5-13 13-12 0 8-4 13-13 12Z"/>',class:'<rect x="5" y="6" width="12" height="12" rx="3"/><rect x="23" y="6" width="12" height="12" rx="3"/><rect x="5" y="24" width="12" height="12" rx="3"/><rect x="23" y="24" width="12" height="12" rx="3"/>',me:'<circle cx="20" cy="13" r="7"/><path d="M8 35v-3c0-8 5-13 12-13s12 5 12 13v3"/>'};
function nav(){if(document.querySelector('#v62-game-nav'))return;const n=document.createElement('nav');n.id='v62-game-nav';n.className='bottom-nav v62-game-nav';n.setAttribute('aria-label','Navigation');
 const entries=[['home','Home','index.html'],['growth','Growth','word-match.html'],['class','Class','sentence-game.html'],['me','My','index.html?tab=me']];
 for(const [key,label,href] of entries){const a=document.createElement('a');a.href=href;a.setAttribute('aria-label',label);if(key==='class')a.setAttribute('aria-current','page');a.innerHTML=`<span class="v48-nav-icon"><svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icon[key]}</svg></span><span class="v48-nav-en">${label}</span>`;n.append(a)}document.body.append(n);
}
function labels(){const root=document.querySelector('#root .wm-game');if(!root)return;
 const title=root.querySelector('.wm-advance-title');if(title){title.querySelector('strong').textContent='Magic Classroom';title.querySelector('span').hidden=true;}
 const total=root.querySelector('.wm-total small');if(total)total.hidden=true;
 const level=root.querySelector('.wm-level small');if(level)level.hidden=true;
 const grammar=root.querySelector('[data-mode="grammar"]');if(grammar)grammar.textContent='Grammar';
 const typing=root.querySelector('[data-mode="sentence"]');if(typing)typing.hidden=true;
 const repeat=root.querySelector('[data-mode="repeat"]');if(repeat){repeat.innerHTML='<svg class="wm-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="2" width="8" height="13" rx="4"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/></svg> Please Read Aloud or Type';repeat.setAttribute('aria-label','Please Read Aloud or Type');}
 const progress=root.querySelector('.wm-progress');if(progress)progress.textContent=(progress.textContent||'').replace('RS 听后复述','RS Listen & Repeat');
 const speaker=root.querySelector('.wm-sentence-replay');if(speaker&&!root.querySelector('.v6412-voice-name')){const v=document.createElement('span');v.className='v6412-voice-name';v.textContent='Voice of Blessing';speaker.after(v)}
 const field=root.querySelector('.wm-input');if(field)field.setAttribute('aria-label','Please Read Aloud or Type');
}
/* V64.14: single-owned classroom playback; never leave an audio element alive
   when dictation starts. Home's intro audio is NOT loaded on this page. */
let callToken=0,reading=false,spokenStep='',known=null,seenComplete='';
let activeAudio=null,activeVoice=null,activeTimer=null,mouthTimer=null,failedAutoplayStep='';
function mouth(on){
 const cal=document.querySelector('.wm-learning .v6410-cal img');
 if(mouthTimer){clearInterval(mouthTimer);mouthTimer=null;}
 if(!cal)return;
 cal.dataset.v6414Talking=on?'1':'0';
 if(!on){cal.src='v64-cal-01.png';return;}
 let open=false;
 cal.src='v64-cal-01.png';
 mouthTimer=setInterval(()=>{
  if(!cal.isConnected||cal.dataset.v6414Talking!=='1'){clearInterval(mouthTimer);mouthTimer=null;return;}
  open=!open;cal.src=open?'v64-cal-06.png':'v64-cal-01.png';
 },1300);
}
function endAutoAudio(){
 ++callToken;clearTimeout(activeTimer);activeTimer=null;
 try{activeVoice?.stop?.()}catch{}
 try{activeAudio?.pause?.()}catch{}
 try{activeAudio?.remove?.()}catch{}
 activeVoice=activeAudio=null;
 try{window.speechSynthesis?.cancel?.()}catch{}
 reading=false;mouth(false);
 document.querySelector('.wm-game')?.classList.remove('v6412-teaching','v6412-explaining');
}
window.addEventListener('pagehide',endAutoAudio);
function loadKnown(){if(known)return;const key='wm-v6412-known-learning-words';try{known=new Set(JSON.parse(localStorage.getItem(key)||'null'))}catch{}if(!known){let profile={};try{profile=JSON.parse(localStorage.getItem('word-match-home-preview-v1')||'{}')}catch{}known=new Set((profile.learnedWords||[]).map(w=>String(w).toLowerCase()).filter(Boolean));localStorage.setItem(key,JSON.stringify([...known]));}}
const norm=s=>String(s||'').toLowerCase().replace(/[’‘]/g,"'").replace(/[.,!?;:]/g,'').trim().replace(/\s+/g,' ');
function currentLesson(model){return (window.WM_GAME_UNITS?.[Math.max(0,Number(model.level||1)-1)]?.lessons||[]).find(w=>String(w.id)===String(model.stepId))||null}
function raisedWand(){const hero=document.querySelector('.wm-learning .v6410-left');if(!hero)return;const img=hero.querySelector('img');if(!img)return;
 const cal=hero.classList.contains('v6410-cal');hero.classList.add('v6412-celebrating');
 // Overlay the approved fixed raised-wand pose. Idle animation's interval continues
 // invisibly underneath, so it cannot replace the gesture mid-celebration.
 const pose=document.createElement('div');pose.className='v6412-raised-pose';
 if(cal){const picture=document.createElement('img');picture.src='v64-cal-05.png';picture.alt='';pose.append(picture)}
 else{const picture=document.createElement('span');picture.className='v6412-jack-raised';pose.append(picture)}
 hero.append(pose);const old=img.style.visibility;img.style.visibility='hidden';
 const glow=document.createElement('span');glow.className='v6412-celebration-glow';hero.append(glow);
 const title=document.createElement('div');title.className='v6412-class-skill';title.textContent='Golden Radiance';document.querySelector('.wm-learning')?.append(title);
 setTimeout(()=>{hero.classList.remove('v6412-celebrating');glow.remove();title.remove();pose.remove();if(img.isConnected)img.style.visibility=old;},2700);
}
function newWords(model){loadKnown();const key=model.level+':'+model.stepId;if(seenComplete===key)return;seenComplete=key;const w=currentLesson(model);if(!w)return;
 const before=known.size;for(const word of norm(w.en).split(' ')){if(word)known.add(word)}
 try{localStorage.setItem('wm-v6412-known-learning-words',JSON.stringify([...known]))}catch{}
 if(Math.floor(known.size/10)>Math.floor(before/10))raisedWand();
}
function autoRead(model,{gesture=false}={}){
 if(!model||model.phase!=='typing'||model.complete)return;
 const step=model.level+':'+model.stepId;
 if(step===spokenStep&&!gesture)return;
 if(gesture&&step!==failedAutoplayStep&&step===spokenStep)return;
 endAutoAudio();spokenStep=step;failedAutoplayStep='';
 const w=currentLesson(model);if(!w)return;
 const token=callToken;
 const player=document.createElement('audio');player.hidden=true;player.playsInline=true;player.preload='auto';document.body.append(player);
 activeAudio=player;
 try{activeVoice=window.WMMicrosoftVoice?new window.WMMicrosoftVoice(player):null}catch{}
 const voice=activeVoice;
 const stage=document.querySelector('.wm-game');stage?.classList.add('v6412-teaching');
 // Return false if iOS disallows autoplay; do not silently run grammar afterwards.
 const say=async(text,locale)=>{
   if(token!==callToken||!text)return false;
   let started=false;
   try{
    if(voice){await voice.play(text,locale,1,()=>{if(token!==callToken)return;started=true;mouth(true)});
      mouth(false);return token===callToken;}
   }catch(err){if(token!==callToken)return false;console.info('Classroom voice retry:',err?.message||err)}
   if(!('speechSynthesis' in window))return false;
   return await new Promise(resolve=>{
    let done=false,startGuard,finishGuard;
    const complete=ok=>{if(done)return;done=true;clearTimeout(startGuard);clearTimeout(finishGuard);mouth(false);resolve(ok&&token===callToken)};
    try{
      const u=new SpeechSynthesisUtterance(text);u.lang=locale;u.rate=.9;
      u.onstart=()=>{if(token!==callToken){complete(false);return}started=true;mouth(true)};
      u.onend=()=>complete(started);u.onerror=()=>complete(false);
      window.speechSynthesis.speak(u);
      startGuard=setTimeout(()=>{if(!started)complete(false)},2200);
      finishGuard=setTimeout(()=>complete(false),Math.max(12000,text.length*500));
    }catch{complete(false)}
   });
 };
 const run=async()=>{
  if(token!==callToken)return;
  reading=true;
  try{
   window.WMClassroomDisplay?.show('sentence');
   const english=await say(w.en,'en-GB');
   if(token!==callToken)return;
   if(!english){failedAutoplayStep=step;return;}
   stage?.classList.add('v6412-explaining');
   window.WMClassroomDisplay?.show('grammar');
   await say(w.grammar,'zh-CN');
  }finally{
   // Do not clear a newer playback created by rapid navigation or a mic tap.
   if(token===callToken){
    try{voice?.stop?.()}catch{}player.remove();activeVoice=activeAudio=null;
    reading=false;mouth(false);
    stage?.classList.remove('v6412-teaching','v6412-explaining');
    labels();
   }
  }
 };
 // On a deliberate tap, do not defer playback and lose the user activation.
 if(gesture)void run();else activeTimer=setTimeout(run,150);
}
function installOriginalFlow(){const C=window.WordMatchComponents;if(!C||C.__v6412Enhanced)return;C.__v6412Enhanced=true;const base=C.mountGame;
 C.mountGame=function(root,opts){let wrapped=null;let lastPhase='';const appCallbacks={...opts};
 // IMPORTANT: both the on-screen microphone and the Read Aloud tab enter through
 // different original callbacks. Stop AND remove automatic lesson audio first.
 appCallbacks.onMic=(...args)=>{endAutoAudio();return opts.onMic?.(...args)};
 appCallbacks.onMode=(mode,...args)=>{
   if(mode==='repeat')endAutoAudio();
   else endAutoAudio();
   return opts.onMode?.(mode,...args);
 };
 appCallbacks.onSentenceReplay=(...args)=>{
   if(failedAutoplayStep&&wrapped?._v6412Model?.phase==='typing'){
     const m=wrapped._v6412Model;
     // Speaker click supplies the user gesture needed by iOS autoplay policy.
     autoRead(m,{gesture:true});return;
   }
   endAutoAudio();return opts.onSentenceReplay?.(...args);
 };
 appCallbacks.onReplay=(...args)=>{endAutoAudio();return opts.onReplay?.(...args)};
 appCallbacks.onBack=(...args)=>{endAutoAudio();return opts.onBack?.(...args)};
 appCallbacks.onNext=(...args)=>{endAutoAudio();return opts.onNext?.(...args)};
 appCallbacks.onKey=(...args)=>{endAutoAudio();return opts.onKey?.(...args)};
 appCallbacks.onNativeInput=(...args)=>{endAutoAudio();return opts.onNativeInput?.(...args)};
 // Original completion logic is two-stage. A SINGLE correct answer should be enough:
 // when it enters its internal 'learning' phase, finish the same answer in the original engine.
 const finish=()=>{const m=wrapped?._v6412Model;if(!m||m.phase!=='learning')return;const w=currentLesson(m);if(!w)return;const answer=w.answer||w.en;
  queueMicrotask(()=>{if(wrapped?._v6412Model?.phase==='learning')opts.onNativeInput?.(answer,answer.length,answer.length)})};
 const view=base.call(this,root,appCallbacks);
 wrapped={_v6412Model:opts.model};const origUpdate=view.update;
 view.update=function(m){wrapped._v6412Model=m;const r=origUpdate.call(view,m);labels();theme();nav();
   if(m.phase==='learning'&&lastPhase!=='learning'){endAutoAudio();finish();}
   if(m.phase==='done'&&lastPhase!=='done'){endAutoAudio();newWords(m);}
   if(m.phase==='typing')autoRead(m);
   lastPhase=m.phase;return r;};
 labels();theme();nav();autoRead(opts.model);
 return view;
 };
}
window.WMOriginalClassroomUI={refresh(){labels();theme();nav()},mouth};
function init(){if(!window.WMPhraseLesson)installOriginalFlow();theme();nav();labels();window.addEventListener('pageshow',()=>{theme();labels()});window.addEventListener('focus',theme);window.addEventListener('storage',e=>{if(!e.key||e.key===STORAGE)theme()});}
// This adapter is loaded directly BEFORE wm-game-app.js: install now, not on DOMContentLoaded.
if(window.WordMatchComponents)init();else document.addEventListener('DOMContentLoaded',init,{once:true});
})();
