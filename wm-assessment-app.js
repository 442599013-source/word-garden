(()=>{'use strict';const J=window.WMJourney,C=window.WMSkillCore,$=id=>document.getElementById(id),p=new URLSearchParams(location.search),n=J.integer(p.get('level')||p.get('block')||J.selected()),block=J.block(n),units=window.WMUnifiedCourseData.units.slice(block.start-1,block.end),completeRange=units.length===block.end-block.start+1;
const loc=J.level(n),voice=new WMMicrosoftVoice($('exam-audio'));$('exam-back').href='level-activities.html?level='+n;$('exam-return').href='level-road.html?stage='+loc.stage.id+'&group='+Math.floor(loc.classIndex/3);$('exam-title').replaceChildren(document.createTextNode(block.kind));const subtitle=document.createElement('small');subtitle.textContent=block.kindEn;$('exam-title').append(subtitle);$('exam-range').textContent='第'+block.start+'—'+block.end+'关 · Levels '+block.start+'–'+block.end;
if(!units.length){$('exam-question').textContent='本阶段内容待编排 · Coming later';document.querySelector('.assessment-tools').hidden=true;return}
$('exam-note').textContent='10 questions from Levels '+block.start+'–'+block.end+' · 满分100分，60分通过。';
const KEY='wm-assessment-blocks-v21::'+window.WMUnifiedCourseMeta.id,all=J.read(KEY),active=all[block.id]?.active;
const pool=units.flatMap(unit=>unit.lessons.flatMap(row=>[row,...(row.examples||[]).map((example,i)=>({...example,id:row.id+'-example-'+i}))].map(item=>({row:item,level:unit.level}))));
const uniqueTranslations=[...new Set(pool.map(x=>x.row.cn))];
function makeQuestion(item,skill,i){
 const {row,level}=item;
 const different=uniqueTranslations.filter(zh=>zh!==row.cn);
 const options=Array.from({length:Math.min(3,different.length)},(_,j)=>different[(i*11+j)%different.length]);
 const correctIndex=i%(options.length+1);
 options.splice(correctIndex,0,row.cn);
 return {sourceId:row.id,skill,unit:level,word:row.w||row.en,en:row.en,cn:row.cn,options,correctIndex,question:skill==='listening'?'Listen and choose the meaning · 听音选句意':'Read and choose the meaning · 阅读选句意'};
}
const skills=['listening','reading','writing','speaking','listening','reading','writing','speaking','listening','reading'];
const questions=skills.map((skill,i)=>{
 const saved=active?.questionIds?.[i];
 const item=pool.find(x=>x.row.id===saved?.id)||pool[Math.floor(i*pool.length/skills.length)];
 return makeQuestion(item,skill,i);
});
let answers=Array.isArray(active?.answers)?active.answers.slice(0,10):[],index=answers.length,locked=false,rec=null,timer=null,voiceToken=0,dictation=null;
let attemptId=active?.id||Date.now().toString(36);
function saveAttempt(){const records=J.read(KEY);records[block.id]={...(records[block.id]||{}),active:{id:attemptId,answers,questionIds:questions.map(q=>({id:q.sourceId,skill:q.skill}))}};try{localStorage.setItem(KEY,JSON.stringify(records))}catch{}}
function stop(){voiceToken++;voice.stop();dictation?.cancel();if(rec){const r=rec;rec=null;try{r.abort()}catch{}}clearTimeout(timer)}
async function listen(){stop();const token=voiceToken;$('exam-status').textContent='正在准备语音 · Loading audio';try{await voice.play(questions[index].audioText||questions[index].en,'en-GB',1,()=>{if(token===voiceToken)$('exam-status').textContent='正在播放 · Playing'});if(token===voiceToken)$('exam-status').textContent=''}catch(e){if(token===voiceToken&&e.name!=='AbortError')$('exam-status').textContent='请点击收听重试 · Tap Listen to retry'}}
function answer(ok){if(locked||index>=10)return;locked=true;stop();answers.push({correct:!!ok,skill:questions[index].skill,unit:questions[index].unit,word:questions[index].word,sourceId:questions[index].sourceId});saveAttempt();$('exam-status').textContent=ok?'✓ 答对了 · Correct':'✗ 本题未答对 · Incorrect';$('exam-next').hidden=ok;WMStudyIcons.set($('exam-next'),'next',index===9?'View result · 查看成绩':'Next question · 下一题');document.querySelectorAll('#exam-options button').forEach((b,j)=>{b.disabled=true;if(j===questions[index].correctIndex)b.dataset.result='correct'});$('exam-entry').readOnly=true;$('exam-submit').disabled=true;$('exam-mic').disabled=true;
 if(ok){
  $('exam-status').textContent='✓ Correct!';
  $('exam-status').dataset.state='correct';
  $('exam-entry').parentElement.dataset.state='correct';
  void window.WMStudySound?.ding();
  timer=setTimeout(()=>{index++;draw()},850);
 }
}
function finish(){stop();const score=answers.filter(a=>a.correct).length*10,records=J.read(KEY),old=records[block.id]||{},result={id:attemptId,blockId:block.id,start:block.start,end:block.end,score,at:new Date().toISOString(),completeRange,answers};if(!old.history?.some(r=>r.id===attemptId)){records[block.id]={latest:result,history:[...(old.history||[]),result].slice(-30),active:null};try{localStorage.setItem(KEY,JSON.stringify(records))}catch{}const home=J.read('word-match-home-preview-v1');home.examHistory=Array.isArray(home.examHistory)?home.examHistory:[];if(!home.examHistory.some(x=>x.attemptId===attemptId)){home.examHistory.push({attemptId,blockId:block.id,grade:loc.stage.id==='kindergarten'?['junior','middle','senior'][loc.classIndex]:loc.stage.id+'-'+loc.classIndex,week:block.kindEn.startsWith('Midterm')?20:40,skill:'pte-exam',score,partial:!completeRange,at:result.at});home.examScores=home.examHistory.map(x=>x.score);try{localStorage.setItem('word-match-home-preview-v1',JSON.stringify(home))}catch{}}}
for(const id of ['exam-question','exam-count','exam-options','exam-label','exam-entry','exam-submit','exam-mic','exam-next','exam-source'])$(id).hidden=true;document.querySelector('.assessment-tools').hidden=true;$('exam-status').textContent='';delete $('exam-status').dataset.state;const box=$('exam-result');box.hidden=false;box.replaceChildren();const title=document.createElement('h2');title.textContent=score>=60?'✓ 测评通过 · Passed':'继续练习 · Keep practising';const value=document.createElement('strong');value.textContent=score+' / 100';const detail=document.createElement('p');detail.textContent='答对 '+answers.filter(x=>x.correct).length+' / 10 题';entry.show(false);entry.toggle.hidden=true;entry.field.parentElement.hidden=true;const retry=document.createElement('button');retry.className='assessment-next';retry.type='button';WMStudyIcons.set(retry,'retry','Try again · 重新测评');retry.onclick=()=>{answers=[];index=0;if(window.WM_LISTENING_BANK.courseId)questions.splice(0,questions.length,...WMRSExam.choose(block));attemptId=Date.now().toString(36);saveAttempt();box.hidden=true;document.querySelector('.assessment-tools').hidden=false;draw()};box.append(title,value,detail,retry)}
function draw(){if(index>=10){finish();return}stop();locked=false;const q=questions[index];$('exam-count').hidden=false;$('exam-count').textContent='第'+(index+1)+' / 10题 · '+({listening:'听力 Listening',reading:'阅读 Reading',writing:'写作 Writing',speaking:'口语 Speaking'}[q.skill])+' · 来源第'+q.unit+'关';$('exam-question').hidden=false;$('exam-question').textContent=['writing','speaking'].includes(q.skill)?(q.skill==='writing'?'听音拼写 · Listen and spell':'请跟读 · Read aloud'):q.question;$('exam-source').textContent=q.en;$('exam-source').hidden=q.skill!=='reading';$('exam-reveal').setAttribute('aria-expanded',String(q.skill==='reading'));$('exam-next').hidden=true;$('exam-status').textContent='';delete $('exam-status').dataset.state;delete $('exam-entry').parentElement.dataset.state;$('exam-options').replaceChildren();$('exam-options').hidden=false;const typed=['writing','speaking'].includes(q.skill);entry.toggle.hidden=!typed;entry.field.parentElement.hidden=!typed;entry.show(q.skill==='writing');for(const id of ['exam-label','exam-entry','exam-submit'])$(id).hidden=!typed;$('exam-entry').value='';$('exam-entry').readOnly=true;$('exam-submit').disabled=false;$('exam-mic').hidden=q.skill!=='speaking';$('exam-mic').disabled=false;if(!typed)q.options.forEach((opt,i)=>{const b=document.createElement('button');b.textContent='ABCD'[i]+'. '+opt;b.onclick=()=>{b.dataset.answerResult=b.dataset.result=i===q.correctIndex?'correct':'wrong';answer(i===q.correctIndex)};$('exam-options').append(b)});saveAttempt();if(q.skill!=='reading')listen()}
$('exam-play').onclick=()=>{if(index<10&&!locked)listen()};$('exam-reveal').onclick=()=>{$('exam-source').hidden=!$('exam-source').hidden;$('exam-reveal').setAttribute('aria-expanded',String(!$('exam-source').hidden))};$('exam-submit').onclick=()=>answer(C.normalize($('exam-entry').value)===C.normalize(questions[index].en));$('exam-entry').oninput=()=>{if(C.normalize($('exam-entry').value)===C.normalize(questions[index].en))answer(true)};$('exam-next').onclick=()=>{index++;draw()};
const field=$('exam-entry'),shell=document.createElement('div');shell.className='assessment-entry-shell';field.before(shell);shell.append(field);const clear=document.createElement('button');clear.textContent='×';clear.setAttribute('aria-label','清空整句 Clear all');shell.append(clear);const entry=new WMPracticeUI.Entry(field,{clear,isLocked:()=>locked||index>=10,onManual:stop,onChange:()=>{if(C.normalize(field.value)===C.normalize(questions[index]?.en))answer(true)}});
const tools=document.querySelector('.assessment-tools');
shell.after(tools);
tools.append(entry.toggle,$('exam-play'),$('exam-reveal'),$('exam-mic'),$('exam-submit'),$('exam-next'));
for(const [id,icon,label] of [
 ['exam-play','speaker','Listen · 收听'], ['exam-reveal','eye','Show text · 查看'],
 ['exam-mic','mic','Speak · 跟读'], ['exam-submit','check','Check answer · 确认答案']
]) WMStudyIcons.set($(id),icon,label);
dictation=new WMPracticeUI.Dictation({field,button:$('exam-mic'),status:$('exam-status'),target:()=>questions[index]?.en||'',onText:(text,final)=>{if(final&&C.normalize(text)===C.normalize(questions[index].en))answer(true)},onUnavailable:()=>entry.show(true)});
$('exam-mic').onclick=()=>{if(locked)return;voiceToken++;voice.stop();entry.show(false);dictation.start()};window.addEventListener('pagehide',()=>{stop();entry.destroy()});draw();
})();
