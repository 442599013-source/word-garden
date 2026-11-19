/* V64.28: demonstration -> bilingual phrase building -> speech or typing -> feedback. */
(()=>{'use strict';const $=s=>document.querySelector(s),units=window.WM_GAME_UNITS;if(!units?.length)return;
const key=window.WMCourse.key('wm-sentences-v9-progress'),cacheKey=window.WMCourse.key('wm-journey-game-progress-v21');
const read=k=>{try{return JSON.parse(localStorage.getItem(k)||'{}')}catch{return {}}};let cache=read(cacheKey),last=read(key),level=Number.isInteger(window.WMRequestedLevel)?window.WMRequestedLevel:Number.isInteger(last.level)?last.level:0;level=Math.max(0,Math.min(units.length-1,level));let completed=new Set(),at=0,lesson,view,busy=false,token=0,input='',start=0,end=0,listening=false,note='',wrong='',needsGesture=false,paused=false,inputSource='keyboard';let speechChain=Promise.resolve(),reviewing=false,replaying=false,quizPassed=new Set(),gridKey='',gridCount=0;
const assessmentCache=new Map();
function assessment(index=level){
 if(assessmentCache.has(index))return assessmentCache.get(index);
 const unit=units[index],questions=[];
 if(unit.kind==='grammar'){
  for(const [i,q] of (window.WMGrammarChecks?.[index]||[]).entries())questions.push({...q,id:'grammar-'+i});
 }else if(unit.kind==='pte'){
  for(const [i,item] of unit.lessons.entries()){
   if(!item.checks)continue;
   for(const [key,question] of [['action','这段指令要求做什么？'],['response','应该怎样作答？']]){
    const answer=item.checks[key];
    const alternatives=[...new Set(unit.lessons.map(lesson=>lesson.checks?.[key]).filter(value=>value&&value!==answer))];
    alternatives.sort((a,b)=>Math.abs(a.length-answer.length)-Math.abs(b.length-answer.length));
    questions.push({id:'pte-'+i+'-'+key,after:i,prompt:item.en,question,answer,options:[answer,...alternatives.slice(0,2)]});
   }
  }
 }else if(unit.kind==='root'&&isJunior(index)){
  const intro=unit.lessons.find(item=>item.rootIntro);
  if(intro?.w&&intro.zh){
   const alternatives=[...new Set(units.filter(other=>other.kind==='root')
    .map(other=>other.lessons.find(item=>item.rootIntro)?.zh)
    .filter(meaning=>meaning&&meaning!==intro.zh))];
   const offset=(index*7)%(alternatives.length||1);
   const distractors=[...alternatives.slice(offset),...alternatives.slice(0,offset)].slice(0,2);
   questions.push({id:'root-meaning',prompt:intro.w,question:'这个词根的核心意思是什么？',answer:intro.zh,options:[intro.zh,...distractors]});
  }
 }
 assessmentCache.set(index,questions);
 return questions;
}
function pendingQuiz(){
 return assessment().find(q=>!quizPassed.has(q.id)&&(q.after===undefined?completed.size===length():completed.has(q.after)));
}
function levelComplete(){return completed.size===length()&&!pendingQuiz()}
function orderedOptions(q){
 const options=q.options.slice();
 const seed=(level+1)*149+assessment().indexOf(q)*67;
 for(let i=options.length-1;i>0;i--){
  const j=(seed>>>((i-1)*3))%(i+1);
  [options[i],options[j]]=[options[j],options[i]];
 }
 return options;
}
const cards=window.WMClassroomLessonCards||{};
const audio=new WMMicrosoftVoice(document.getElementById('microsoft-player'));const norm=window.WMCourse.normalizeInput;
function stop(){replaying=false;token++;speechChain=Promise.resolve();audio.stop();window.WMOriginalClassroomUI?.mouth(false)}
function row(){
 const original=units[level].lessons[at];
 const card=cards[original.id];
 return card?{...original,...card}:original;
}
function isJunior(index=level){return window.WMClassGroups?.forLevel(index+1)?.id==='kindergarten-1'}
function makeLesson(snapshot){return new WMPhraseLesson(row(),snapshot,isJunior())}
function length(){return units[level].lessons.length}
function progressLabel(){const unit=units[level];if(unit.kind==='root')return row().rootIntro?unit.themeEn+' · Introduction':unit.themeEn+' · '+at+'/'+(length()-1);return (unit.kind?unit.themeEn:'Five Sentences')+' · '+(at+1)+'/'+length()}
function contextGlossary(){if(window.WMWordGlossary){const words=window.WMWordGlossary.words;Object.assign(words,units[level].meanings||{});for(const [id,zh] of Object.entries(units[level].meanings||{})){if(id.startsWith('abbr:')){const label=window.WMUnifiedCourseData.words[id]?.en?.toLowerCase()||id.slice(5);words[label.replace(/\.$/,'')]=zh;words[label.replace(/\./g,'')]=zh}}}}
function save(){
 const state={level,foundationExercises:true,juniorChecks:true,completed:[...completed],quizPassed:[...quizPassed],targetIndex:at,phraseLesson:lesson?.snapshot(),phase:lesson?.phase==='input'?'repeat':'typing'};
 const value=reviewing?{...cache[level],courseRevision:32,level,review:state}:{...state,courseRevision:32};
 cache[level]=value;
 try{localStorage.setItem(key,JSON.stringify(value));localStorage.setItem(cacheKey,JSON.stringify(cache))}catch{}
}
function total(){const p=read('word-match-home-preview-v1');return Math.max(Number(p.wordsEliminated)||0,(p.learnedWords||[]).length)}
function model(){const quiz=pendingQuiz();return {level:level+1,total:total(),progress:quiz?'Practice · 练习 '+(assessment().indexOf(quiz)+1)+'/'+assessment().length:progressLabel(),sentence:quiz?'':['build','wordbuild'].includes(lesson.phase)?'':row().en,completedSentence:row().en,translation:quiz?'':['build','wordbuild'].includes(lesson.phase)&&!row().rootExample?'':row().cn,input,selectionStart:start,selectionEnd:end,focusWord:row().w,focusMeaning:row().zh,stepId:quiz?quiz.id:row().id,mode:lesson.phase==='input'?'repeat':'grammar',grammar:'',phase:'typing',complete:levelComplete(),lastLevel:level===units.length-1,listening,micMessage:note}}
function block(p,cls='phrase-block'){const b=document.createElement('button');b.type='button';b.className=cls;const en=document.createElement('strong'),cn=document.createElement('small');en.textContent=p.en;cn.textContent=p.cn;b.append(en);if(p.cn)b.append(cn);return b}
function icon(name){const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('fill','none');svg.setAttribute('stroke','currentColor');svg.setAttribute('stroke-width','1.8');svg.setAttribute('stroke-linecap','round');svg.setAttribute('stroke-linejoin','round');svg.setAttribute('aria-hidden','true');svg.classList.add('wm-icon');svg.innerHTML=name==='speaker'?'<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>':'<rect x="8" y="2" width="8" height="13" rx="4"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/>';return svg}
function render(){const settle=view?.holdViewport?.()||(()=>{});try{renderContent()}finally{settle()}}
function renderContent(){
 const quiz=pendingQuiz(), grid=$('.wm-word-grid'), previousScroll=grid?.scrollTop||0;
 const activeField=$('.wm-native-input');if((lesson.phase!=='input'||busy)&&document.activeElement===activeField)activeField.blur();view?.update(model(),false);window.WMOriginalClassroomUI?.refresh();const root=document.querySelector('.wm-game');if(!root)return;root.dataset.phrasePhase=quiz?'quiz':lesson.phase;root.classList.add('wm-phrase-teaching');root.classList.toggle('wm-junior-classroom',isJunior());const tab=$('[data-mode="grammar"]');tab.textContent=quiz?'Practice · 练习':lesson.phase==='wordbuild'?(isJunior()?'Build with Word Groups · 词块组句':'Build with Words · 单词组句'):'Build with Phrases · 词组组句';const repeat=$('[data-mode="repeat"]');repeat.replaceChildren(icon('mic'),document.createTextNode(listening?'Stop · 停止':'Read or Type · 跟读或输入'));repeat.hidden=isJunior();repeat.disabled=isJunior()||!!quiz||lesson.phase!=='input';tab.setAttribute('aria-pressed',String(lesson.phase!=='input'));repeat.setAttribute('aria-pressed',String(lesson.phase==='input'));const body=$('.wm-lesson-body');if(lesson.phase!=='input')body.replaceChildren();else body.querySelector('.phrase-actions')?.remove();
 if(quiz){
  renderQuiz(grid,body,quiz);
 }else if(['build','wordbuild'].includes(lesson.phase)){
  grid.replaceChildren();
  const placed=lesson.phrases.slice(0,lesson.placed);
  for(const p of placed){const b=block(p,'phrase-placed');b.disabled=true;grid.append(b)}
  const key=row().id+':'+lesson.phase;
  grid.scrollTop=key===gridKey?previousScroll:0;
  const newest=grid.lastElementChild;
  if(newest&&(key!==gridKey||placed.length>gridCount)){
   const viewport=grid.getBoundingClientRect?.(),tile=newest.getBoundingClientRect?.();
   if(viewport&&tile&&tile.bottom>viewport.bottom-6)grid.scrollTop+=tile.bottom-viewport.bottom+6;
  }
  gridKey=key;gridCount=placed.length;
  const hint=document.createElement('p');hint.className='phrase-instruction';
  hint.textContent=wrong||(lesson.phase==='wordbuild'&&isJunior()?'Choose the next word group · 选择接下来的词块':'Choose the next phrase · 选择接下来的词组');
  hint.setAttribute('role','status');body.append(hint);
  for(const i of lesson.order){if(i<lesson.placed)continue;const b=block(lesson.phrases[i]);b.onclick=()=>choose(i);body.append(b)}
 }
 else if(lesson.phase==='input'){const actions=document.createElement('div');actions.className='phrase-actions';const replay=document.createElement('button');replay.type='button';replay.className='phrase-action phrase-replay';WMStudyIcons.set(replay,'speaker','Listen again');replay.disabled=false;replay.onclick=()=>replaySentence();const speak=document.createElement('button');speak.type='button';speak.className='phrase-action phrase-read';WMStudyIcons.set(speak,listening?'stop':'mic',listening?'Stop recording':'Read aloud');speak.disabled=busy;speak.setAttribute('aria-pressed',String(listening));speak.onclick=mic;actions.append(replay,speak);body.append(actions)}
 else{const message=document.createElement('p');message.textContent=lesson.phase==='demo'?'Listen and learn · 先听句子、中文和重点词':lesson.phase==='input'?'Now read aloud or type the whole sentence · 现在跟读或输入完整句子':'✓ Well done! · 本句已完成';body.append(message);if(lesson.phase==='demo'){const b=document.createElement('button');b.type='button';b.className='phrase-start';b.textContent=needsGesture?'Tap to start · 点击开始朗读':'Listen again · 重听';b.onclick=()=>demo();body.append(b)}}
 const levelButton=$('.wm-level');levelButton.setAttribute('role','button');levelButton.tabIndex=0;levelButton.setAttribute('aria-label','Choose classroom level · 选择课堂等级');levelButton.onclick=chooseLevel;levelButton.onkeydown=e=>{if(['Enter',' '].includes(e.key)){e.preventDefault();chooseLevel()}};
 const current=row();
 root.classList.toggle('wm-foundation-lesson',!!units[level].kind);
 if(!quiz&&(!lesson.phase||lesson.phase==='demo')){
  const guide=document.createElement('div');guide.className='foundation-guide';
  if(current.titleEn){const title=document.createElement('strong');title.textContent=current.titleEn+' · '+current.titleZh;guide.append(title)}
  for(const pair of teachingExamples(current)){
   const b=block(pair,'phrase-block');b.onclick=()=>replayPair(pair);guide.append(b)
  }
  if(guide.childNodes.length)body.append(guide);
 }
 const field=$('.wm-native-input');field.disabled=lesson.phase!=='input'||busy;document.querySelectorAll('.wm-keyboard .wm-key').forEach(b=>b.disabled=lesson.phase!=='input'||busy);const done=$('.wm-completion');done.hidden=!levelComplete();const to=window.WMClassGroups?.forLevel(level+2);const promoted=to&&to.start===level+2;const next=done.querySelector('button');next.textContent=promoted?'Promoted · 晋升'+to.zh:level===units.length-1?'Course complete · 已完成全部关卡':'Next Level · 下一关';next.disabled=level===units.length-1;
 if(!done.querySelector('.phrase-review-level')){
  const review=document.createElement('button');review.type='button';review.className='wm-gloss phrase-review-level';
  review.textContent='Study again · 重学本关';review.onclick=startReview;done.append(review);
 }
 done.querySelector('.phrase-review-level').disabled=busy;
 const p=$('.wm-top-translation');if(p)p.hidden=false;
}
function teachingExamples(current){
 return [...(units[level].kind==='grammar'?[]:current.examples||[]),...(current.tip?[current.tip]:[])];
}
function renderQuiz(grid,body,quiz){
 grid.replaceChildren();
 const prompt=document.createElement('p');prompt.className='classroom-quiz-prompt';prompt.textContent=quiz.prompt;
 grid.append(prompt);grid.scrollTop=0;
 const instruction=document.createElement('p');instruction.className='phrase-instruction';
 instruction.textContent=quiz.question||'Choose the correct answer · 选择正确答案';
 body.append(instruction);
 if(wrong){const message=document.createElement('p');message.className='phrase-instruction';message.setAttribute('role','status');message.textContent=wrong;body.append(message)}
 for(const answer of orderedOptions(quiz)){
  const button=block({en:answer});button.disabled=busy&&!replaying;
  button.onclick=()=>answerQuiz(quiz,answer);body.append(button);
 }
}
async function answerQuiz(quiz,answer){
 if((busy&&!replaying)||pendingQuiz()?.id!==quiz.id)return;
 if(isJunior()){
  stop();paused=false;busy=true;
  const t=token;
  render();
  await say([[answer,/\p{Script=Han}/u.test(answer)?'zh-CN':'en-GB']],t);
  if(t!==token)return;
  busy=false;
 }
 if(answer!==quiz.answer){wrong='Try again · 再试一次';render();return}
 quizPassed.add(quiz.id);wrong='';
 if(reviewing&&levelComplete())reviewing=false;
 save();
 if(!pendingQuiz()&&completed.size<length())advanceLesson();
 else render();
}
function advanceLesson(){
 at=units[level].lessons.findIndex((_,i)=>!completed.has(i));
 lesson=makeLesson();input='';start=end=0;note='';wrong='';save();render();void demo();
}
async function say(items,t){await dictation.releasePromise;for(const [text,lang] of items){if(t!==token||paused)return false;if(!text)continue;try{await audio.play(text,lang,1,()=>window.WMOriginalClassroomUI?.mouth(true));window.WMOriginalClassroomUI?.mouth(false)}catch{window.WMOriginalClassroomUI?.mouth(false);return false}}return t===token&&!paused}
async function demo(){stop();paused=false;busy=true;needsGesture=false;lesson.phase='demo';render();const t=token;const ok=await say(demoAudio(),t);if(t!==token)return;busy=false;if(ok){lesson.begin();prepareWords();warm();note=''}else{needsGesture=true;note='Tap Listen to start audio · 请点击开始朗读'}save();render()}
function demoAudio(){
 const current=row(), extra=teachingExamples(current);
 return [[current.en,'en-GB'],[current.cn,'zh-CN'],[current.w,'en-GB'],[current.zh,'zh-CN'],...extra.flatMap(pair=>[[pair.en,'en-GB'],[pair.cn,'zh-CN']])];
}
async function replayPair(pair){stop();busy=true;paused=false;const t=token;await say([[pair.en,'en-GB'],[pair.cn,'zh-CN']],t);if(t===token){busy=false;render()}}
function prepareWords(){for(const w of lesson.words){if(w.cn)continue;const key=w.en.toLowerCase().replace(/[’]/g,"'");w.cn=units[level].meanings?.[key]||window.WMWordGlossary?.words?.[key]||window.WMUnifiedCourseData?.words?.[key]?.zh||''}}
function warm(){const current=row(),items=[...(current.phrases||[]).flatMap(p=>[[p.en,'en-GB'],[p.cn,'zh-CN']]),[current.en,'en-GB']];audio.preload?.(items)}
function choose(i){if((busy&&!replaying)||pendingQuiz()||!['build','wordbuild'].includes(lesson.phase)||lesson.assembled)return;if(!lesson.canAccept(i)){wrong='Try the next item in order · 请重新选择接下来的内容';render();return}wrong='';const t=token,phase=lesson.phase,p={...lesson.phrases[i]};lesson.accept(i);const isLast=lesson.assembled;save();render();if(replaying)return;speechChain=speechChain.then(async()=>{if(t!==token)return;const ok=await say([[p.en,'en-GB'],[p.cn,'zh-CN']],t);if(t!==token)return;if(!ok)note='Audio unavailable; tap the speaker to retry · 语音暂不可用，可点击喇叭重听';if(isLast&&lesson.phase===phase&&lesson.assembled){await say([[row().en,'en-GB']],t);if(t!==token)return;advanceAssembled(true)}}).catch(()=>{if(t===token){note='Tap the speaker to retry · 点击喇叭重试';render()}})}

function record(){const p=read('word-match-home-preview-v1'),words=new Set(p.learnedWords||[]);const text=row().en.replace(/\b(?:Ph\.D\.|[A-Za-z]\.(?:[A-Za-z]\.)+)/g,m=>{words.add(m.toLowerCase().replace(/\./g,''));return ' '});for(const w of (text.match(/[A-Za-z]+(?:[-'’][A-Za-z]+)*/g)||[])){if(w.length>1||/^[ai]$/i.test(w))words.add(w.toLowerCase())}p.learnedWords=[...words];p.wordsEliminated=Math.max(Number(p.wordsEliminated)||0,words.size);try{localStorage.setItem('word-match-home-preview-v1',JSON.stringify(p))}catch{}}
async function check(){if(lesson.phase!=='input'||busy||!input)return;const target=row().answer||row().en;if(norm(input)!==norm(target)&&!(inputSource==='voice'&&window.WMSpeechMatch?.equivalent(input,target))){note='Keep trying · 请再试一次';render();return}await completeStep()}
async function completeStep(){if(lesson.phase!=='input'||busy)return;const transitionSettle=view?.holdViewport?.()||(()=>{});const activeInput=$('.wm-native-input');if(document.activeElement===activeInput)activeInput.blur();busy=true;stop();const t=token;await dictation.cancel();transitionSettle();if(t!==token)return;listening=false;note='';lesson.phase='done';completed.add(at);record();if(reviewing&&levelComplete())reviewing=false;save();render();if(!isJunior())await say([[row().en,'en-GB']],t);if(t!==token)return;busy=false;if(!pendingQuiz()&&completed.size<length())advanceLesson();else render()}
function native(text,a,b){inputSource='keyboard';if(lesson.phase!=='input'||busy)return;if(listening)dictation.cancel();input=String(text).slice(0,1500);start=a??input.length;end=b??start;render();void check()}
function enter(k){inputSource='keyboard';if(lesson.phase!=='input'||busy)return;if(k==='CONFIRM'){void check();return}if(listening)dictation.cancel();const a=Math.min(start,input.length),b=Math.min(end,input.length);if(k==='CLEAR'){input='';start=end=0}else if(k==='BACK'){const x=a===b?Math.max(0,a-1):a;input=input.slice(0,x)+input.slice(b);start=end=x}else{if(k==='SPACE')k=' ';input=input.slice(0,a)+k+input.slice(b);start=end=a+k.length}render();void check()}
// Focus card is word-only. Sentence speakers retain their original separate replay.
async function replayFocusWord(){if(pendingQuiz()||(lesson.phase==='done'&&busy))return;stop();paused=false;busy=true;const t=token;await dictation.cancel();if(t!==token)return;listening=false;render();await say([[row().w,'en-GB']],t);if(t===token){busy=false;advanceAssembled()}}
function advanceAssembled(preload=false){
 if(lesson.assembled&&lesson.phase==='build'){
  lesson.beginWords();prepareWords();
  if(preload)audio.preload?.(lesson.words.flatMap(w=>[[w.en,'en-GB'],[w.cn,'zh-CN']]));
 }else if(lesson.assembled&&lesson.phase==='wordbuild'){
  lesson.phase='input';input='';start=end=0;
  if(isJunior()){void completeStep();return}
 }
 save();render();
}
async function replaySentence(){
 const quiz=pendingQuiz();
 if(lesson.phase==='done'&&busy&&!replaying)return;
 stop();paused=false;busy=true;replaying=quiz?isJunior():['build','wordbuild'].includes(lesson.phase);render();
 const t=token;await dictation.cancel();if(t!==token)return;
 listening=false;note='';
 const items=quiz?[[quiz.prompt.split('（')[0].replace(/_{2,}/g,'blank'),'en-GB']]:units[level].kind?demoAudio():[[row().en,'en-GB'],[row().cn,'zh-CN']];
 await say(items,t);
 if(t===token){replaying=false;busy=false;if(quiz)render();else advanceAssembled()}
}
function restore(saved){
 const review=saved.review;
 reviewing=!!review;
 const state=review||saved;
 quizPassed=new Set((state.quizPassed||[]).filter(id=>assessment().some(q=>q.id===id)));
 completed=new Set((state.completed||[]).filter(i=>Number.isInteger(i)&&i>=0&&i<length()));
 if(!state.foundationExercises&&completed.size<length()){
  units[level].lessons.forEach((item,index)=>{if(item.explanation)completed.delete(index)});
 }
 at=units[level].lessons.findIndex((_,i)=>!completed.has(i));
 if(at<0)at=length()-1;
 if(!state.juniorChecks&&completed.size===length()&&isJunior()&&units[level].kind==='root')quizPassed.add('root-meaning');
 const quiz=pendingQuiz();
 if(quiz?.after!==undefined)at=quiz.after;
 const snapshot=state.targetIndex===at?state.phraseLesson:undefined;
 const resized=snapshot?.order?.length!==row().phrases.length;
 const interrupted=snapshot?.phase==='done'&&!completed.has(at);
 lesson=makeLesson(interrupted||(resized&&cards[row().id])?undefined:snapshot);
 prepareWords();
 if(quiz||completed.size===length())lesson.phase='done';
}
function load(n){
 stop();dictation.cancel();busy=false;note='';input='';start=end=0;paused=false;
 level=Math.max(0,Math.min(units.length-1,n));contextGlossary();restore(cache[level]||{});
 save();render();window.WMLevelRoute?.sync(level);
 resumeLesson();
}
function resumeLesson(){
 if(lesson.phase==='demo')void demo();
 else if(isJunior()&&lesson.phase==='input')void completeStep();
}
function startReview(){
 if(!levelComplete()||busy)return;
 stop();input='';start=end=0;note='';
 restore({...cache[level],review:{completed:[]}});
 save();render();void demo();
}
function classroomFinished(i){const done=cache[i]?.completed;return Array.isArray(done)&&new Set(done.filter(n=>Number.isInteger(n)&&n>=0&&n<units[i].lessons.length)).size===units[i].lessons.length&&assessment(i).every(q=>cache[i].quizPassed?.includes(q.id)||q.id==='root-meaning'&&!cache[i].juniorChecks)}
function chooseLevel(){stop();busy=false;dictation.cancel();if(lesson.phase==='demo')needsGesture=true;save();render();const layer=document.createElement('div');layer.className='phrase-level-picker';layer.setAttribute('role','dialog');layer.setAttribute('aria-modal','true');layer.setAttribute('aria-label','Choose classroom level');const panel=document.createElement('section'),title=document.createElement('h2'),close=document.createElement('button');title.textContent='Choose a Level · 选择等级';close.className='phrase-picker-close';close.type='button';close.textContent='×';close.setAttribute('aria-label','Close');close.onclick=()=>layer.remove();const grid=document.createElement('div');grid.className='level-grid';panel.append(title,close,grid);for(let i=0;i<units.length;i++){const a=document.createElement('a');const done=classroomFinished(i);a.textContent=String(i+1)+(done?' ✓':'');a.dataset.completed=String(done);a.setAttribute('aria-label','Level '+(i+1)+(done?' completed':''));a.href='sentence-game.html?level='+(i+1)+'&choose=1';if(i===level)a.setAttribute('aria-current','page');grid.append(a)}layer.append(panel);document.body.append(layer);close.focus({preventScroll:true});layer.onkeydown=e=>{if(e.key==='Escape')layer.remove()}}
const dictation=new WMSpeechInput.Session({prepare(){stop()},target:()=>row().en,onState:s=>{listening=s!=='idle';render()},onStatus:s=>{note=s;render()},onText:(text,final)=>{if(lesson.phase!=='input')return;inputSource='voice';input=text;start=end=input.length;render();if(final)void check()}});
function mic(){if(isJunior()||lesson.phase!=='input'||busy)return;dictation.toggle()}
contextGlossary();restore(cache[level]||(last.level===level?last:{}));
view=WordMatchComponents.mountGame(document.getElementById('root'),{model:model(),onKey:enter,onReplay:replayFocusWord,onSentenceReplay:()=>lesson.phase==='demo'?demo():replaySentence(),onMode:m=>{if(m==='repeat')mic()},onBack:()=>{stop();save();location.href='level-activities.html?level='+(level+1)},onNext:()=>{if(levelComplete()&&level+1<units.length)load(level+1)},onMic:mic,onNativeInput:native,onSelection:(a,b)=>{start=a;end=b},onSpeakLookup:text=>{if(!busy){stop();void say([[text,'en-GB'],[units[level].meanings?.[text]||window.WMWordGlossary?.words?.[text]||'','zh-CN']],token)}}});render();save();resumeLesson();
document.addEventListener('keydown',e=>{if(e.target.matches('input,textarea')||e.ctrlKey||e.metaKey||e.altKey||lesson.phase!=='input')return;if(e.key==='Enter'&&!e.target.closest('button')){e.preventDefault();enter('CONFIRM')}else if(/^[a-z0-9.,!?;'’:-]$/i.test(e.key)){e.preventDefault();enter(e.key)}else if(['Backspace',' '].includes(e.key)){e.preventDefault();enter(e.key==='Backspace'?'BACK':'SPACE')}});
window.addEventListener('pagehide',()=>{paused=true;stop();dictation.cancel();save()});document.addEventListener('visibilitychange',()=>{if(document.hidden){paused=true;stop();busy=false;dictation.cancel();save()}else{paused=false;render()}});
})();
