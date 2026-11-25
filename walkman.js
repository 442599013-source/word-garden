(async()=>{'use strict';const $=id=>document.getElementById(id),C=WMWalkman,KEY='wm-shared-stage-library-v6430',saved=C.read(KEY,{}),names={word:['听单词','Words'],phrase:['听词组','Phrases'],sentence:['听短句','Sentences'],passage:['听短文','Passages']};const params=new URLSearchParams(location.search);let type=params.get('type')||(params.get('level')==='3'?'word':params.has('level')?saved.type:'word')||'word';if(!C.types.includes(type))type='word';let catalog,book=null,index=0,running=false,paused=false,segmentActive=false,generation=0,loadGeneration=0,loading=false,deadline=0,timer,favoritesOnly=false;const voice=new WMMicrosoftVoice($('audio'));const studyStore=new WMStudyTools.Store('listening',WMA1Lesson.id);
let reviewScope=[];
const filters=saved.filters||{};
const lib=window.WMStageLibrary;
const lessonScope=lib.scope==='all'?':all':lib.number===2?':lesson-2':lib.number===3?':lesson-3':'';
const filterKey=()=>$('category').value+lessonScope+':'+type;
function restoreFilter(){favoritesOnly=filters[filterKey()]===true}
voice.isUserPaused=()=>paused;
let transcript=null;
const passageHost=document.createElement('div');
const lessonSource=document.createElement('small');lessonSource.className='study-lesson-source';lessonSource.hidden=true;
$('english').after(lessonSource);lessonSource.after(passageHost);

let shownItem, meaningVisible=false;
const meaningButton=document.createElement('button');
meaningButton.type='button';
const progressActions=document.createElement('span');
progressActions.className='study-progress-actions';
$('position').after(progressActions);
const topPlay=document.createElement('button');
const bottomMeaning=document.createElement('button');
topPlay.type=bottomMeaning.type='button';
topPlay.onclick=play;
bottomMeaning.onclick=()=>meaningButton.click();
progressActions.append(topPlay,meaningButton);
const playbackRow=$('play').parentElement;
playbackRow.classList.add('study-shared-playback');
playbackRow.append(bottomMeaning);
meaningButton.onclick=()=>{meaningVisible=!meaningVisible;showMeaning()};
function showMeaning(){
 $('chinese').hidden=!!transcript||!meaningVisible;
 transcript?.showMeanings(meaningVisible);
 syncMeaningButtons();
}
function syncMeaningButtons(){
 for(const button of [meaningButton,bottomMeaning]){
  button.setAttribute('aria-expanded',String(meaningVisible));
  WMStudyIcons.set(button,'eye',meaningVisible?'Hide meaning':'Show meaning');
 }
}
function reviewQueue(){return studyStore.remaining(type,reviewScope,true)}
async function selectQueue(only,target,scope){
 if(scope&&scope!==lib.scope){lib.openScope(scope,$('category').value,type,{review:only,target});return}
 filters[filterKey()]=favoritesOnly=only;
 if(!only){await listBooks(book?.id);return}
 await listBooks(book?.id,{review:true,target});
}
function openStudyList(kind){
 stop();
 WMStudyTools.listDialog({store:studyStore,type,items:scopeItems(),kind,...(lib.listScope?.($('category').value,type,favoritesOnly)||{}),
  onChanged(){
   if(book){book.items=favoritesOnly?reviewQueue():studyStore.remaining(type,book.allItems);index=Math.min(index,Math.max(0,book.items.length-1))}
   show();
  },
  onAll(scope){void selectQueue(kind==='favorites',null,scope)},
  onReview(target,scope){void selectQueue(true,target,scope)}
 });
}
const learnedSplit=WMStudyTools.splitControl($('learned'),()=>openStudyList('learned')),favoriteSplit=WMStudyTools.splitControl($('favorite'),()=>openStudyList('favorites'));
const header=document.createElement('header');header.className='wm-listening-header';const heading=document.querySelector('main>h1'),back=document.querySelector('main>a'),categoryRow=document.querySelector('.study-category-row');back.before(header);header.append(back,heading,categoryRow);back.textContent='‹';back.setAttribute('aria-label','Back to My');categoryRow.classList.add('wm-header-category');$('stats').hidden=true;$('audio').removeAttribute('controls');$('audio').hidden=true;
function transport(){WMStudyIcons.set($('prev'),'previous','Previous');WMStudyIcons.set($('next'),'next','Next');WMStudyIcons.set($('play'),running&&!paused?'pause':'play',running&&!paused?'Pause':'Play');WMStudyIcons.set(topPlay,running&&!paused?'pause':'speaker',running&&!paused?'Pause':'Play')}

let lessonView=null, lessonHost=null;
const passageParts=['.study-content','.settings','.note'];
function syncLessonView(){
 if(!lessonHost)return;
 const inRoots=type==='passage'&&window.WMStageLibrary.byId[$('category').value]?.stage==='kindergarten';
 if(inRoots&&!lessonView){
  stop();
  const passages=window.WMStageLibrary.passages.filter(p=>p.stage==='kindergarten');
  lessonHost.hidden=false;
  for(const selector of passageParts)document.querySelector(selector)?.setAttribute('hidden','');
  lessonView=window.WMListeningLessons.mount(lessonHost,{passages});
 }else if(!inRoots&&lessonView){
  lessonView.destroy();
  lessonView=null;
  lessonHost.hidden=true;
  for(const selector of passageParts)document.querySelector(selector)?.removeAttribute('hidden');
 }
}
function setupLessons(){
 if(!window.WMListeningLessons)return;
 lessonHost=document.createElement('section');
 lessonHost.className='wm-listening-lessons';
 lessonHost.hidden=true;
 document.querySelector('.study-content').before(lessonHost);
 syncLessonView();
}

function progressKey(){return favoritesOnly?'favorites:'+type+':'+$('category').value+lessonScope:book.id}
function scopeItems(){const list=(catalog?.books||[]).filter(b=>b.type===type&&b.category===$('category').value).flatMap(b=>b.items||[]);return favoritesOnly&&reviewScope.length?reviewScope:list.length?list:book?.allItems||[]}

const progress=saved.progress||{},stats=saved.stats||{plays:0,wordPlays:0,uniqueWords:{}};stats.uniqueWords??={};
function persist(){try{C.write(KEY,{type,category:$('category').value,bookId:book?.id,progress,stats,filters,repeat:$('repeat').value,speed:$('speed').value,loop:$('loop').value,spell:$('spell').value})}catch{$('status').textContent='进度保存失败，请检查浏览器存储空间'}}
function stop(){running=false;paused=false;segmentActive=false;generation++;voice.stop();transport()}
function counts(){$('stats').textContent='Learned words · 已学会单词：'+WMStudyTools.learnedWords('listening').size}
function findPassage(item){
 return window.WMA1Lesson2?.passages.find(row=>row.id===item?.id)||window.WMA1Passages?.find(row=>row.id===item?.id);
}
function updatePassage(item){
 if(item===shownItem)return;
 shownItem=item;
 meaningVisible=false;
 if(transcript) {
  passageHost.replaceChildren();
  transcript=null;
 }
 const passage=type==='passage'&&findPassage(item);
 if(passage&&window.WMA1PassagePractice){
  transcript=WMA1PassagePractice.buildTranscript(passage);
  passageHost.append(transcript.element);
 }
}
function show(){transport();for(const opt of $('category').options){const c=catalog?.categories?.find(c=>c.id===opt.value);if(c)opt.textContent=c.zh}$('category').title=$('category').selectedOptions[0]?.textContent||'Category';const x=book?.items[index],source=type==='word'&&x?lib.lessonLabel?.(x):'';lessonSource.textContent=source||'';lessonSource.hidden=!source;updatePassage(x);meaningButton.disabled=bottomMeaning.disabled=topPlay.disabled=!x;if(!transcript)showMeaning();else { $('chinese').hidden=true; syncMeaningButtons();} $('english').hidden=!!transcript;$('english').style.whiteSpace=type==='passage'?'pre-line':'';$('english').textContent=x?.en||(loading?'Loading · 正在加载':favoritesOnly?'No unlearned favorites · 暂无待练收藏':book?.allLearned?'All learned · 全部已学会':'No content · 暂无内容');$('chinese').textContent=x?.zh||'';$('book-title').textContent=book?(type==='passage'?book.titleEn:book.titleZh+' · '+(book.titleEn||'')):'';$('position').textContent=x?(index+1)+' / '+book.items.length:book?'0 / 0':'';const totals=studyStore.counts(type,scopeItems());learnedSplit.update('❤️ Learned',totals.learned,!x);favoriteSplit.update((x&&studyStore.hasFavorite(type,x)?'⭐':'☆')+' Favorites',totals.favorites,!x);$('favorite').setAttribute('aria-pressed',String(!!x&&studyStore.hasFavorite(type,x)));$('favorites-only').hidden=!favoritesOnly;$('favorites-only').textContent=type==='passage'?'All items':'All items · 普通练习';$('position').classList.toggle('is-favorites',favoritesOnly);$('position').setAttribute('aria-label',favoritesOnly?'Favorites · 收藏练习':'Regular practice · 普通练习');['play','prev','next','learned','favorite'].forEach(id=>$(id).disabled=!x);counts()}
function timeout(p,ms){return Promise.race([p,new Promise((_,r)=>setTimeout(()=>r(Error('存储或加载超时，请重试')),ms))])}
async function readBook(entry){
 if(entry.items)return C.validate(entry);
 const response=await timeout(fetch(new URL(entry.url,new URL('content/walkman-catalog.json',location.href))),15000);
 if(!response.ok)throw Error('内容本加载失败 HTTP '+response.status);
 return C.validate(await response.json());
}
async function listBooks(prefer,{review=false,target}={}){
 const entries=[...new Map(catalog.books.map(b=>[b.id,b])).values()].filter(b=>b.type===type&&b.category===$('category').value);
 const selected=entries.find(b=>b.id===prefer)||entries[0];
 stop();
 const token=++loadGeneration;
 const group=type, reviewing=favoritesOnly;
 loading=!!selected;
 book=null;
 reviewScope=[];
 $('empty').hidden=!!selected;
 $('status').textContent='';
 show();
 if(!selected)return;
 try{
  const loaded=await readBook(selected);
  if(loaded.type!==group)throw Error('内容类型不匹配');
  const all=reviewing?await Promise.all(entries.map(entry=>entry===selected?loaded:readBook(entry))):[];
  if(token!==loadGeneration)return;
  reviewScope=all.flatMap(entry=>entry.items);
  const remaining=reviewing?reviewQueue():studyStore.remaining(group,loaded.items);
  book={...loaded,allItems:loaded.items,items:remaining,allLearned:loaded.items.length>0&&!remaining.length};
  const resume=Number(progress[progressKey()])||0;
  const position=target?remaining.findIndex(y=>studyStore.key(group,y)===studyStore.key(group,target)):review?0:resume;
  index=Math.max(0,Math.min(remaining.length-1,position));
  progress[progressKey()]=index;
  persist();
 }catch(error){
  if(token!==loadGeneration)return;
  $('status').textContent=error.message+' · 请重试 / Retry';
 }finally{
  if(token===loadGeneration){loading=false;show()}
 }
}
function tabs(){C.types.forEach(t=>{const b=document.createElement('button');const zh=document.createElement('span'),en=document.createElement('small');zh.className='type-zh';zh.textContent=names[t][0];en.textContent=names[t][1];b.append(en,zh);b.dataset.type=t;b.setAttribute('aria-pressed',String(t===type));b.onclick=()=>{stop();type=t;$('spell-setting').hidden=type!=='word';restoreFilter();syncLessonView();document.querySelectorAll('#types button').forEach((x,i)=>x.setAttribute('aria-pressed',String(C.types[i]===type)));listBooks();persist()};$('types').append(b)})}
function audioParts(item){
 const passage=type==='passage'&&findPassage(item);
 if(passage)return passage.lines.flatMap(([en,zh])=>[
  ...en.split(/(\/[^/]+\/)/u).map(part=>part.trim()).filter(Boolean).map(segment=>{
   const sound=WMA1Lesson.sounds.find(x=>x.en===segment);
   return sound?{src:'audio/a1-lesson-1/'+sound.id+'.mp3'}:{text:segment,lang:'en-GB'};
  }),
  {text:zh,lang:'zh-CN'}
 ]);
 const parts=window.WMListeningLessons?.legacyAudio(item)||[{text:item.en,lang:'en-GB'},{text:item.zh,lang:'zh-CN'}];
 if(type!=='word'||$('spell').value!=='on')return parts;
 const characters=item.en.match(/[A-Za-z]/g)||[];
 return characters.length?[parts[0],{text:characters.map(letter=>letter.toUpperCase()).join(', '),lang:'en-GB'},...parts.slice(1)]:parts;
}
async function play(){if(running){paused=!paused;if(paused){$('audio').pause();transport();$('status').textContent='Paused · 已暂停'}else{
 if(segmentActive){
  const request=generation;
  $('audio').play().catch(e=>{if(request===generation){paused=true;$('status').textContent=e.message;transport()}});
 }
 $('status').textContent=segmentActive?'Playing · 正在播放':'Loading · 正在准备语音';
 transport();
}return}if(!book?.items.length)return;running=true;const g=++generation;transport();try{while(running&&g===generation){if(deadline&&Date.now()>=deadline){stop();lessonView?.stop();$('status').textContent='Timer ended · 定时已停止';break}const x=book.items[index];for(let r=0;r<Number($('repeat').value)&&running&&g===generation;r++){for(const {text,lang:locale,src} of audioParts(x)){if(!running||g!==generation)return;segmentActive=false;$('status').textContent='Loading · 正在准备语音';await (src?voice.playFile.bind(voice,src):voice.play.bind(voice,text,locale))(Number($('speed').value),()=>{segmentActive=true;$('status').textContent='Playing · 正在播放';if(paused){$('audio').pause();$('status').textContent='Paused · 已暂停'}});if(!running||g!==generation)return}stats.plays++;if(type==='word'){stats.wordPlays++;stats.uniqueWords[book.id+':'+x.id]=true}persist();counts()}
if(!running||g!==generation)return;if($('loop').value!=='single'){if(index+1<book.items.length)index++;else if($('loop').value==='book')index=0;else{stop();$('status').textContent='List finished · 当前列表已播放完';break}}progress[progressKey()]=index;persist();show()}}catch(e){if(g===generation){stop();$('status').textContent=e.message+' · 请重试 / Retry'}}}
$('play').onclick=play;for(const [id,step] of [['prev',-1],['next',1]])$(id).onclick=()=>{stop();if(book?.items.length){index=(index+step+book.items.length)%book.items.length;progress[progressKey()]=index;persist();show()}};
$('learned').onclick=()=>{const item=book?.items[index];if(!item)return;try{studyStore.mark(type,item)}catch{$('status').textContent='Unable to save Learned · 未能保存，请重试';return}const resume=running&&!paused;stop();book.items=favoritesOnly?reviewQueue():studyStore.remaining(type,book.allItems);book.allLearned=!book.items.length;index=Math.min(index,Math.max(0,book.items.length-1));progress[progressKey()]=index;persist();show();$('status').textContent='❤️ Learned · This item will not appear again';if(resume&&book.items.length)void play()};
$('favorite').onclick=()=>{const item=book?.items[index];if(!item)return;let added;try{added=studyStore.toggle(type,item)}catch{$('status').textContent='Unable to save Favorites · 未能保存，请重试';return}if(favoritesOnly&&!added){const resume=running&&!paused;stop();book.items=reviewQueue();index=Math.min(index,Math.max(0,book.items.length-1));progress[progressKey()]=index;persist();show();if(resume&&book.items.length)void play()}else show()};
$('favorites-only').onclick=()=>void selectQueue(false);
$('category').onchange=()=>{restoreFilter();syncLessonView();void listBooks()};for(const id of ['repeat','speed','loop']){$(id).value=saved[id]||$(id).value;$(id).onchange=()=>{if(id==='speed')$('audio').playbackRate=Number($('speed').value);persist()}}
function applySleep(){clearTimeout(timer);const mins=Number($('sleep').value);deadline=mins?Date.now()+mins*60000:0;if(!deadline){$('timer-status').textContent='Sleep timer off · 已取消定时';return}timer=setTimeout(()=>{deadline=0;stop();lessonView?.stop();$('sleep').value='0';$('timer-status').textContent='Timer ended · 定时已停止';$('status').textContent='Timer ended · 定时已停止'},Math.max(0,deadline-Date.now()));$('timer-status').textContent='Stops at '+new Date(deadline).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})+' · 将在此时停止';}
$('spell').value=saved.spell==='on'?'on':'off';
$('spell-setting').hidden=type!=='word';
$('spell').onchange=persist;
$('sleep').onchange=applySleep;
document.addEventListener('visibilitychange',()=>{if(deadline&&Date.now()>=deadline){stop();lessonView?.stop();$('status').textContent='Timer ended · 定时已停止'}});window.addEventListener('pagehide',()=>{persist();stop();lessonView?.stop()});window.addEventListener('pageshow',e=>{if(e.persisted){studyStore.refresh();listBooks(book?.id)}});
try{catalog=window.WMKindergartenListening129;if(!catalog?.books?.length)throw Error('听力内容未加载，请刷新重试');
catalog.categories.forEach(c=>{const o=document.createElement('option');o.value=c.id;o.textContent=c.en+' · '+c.zh;$('category').append(o)});
tabs();const routeParams=new URLSearchParams(location.search);
const route=WMStageLibrary.resolve(routeParams.get('stage'),Number(routeParams.get('level')));
const group=route||WMStageLibrary.resolve(saved.category)||WMStageLibrary.resolve('kindergarten');
$('category').value=group.id;
if(!lessonScope&&!saved.filters&&saved.favoritesOnly&&type===saved.type&&group.id===saved.category)filters[filterKey()]=true;
restoreFilter();
if(lib.scope==='all')favoritesOnly=false;
if(params.get('review')==='1')favoritesOnly=true;
WMA1LessonNumber($('category'),$('category').parentElement,()=>favoritesOnly);setupLessons();
await listBooks(saved.bookId,{target:favoritesOnly&&params.get('reviewWord')?{en:params.get('reviewWord')}:undefined});
}catch(e){$('status').textContent=e.message}show();})();
