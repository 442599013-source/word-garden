/* V64.47 independent study: bookmarks, counts, English/Chinese dictation, guarded auto advance. */
(()=>{'use strict';
const $=id=>document.getElementById(id),lib=document.body.dataset.skill==='writing'&&window.WMGuidedWriting?WMGuidedWriting.enrichLibrary(window.WMStageLibrary):window.WMStageLibrary,params=new URLSearchParams(location.search),skill=document.body.dataset.skill==='query'?params.get('skill'):document.body.dataset.skill;
if(!['listening','speaking','reading','writing'].includes(skill))throw Error('Unknown skill');
const KEY='wm-stage-practice-v6430-'+skill,store=new WMStudyTools.Store(skill,WMA1Lesson.id),names={word:['Words','单词'],phrase:['Phrases','词组'],sentence:['Sentences','短句'],passage:['Passages','短文']};let saved={};try{saved=JSON.parse(localStorage.getItem(KEY)||'{}')||{}}catch{}
const requested=Number(params.get('level'));
const routedStage=lib.resolve(params.get('stage'),requested);
const guidedStage=params.get('lesson')&&lib.stages.find(s=>s.passage.some(x=>x.guidedLesson===params.get('lesson')));
const directPTE=skill==='reading'&&params.get('from')==='journey'&&window.WMUnifiedCourseData?.units?.[requested-1]?.kind==='pte';
let stage=(guidedStage&&lib.byId[guidedStage.id])||(routedStage&&lib.byId[routedStage.id])||lib.byId[lib.resolve(saved.stage)?.id]||lib.stages[0],type=lib.types.includes(params.get('type'))?params.get('type'):directPTE?'sentence':lib.types.includes(saved.type)?saved.type:'word',favoritesOnly=false,index=0,epoch=0,locked=false,entryUI=null,revealed=false,usedShow=false,hadWrong=false,audioEpoch=0,advanceTimer=null,lessonView=null,passageView=null,usedManual=false,usedListen=false;
const filters=saved.filters||{};
const lessonScope=lib.number===2?':lesson-2':'';
const filterKey=()=>stage.id+lessonScope+':'+type;
if(!lessonScope&&!saved.filters&&saved.favoritesOnly&&stage.id===saved.stage&&type===saved.type)filters[filterKey()]=true;
favoritesOnly=filters[filterKey()]===true;
const indices=saved.indices||{},voice=new WMMicrosoftVoice($('audio')),norm=s=>String(s||'').toLowerCase().replace(/[’‘]/g,"'").replace(/[^\p{L}\p{N}'\s-]/gu,'').trim().replace(/\s+/g,' '),words=s=>s.match(/[A-Za-z0-9]+(?:['’\-][A-Za-z0-9]+)*/g)||[],items=()=>store.remaining(type,stage[type],favoritesOnly),item=()=>items()[index],key=()=>stage.id+lessonScope+':'+type+(favoritesOnly?':favorites':''),shuffle=a=>{const b=a.slice();for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]]}return b};
document.title=skill[0].toUpperCase()+skill.slice(1)+' Practice · Goldy Magic English';
const context=document.querySelector('.context'),categoryLabel=context.querySelector('label');context.classList.add('study-category-row');categoryLabel.classList.add('study-category-label');for(const child of [...categoryLabel.childNodes])if(child.nodeType===3)child.remove();$('stage').setAttribute('aria-label','Learning stage');
const tools=document.createElement('div');tools.className='study-top-tools';const learnedButton=document.createElement('button'),favoriteButton=document.createElement('button');learnedButton.id='study-learned';favoriteButton.id='study-favorite';learnedButton.type=favoriteButton.type='button';context.before(tools);tools.append(learnedButton,favoriteButton,context);const categoryHost=document.querySelector('.header .total');if(categoryHost){categoryHost.classList.add('wm-header-category');categoryHost.replaceChildren(context)}
const itemRow=document.createElement('div');itemRow.className='study-progress-row';const countLabel=document.createElement('span'),filterButton=document.createElement('button');countLabel.id='study-item-count';filterButton.id='study-favorites-only';filterButton.type='button';const progressActions=document.createElement('span');progressActions.className='study-progress-actions';
const progressListen=document.createElement('button'),progressReveal=document.createElement('button');
progressListen.type=progressReveal.type='button';progressListen.onclick=listen;
progressReveal.onclick=()=>$('reveal').click();
progressActions.append(progressListen,progressReveal);
WMStudyIcons.set(progressListen,'speaker','Listen again');
itemRow.append(countLabel,progressActions,filterButton);tools.after(itemRow);$('answer-progress').hidden=true;
const questionHost=document.querySelector('.question');
const actionRow=document.createElement('div');actionRow.className='study-entry-actions';const oldTools=$('listen').closest('.tools');actionRow.append($('listen'),$('reveal'));oldTools?.remove();document.querySelector('.question').after(actionRow);
const entrySkill=skill==='speaking'||skill==='writing';
const readingPlayback=skill==='reading'?createReadingPlayback():null;
let readingPlaying=false,readingPaused=false,readingSegmentActive=false;
if(readingPlayback)voice.isUserPaused=()=>readingPaused;
function createReadingPlayback(){
 const row=document.createElement('div');
 row.className='controls study-shared-playback';
 const buttons={};
 for(const [id,icon,label,action] of [
  ['prev','previous','Previous',()=>navigate(-1)],
  ['play','play','Play',toggleReading],
  ['next','next','Next',()=>navigate(1)],
  ['reveal','eye','Show answer',()=>$('reveal').click()]
 ]){
  const button=document.createElement('button');button.type='button';button.onclick=action;
  WMStudyIcons.set(button,icon,label);buttons[id]=button;row.append(button);
 }
 return {row,...buttons};
}
function syncReadingPlayback(){
 if(!readingPlayback)return;
 WMStudyIcons.set(readingPlayback.play,readingPlaying&&!readingPaused?'pause':'play',readingPlaying&&!readingPaused?'Pause':'Play');
 const disabled=$('listen').disabled || !!passageView?.answered;
 readingPlayback.play.disabled=disabled;
 readingPlayback.prev.disabled=readingPlayback.next.disabled=!item();
 readingPlayback.reveal.disabled=$('reveal').disabled;
 readingPlayback.reveal.setAttribute('aria-expanded',String(revealed));
 const label=passageView?'meaning':'answer';
 WMStudyIcons.set(readingPlayback.reveal,'eye',(revealed?'Hide ':'Show ')+label);
}
function toggleReading(){
 if(!readingPlaying){void listen();return}
 const audio=$('audio');
 readingPaused=!readingPaused;
 if(readingSegmentActive){
  if(readingPaused)audio.pause();
  else {
   const request=audioEpoch;
   audio.play().catch(()=>{if(request===audioEpoch){readingPaused=true;syncReadingPlayback()}});
  }
 }
 $('status').textContent=readingPaused?'Paused':readingSegmentActive?'Playing':'Loading audio';
 syncReadingPlayback();
}
function navigate(step){
 const count=items().length;
 if(!count)return;
 index=(index+step+count)%count;draw();
}
const wordFeedback=document.createElement('div');wordFeedback.className='wm-word-feedback';$('input-area').append(wordFeedback);
function persist(){indices[key()]=index;try{localStorage.setItem(KEY,JSON.stringify({stage:stage.id,type,indices,correct:saved.correct||0,filters}))}catch{}}
function icon(mic=false){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">'+(mic?'<rect x="8" y="2" width="8" height="13" rx="4"/><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3M8 22h8"/>':'<path d="M11 5 6 9H3v6h3l5 4zM15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>')+'</svg>'}
const mic=new WMSpeechInput.Session({prepare(){voice.stop()},target:()=>passageView?.expected||item()?.en||'',collectPhrases:()=>!!passageView?.expected,matchPhrase:text=>!!passageView?.matches(text),onState:s=>{WMStudyIcons.set($('mic'),s==='idle'?'mic':'stop',s==='idle'?'Read aloud':s==='listening'?'Stop recording':'Stop microphone');$('mic').setAttribute('aria-pressed',String(s!=='idle'))},onStatus:s=>{if(!locked)$('status').textContent=type==='passage'?s.split(' · ')[0]:s},onText:(text,final,raw)=>{if(locked)return;if(passageView){
 const entry=$('entry');
 entry.value=raw;
 if(final)passageView.checkEntry(raw,true);
 else passageView.clearFeedback();
 return
 }$('entry').value=text;if(final){if(skill!=='writing'||revealed)WMWordFeedback.render(wordFeedback,item()?.en||'',text);judge(true,true)}}});
function stop(){epoch++;audioEpoch++;readingPlaying=readingPaused=readingSegmentActive=false;syncReadingPlayback();clearTimeout(advanceTimer);voice.stop();void mic.cancel();clearTimeout(typed.timer)}
async function listen(){
 const x=item();
 if(!x||locked||passageView?.answered)return;
 if(skill==='speaking')usedListen=true;
 const t=++audioEpoch;
 readingPlaying=!!readingPlayback;readingPaused=readingSegmentActive=false;syncReadingPlayback();
 voice.stop();
 await mic.cancel();
 if(t!==audioEpoch)return;
 const status=$('status');
 status.textContent=type==='passage'?'Loading audio':'Loading audio · 正在准备语音';
 const parts=x.audioSegments?.map(text=>{
  const sound=WMA1Lesson.sounds.find(item=>item.en===text);
  return sound?{src:'audio/a1-lesson-1/'+sound.id+'.mp3'}:{text,locale:'en-GB'};
 }) || (skill==='writing'?[{text:x.en,locale:'en-GB'},{text:x.zh,locale:'zh-CN'}]:[{text:x.en,locale:'en-GB'}]);
 const onStart=()=>{
  if(t!==audioEpoch)return;
  readingSegmentActive=!!readingPlayback;
  if(readingPaused)$('audio').pause();
  status.textContent=readingPaused?'Paused':type==='passage'?'Playing':'Playing · 正在播放';
 };
 try{
  for(const part of parts){
   if(t!==audioEpoch)return;
   readingSegmentActive=false;
   if(part.src)await voice.playFile(part.src,1,onStart);
   else await voice.play(part.text,part.locale,1,onStart);
  }
  if(t===audioEpoch)status.textContent='';
 }catch(error){
  if(t===audioEpoch&&error.name!=='AbortError')status.textContent=type==='passage'?'Tap Listen to play':'Tap Listen to play · 请点收听重试';
 }finally{if(t===audioEpoch){readingPlaying=readingPaused=readingSegmentActive=false;syncReadingPlayback()}}
}

function selectQueue(only, target){
 persist();
 favoritesOnly=only;
 filters[filterKey()]=only;
 const queue=items();
 index=target?Math.max(0,queue.findIndex(x=>store.key(type,x)===store.key(type,target))):only?0:indices[key()]||0;
 draw();
}
function openStudyList(kind){
 const former=item();
 stop();
 WMStudyTools.listDialog({store,type,items:stage[type],kind,
  onChanged(){const queue=items();index=Math.min(index,Math.max(0,queue.length-1));if(former){const i=queue.findIndex(x=>store.key(type,x)===store.key(type,former));if(i>=0)index=i}draw()},
  onAll(){selectQueue(kind==='favorites')},
  onReview(target){selectQueue(true,target)}
 });
}
const learnedSplit=WMStudyTools.splitControl(learnedButton,()=>openStudyList('learned')),favoriteSplit=WMStudyTools.splitControl(favoriteButton,()=>openStudyList('favorites'));
function updateTools(current){if($('total'))$('total').textContent=WMStudyTools.learnedWords(skill).size;const x=current||item(),counts=store.counts(type,stage[type]);learnedSplit.update('❤️ Learned',counts.learned,!x);favoriteSplit.update((x&&store.hasFavorite(type,x)?'⭐':'☆')+' Favorites',counts.favorites,!x);favoriteButton.setAttribute('aria-pressed',String(!!x&&store.hasFavorite(type,x)));filterButton.textContent=type==='passage'?'All items':'All items · 普通练习';filterButton.hidden=!favoritesOnly;countLabel.classList.toggle('is-favorites',favoritesOnly);countLabel.setAttribute('aria-label',favoritesOnly?'Favorites · 收藏练习':'Regular practice · 普通练习');countLabel.textContent=(x?index+1:0)+' / '+items().length}
learnedButton.onclick=()=>{const x=item();if(!x)return;try{store.mark(type,x)}catch{$('status').textContent='Unable to save Learned · 未能保存，请重试';return}stop();index=Math.min(index,Math.max(0,items().length-1));persist();draw()};
favoriteButton.onclick=()=>{const x=item();if(!x)return;let added;try{added=store.toggle(type,x)}catch{$('status').textContent='Unable to save Favorites · 未能保存，请重试';return}if(favoritesOnly&&!added){stop();index=Math.min(index,Math.max(0,items().length-1));draw()}else updateTools()};
filterButton.onclick=()=>selectQueue(false);
const manualFavorites=()=>type==='word'&&['listening','speaking','reading'].includes(skill);
function wrong(){if(locked)return;hadWrong=true;let groupingFailed=false;if(!manualFavorites()&&['reading','writing'].includes(skill)&&item()){try{store.favorite(type,item());updateTools()}catch{groupingFailed=true}}$('status').dataset.state='wrong';$('input-area').dataset.state='wrong';$('status').textContent=groupingFailed?'Please try again · 收藏未能保存，请稍后重试':'Please try again · 请修改后重答'}
function win(voiceInput=false){if(locked||!item())return;locked=true;saved.correct=(saved.correct||0)+1;const x=item(),before=index;stop();const t=epoch;let removed=false,saveFailed=false;
 if(manualFavorites()||['reading','writing'].includes(skill)||(skill==='speaking'&&voiceInput&&!hadWrong&&!usedManual&&!usedListen)){
  try{
   if(!hadWrong&&!usedShow){store.graduate(type,x);removed=true}
   else if(!manualFavorites())store.favorite(type,x)
  }catch{saveFailed=true}
 }
 $('status').dataset.state='correct';$('input-area').dataset.state='correct';$('status').textContent=saveFailed?(type==='passage'?'✓ Correct! Progress could not be saved.':'✓ Correct · 分组保存失败，请稍后重试'):'✓ Correct!';$('listen').disabled=$('reveal').disabled=$('mic').disabled=true;syncProgressActions();if($('total'))$('total').textContent=WMStudyTools.learnedWords(skill).size;const displayPosition=countLabel.textContent;updateTools(x);countLabel.textContent=displayPosition;learnedButton.disabled=favoriteButton.disabled=true;persist();
 try{window.WMPracticeAssessment?.record({skill,id:'stage:'+stage.id+':'+type+':'+x.id,word:x.en,level:stage.id,correct:true})}catch{}
 try{void window.WMStudySound?.ding()}catch{}
 advanceTimer=setTimeout(()=>{if(t!==epoch)return;const remaining=items();if(remaining.length){const currentIndex=remaining.findIndex(y=>store.key(type,y)===store.key(type,x));index=removed||currentIndex<0?Math.min(before,remaining.length-1):(currentIndex+1)%remaining.length}else index=0;persist();draw()},850);
}

function judge(final=false,voiceInput=false){if(locked||!item())return;const text=$('entry').value;if(norm(text)===norm(item().en)||(voiceInput&&window.WMSpeechMatch?.equivalent(text,item().en))){void win(voiceInput);return}if(final&&norm(text))wrong()}
function typed(){if(locked||!item()||passageView?.answered)return;
 if(passageView){
  usedManual=true;audioEpoch++;voice.stop();if(mic.state!=='idle')void mic.cancel();
  $('status').textContent='';
  passageView.checkEntry($('entry').value,false);
  return;
 }
 if(skill==='speaking')usedManual=true;if(skill!=='writing'||revealed)WMWordFeedback.render(wordFeedback,item().en,$('entry').value);audioEpoch++;voice.stop();if(mic.state!=='idle')void mic.cancel();$('status').textContent='';$('status').dataset.state='';judge(false);clearTimeout(typed.timer);const target=words(item().en),actual=words($('entry').value);if(actual.length>=target.length&&actual.length&&actual.at(-1).length>=target.at(-1).length&&!norm(item().en).startsWith(norm($('entry').value)))typed.timer=setTimeout(()=>judge(true),1000)}
function renderInstructionChecks(x){
 const answers=$('answers'), checks=[['action','题目要我做什么？'],['response','我要怎么答？']];
 const pteRows=window.WMUnifiedCourseData.units.filter(unit=>unit.kind==='pte').flatMap(unit=>unit.lessons);
 let correct=0;
 for(const [key,label] of checks){
  const section=document.createElement('section'), title=document.createElement('p');
  section.className='pte-comprehension';title.textContent=label;section.append(title);
  const value=x.checks[key];
  const others=[...new Set(shuffle(pteRows).map(row=>row.checks[key]).filter(option=>option!==value))].slice(0,2);
  for(const choice of shuffle([value,...others])){
   const button=document.createElement('button');button.type='button';button.className='answer rs-choice';button.textContent=choice;
   button.onclick=()=>{
    if(locked||button.disabled)return;
    if(choice!==value){button.dataset.state='wrong';wrong();return}
    button.dataset.state='correct';section.querySelectorAll('button').forEach(b=>b.disabled=true);
    if(++correct===checks.length){$('translation').hidden=false;void win()}
   };
   section.append(button);
  }
  answers.append(section);
 }
 if(x.tip){
  const tip=document.createElement('p');tip.lang='en';tip.textContent=x.tip.en;
  $('prompt').after(tip);tip.className='pte-instruction-tip';
 }
}
function syncProgressActions() {
 syncReadingPlayback();
 const reveal=$('reveal'), label=passageView?'meaning':'answer';
 progressListen.disabled=$('listen').disabled;
 progressReveal.disabled=reveal.disabled;
 progressReveal.setAttribute('aria-expanded',String(revealed));
 WMStudyIcons.set(progressReveal,'eye',(revealed?'Hide ':'Show ')+label);
}
function draw(){const settle=window.WMViewportStability?.begin()||(()=>{});try{drawContent()}finally{syncProgressActions();settle()}}
function mountEntry(){
 if(!entryUI)entryUI=new WMPracticeUI.Entry($('entry'),{
  clear:$('clear'),onManual:()=>{audioEpoch++;voice.stop();if(mic.state!=='idle')void mic.cancel()},
  onChange:typed,isLocked:()=>locked||$('entry').disabled||!!passageView?.answered,open:skill==='writing'
 });
 if($('entry').selectionStart!==0||$('entry').selectionEnd!==0)$('entry').setSelectionRange(0,0);
 actionRow.replaceChildren(entryUI.toggle,$('listen'),$('reveal'),$('mic'));
 WMStudyIcons.set(entryUI.toggle,'keyboard','English keyboard');
 $('input-area').insertBefore(actionRow,wordFeedback);
 entryUI.toggle.disabled=$('clear').disabled=$('entry').disabled;
 if($('entry').disabled)entryUI.suspend();else entryUI.resume();
 $('entry').oninput=typed;
 $('entry').onkeydown=e=>{
  if(e.key!=='Enter'||e.shiftKey)return;
  e.preventDefault();
  if(passageView)passageView.checkEntry($('entry').value,true);
  else judge(true);
 };
}
function drawContent(){document.querySelector('.pte-instruction-tip')?.remove();lessonView?.destroy();lessonView=null;if(passageView){questionHost.after(actionRow);passageView.destroy();passageView=null;}usedManual=false;usedListen=false;stop();actionRow.hidden=false;locked=false;usedShow=false;hadWrong=false;index=Math.max(0,Math.min(Math.max(0,items().length-1),index));const x=item();$('answers').replaceChildren();$('pieces').replaceChildren();$('built').replaceChildren();$('entry').value='';wordFeedback.replaceChildren();$('status').textContent='';$('status').dataset.state='';$('input-area').dataset.state='';revealed=false;WMStudyIcons.set($('reveal'),'eye','Show answer');$('reveal').setAttribute('aria-expanded','false');$('stage').value=stage.id;for(const opt of $('stage').options){const st=lib.byId[opt.value];opt.textContent=st.zh}$('stage').title=$('stage').selectedOptions[0]?.textContent||'Category';if($('level-label'))$('level-label').textContent=stage.en;if($('level-en'))$('level-en').textContent=stage.zh;if($('total'))$('total').textContent=WMStudyTools.learnedWords(skill).size;$('position').textContent=stage.en+' · '+stage.zh;$('answer-progress').textContent=(x?index+1:0)+' / '+items().length;updateTools();$('listen').disabled=$('reveal').disabled=$('mic').disabled=!x;$('translation').textContent=x?.zh||'';$('translation').hidden=skill!=='speaking';$('prompt').hidden=false;$('prompt').lang=skill==='writing'?'zh-CN':'en';$('prompt').textContent=!x?(favoritesOnly?'No unlearned favorites · 暂无待练收藏':stage[type].length?'All learned · 全部已学会':'No material available · 暂无内容'):skill==='listening'?'Listen and choose the meaning · 听音选择句意':skill==='writing'?x.zh:x.en;WMStudyIcons.set($('listen'),'speaker','Listen again');WMStudyIcons.set($('prev'),'previous','Previous');WMStudyIcons.set($('next'),'next','Next');$('mic').hidden=!entrySkill;WMStudyIcons.set($('mic'),'mic','Read aloud');$('input-area').hidden=!entrySkill;$('entry').disabled=!x;$('reveal').hidden=false;if($('finish'))$('finish').hidden=true;document.querySelectorAll('#types button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.type===type)));if(readingPlayback)questionHost.append(readingPlayback.row);if(!x){if(entrySkill)mountEntry();else{entryUI?.suspend();actionRow.hidden=true}return;}
if(skill==='reading'||skill==='listening'){
 questionHost.after(actionRow);
 actionRow.replaceChildren($('listen'),$('reveal'));
 actionRow.hidden=true;
}
if(type==='passage'&&x.lines&&window.WMA1PassagePractice){
 $('prompt').hidden=true;$('translation').hidden=true;
 $('reveal').hidden=false;
 WMStudyIcons.set($('reveal'),'eye','Show meaning');
 const speaking=skill==='speaking';
 passageView=window.WMA1PassagePractice.mount({host:$('answers'),transcriptHost:questionHost,passage:x,skill,
  entryArea:entrySkill?$('input-area'):null,
  onNext(){if(entrySkill){stop();$('entry').value='';$('status').textContent='';}},
  onComplete(wrongAnswer){hadWrong=wrongAnswer;void win(speaking&&!usedManual)}});
 if(readingPlayback)questionHost.append(readingPlayback.row);
 if(entrySkill)mountEntry();
 else {
  entryUI?.destroy();entryUI=null;$('input-area').hidden=true;
  actionRow.replaceChildren($('listen'),$('reveal'));
  actionRow.hidden=true;
 }
 persist();return;
}
if(skill==='writing'&&stage.stage==='kindergarten'&&type==='passage'&&x.guidedLesson){
 entryUI?.destroy();entryUI=null;$('input-area').hidden=true;actionRow.hidden=true;$('prompt').hidden=true;$('translation').hidden=true;$('listen').disabled=$('reveal').disabled=true;
 lessonView=WMGuidedWriting.mount({host:$('answers'),id:x.guidedLesson,onRestart:draw,onComplete:({restored=false}={})=>{if(locked)return;locked=true;if(!restored)saved.correct=(saved.correct||0)+1;if($('total'))$('total').textContent=WMStudyTools.learnedWords(skill).size;$('status').textContent='✓ Lesson complete · 本课学习完成';$('status').dataset.state='correct';learnedButton.disabled=favoriteButton.disabled=true;persist();const t=epoch;advanceTimer=setTimeout(()=>{if(t!==epoch)return;const list=items();index=list.length?(index+1)%list.length:0;persist();draw()},850)}});persist();return;
 }
 if(skill==='reading'&&x.checks){renderInstructionChecks(x);persist();return}
 if(['listening','reading'].includes(skill)){const candidates=shuffle(stage[type].filter(y=>y.zh!==x.zh)),unique=[x.zh];for(const c of candidates){if(!unique.includes(c.zh))unique.push(c.zh);if(unique.length===4)break}for(const zh of shuffle(unique)){const b=document.createElement('button');b.type='button';b.className='answer rs-choice';b.textContent=zh;b.onclick=()=>{if(locked)return;document.querySelectorAll('#answers button').forEach(n=>delete n.dataset.state);if(zh===x.zh){b.dataset.state='correct';void win()}else{b.dataset.state='wrong';wrong()}};$('answers').append(b)}}else mountEntry();
persist();if(skill==='reading'||(skill==='writing'&&!WMMicrosoftVoice.needsOutputRestore()))void listen();}
for(const s of lib.stages){const o=document.createElement('option');o.value=s.id;o.textContent=s.zh;$('stage').append(o)}for(const t of lib.types){const b=document.createElement('button');b.type='button';b.dataset.type=t;b.innerHTML=names[t][0]+'<small>'+({listening:'听',speaking:'说',reading:'读',writing:'写'})[skill]+names[t][1]+'</small>';b.onclick=()=>{persist();type=t;favoritesOnly=filters[filterKey()]===true;index=indices[key()]||0;draw()};$('types').append(b)}$('stage').onchange=()=>{persist();stage=lib.byId[$('stage').value];favoritesOnly=filters[filterKey()]===true;index=indices[key()]||0;draw()};$('listen').onclick=listen;$('mic').onclick=()=>{if(!locked&&item()&&!passageView?.answered)mic.toggle()};$('reveal').onclick=()=>{const x=item();if(!x||locked)return;if(!revealed)usedShow=true;revealed=!revealed;syncProgressActions();if(passageView){passageView.showMeanings(revealed);$('reveal').setAttribute('aria-expanded',String(revealed));WMStudyIcons.set($('reveal'),'eye',revealed?'Hide meaning':'Show meaning');return;}$('reveal').setAttribute('aria-expanded',String(revealed));WMStudyIcons.set($('reveal'),'eye',revealed?'Hide answer':'Show answer');$('prompt').lang=skill==='writing'&&!revealed?'zh-CN':'en';$('prompt').textContent=revealed?x.en:skill==='listening'?'Listen and choose the meaning · 听音选择句意':skill==='writing'?x.zh:x.en;$('translation').textContent=x.zh;$('translation').hidden=!(revealed||skill==='speaking');if(skill==='writing'){if(revealed)WMWordFeedback.render(wordFeedback,x.en,$('entry').value);else wordFeedback.replaceChildren()}};for(const [id,d]of [['prev',-1],['next',1]])$(id).onclick=()=>navigate(d);window.addEventListener('pagehide',()=>{persist();lessonView?.destroy();stop()});window.addEventListener('pageshow',e=>{if(e.persisted){store.refresh();draw()}});$('stage').value=stage.id;WMA1LessonNumber($('stage'),$('stage').parentElement);index=indices[key()]||0;if(directPTE&&type==='sentence'){const first=items().findIndex(x=>x.checks&&x.classroomLevel===requested);if(first>=0)index=first}if(skill==='writing'&&stage.stage==='kindergarten'&&type==='passage'&&params.get('lesson')){const at=items().findIndex(x=>x.guidedLesson===params.get('lesson'));if(at>=0)index=at}draw();window.WMStagePracticeDebug={get state(){return {skill,stage:stage.id,type,index,locked,remaining:items().length,current:item()?.en,favoritesOnly,usedShow,hadWrong,keyboardOpen:!!entryUI?.opened,usedManual,usedListen,guidedLesson:lessonView?.state,counts:store.counts(type,stage[type])}},judge,listen};})();
