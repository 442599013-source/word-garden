(async()=>{'use strict';const $=id=>document.getElementById(id),C=WMWalkman,KEY='wm-shared-stage-library-v6430',saved=C.read(KEY,{}),names={word:['听单词','Words'],phrase:['听词组','Phrases'],sentence:['听短句','Sentences'],passage:['听短文','Passages']};let type=new URLSearchParams(location.search).get('type')||saved.type||'word';if(!C.types.includes(type))type='word';let catalog,book=null,index=0,running=false,paused=false,generation=0,loadGeneration=0,loading=false,deadline=0,timer,favoritesOnly=!!saved.favoritesOnly;const voice=new WMMicrosoftVoice($('audio'));const studyStore=new WMStudyTools.Store('listening');
let reviewScope=[];
function reviewQueue(){return studyStore.remaining(type,reviewScope,true)}
async function selectQueue(only,target){
 if(!only){favoritesOnly=false;listBooks(book?.id);return}
 favoritesOnly=true;
 await listBooks(book?.id,{review:true,target});
}
function openStudyList(kind){
 stop();
 WMStudyTools.listDialog({store:studyStore,type,items:scopeItems(),kind,
  onChanged(){
   if(book){book.items=favoritesOnly?reviewQueue():studyStore.remaining(type,book.allItems);index=Math.min(index,Math.max(0,book.items.length-1))}
   show();
  },
  onAll(){void selectQueue(kind==='favorites')},
  onReview(target){void selectQueue(true,target)}
 });
}
const learnedSplit=WMStudyTools.splitControl($('learned'),()=>openStudyList('learned')),favoriteSplit=WMStudyTools.splitControl($('favorite'),()=>openStudyList('favorites'));
const header=document.createElement('header');header.className='wm-listening-header';const heading=document.querySelector('main>h1'),back=document.querySelector('main>a'),categoryRow=document.querySelector('.study-category-row');back.before(header);header.append(back,heading,categoryRow);back.textContent='‹';back.setAttribute('aria-label','Back to My');categoryRow.classList.add('wm-header-category');$('stats').hidden=true;$('audio').removeAttribute('controls');$('audio').hidden=true;
function transport(){WMStudyIcons.set($('prev'),'previous','Previous');WMStudyIcons.set($('next'),'next','Next');WMStudyIcons.set($('play'),running&&!paused?'pause':'play',running&&!paused?'Pause':'Play')}

let lessonView=null, lessonHost=null, lessonEntry=null;
const passageParts=['.study-content','.settings','.note'];
function currentLessonKind(){
 if(type!=='passage')return '';
 if($('category').value==='primary')return 'roots';
 if($('category').value==='kindergarten')return 'legacy';
 return '';
}
function updateLessonEntry(){
 if(!lessonEntry)return;
 const kind=currentLessonKind();
 lessonEntry.hidden=!kind||!!lessonView;
 lessonEntry.textContent=kind==='roots'?'Word Roots · 词根小课堂':'Passage Lessons · 短文课堂';
}
function closeLessons({scroll=false}={}){
 if(!lessonView)return;
 lessonView.destroy();
 lessonView=null;
 lessonHost.hidden=true;
 for(const selector of passageParts)document.querySelector(selector)?.removeAttribute('hidden');
 updateLessonEntry();
 if(scroll){lessonEntry.focus({preventScroll:true});lessonEntry.scrollIntoView?.({block:'nearest'})}
}
function setupLessons(){
 if(!window.WMListeningLessons)return;
 const content=document.querySelector('.study-content');
 lessonHost=document.createElement('section');
 lessonHost.className='wm-listening-lessons';
 lessonHost.hidden=true;
 lessonEntry=document.createElement('button');
 lessonEntry.type='button';
 lessonEntry.className='wm-listening-lesson-entry';
 content.before(lessonEntry,lessonHost);
 lessonEntry.onclick=()=>{
  const kind=currentLessonKind();
  if(!kind||lessonView)return;
  stop();
  $('status').textContent='';
  for(const selector of passageParts)document.querySelector(selector)?.setAttribute('hidden','');
  lessonHost.hidden=false;
  lessonView=window.WMListeningLessons.mount(lessonHost,{kind,passages:scopeItems(),onClose:()=>closeLessons({scroll:true})});
  updateLessonEntry();
  lessonHost.querySelector('button')?.focus({preventScroll:true});
 };
 updateLessonEntry();
}

function progressKey(){return favoritesOnly?'favorites:'+type+':'+$('category').value:book.id}
function scopeItems(){const list=(catalog?.books||[]).filter(b=>b.type===type&&b.category===$('category').value).flatMap(b=>b.items||[]);return favoritesOnly&&reviewScope.length?reviewScope:list.length?list:book?.allItems||[]}

const progress=saved.progress||{},stats=saved.stats||{plays:0,wordPlays:0,uniqueWords:{}};stats.uniqueWords??={};
function persist(){try{C.write(KEY,{type,category:$('category').value,bookId:book?.id,progress,stats,favoritesOnly,repeat:$('repeat').value,speed:$('speed').value,loop:$('loop').value})}catch{$('status').textContent='进度保存失败，请检查浏览器存储空间'}}
function stop(){running=false;paused=false;generation++;voice.stop();transport()}
function counts(){$('stats').textContent='Learned words · 已学会单词：'+WMStudyTools.learnedWords('listening').size}
function show(){transport();updateLessonEntry();for(const opt of $('category').options){const c=catalog?.categories?.find(c=>c.id===opt.value);if(c)opt.textContent=c.en}$('category').title=$('category').selectedOptions[0]?.textContent||'Category';const x=book?.items[index];$('english').textContent=x?.en||(loading?'Loading · 正在加载':favoritesOnly?'No unlearned favorites · 暂无待练收藏':book?.allLearned?'All learned · 全部已学会':'No content · 暂无内容');$('chinese').textContent=x?.zh||'';$('book-title').textContent=book?book.titleZh+' · '+(book.titleEn||''):'';$('position').textContent=x?(index+1)+' / '+book.items.length:book?'0 / 0':'';const totals=studyStore.counts(type,scopeItems());learnedSplit.update('❤️ Learned',totals.learned,!x);favoriteSplit.update((x&&studyStore.hasFavorite(type,x)?'⭐':'☆')+' Favorites',totals.favorites,!x);$('favorite').setAttribute('aria-pressed',String(!!x&&studyStore.hasFavorite(type,x)));$('favorites-only').hidden=!favoritesOnly;$('favorites-only').textContent='All items · 普通练习';$('position').classList.toggle('is-favorites',favoritesOnly);$('position').setAttribute('aria-label',favoritesOnly?'Favorites · 收藏练习':'Regular practice · 普通练习');['play','prev','next','learned','favorite'].forEach(id=>$(id).disabled=!x);counts()}
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
function tabs(){C.types.forEach(t=>{const b=document.createElement('button');const zh=document.createElement('span'),en=document.createElement('small');zh.className='type-zh';zh.textContent=names[t][0];en.textContent=names[t][1];b.append(en,zh);b.setAttribute('aria-pressed',String(t===type));b.onclick=()=>{closeLessons();stop();type=t;document.querySelectorAll('#types button').forEach((x,i)=>x.setAttribute('aria-pressed',String(C.types[i]===type)));listBooks();persist()};$('types').append(b)})}
async function play(){if(running){paused=!paused;if(paused){$('audio').pause();transport();$('status').textContent='Paused · 已暂停'}else{$('audio').play().catch(e=>{$('status').textContent=e.message});transport()}return}if(!book?.items.length)return;running=true;const g=++generation;transport();try{while(running&&g===generation){if(deadline&&Date.now()>=deadline){stop();lessonView?.stop();$('status').textContent='Timer ended · 定时已停止';break}const x=book.items[index];for(let r=0;r<Number($('repeat').value)&&running&&g===generation;r++){for(const {text,lang:locale} of window.WMListeningLessons?.legacyAudio(x)||[{text:x.en,lang:'en-GB'},{text:x.zh,lang:'zh-CN'}]){if(!running||g!==generation)return;$('status').textContent='Loading · 正在准备语音';await voice.play(text,locale,Number($('speed').value),()=>{$('status').textContent='Playing · 正在播放';if(paused){$('audio').pause();$('status').textContent='Paused · 已暂停'}});if(!running||g!==generation)return}stats.plays++;if(type==='word'){stats.wordPlays++;stats.uniqueWords[book.id+':'+x.id]=true}persist();counts()}
if(!running||g!==generation)return;if($('loop').value!=='single'){if(index+1<book.items.length)index++;else if($('loop').value==='book')index=0;else{stop();$('status').textContent='List finished · 当前列表已播放完';break}}progress[progressKey()]=index;persist();show()}}catch(e){if(g===generation){stop();$('status').textContent=e.message+' · 请重试 / Retry'}}}
$('play').onclick=play;for(const [id,step] of [['prev',-1],['next',1]])$(id).onclick=()=>{stop();if(book?.items.length){index=(index+step+book.items.length)%book.items.length;progress[progressKey()]=index;persist();show()}};
$('learned').onclick=()=>{const item=book?.items[index];if(!item)return;try{studyStore.mark(type,item)}catch{$('status').textContent='Unable to save Learned · 未能保存，请重试';return}const resume=running&&!paused;stop();book.items=favoritesOnly?reviewQueue():studyStore.remaining(type,book.allItems);book.allLearned=!book.items.length;index=Math.min(index,Math.max(0,book.items.length-1));progress[progressKey()]=index;persist();show();$('status').textContent='❤️ Learned · This item will not appear again';if(resume&&book.items.length)void play()};
$('favorite').onclick=()=>{const item=book?.items[index];if(!item)return;let added;try{added=studyStore.toggle(type,item)}catch{$('status').textContent='Unable to save Favorites · 未能保存，请重试';return}if(favoritesOnly&&!added){const resume=running&&!paused;stop();book.items=reviewQueue();index=Math.min(index,Math.max(0,book.items.length-1));progress[progressKey()]=index;persist();show();if(resume&&book.items.length)void play()}else show()};
$('favorites-only').onclick=()=>void selectQueue(false);
$('category').onchange=()=>{closeLessons();void listBooks()};for(const id of ['repeat','speed','loop']){$(id).value=saved[id]||$(id).value;$(id).onchange=()=>{if(id==='speed')$('audio').playbackRate=Number($('speed').value);persist()}}
function applySleep(){clearTimeout(timer);const mins=Number($('sleep').value);deadline=mins?Date.now()+mins*60000:0;if(!deadline){$('timer-status').textContent='Sleep timer off · 已取消定时';return}timer=setTimeout(()=>{deadline=0;stop();lessonView?.stop();$('sleep').value='0';$('timer-status').textContent='Timer ended · 定时已停止';$('status').textContent='Timer ended · 定时已停止'},Math.max(0,deadline-Date.now()));$('timer-status').textContent='Stops at '+new Date(deadline).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})+' · 将在此时停止';}
$('sleep').onchange=applySleep;
document.addEventListener('visibilitychange',()=>{if(deadline&&Date.now()>=deadline){stop();lessonView?.stop();$('status').textContent='Timer ended · 定时已停止'}});window.addEventListener('pagehide',()=>{persist();stop();lessonView?.stop()});window.addEventListener('pageshow',e=>{if(e.persisted){studyStore.refresh();listBooks(book?.id)}});
try{catalog=window.WMKindergartenListening129;if(!catalog?.books?.length)throw Error('听力内容未加载，请刷新重试');
catalog.categories.forEach(c=>{const o=document.createElement('option');o.value=c.id;o.textContent=c.en+' · '+c.zh;$('category').append(o)});
tabs();const routeParams=new URLSearchParams(location.search),routeStage=routeParams.get('stage')||window.WMUnifiedCourseData?.units.find(u=>u.level===Number(routeParams.get('level')))?.stage;$('category').value=catalog.categories.some(c=>c.id===routeStage)?routeStage:catalog.categories.some(c=>c.id===saved.category)?saved.category:'kindergarten';setupLessons();await listBooks(saved.bookId);
}catch(e){$('status').textContent=e.message}show();})();
