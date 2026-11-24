/* V64.47: per-skill study bookmarks and a short locally generated success chime. */
(()=>{'use strict';
const normalize=s=>String(s||'').normalize('NFKC').trim().replace(/\s+/g,' ').toLowerCase();
function read(key){try{const x=JSON.parse(localStorage.getItem(key)||'{}');return x&&typeof x==='object'&&!Array.isArray(x)?x:{}}catch{return {}}}

function learnedWords(skill){if(window.WMLearningStats)return WMLearningStats.words(skill);const key=skill==='listening'?'wm-listening-learned-v6444':'wm-study-learned-v6446-'+skill;return new Set(Object.entries(read(key)).filter(([k,v])=>v===true&&k.startsWith('word|')&&k.slice(5).trim()).map(([k])=>normalize(k.slice(5))))}
function changed(){window.dispatchEvent(new Event('wm-study-updated'));window.dispatchEvent(new Event('wm-assessment-updated'))}
function matchFavorites(items,stage='kindergarten',course=''){
 const stores=['listening','speaking','reading','writing'].map(skill=>new Store(skill,course));
 const metadata='wm-match-review-words-v6451'+(course?'::'+course:''),pool=read(metadata);
 const keys=stores.flatMap(store=>[store.favoriteKey,store.orderKey]);
 const previous=new Map([...keys,metadata].map(key=>[key,localStorage.getItem(key)]));
 const valid=items.filter(item=>item.en&&item.zh);
 try{
  for(const store of stores){
   const next={...store.favorites},state=read(store.orderKey),order={...state.favorites};
   let stamp=Math.max(Date.now()-1,...Object.values(order).filter(Number.isFinite));
   for(const item of valid){
    const key=store.key('word',item);
    if(!next[key])order[key]=++stamp;
    next[key]=true;
   }
   localStorage.setItem(store.favoriteKey,JSON.stringify(next));
   localStorage.setItem(store.orderKey,JSON.stringify({...state,favorites:order}));
  }
  for(const item of valid)pool[normalize(item.en)]={en:item.en,zh:item.zh,stage};
  localStorage.setItem(metadata,JSON.stringify(pool));
 }catch(error){
  for(const [key,value]of previous){
   try{if(value===null)localStorage.removeItem(key);else localStorage.setItem(key,value)}catch{}
  }
  throw error;
 }
 changed();
}
class Store{
 constructor(skill,course=''){this.skill=skill;const scope=course?'::'+course:'';this.orderKey='wm-study-order-v6460-'+skill+scope;this.learnedKey=(skill==='listening'?'wm-listening-learned-v6444':'wm-study-learned-v6446-'+skill)+scope;this.favoriteKey='wm-study-favorites-v6447-'+skill+scope;this.learned=read(this.learnedKey);this.favorites=read(this.favoriteKey)}
 key(type,item){return type+'|'+normalize(item.en)}
 hasLearned(type,item){return !!this.learned[this.key(type,item)]}
 hasFavorite(type,item){return !!this.favorites[this.key(type,item)]}
 refresh(){this.learned=read(this.learnedKey);this.favorites=read(this.favoriteKey);return this}
 stamp(kind,key,added=true){try{const state=read(this.orderKey),map=state[kind]||{};if(added){const last=Math.max(0,...Object.values(map).filter(Number.isFinite));map[key]=Math.max(Date.now(),last+1)}else delete map[key];state[kind]=map;localStorage.setItem(this.orderKey,JSON.stringify(state))}catch{}}
 sorted(type,items,kind){this.refresh();const data=kind==='learned'?this.learned:this.favorites,order=read(this.orderKey)[kind]||{},positions=new Map(Object.keys(data).map((k,i)=>[k,i]));return [...new Map(items.map(x=>[this.key(type,x),x])).values()].filter(x=>data[this.key(type,x)]).sort((a,b)=>{const ka=this.key(type,a),kb=this.key(type,b);return (Number(order[kb])||0)-(Number(order[ka])||0)||(positions.get(kb)??-1)-(positions.get(ka)??-1)})}
 mark(type,item){return this.graduate(type,item)}
 graduate(type,item){const oldLearned=localStorage.getItem(this.learnedKey),oldFavorites=localStorage.getItem(this.favoriteKey),known=read(this.learnedKey),nextLearned={...known,[this.key(type,item)]:true},nextFavorites={...read(this.favoriteKey)};delete nextFavorites[this.key(type,item)];try{localStorage.setItem(this.favoriteKey,JSON.stringify(nextFavorites));localStorage.setItem(this.learnedKey,JSON.stringify(nextLearned))}catch(error){for(const [key,value]of [[this.favoriteKey,oldFavorites],[this.learnedKey,oldLearned]]){try{if(value===null)localStorage.removeItem(key);else localStorage.setItem(key,value)}catch{}}throw error}if(!known[this.key(type,item)])this.stamp('learned',this.key(type,item));this.stamp('favorites',this.key(type,item),false);this.learned=nextLearned;this.favorites=nextFavorites;changed()}
 unlearn(type,item){const next={...read(this.learnedKey)};delete next[this.key(type,item)];localStorage.setItem(this.learnedKey,JSON.stringify(next));this.learned=next;this.stamp('learned',this.key(type,item),false);changed()}
 favorite(type,item){this.refresh();const next={...this.favorites,[this.key(type,item)]:true};localStorage.setItem(this.favoriteKey,JSON.stringify(next));if(!this.favorites[this.key(type,item)])this.stamp('favorites',this.key(type,item));this.favorites=next}
 toggle(type,item){this.refresh();const next={...this.favorites},key=this.key(type,item);if(next[key])delete next[key];else next[key]=true;localStorage.setItem(this.favoriteKey,JSON.stringify(next));this.favorites=next;this.stamp('favorites',key,!!next[key]);return !!next[key]}
 remaining(type,items,only=false){if(only)return this.sorted(type,items,'favorites').filter(x=>!this.hasLearned(type,x));this.refresh();return items.filter(x=>!this.hasLearned(type,x))}
 counts(type,items){this.refresh();const unique=[...new Map(items.map(x=>[this.key(type,x),x])).values()];return {learned:unique.filter(x=>this.hasLearned(type,x)).length,favorites:unique.filter(x=>this.hasFavorite(type,x)&&!this.hasLearned(type,x)).length}}
}

function splitControl(button,onCount){const box=document.createElement('div');box.className='wm-study-split';button.before(box);const count=document.createElement('button');count.type='button';count.className='wm-study-count';box.append(button,count);count.onclick=onCount;return {update(label,n,disabled=false){const parts=label.trim().split(/\s+/),symbol=document.createElement('span'),word=document.createElement('span');symbol.className='wm-study-label-icon';symbol.textContent=parts.shift();word.textContent=parts.join(' ');button.replaceChildren(symbol,word);button.disabled=disabled;count.textContent=Number(n).toLocaleString('en-US');count.setAttribute('aria-label','View '+label.replace(/[❤️⭐☆]/gu,'').trim()+' '+n)},count}}
function listDialog({store,type,items,kind,onReview,onAll,onChanged,options,initialScope,itemsForScope,itemLabel}){
 const overlay=document.createElement('div'),panel=document.createElement('section');
 overlay.className='wm-study-list-overlay';panel.className='wm-study-list';
 panel.setAttribute('role','dialog');panel.setAttribute('aria-modal','true');
 const title=document.createElement('h2');
 title.textContent=kind==='learned'?'Learned':'Favorites';title.id='wm-study-list-title';
 panel.setAttribute('aria-labelledby',title.id);
 const former=document.activeElement;
 function dismiss(){overlay.remove();former?.focus?.({preventScroll:true})}
 function button(label,action){
  const el=document.createElement('button');el.type='button';el.textContent=label;el.onclick=action;
  return el;
 }
 const close=button('Close ×',dismiss);
 panel.append(title,close);
 let select;
 if(options?.length){
  select=document.createElement('select');select.setAttribute('aria-label','课次筛选');
  for(const [value,label] of options){
   const option=document.createElement('option');option.value=value;option.textContent=label;
   select.append(option);
  }
  select.value=initialScope;
  select.addEventListener('change',paint);
  panel.append(select);
 }
 const all=button(kind==='favorites'?'学习所选收藏 · Study favorites':'普通练习 · Regular practice',()=>{
  dismiss();onAll?.(select?.value);
 });
 const list=document.createElement('div');
 panel.append(all,list);
 function paint(){
  const scope=select?.value, pool=scope?itemsForScope(scope):items;
  const rows=kind==='favorites'?store.remaining(type,pool,true):store.sorted(type,pool,kind);
  list.replaceChildren();
  all.disabled=kind==='favorites'&&!rows.length;
  if(!rows.length){
   const empty=document.createElement('p');empty.textContent='No items · 暂无单词';list.append(empty);
  }
  for(const item of rows){
   const row=document.createElement('div'), label=document.createElement('span');
   row.className='wm-study-list-row';label.textContent=item.en+' · '+(item.zh||'');
   const source=itemLabel?.(item);
   if(source){
    const note=document.createElement('small');note.className='study-lesson-source';note.textContent=source;label.append(note);
   }
   const action=button(kind==='learned'?'移回练习':'学习',()=>{
    try{
     if(kind==='learned'){store.unlearn(type,item);onChanged?.();paint()}
     else{dismiss();onReview?.(item,scope)}
    }catch{action.textContent='保存失败，请重试'}
   });
   row.append(label,action);
   if(kind==='favorites'){
    const remove=button('移出收藏',()=>{
     try{store.toggle(type,item);onChanged?.();paint()}catch{remove.textContent='保存失败，请重试'}
    });
    row.append(remove);
   }
   list.append(row);
  }
 }
 paint();overlay.append(panel);document.body.append(overlay);
 overlay.onclick=e=>{if(e.target===overlay)dismiss()};
 overlay.onkeydown=e=>{
  if(e.key==='Escape')dismiss();
  if(e.key==='Tab'){
   const controls=[...panel.querySelectorAll('button:not(:disabled), select')],first=controls[0],last=controls.at(-1);
   if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
   else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
  }
 };
 close.focus({preventScroll:true});
}

let context=null,backup=null,interrupted=false;
function audio(){
 const AudioContext=window.AudioContext||window.webkitAudioContext;
 if(!AudioContext)return null;
 if(!context||context.state==='closed')context=new AudioContext();
 return context;
}
function fallbackTone(){
 if(!backup&&typeof window.Audio==='function'){
  backup=new window.Audio('audio/study-correct.wav');
  backup.preload='auto';
 }
 return backup;
}
function unlock(){
 try{
  fallbackTone();
  const c=audio();
  if(c&&c.state!=='running')void c.resume().catch(()=>{});
 }catch{}
}
async function playBackup(){
 try{
  const player=fallbackTone();
  if(!player)return false;
  player.currentTime=0;
  await player.play();
  return true;
 }catch{return false}
}
async function ding(){
 try{
  if(interrupted){
   interrupted=false;
   const previous=context;
   context=null;
   if(previous&&previous.state!=='closed')void previous.close().catch(()=>{});
   window.WMMicrosoftVoice?.audioMode('playback');
   const fallback=playBackup();
   unlock();
   if(await fallback)return true;
  }
  const c=audio();
  if(!c||c.state!=='running'){
   // Use the current answer tap for playback when a backgrounded context is still resuming.
   if(c)void c.resume().catch(()=>{});
   return playBackup();
  }
  const start=c.currentTime;
  for(const [frequency,volume] of [[1046.5,.16],[2093,.04]]){
   const oscillator=c.createOscillator(),gain=c.createGain();
   oscillator.frequency.value=frequency;
   gain.gain.setValueAtTime(.0001,start);
   gain.gain.exponentialRampToValueAtTime(volume,start+.012);
   gain.gain.exponentialRampToValueAtTime(.0001,start+.23);
   oscillator.connect(gain);gain.connect(c.destination);
   oscillator.onended=()=>{oscillator.disconnect();gain.disconnect()};
   oscillator.start(start);oscillator.stop(start+.25);
  }
  return true;
 }catch{return playBackup()}
}
document.addEventListener('pointerdown',unlock,{passive:true});
document.addEventListener('keydown',unlock,{passive:true});
document.addEventListener('touchend',unlock,{passive:true});
document.addEventListener('click',unlock,{passive:true});
document.addEventListener('visibilitychange',()=>{
 if(document.hidden)interrupted=true;
});
window.addEventListener('pagehide',()=>{interrupted=true});
window.addEventListener('pageshow',event=>{if(event.persisted)interrupted=true});
window.WMStudyTools={Store,normalize,learnedWords,matchFavorites,splitControl,listDialog};window.WMStudySound={ding,unlock};
})();
