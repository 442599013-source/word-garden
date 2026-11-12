/* V64.6 classroom bridge. It WRAPS original WM game components and original
 * wm-game-app: original RS129 course, assessment, speech, scores and storage stay in charge. */
(()=>{'use strict';
const C=window.WMCompanions,EGG='magic_egg';
const $=s=>document.querySelector(s),sceneColors={forest:['#e7aae6','#995cae'],coast:['#9be1e8','#5489b4'],city:['#f4b6c8','#b66e9f']};
let currentModel=null,talkingInterval=null,sceneGeneration=0,autoKey='',skipAfterGrammar=0,previousDone=0;
const safe=fn=>{try{return fn()}catch{return undefined}};
function updateScene(){const stage=$('#classroom-stage'),scene=C?.read?.().scene||'forest-stairs',key=scene.startsWith('coast')?'coast':scene.startsWith('city')?'city':'forest';
 if(!stage)return;const colors=sceneColors[key];stage.style.setProperty('--v646-edge',colors[0]);stage.style.setProperty('--v646-deep',colors[1]);
 const token=++sceneGeneration;const fallback='v39-scene-'+scene+'.webp';
 window.WMGameMedia?.load?.(fallback).then(url=>{if(token===sceneGeneration){stage.style.setProperty('--v646-scene',`url("${url}")`)}}).catch(()=>{if(token===sceneGeneration)stage.style.setProperty('--v646-scene',`url("${fallback}")`)});
}
function actors(){const host=$('.wm-learning');if(!host||!C)return;let left=host.querySelector('.v646-angel'),right=host.querySelector('.v646-egg');
 if(!left){left=document.createElement('div');left.className='v646-actor v646-angel';host.append(left)}
 if(!right){right=document.createElement('div');right.className='v646-actor v646-egg';host.append(right)}
 const selection=C.read(),first=['cal_angel','jack_angel'].includes(selection.slots?.[0])?selection.slots[0]:'jack_angel',second=selection.slots?.[1]||EGG;
 const angel=document.createElement('img');C.setImage(angel,first,'idle');angel.alt=first==='cal_angel'?'Cal Angel':'Jack Angel';left.replaceChildren(angel);left.dataset.character=first;
 const pet=document.createElement('img');C.setImage(pet,second,'idle');pet.alt='Companion';right.replaceChildren(pet);
}
function stopMouth(){clearInterval(talkingInterval);talkingInterval=null;const img=$('.v646-angel[data-character="cal_angel"] img');if(img){img.dataset.v64Talking='0';img.src='v64-cal-01.png'}}
function speakAnimation(on){const actor=$('.v646-angel');actor?.classList.toggle('v648-voice-glow',!!on);stopMouth();const img=$('.v646-angel[data-character="cal_angel"] img');if(!img||!on)return;img.dataset.v64Talking='1';let open=false;talkingInterval=setInterval(()=>{if(!img.isConnected){stopMouth();return}open=!open;img.src=open?'v64-cal-06.png':'v64-cal-01.png'},950)}
function decorate(){const screen=$('.wm-game');if(!screen)return;
 const title=$('.wm-advance-title');if(title){title.replaceChildren();const strong=document.createElement('strong');strong.textContent='Magic Classroom';title.append(strong)}
 const header=$('.wm-tasks');if(header&&!header.querySelector('.v646-voice-label')){const label=document.createElement('span');label.className='v646-voice-label';label.textContent='Voice of Blessing';header.append(label)}
 const input=$('.wm-native-input');if(input){input.removeAttribute('readonly');input.setAttribute('inputmode','text');input.setAttribute('enterkeyhint','done');input.setAttribute('placeholder','Please Read Aloud or Type · 请跟读或输入');input.setAttribute('aria-label','Please Read Aloud or Type');}
 const target=$('.wm-input');if(target&&!target.querySelector('.v646-mic')){const button=document.createElement('button');button.type='button';button.className='v646-mic';button.setAttribute('aria-label','Please read aloud · 请跟读');
  // Same EXACT line-icon vector as original wm-game-components.js, no emoji or purple circle.
  button.innerHTML='<svg class="wm-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="2" width="8" height="13" rx="4"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/></svg>';
  button.onclick=()=>{const mic=$('.wm-tabs [data-mode="repeat"]');if(mic&&!mic.disabled)mic.click()};target.append(button)}
 const lesson=$('.wm-lesson');if(lesson&&!lesson.querySelector('.v646-grammar')){const g=document.createElement('div');g.className='v646-grammar';g.innerHTML='<strong>Grammar · 语法</strong><div></div>';lesson.insertBefore(g,lesson.querySelector('.wm-lesson-body'));
  const p=document.createElement('p');p.className='v646-practice-label';p.textContent='Please Read Aloud or Type · 请跟读或输入';lesson.append(p)}
 const back=$('.wm-back');if(back)back.onclick=()=>{location.href='index.html'};
 const egg=$('.v646-egg');if(egg)egg.style.pointerEvents='none';
 setupKeyboardViewport();
 updateScene();actors();setTimeout(actors,450);
}
// iOS visualViewport: create room above native keyboard while retaining sentence,
// original per-letter colour cues and the original typed text, no second input.
function setupKeyboardViewport(){
 const input=$('.wm-native-input'),screen=$('#classroom-stage');if(!input||!screen||input.dataset.v648Keyboard)return;
 input.dataset.v648Keyboard='1';const viewport=window.visualViewport;
 const update=()=>{
  const active=document.activeElement===input;
  const keyboard=active&&viewport&&viewport.height<window.innerHeight-90;
  screen.classList.toggle('v648-keyboard-open',!!keyboard);
  if(keyboard){
   const bottom=Math.max(0,window.innerHeight-(viewport.offsetTop+viewport.height));
   screen.style.setProperty('--v648-keyboard-bottom',bottom+'px');
  }else screen.style.removeProperty('--v648-keyboard-bottom');
 };
 input.addEventListener('focus',()=>{update();requestAnimationFrame(update);setTimeout(update,300)});
 input.addEventListener('blur',()=>{setTimeout(update,100)});
 viewport?.addEventListener('resize',update);viewport?.addEventListener('scroll',update);
 window.addEventListener('resize',update);
}
function applyModel(m){if(currentModel?.stepId!==m.stepId)skipAfterGrammar=0;const earlier=currentModel;currentModel=m;const n=Number(String(m.progress||'').match(/(\d+)\s*\/\s*\d+/)?.[1]||0);if(m.phase==='done'&&n===(window.WM_GAME_UNITS?.[m.level-1]?.lessons?.length||10)&&earlier?.phase!=='done'&&previousDone!==m.level){previousDone=m.level;window.WM64Skill?.show('Golden Radiance',$('.v646-angel'))};const g=$('.v646-grammar div');if(g){const unit=window.WM_GAME_UNITS?.[m.level-1];const item=unit?.lessons?.find(l=>l.id===m.stepId);g.textContent=item?.grammar||m.grammar||'';}
 const mic=$('.v646-mic');if(mic){mic.setAttribute('aria-pressed',String(!!m.listening));mic.classList.toggle('is-listening',!!m.listening)}
 // No required first typing: advance from original "typing" into its OWN teaching
 // and assessment flow through the ORIGINAL callback. Never touch progress keys.
 if(m.phase==='typing'&&!m.complete){const key=m.stepId;if(key&&key!==autoKey){autoKey=key;const lesson=window.WM_GAME_UNITS?.[m.level-1]?.lessons?.find(x=>x.id===key);if(lesson){const answer=lesson.answer||lesson.en;
   setTimeout(()=>{if(currentModel?.stepId!==key||currentModel.phase!=='typing')return;
    window.__v646AutoBegin?.(answer);},350);
 }}}
}
function patch(){const old=window.WordMatchComponents?.mountGame;if(typeof old!=='function')return;
 window.WordMatchComponents.mountGame=function(root,opts){const oldUpdate=opts.onNativeInput;window.__v646AutoBegin=answer=>oldUpdate(answer,answer.length,answer.length);
 const view=old.call(this,root,opts);const actual=view.update;
 view.update=function(m){const r=actual.call(view,m);applyModel(m);return r};
 decorate();applyModel(opts.model||{});return view;};
}
patch();
// Speak animation follows original Microsoft voice callbacks. No duplicate speech engine.
if(window.WMMicrosoftVoice?.prototype?.play){const proto=window.WMMicrosoftVoice.prototype,play=proto.play;
 proto.play=function(text,lang,rate,onStart){
  // Keep the original voice player but omit redundant primer-word/translation
  // segments during AUTOMATIC teaching: English sentence -> Chinese grammar.
  const m=currentModel,lesson=window.WM_GAME_UNITS?.[m?.level-1]?.lessons?.find(x=>x.id===m?.stepId);
  const phrase=String(text||'').trim(),isTraining=m?.phase==='learning';
  if(skipAfterGrammar>0 && m?.phase==='repeat') {skipAfterGrammar--;return Promise.resolve();}
  if(isTraining&&lesson){
   if([lesson.w,lesson.zh,lesson.cn].filter(Boolean).some(x=>String(x).trim()===phrase) && phrase!==String(lesson.en).trim())return Promise.resolve();
  }
  const start=()=>{speakAnimation(true);onStart?.()};
  return Promise.resolve(play.call(this,text,lang,rate,start)).finally(()=>{speakAnimation(false);
   if(isTraining&&lesson?.grammar&&phrase===String(lesson.grammar).trim()){skipAfterGrammar=2;setTimeout(()=>{skipAfterGrammar=0},2400)}
  });
 };
}
window.addEventListener('wm-companions-change',()=>{updateScene();actors()});window.addEventListener('storage',e=>{if(e.key==='wm-companions-v39'){updateScene();actors()}});
window.addEventListener('pagehide',stopMouth);
})();
